import urldecode from 'urldecode';
import { detectLanguage, sanitizeString, translateIfNecessary } from './translateIfNecessary.js';
import { pimpPrompt } from './groqPimp.js';

const memoizedPrompts = new Map();

export const normalizeAndTranslatePrompt = async (originalPrompt, req, timingInfo, safeParams = {}) => {


  // if it is not a string make it a string

  originalPrompt = "" + originalPrompt;
  let prompt = originalPrompt;

  console.log("promptRaw", prompt);

  let { enhance, seed } = safeParams;

  if (prompt.length < 100 && (enhance === undefined || enhance === null)) {
    enhance = true;
  }

  if (memoizedPrompts.has(prompt)) {
    return memoizedPrompts.get(prompt);
  }

  timingInfo.push({ step: 'Start prompt normalization and translation', timestamp: Date.now() });
  // first 200 characters are used for the prompt
  prompt = urldecode(prompt);

  prompt = sanitizeString(prompt);


  // check from the request headers if the user most likely speaks english (value starts with en)
  const englishLikely = req.headers["accept-language"]?.startsWith("en");

  if (!englishLikely) {
    const startTime = Date.now();
    const detectedLanguage = await detectLanguage(prompt);
    if (detectedLanguage !== "en") {
      enhance = true;
    }

    // prompt = await translateIfNecessary(prompt);
    const endTime = Date.now();
    console.log(`Translation time: ${endTime - startTime}ms`);

    // enhance = true;
  }



  if (enhance) {
    prompt = await pimpPrompt(prompt, seed);
    console.log(`Pimped prompt: ${prompt}`);
  }

  timingInfo.push({ step: 'End prompt normalization and translation', timestamp: Date.now() });
  memoizedPrompts.set(prompt, prompt);

  return { prompt: prompt, wasPimped: enhance };
};
