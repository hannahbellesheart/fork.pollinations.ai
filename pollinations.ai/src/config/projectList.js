// Project entries support an optional submissionDate field (format: "YYYY-MM-DD")
// This field is automatically added for new submissions but may not be present in older entries
// The date is not currently displayed in the UI but is recorded for future use
// 
// Projects in non-English languages should include:
// - A country flag emoji in the name (e.g., 🇨🇳 for Chinese)
// - A "language" field with the appropriate language code
// - An English translation of the description in parentheses when possible

export const projectCategories = [
  {
    title: "LLM Integrations",
    key: "llmIntegrations",
  },
  {
    title: "Creative & Interactive Applications",
    key: "creativeApps",
  },
  {
    title: "Tools & Interfaces",
    key: "toolsInterfaces",
  },
  {
    title: "Social Bots",
    key: "socialBots",
  },
  {
    title: "SDK & Libraries",
    key: "sdkLibraries",
  },
  {
    title: "Tutorials",
    key: "tutorials",
  },
];

export const projects = {
  llmIntegrations: [
    {
      name: "🆕 AI Unlimited Customizable Feature Module 🇨🇳",
      url: "https://getquicker.net/Sharedaction?code=9ac738ed-a4b2-4ded-933c-08dd5f710a8b&fromMyShare=true",
      description: "This project provides a free API interface supporting various text and image generation models, including OpenAI's GPT-4, Gemini 2.0, etc. Users can access these models without an API key to perform text generation, image generation, translation, text polishing, and more.",
      author: "https://linux.do/u/s_s/summary",
      submissionDate: "2025-03-10",
      language: "zh-CN",
    },
    {
      name: "🆕 PrivatePollenAI",
      url: "https://mmojocoder.github.io/PrivatePollenAI/chat.html",
      description: "A privacy-focused chat assistant app that securely stores data locally, integrates with PollinationAI for text and image generation, features a minimalistic UI, and allows users to choose models and write their own system instructions.",
      author: "https://discordapp.com/users/tenacious_humming_bird",
      repo: "https://github.com/MMojoCoder/PrivatePollenAI",
      submissionDate: "2025-02-23",
    },
    {
      name: "🆕 Zelos AI image generator",
      url: "https://websim.ai/@ISWEARIAMNOTADDICTEDTOPILLOW/ai-image-prompt-generator",
      description: "It uses Pollinations for both prompt enhancing and image generation, it was a easy to make project due to pollinations services being easy to use.",
      author: "https://www.roblox.com/users/4361935306/profile",
      submissionDate: "2025-02-17",
    },
    {
      name: "🆕 urSapere AI",
      url: "https://ursapere.vercel.app",
      description: "A state-of-the-art chatbot integrating multiple LLMs with advanced features including image generation, mathematical proficiency, and real-time web search.",
      author: "@withthatway",
      submissionDate: "2025-02-07",
    },
    {
      name: "Pollinations Chat",
      url: "https://websim.ai/@AdrianoDev1/pollinations-ai-assistant/4",
      description: "Pollinations' integrated AI for text and images, totally free and unlimited.",
      author: "@adrianoprogramer",
    },
    {
      name: "LobeChat",
      url: "https://lobehub.com/plugins/pollinations-drawing",
      description: "An open-source, modern-design ChatGPT/LLMs UI/Framework with speech-synthesis, multi-modal, and extensible plugin system.",
      repo: "https://github.com/lobehub/lobe-chat",
    },
    {
      name: "Qwen-Agent",
      url: "https://github.com/QwenLM/Qwen-Agent",
      description: "A framework for developing agentic LLM applications.",
    },
    {
      name: "SillyTavern",
      url: "https://docs.sillytavern.app/extensions/stable-diffusion/",
      description: "An LLM frontend for power users. Pollinations permits it to generate images.",
      repo: "https://github.com/SillyTavern/SillyTavern",
    },
    {
      name: "FlowGPT",
      url: "https://flowgpt.com/p/instant-image-generation-with-chatgpt-and-pollinationsai",
      description: "Generate images on-demand with ChatGPT!",
    },
    {
      name: "gpt4free",
      url: "https://github.com/xtekky/gpt4free",
      description: "The official gpt4free repository - various collection of powerful language models.",
      author: "xtekky",
    },
    {
      name: "Unity AI Lab",
      url: "https://blog.unityailab.com/unity.html",
      description: "A specialized uncensored LLM model built on Mistral Large, focused on unrestricted conversations.",
    },
    {
      name: "DynaSpark AI",
      url: "https://dynaspark.onrender.com",
      description: "A versatile AI assistant with advanced image and text generation capabilities.",
      author: "Th3-C0der",
      repo: "https://github.com/Th3-C0der",
    },
  ],
  creativeApps: [
    {
      name: "🆕 AI儿童故事 🇨🇳",
      url: "https://kidss.netlify.app/",
      description: "基于此项目 构建有趣的孩子故事书应用演示 (Based on this project, build an interesting children's storybook application demo)",
      author: "MZ",
      submissionDate: "2025-03-10",
      language: "zh-CN",
    },
    {
      name: "🆕 Herramientas IA",
      url: "https://proyectodescartes.org/descartescms/herramientas-ia",
      description: "Tools designed with Pollinations.AI and the DescartesJS editor, including tools from other Pollinations.AI community members.",
      author: "@juanrivera126",
      submissionDate: "2025-03-10",
    },
    {
      name: "🆕 AvatarStudio",
      url: "https://astudio-dcae4.web.app",
      description: "A system for creating custom characters that uses the Pollinations API for totally free and unlimited image generation.",
      author: "@nic-wq",
      submissionDate: "2025-03-10",
    },
    {
      name: "🆕 Musify - AI Enhanced Music Streaming",
      url: "https://musify-sd.vercel.app/",
      description: "Musify is your AI-powered music buddy, making your jam sessions smarter and more fun. It is powered by pollinations api, it offers a slick and intuitive music experience with features like AI Music Assistant, Voice Commands, AI Playlist Creator, and Responsive Design.",
      author: "@Sugamdeol",
      submissionDate: "2025-02-27",
    },
    {
      name: "🆕 image1gen",
      url: "https://image1gen.streamlit.app/",
      description: "Website to easily create images via pollinations.ai API.",
      author: "@oopshnik",
      repo: "https://github.com/oopshnik/image1gen",
      submissionDate: "2025-02-22",
    },
    {
      name: "🆕 AI Image Generator",
      url: "https://fvai.infinityfreeapp.com/my-apps/pollicb09.html",
      description: "A web-based AI image generator powered by Pollinations.ai, featuring multi-model support, customizable parameters, and real-time preview.",
      author: "@hrisjeui",
      repo: "https://github.com/hrisjeui/Multi-text-image-model-pollinations",
      submissionDate: "2025-02-15",
    },
    {
      name: "🎵 PolliSonic Generator",
      url: "https://interzone.art.br/pollisonic_generator/",
      description: "An AI-driven tool that transforms text prompts using MidiJourney into MIDI-based melodies through browser oscillators.",
      author: "@brain.diver",
      repo: "https://github.com/rafabez/pollisonic_generator",
    },
    {
      name: "Abyss Ascending",
      url: "https://interzone.art.br/abyss_ascending/",
      description: "A web-based generative interactive fiction (text adventure) set in a sci-fi underwater world.",
      author: "@brain.diver",
      repo: "https://github.com/rafabez/abyss_ascending",
    },
    {
      name: "Deep Saga",
      url: "https://play.google.com/store/apps/details?id=com.cestrian.deepsaga.android&pcampaignid=pollinations",
      description: "A text based RPG available on Android with AI-generated scene images.",
      author: "@jr_7_77",
    },
    {
      name: "[AI] Character RP (Roblox)",
      url: "https://www.roblox.com/games/108463136689847/AI-Character-RP",
      description: "A popular Roblox game for AI character roleplay.",
      author: "[user113](https://www.roblox.com/users/5810708209)",
    },
    {
      
      name: "MIDIjourney",
      url: "https://github.com/korus-labs/MIDIjourney",
      description: "An AI-powered plugin for Ableton Live that turns text descriptions into music.",
      author: "KORUS Labs",
    },
    {
      name: "TurboReel",
      url: "https://turboreelgpt.tech/",
      description: "An open-source video generation system using AI.",
      author: "@pedroriosa",
      repo: "https://github.com/TurboReel/TurboReel_studio",
    },
    {
      name: "Rangrez AI",
      url: "https://rangrezai.com",
      description: "A web platform for inspiring, creating, and customizing designs.",
      author: "@saadaryf",
    },
    {
      name: "Infinite Tales",
      url: "https://infinite-tales-rpg.vercel.app/",
      description: "A Choose Your Own Adventure RPG, dynamically narrated by AI.",
      author: "JayJayBinks",
      repo: "https://github.com/JayJayBinks/infinite-tales-rpg",
    },
    {
      name: "StorySight",
      url: "https://github.com/abiral-manandhar/storySight",
      description: "An app to help children with learning disabilities.",
    },
    {
      name: "StoryWeaver",
      url: "https://devpost.com/software/storyweaver-013xdw",
      description: "Crafts personalized picture books for children.",
      author: "Multiple Authors",
    },
    {
      name: "Sirius Cybernetics Elevator Challenge",
      url: "https://sirius-cybernetics.pollinations.ai/",
      description: "A Hitchhiker's Guide to the Galaxy themed LLM-based elevator game.",
      author: "@thomash_pollinations",
      repo: "https://github.com/voodoohop/sirius-cybernetics-elevator-challenge",
    },
    {
      name: "POLLIPAPER",
      url: "https://github.com/Tolerable/POLLIPAPER",
      description: "A dynamic wallpaper app that uses Pollinations AI.",
      author: "@intolerant0ne",
    },
    {
      name: "AI PPT Maker",
      url: "https://sites.google.com/view/kushai",
      description: "Create AI-powered presentations using Pollinations' API.",
      author: "@k_ush",
    },
    {
      name: "UR Imagine & Chat AI",
      url: "https://perchance.org/ur-imagine-ai",
      description: "A free and limitless image generator with companion AI chat/roleplay system.",
      author: "withthatway",
    },
    {
      name: "Pollinations Gallery",
      url: "https://deng-xian-sheng.github.io/pollinations-img-page/",
      description: "A clean and simple gallery showcasing community's AI-generated images.",
      author: "@deng-xian-sheng",
    },
    {
      name: "AI-Bloom",
      url: "https://ai-bloom.vercel.app/",
      description: "A minimal creative showcase of AI-powered content generation.",
      author: "@diepdo1810",
    },
  ],
  toolsInterfaces: [
    {
      name: "🆕 Pollinations.ai Model Comparison",
      url: "https://endemicmedia.github.io/FLARE/llm-comparison-tool/",
      description: "An interactive tool designed to compare outputs from various large language models with customizable timeout settings and real-time testing capabilities.",
      author: "https://github.com/dseeker",
      repo: "https://github.com/EndemicMedia",
      submissionDate: "2025-02-16",
    },
    {
      name: "🆕 Anime AI Generation",
      url: "https://www.animeaigeneration.com/",
      description: "Create professional-quality anime characters with powerful AI technology. No artistic skills required.",
      author: "@shreyas281898",
      submissionDate: "2025-02-11",
    },
    {
      name: "🆕 Pollinations.DIY",
      url: "https://pollinations.diy",
      description: "A browser-based coding environment based on bolt.diy, featuring integrated Pollinations AI services, visual code editing, and project management tools.",
      author: "@thomash_pollinations",
      repo: "https://github.com/pollinations/pollinations.diy",
    },
    {
      name: "Pal Chat",
      url: "https://apps.apple.com/us/app/pal-chat-ai-chat-client/id6447545085?platform=iphone",
      description: "An iOS app that integrates with all LLMs including Pollinations AI models in one unified simple interface.",
      author: "https://x.com/pallavmac",
    },
    {
      name: "Pollinator Android App",
      url: "https://github.com/g-aggarwal/Pollinator",
      description: "An open-source Android app for text-to-image generation.",
      author: "@gaurav_87680",
    },
    {
      name: "Own-AI",
      url: "https://own-ai.pages.dev/",
      description: "An AI text-to-image generator.",
      author: "Sujal Goswami",
    },
    {
      name: "JustBuildThings",
      url: "https://justbuildthings.com",
      description: "A collection of AI tools for image generation, character chat, and writing.",
      author: "rasit",
    },
    {
      name: "Elixpo-Art",
      url: "https://elixpoart.vercel.app",
      description: "A web interface for easy image generation with theme selection.",
      author: "Ayushman Bhattacharya",
    },
    {
      name: "Image Gen - Uncensored Edition",
      url: "https://huggingface.co/chat/assistant/66fccce0c0fafc94ab557ef2",
      description: "A powerful image generation assistant on HuggingChat.",
      author: "@DeFactOfficial",
    },
    {
      name: "Free AI Chatbot & Image Generator",
      url: "https://freeaichat.app",
      description: "A mobile app for unlimited AI chat and image generation.",
      author: "@andreas_11",
    },
    {
      name: "JCode Website Builder",
      url: "https://jcode-ai-website-bulder.netlify.app/",
      description: "A website generator using Pollinations text API.",
      author: "@rtxpower",
    },
    {
      name: "Server Status Dashboards",
      url: "https://www.ai-ministries.com/serverstatus.html",
      description: "Real-time monitoring dashboards for Pollinations text and image servers.",
      author: "@tolerantone",
    },
    {
      name: "Websim",
      url: "https://websim.ai/c/bXsmNE96e3op5rtUS",
      description: "A web simulation tool that integrates Pollinations.ai.",
      author: "@thomash",
    },
  ],
  socialBots: [
    {
      name: "🆕 Gacha",
      url: "https://shapes.inc/gacha-gachu/public",
      description: "A versatile AI chat-bot and image generator powered by Pollinations.AI, featuring web search, image generation with model selection, and character-aware image generation through !webgen command.",
      author: "@_dr_misterio_",
      submissionDate: "2025-02-24",
    },
    {
      name: "🆕 One Word",
      url: "https://t.me/OdnoSlovoBot",
      description: "A Telegram bot for a word-matching game where players try to write the same word simultaneously, featuring image generation from game words using Pollinations.AI.",
      author: "@Dimaq21",
      submissionDate: "2025-02-17",
    },
    {
      name: "Titan-GPT",
      url: "https://t.me/titangpt_channel",
      description: "Free Telegram bot providing access to neural networks including image and text generation powered by Pollinations.AI",
      author: "t.me/titangpt_support",
    },
    {
      name: "Discord Bot",
      url: "https://discord.gg/D9xGg8mq3D",
      description: "A Discord bot for generating images based on user prompts.",
      author: "@Zngzy",
    },
    {
      name: "Telegram Bot",
      url: "http://t.me/pollinationsbot",
      description: "A Telegram bot for generating images based on user prompts.",
      author: "Wong Wei Hao",
    },
    {
      name: "WhatsApp Group",
      url: "https://chat.whatsapp.com/KI37JqT5aYdL9WBYMyyjDV",
      description: "A WhatsApp group for image generation.",
      author: "@dg_karma",
    },
    {
      name: "OpenHive",
      url: "https://discord.gg/Zv3SXTF5xy",
      description: "A Discord server bridging Discord and AI, featuring Beebot.",
      author: "@creativegpt",
    },
    {
      name: "Anyai",
      url: "https://discord.gg/anyai",
      description: "A Discord bot and community for AI-driven content.",
      author: "@meow_18838",
    },
  ],
  sdkLibraries: [
    {
      name: "🆕 ComfyUI-Pollinations",
      url: "https://github.com/1038lab/ComfyUI-Pollinations",
      description: "A custom node for ComfyUI that utilizes the Pollinations API to generate images and text based on user prompts, supporting multiple image and text generation models.",
      author: "https://github.com/1038lab/",
      repo: "https://github.com/1038lab/ComfyUI-Pollinations",
      submissionDate: "2025-03-04",
    },
    {
      name: "pollinations NPM Module",
      url: "https://www.npmjs.com/package/pollinations",
      description: "A Node.js package for accessing all Pollinations features.",
      author: "@maxencexz",
    },
    {
      name: "pypollinations",
      url: "https://pypi.org/project/pypollinations/",
      description: "Comprehensive Python wrapper for Pollinations AI API.",
      author: "@KTS-o7",
    },
    {
      name: "@pollinations/react",
      url: "https://www.npmjs.com/package/@pollinations/react",
      description: "React hooks for easy integration of Pollinations' features.",
      author: "@pollinations",
    },
    {
      name: "Polli API Dashboard",
      url: "https://polli-api.vercel.app",
      description: "Real-time dashboard monitoring text.pollinations.ai/feed.",
      author: "@Sugamdeol",
    },
    {
      name: "pollinations.ai Python SDK",
      url: "https://github.com/pollinations-ai/pollinations.ai",
      description: "Official Python SDK for working with Pollinations' models.",
      author: "@pollinations-ai",
    },
  ],
  tutorials: [
    {
      name: "🆕 Chinese DeepSeek Tutorial",
      url: "https://linux.do/t/topic/447840/235",
      description: "A tutorial showing how to make DeepSeek AI support image generation by leveraging Pollinations.ai's API.",
      author: "https://linux.do/u/isinry",
      submissionDate: "2025-03-04",
    },
    {
      name: "Artistic Styles Book",
      url: "https://proyectodescartes.org/iCartesiLibri/materiales_didacticos/Libro_Estilos/index.html",
      description: "An interactive book showcasing 90+ artistic styles.",
      author: "Juan Gmo. Rivera",
    },
    {
      name: "Proyecto Descartes",
      url: "https://proyectodescartes.org/revista/Numeros/Revista_8_2024/index.html",
      description: "Educational initiative integrating Pollinations AI into STEM.",
      author: "Juan Gmo. Rivera",
    },
    {
      name: "Tutorial",
      url: "https://guiadehospedagem.com.br/pollinations-ai/",
      description: "An in-depth Portuguese tutorial on using Pollinations AI.",
      author: "Janderson de Sales",
    },
    {
      name: "Apple Shortcuts Guide",
      url: "https://www.youtube.com/watch?v=-bS41VTzh_s",
      description: "Video guide on creating AI images using Apple Shortcuts.",
      author: "RoutineHub",
    },
  ],
};
