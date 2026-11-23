/* ============================================================
   RapidSMP – Horror Modpack — site data & interactions
   ------------------------------------------------------------
   CONFIG: update links here when they change.
   Mod / texture pack / shader lists are generated from the
   actual modpack export (manifest.json + modlist.html v2.4.0).
   ============================================================ */

const CONFIG = {
  discordUrl: "#",                                  // TODO: your Discord invite link
  downloadFile: "downloads/RapidSMP-Horror-2.4.1.zip",
  packVersion: "2.4.1",
  mcVersion: "1.21.4",
  loader: "Fabric",
  fileSize: "16.1 MB",
  virustotalUrl: "https://www.virustotal.com/gui/file/fbdfb678e4d3eb580d6b955bcfcd6fdcc63c2c1fd8cd44f8ad65564c8e7954d4",
};

/* ------------------------------------------------------------
   Gallery screenshots — add or replace files in assets/screenshots/
   ------------------------------------------------------------ */
const GALLERY = [
  "assets/screenshots/ss-1.webp",
  "assets/screenshots/ss-2.webp",
  "assets/screenshots/ss-3.webp",
  "assets/screenshots/ss-4.webp",
];

/* ------------------------------------------------------------
   Categories (EN / TR)
   ------------------------------------------------------------ */
const CATEGORIES = {
  korku:      { en: "Horror & Creatures",   tr: "Korku & Yaratıklar" },
  gorsel:     { en: "Visuals & Atmosphere", tr: "Görsel & Atmosfer" },
  performans: { en: "Performance",          tr: "Performans" },
  multiplayer:{ en: "Multiplayer",          tr: "Çok Oyunculu" },
  qol:        { en: "Interface & QoL",      tr: "Arayüz & QoL" },
  kutuphane:  { en: "Library & API",        tr: "Kütüphane & API" },
};

const CF = "https://www.curseforge.com/minecraft";

/* ------------------------------------------------------------
   MOD LIST — the real contents of RapidSMP – Horror 2.4.0
   ------------------------------------------------------------ */
const MODS = [
  // — Horror & Creatures —
  { name: "RapidSMP Core", cat: "korku", url: null,
    desc: { en: "The modpack's own custom mod, containing content exclusive to RapidSMP.",
            tr: "Modpack'in kendi özel modu; RapidSMP'ye özel içerikler barındırır." } },
  { name: "Mooseman", cat: "korku", url: `${CF}/mc-mods/mooseman`,
    desc: { en: "A hostile cryptid that stalks the forest at night.",
            tr: "Geceleri ormanda pusuya yatan düşman bir kriptid." } },
  { name: "Faceless Watchers", cat: "korku", url: `${CF}/mc-mods/faceless-watchers`,
    desc: { en: "Faceless entities that observe the player from a distance and slowly close in.",
            tr: "Oyuncuyu uzaktan izleyen ve yavaşça yaklaşan yüzsüz varlıklar." } },
  { name: "Kenny [HORROR]", cat: "korku", url: `${CF}/mc-mods/kenny`,
    desc: { en: "An unpredictable horror entity with ambush behavior.",
            tr: "Pusu davranışına sahip, öngörülemez bir korku varlığı." } },
  { name: "ALLSEEING", cat: "korku", url: `${CF}/mc-mods/allseeing-the-entity-that-keeps-an-eye-on-you`,
    desc: { en: "An entity that constantly keeps an eye on the player.",
            tr: "Oyuncuyu sürekli gözetleyen bir varlık." } },
  { name: "Spooky Doors", cat: "korku", url: `${CF}/mc-mods/spooky-doors`,
    desc: { en: "Doors can creak, slam and open on their own.",
            tr: "Kapılar gıcırdayabilir, çarpabilir ve kendi kendine açılabilir." } },
  { name: "Sanity System – Psychological Survival", cat: "korku", url: `${CF}/mc-mods/sanity-system-psychological-survival`,
    desc: { en: "Adds a sanity mechanic: darkness, isolation and fear affect your perception.",
            tr: "Akıl sağlığı mekaniği ekler: karanlık, yalnızlık ve korku algını etkiler." } },

  // — Visuals & Atmosphere —
  { name: "Iris Shaders", cat: "gorsel", url: `${CF}/mc-mods/irisshaders`,
    desc: { en: "Shader support for Fabric; runs the Dreadlight shader included in the pack.",
            tr: "Fabric için shader desteği; paketteki Dreadlight shader'ını çalıştırır." } },
  { name: "LambDynamicLights", cat: "gorsel", url: `${CF}/mc-mods/lambdynamiclights`,
    desc: { en: "Held light sources dynamically illuminate their surroundings.",
            tr: "Eldeki ışık kaynakları çevreyi dinamik olarak aydınlatır." } },
  { name: "Continuity", cat: "gorsel", url: `${CF}/mc-mods/continuity`,
    desc: { en: "Connected textures for seamless visuals.",
            tr: "Kusursuz görünüm için bağlantılı dokular." } },
  { name: "BetterGrassify", cat: "gorsel", url: `${CF}/mc-mods/bettergrassify`,
    desc: { en: "Improved grass rendering for more natural terrain.",
            tr: "Daha doğal arazi için geliştirilmiş çimen görünümü." } },
  { name: "[ETF] Entity Texture Features", cat: "gorsel", url: `${CF}/mc-mods/entity-texture-features-fabric`,
    desc: { en: "Random and emissive entity textures, including glowing eyes.",
            tr: "Parlayan gözler dahil, rastgele ve ışıldayan varlık dokuları." } },
  { name: "[EMF] Entity Model Features", cat: "gorsel", url: `${CF}/mc-mods/entity-model-features`,
    desc: { en: "Custom entity model support for resource packs.",
            tr: "Kaynak paketleri için özel varlık modeli desteği." } },
  { name: "MoreMcmeta", cat: "gorsel", url: `${CF}/mc-mods/moremcmeta-fabric`,
    desc: { en: "Enables animated textures across the game.",
            tr: "Oyun genelinde animasyonlu dokuları etkinleştirir." } },
  { name: "Model Gap Fix", cat: "gorsel", url: `${CF}/mc-mods/model-gap-fix`,
    desc: { en: "Fixes visible gaps in item and block models.",
            tr: "Eşya ve blok modellerindeki görünür boşlukları düzeltir." } },
  { name: "Polytone", cat: "gorsel", url: `${CF}/mc-mods/polytone`,
    desc: { en: "Custom colors, lightmaps and biome tints tuned for the pack's atmosphere.",
            tr: "Paketin atmosferine göre ayarlanmış özel renkler, ışık haritaları ve biyom tonları." } },
  { name: "OptiGUI", cat: "gorsel", url: `${CF}/mc-mods/optigui`,
    desc: { en: "Support for custom GUI textures.",
            tr: "Özel arayüz dokuları için destek." } },

  // — Performance —
  { name: "Sodium", cat: "performans", url: `${CF}/mc-mods/sodium`,
    desc: { en: "A modern rendering engine that significantly increases frame rates.",
            tr: "Kare hızını ciddi oranda artıran modern bir render motoru." } },
  { name: "Sodium Extra", cat: "performans", url: `${CF}/mc-mods/sodium-extra`,
    desc: { en: "Additional graphics options for Sodium.",
            tr: "Sodium için ek grafik ayarları." } },
  { name: "Reese's Sodium Options", cat: "performans", url: `${CF}/mc-mods/reeses-sodium-options`,
    desc: { en: "A cleaner video settings menu for Sodium.",
            tr: "Sodium için daha düzenli bir video ayarları menüsü." } },
  { name: "Lithium", cat: "performans", url: `${CF}/mc-mods/lithium`,
    desc: { en: "Optimizes game logic without changing gameplay.",
            tr: "Oynanışı değiştirmeden oyun mantığını optimize eder." } },
  { name: "FerriteCore", cat: "performans", url: `${CF}/mc-mods/ferritecore-fabric`,
    desc: { en: "Significantly reduces memory usage.",
            tr: "Bellek kullanımını ciddi oranda azaltır." } },
  { name: "ModernFix", cat: "performans", url: `${CF}/mc-mods/modernfix`,
    desc: { en: "Faster load times and broad performance fixes.",
            tr: "Daha hızlı açılış süreleri ve genel performans iyileştirmeleri." } },
  { name: "ImmediatelyFast", cat: "performans", url: `${CF}/mc-mods/immediatelyfast`,
    desc: { en: "Speeds up immediate-mode rendering.",
            tr: "Anlık render işlemlerini hızlandırır." } },
  { name: "Entity Culling", cat: "performans", url: `${CF}/mc-mods/entityculling`,
    desc: { en: "Skips rendering entities that are not visible.",
            tr: "Görüş alanında olmayan varlıkların render edilmesini atlar." } },
  { name: "MoreCulling", cat: "performans", url: `${CF}/mc-mods/moreculling`,
    desc: { en: "Culls additional unnecessary rendering work.",
            tr: "Gereksiz render yükünü daha da azaltır." } },
  { name: "Dynamic FPS", cat: "performans", url: `${CF}/mc-mods/dynamic-fps`,
    desc: { en: "Reduces resource usage while the window is unfocused.",
            tr: "Pencere arka plandayken kaynak kullanımını azaltır." } },
  { name: "Enhanced Block Entities", cat: "performans", url: `${CF}/mc-mods/enhanced-block-entities`,
    desc: { en: "Renders chests and signs faster with no visual loss.",
            tr: "Sandık ve tabelaları görsel kayıp olmadan daha hızlı işler." } },

  // — Multiplayer —
  { name: "e4mc", cat: "multiplayer", url: `${CF}/mc-mods/e4mc`,
    desc: { en: "Opens your singleplayer world to friends without server setup.",
            tr: "Tek oyunculu dünyanı sunucu kurulumu olmadan arkadaşlarına açar." } },
  { name: "No Chat Reports", cat: "multiplayer", url: `${CF}/mc-mods/no-chat-reports`,
    desc: { en: "Disables chat reporting for private multiplayer sessions.",
            tr: "Özel çok oyunculu oturumlar için sohbet raporlamayı devre dışı bırakır." } },
  { name: "More Chat History", cat: "multiplayer", url: `${CF}/mc-mods/morechathistory`,
    desc: { en: "Extends the chat history length.",
            tr: "Sohbet geçmişi uzunluğunu artırır." } },

  // — Interface & QoL —
  { name: "Mod Menu", cat: "qol", url: `${CF}/mc-mods/modmenu`,
    desc: { en: "View and configure installed mods in-game.",
            tr: "Kurulu modları oyun içinden görüntüle ve yapılandır." } },
  { name: "Controlify", cat: "qol", url: `${CF}/mc-mods/controlify`,
    desc: { en: "Full controller support.",
            tr: "Tam oyun kolu (controller) desteği." } },
  { name: "Zoomify", cat: "qol", url: `${CF}/mc-mods/zoomify`,
    desc: { en: "Adds a configurable zoom key.",
            tr: "Ayarlanabilir bir yakınlaştırma tuşu ekler." } },
  { name: "Fabrishot", cat: "qol", url: `${CF}/mc-mods/fabrishot`,
    desc: { en: "Takes ultra-high-resolution screenshots.",
            tr: "Çok yüksek çözünürlüklü ekran görüntüleri alır." } },
  { name: "FastQuit", cat: "qol", url: `${CF}/mc-mods/fastquit`,
    desc: { en: "Leave worlds instantly while saving finishes in the background.",
            tr: "Kayıt arka planda tamamlanırken dünyadan anında çıkmanı sağlar." } },
  { name: "Debugify", cat: "qol", url: `${CF}/mc-mods/debugify`,
    desc: { en: "Fixes hundreds of vanilla Minecraft bugs.",
            tr: "Yüzlerce orijinal Minecraft hatasını düzeltir." } },
  { name: "Better Mount HUD", cat: "qol", url: `${CF}/mc-mods/better-mount-hud`,
    desc: { en: "An improved HUD while riding mounts.",
            tr: "Binek üzerindeyken geliştirilmiş arayüz." } },
  { name: "Paginated Advancements", cat: "qol", url: `${CF}/mc-mods/paginated-advancements`,
    desc: { en: "A cleaner, paginated advancements screen.",
            tr: "Daha düzenli, sayfalara bölünmüş ilerlemeler ekranı." } },
  { name: "Language Reload", cat: "qol", url: `${CF}/mc-mods/language-reload`,
    desc: { en: "Much faster language switching.",
            tr: "Çok daha hızlı dil değiştirme." } },
  { name: "YOSBR", cat: "qol", url: `${CF}/mc-mods/yosbr`,
    desc: { en: "Preserves your settings across updates.",
            tr: "Ayarlarını güncellemeler arasında korur." } },
  { name: "Main Menu Credits", cat: "qol", url: `${CF}/mc-mods/main-menu-credits`,
    desc: { en: "Custom credits text on the main menu.",
            tr: "Ana menüde özel yazılar." } },
  { name: "Cubes Without Borders", cat: "qol", url: `${CF}/mc-mods/cubes-without-borders`,
    desc: { en: "Borderless fullscreen support.",
            tr: "Kenarlıksız tam ekran desteği." } },
  { name: "Remove Reloading Screen", cat: "qol", url: `${CF}/mc-mods/rrls`,
    desc: { en: "Removes the resource-reload screen for smoother transitions.",
            tr: "Kaynak yükleme ekranını kaldırarak geçişleri akıcılaştırır." } },
  { name: "Fabric Capes", cat: "qol", url: `${CF}/mc-mods/capes`,
    desc: { en: "Cape support in-game.",
            tr: "Oyun içi pelerin desteği." } },

  // — Library & API —
  { name: "Fabric API", cat: "kutuphane", url: `${CF}/mc-mods/fabric-api`,
    desc: { en: "The core library required by most Fabric mods.",
            tr: "Çoğu Fabric modunun gerektirdiği çekirdek kütüphane." } },
  { name: "Fabric Language Kotlin", cat: "kutuphane", url: `${CF}/mc-mods/fabric-language-kotlin`,
    desc: { en: "Kotlin language support for Fabric mods.",
            tr: "Fabric modları için Kotlin dili desteği." } },
  { name: "Cloth Config API", cat: "kutuphane", url: `${CF}/mc-mods/cloth-config`,
    desc: { en: "A config screen library used by many mods.",
            tr: "Birçok modun kullandığı ayar ekranı kütüphanesi." } },
  { name: "YetAnotherConfigLib", cat: "kutuphane", url: `${CF}/mc-mods/yacl`,
    desc: { en: "A modern configuration library.",
            tr: "Modern bir yapılandırma kütüphanesi." } },
  { name: "Forge Config API Port", cat: "kutuphane", url: `${CF}/mc-mods/forge-config-api-port`,
    desc: { en: "Forge config support on Fabric.",
            tr: "Fabric üzerinde Forge ayar desteği." } },
  { name: "Balm", cat: "kutuphane", url: `${CF}/mc-mods/balm-fabric`,
    desc: { en: "Shared library required by Spooky Doors.",
            tr: "Spooky Doors'un gerektirdiği ortak kütüphane." } },
  { name: "GeckoLib", cat: "kutuphane", url: `${CF}/mc-mods/geckolib`,
    desc: { en: "The animation engine used by the horror entities.",
            tr: "Korku varlıklarının kullandığı animasyon motoru." } },
  { name: "Puzzle", cat: "kutuphane", url: `${CF}/mc-mods/puzzle`,
    desc: { en: "Unifies graphics settings for resource-pack features.",
            tr: "Kaynak paketi özellikleri için grafik ayarlarını birleştirir." } },
  { name: "MixinTrace", cat: "kutuphane", url: `${CF}/mc-mods/mixintrace`,
    desc: { en: "More informative crash reports for easier troubleshooting.",
            tr: "Sorun çözümünü kolaylaştıran daha bilgilendirici çökme raporları." } },
];

/* ------------------------------------------------------------
   SVG icons (inline, stroke-based)
   ------------------------------------------------------------ */
const svg = inner =>
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${inner}</svg>`;

const ICONS = {
  audio: svg('<path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z"/><path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>'),
  image: svg('<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>'),
  globe: svg('<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>'),
  chat: svg('<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>'),
  fog: svg('<path d="M17.5 16a4.5 4.5 0 0 0 0-9 6.5 6.5 0 0 0-12.7 1.6A4.2 4.2 0 0 0 6 16z"/><line x1="5" y1="20" x2="19" y2="20"/>'),
};

/* ------------------------------------------------------------
   TEXTURE PACKS (4)
   ------------------------------------------------------------ */
const TEXTURE_PACKS = [
  { name: "Horror Ambience Music: Echoes", res: "Audio", icon: ICONS.audio, url: `${CF}/texture-packs/horror-ambience-music`,
    desc: { en: "Replaces the soundtrack with unsettling horror ambience and music.",
            tr: "Oyun müziklerini rahatsız edici korku ambiyansı ve müzikleriyle değiştirir." } },
  { name: "Loading Backgrounds – Horror", res: "UI", icon: ICONS.image, url: `${CF}/texture-packs/loading-backgrounds-horror`,
    desc: { en: "Horror-themed loading screen backgrounds.",
            tr: "Korku temalı yükleme ekranı arka planları." } },
  { name: "Translations for Sodium", res: "Lang", icon: ICONS.globe, url: `${CF}/texture-packs/translations-for-sodium`,
    desc: { en: "Complete translations for Sodium's settings.",
            tr: "Sodium ayarları için eksiksiz çeviriler." } },
  { name: "Chat Reporting Helper", res: "Chat", icon: ICONS.chat, url: `${CF}/texture-packs/chat-reporting-helper`,
    desc: { en: "Shows which chat messages are safe from reporting.",
            tr: "Hangi sohbet mesajlarının raporlamadan muaf olduğunu gösterir." } },
];

/* ------------------------------------------------------------
   SHADER PACK (1)
   ------------------------------------------------------------ */
const SHADERS = [
  { name: "Dreadlight – Horror Atmosphere Shader", res: "Shader", icon: ICONS.fog, url: `${CF}/shaders/dreadlight-horror-atmosphere-shader`,
    desc: { en: "Pitch-black nights, dense fog and flickering light — the core of RapidSMP's atmosphere. Runs through Iris.",
            tr: "Zifiri geceler, yoğun sis ve titreyen ışıklar — RapidSMP atmosferinin temeli. Iris ile çalışır." } },
];

/* ============================================================
   TRANSLATIONS — English (default) & Turkish
   ============================================================ */
const I18N = {
  en: {
    "meta.title": "RapidSMP – Horror Modpack | A Minecraft Horror Experience",
    "meta.desc": "RapidSMP – Horror: a Minecraft 1.21.4 Fabric horror modpack with stalking entities, a sanity system, horror soundtrack and the Dreadlight shader. Download and survive.",

    "nav.home": "Home", "nav.features": "Features", "nav.mods": "Mods",
    "nav.packs": "Packs", "nav.install": "Install", "nav.faq": "FAQ",
    "nav.download": "Download",

    "hero.tagline": "When the fog rolls in… <span>you'll realize you were never alone.</span>",
    "hero.mods": "Mods", "hero.textures": "Texture Packs", "hero.shader": "Shader",
    "hero.ctaDownload": "Download Modpack",
    "hero.ctaMods": "Browse the Mods",
    "hero.warning": "This modpack contains intense horror elements and sudden scares. Player discretion is advised.",

    "stats.mods": "Mods", "stats.textures": "Texture Packs",
    "stats.shader": "Shader Pack", "stats.version": "Minecraft Version",

    "about.eyebrow": "Welcome to the darkness",
    "about.title": "Are You Ready to Be Afraid?",
    "about.p1": "<strong>RapidSMP – Horror</strong> turns Minecraft 1.21.4 into a true <strong>horror experience</strong>: hand-picked mods, a psychological <strong>sanity system</strong>, entities that stalk you through the fog and a soundtrack designed to keep you on edge.",
    "about.p2": "Play alone or open your world to friends in one click with <strong>e4mc</strong> — no server setup needed. Built on Sodium and tuned with the <strong>Dreadlight shader</strong>, the pack runs smoothly on almost any PC.",

    "features.eyebrow": "What awaits you",
    "features.title": "Pack Features",
    "features.f1t": "Entities That Hunt You",
    "features.f1p": "Mooseman, Faceless Watchers, Kenny and ALLSEEING — hostile entities that stalk and observe the player, each with its own behavior.",
    "features.f2t": "Sanity System",
    "features.f2p": "Darkness, isolation and fear drain your sanity. At low sanity, the line between what is real and what is imagined starts to blur.",
    "features.f3t": "Horror Sound & Music",
    "features.f3p": "A complete horror soundtrack and ambience overhaul, with horror-themed loading screens for a consistent experience. Best played with headphones.",
    "features.f4t": "Dreadlight Shader",
    "features.f4p": "A custom horror atmosphere shader with pitch-black nights, dense fog and dynamic lighting, powered by Iris and LambDynamicLights.",
    "features.f5t": "SMP With Friends",
    "features.f5p": "Open your world to friends in one click with e4mc — no server setup or port forwarding required.",
    "features.f6t": "Runs on Anything",
    "features.f6p": "Sodium, Lithium, ModernFix and more than ten optimization mods keep the frame rate high, even on low-end hardware.",

    "mods.eyebrow": "What's inside",
    "mods.title": "Mod List",
    "mods.search": "Search mods… (e.g. sodium, horror)",
    "mods.empty": "No mods match your search.",
    "mods.all": "All",
    "mods.count": "Showing {shown} / {total} mods",
    "mods.custom": "Custom",

    "packs.eyebrow": "Look & sound",
    "packs.title": "Texture & Shader Packs",
    "packs.texturesSub": "Texture Packs",
    "packs.shaderSub": "Shader Pack",

    "gallery.eyebrow": "Frames from the dark",
    "gallery.title": "Screenshots",
    "gallery.soon": "COMING SOON",
    "gallery.alt": "RapidSMP – Horror in-game screenshot",
    "gallery.note": "All screenshots were captured in-game with the Dreadlight shader enabled.",

    "dl.eyebrow": "Get the pack",
    "dl.title": "Download the Modpack",
    "dl.button": "Download RapidSMP – Horror 2.4.1",
    "dl.vtText": "No security vendors flagged this file as malicious on VirusTotal.",
    "dl.vtLink": "View the full report",
    "dl.note": "After downloading, open the CurseForge app and import the zip: <strong>Minecraft → Create Custom Profile → Import</strong>.",

    "install.eyebrow": "Getting started",
    "install.title": "How to Install",
    "install.s1t": "Download the Pack",
    "install.s1p": "Get <strong>RapidSMP-Horror-2.4.1.zip</strong> from the <a href=\"#download\">download section</a> above.",
    "install.s2t": "Install the CurseForge App",
    "install.s2p": "Download the official CurseForge app from <a href=\"https://www.curseforge.com/download/app\" target=\"_blank\" rel=\"noopener\">curseforge.com/download</a> and install it.",
    "install.s3t": "Import the Zip",
    "install.s3p": "In the app choose <strong>Minecraft → Create Custom Profile → Import</strong>, then select the downloaded zip. All mods, packs and the shader install automatically.",
    "install.s4t": "Play",
    "install.s4p": "Press <strong>Play</strong>. For the intended experience, play in the dark with headphones.",
    "install.reqTitle": "System Recommendations",
    "install.req1": "<strong>RAM:</strong> allocate at least <strong>4 GB</strong> to the pack (CurseForge → Settings → Minecraft → Allocated Memory).",
    "install.req2": "<strong>Java:</strong> the CurseForge app installs the correct Java version automatically.",
    "install.req3": "<strong>GPU:</strong> a mid-range card is recommended for the Dreadlight shader (GTX 1060 / RX 580 or better). The shader can be disabled on weaker systems.",
    "install.req4": "<strong>Storage:</strong> about 1 GB of free space.",

    "faq.eyebrow": "Questions in the dark",
    "faq.title": "Frequently Asked Questions",
    "faq.q1": "Which Minecraft version does the pack use?",
    "faq.a1": "RapidSMP – Horror runs on <strong>Minecraft 1.21.4</strong> with the <strong>Fabric</strong> loader. The CurseForge app sets everything up automatically when you import the zip.",
    "faq.q2": "Is the download safe?",
    "faq.a2": "Yes. The exact file hosted here was scanned on VirusTotal with a result of <strong>0 / 65</strong> — no security vendor flagged it. You can verify it yourself via the report link and the SHA-256 checksum in the download section.",
    "faq.q3": "How do I enable the shader?",
    "faq.a3": "Iris is included. In game, go to <em>Options → Video Settings → Shader Packs</em> and select <strong>Dreadlight</strong>.",
    "faq.q4": "Can I play with friends?",
    "faq.a4": "Yes. With <strong>e4mc</strong>, open your world to LAN and share the generated address with your friends — no server or port forwarding needed. Dedicated servers are also supported.",
    "faq.q5": "Is it very scary in singleplayer?",
    "faq.a5": "The pack is designed to be intense in singleplayer. If you prefer a lighter experience, playing with friends is recommended.",
    "faq.q6": "Can I add or remove mods?",
    "faq.a6": "Yes — right-click the profile in the CurseForge app and use <em>Profile Options</em> to customize it. For the intended balance, we recommend playing the pack as shipped.",

    "cta.title": "The Darkness Is Waiting",
    "cta.sub": "{mods} mods. {textures} texture packs. {shaders} shader. One nightmare.",
    "cta.button": "Download Now — Free",

    "footer.tagline": "A Minecraft horror modpack for 1.21.4 (Fabric).",
    "footer.download": "Download",
    "footer.mods": "Mod List",
    "footer.install": "Install Guide",
    "footer.disclaimer": "This site is not affiliated with Mojang Studios or Microsoft. \"Minecraft\" is a trademark of Mojang Studios.",
  },

  tr: {
    "meta.title": "RapidSMP – Horror Modpack | Minecraft Korku Deneyimi",
    "meta.desc": "RapidSMP – Horror: seni izleyen varlıklar, akıl sağlığı sistemi, korku müzikleri ve Dreadlight shader ile Minecraft 1.21.4 Fabric korku modpack'i. İndir ve hayatta kal.",

    "nav.home": "Ana Sayfa", "nav.features": "Özellikler", "nav.mods": "Modlar",
    "nav.packs": "Paketler", "nav.install": "Kurulum", "nav.faq": "SSS",
    "nav.download": "İndir",

    "hero.tagline": "Sis çöktüğünde… <span>hiç yalnız olmadığını anlayacaksın.</span>",
    "hero.mods": "Mod", "hero.textures": "Doku Paketi", "hero.shader": "Shader",
    "hero.ctaDownload": "Modpack'i İndir",
    "hero.ctaMods": "Mod Listesine Bak",
    "hero.warning": "Bu modpack yoğun korku öğeleri ve ani korkutmalar içerir. Hassas oyunculara önerilmez.",

    "stats.mods": "Mod", "stats.textures": "Doku Paketi",
    "stats.shader": "Shader Paketi", "stats.version": "Minecraft Sürümü",

    "about.eyebrow": "Karanlığa hoş geldin",
    "about.title": "Korkmaya Hazır mısın?",
    "about.p1": "<strong>RapidSMP – Horror</strong>, Minecraft 1.21.4'ü gerçek bir <strong>korku deneyimine</strong> dönüştürür: özenle seçilmiş modlar, psikolojik <strong>akıl sağlığı sistemi</strong>, sisin içinden seni izleyen varlıklar ve gerilimi hiç düşürmeyen bir ses atmosferi.",
    "about.p2": "Tek başına oyna ya da <strong>e4mc</strong> ile dünyanı tek tıkla arkadaşlarına aç — sunucu kurulumu gerekmez. Sodium üzerine kurulu ve <strong>Dreadlight shader</strong> ile ayarlanan paket, neredeyse her bilgisayarda akıcı çalışır.",

    "features.eyebrow": "Seni neler bekliyor",
    "features.title": "Paketin Özellikleri",
    "features.f1t": "Seni Avlayan Varlıklar",
    "features.f1p": "Mooseman, Faceless Watchers, Kenny ve ALLSEEING — her biri kendi davranışına sahip, oyuncuyu izleyen ve takip eden düşman varlıklar.",
    "features.f2t": "Akıl Sağlığı Sistemi",
    "features.f2p": "Karanlık, yalnızlık ve korku akıl sağlığını tüketir. Akıl sağlığın düştükçe gerçekle hayal arasındaki çizgi bulanıklaşır.",
    "features.f3t": "Korku Sesleri & Müzik",
    "features.f3p": "Baştan aşağı korku müzikleri ve ambiyans sesleri, korku temalı yükleme ekranlarıyla bütünlüklü bir deneyim. Kulaklıkla oynanması önerilir.",
    "features.f4t": "Dreadlight Shader",
    "features.f4p": "Zifiri geceler, yoğun sis ve dinamik ışıklandırma sunan özel korku atmosferi shader'ı. Iris ve LambDynamicLights ile çalışır.",
    "features.f5t": "Arkadaşlarınla SMP",
    "features.f5p": "e4mc ile dünyanı tek tıkla arkadaşlarına aç — sunucu kurulumu veya port yönlendirme gerekmez.",
    "features.f6t": "Her Bilgisayarda Çalışır",
    "features.f6p": "Sodium, Lithium, ModernFix ve ondan fazla optimizasyon modu, düşük donanımda bile yüksek kare hızı sağlar.",

    "mods.eyebrow": "İçindekiler",
    "mods.title": "Mod Listesi",
    "mods.search": "Mod ara… (örn. sodium, horror)",
    "mods.empty": "Aramanla eşleşen mod bulunamadı.",
    "mods.all": "Tümü",
    "mods.count": "{shown} / {total} mod gösteriliyor",
    "mods.custom": "Özel",

    "packs.eyebrow": "Görüntü & ses",
    "packs.title": "Doku & Shader Paketleri",
    "packs.texturesSub": "Doku Paketleri",
    "packs.shaderSub": "Shader Paketi",

    "gallery.eyebrow": "Karanlıktan kareler",
    "gallery.title": "Ekran Görüntüleri",
    "gallery.soon": "YAKINDA",
    "gallery.alt": "RapidSMP – Horror oyun içi ekran görüntüsü",
    "gallery.note": "Tüm görüntüler oyun içinden, Dreadlight shader etkinken alınmıştır.",

    "dl.eyebrow": "Paketi edin",
    "dl.title": "Modpack'i İndir",
    "dl.button": "RapidSMP – Horror 2.4.1'ı İndir",
    "dl.vtText": "VirusTotal'da hiçbir güvenlik sağlayıcısı bu dosyayı zararlı olarak işaretlemedi.",
    "dl.vtLink": "Tam raporu görüntüle",
    "dl.note": "İndirdikten sonra CurseForge uygulamasını aç ve zip'i içe aktar: <strong>Minecraft → Create Custom Profile → Import</strong>.",

    "install.eyebrow": "Başlamak için",
    "install.title": "Nasıl Kurulur?",
    "install.s1t": "Paketi İndir",
    "install.s1p": "Yukarıdaki <a href=\"#download\">indirme bölümünden</a> <strong>RapidSMP-Horror-2.4.1.zip</strong> dosyasını indir.",
    "install.s2t": "CurseForge Uygulamasını Kur",
    "install.s2p": "<a href=\"https://www.curseforge.com/download/app\" target=\"_blank\" rel=\"noopener\">curseforge.com/download</a> adresinden resmi CurseForge uygulamasını indirip kur.",
    "install.s3t": "Zip'i İçe Aktar",
    "install.s3p": "Uygulamada <strong>Minecraft → Create Custom Profile → Import</strong> yolunu izle ve indirdiğin zip'i seç. Tüm modlar, paketler ve shader otomatik kurulur.",
    "install.s4t": "Oyna",
    "install.s4p": "<strong>Play</strong> butonuna bas. Tasarlanan deneyim için karanlıkta ve kulaklıkla oynaman önerilir.",
    "install.reqTitle": "Sistem Önerileri",
    "install.req1": "<strong>RAM:</strong> Pakete en az <strong>4 GB</strong> RAM ayır (CurseForge → Settings → Minecraft → Allocated Memory).",
    "install.req2": "<strong>Java:</strong> CurseForge uygulaması doğru Java sürümünü otomatik kurar.",
    "install.req3": "<strong>Ekran Kartı:</strong> Dreadlight shader için orta seviye bir kart önerilir (GTX 1060 / RX 580 ve üzeri). Zayıf sistemlerde shader kapatılabilir.",
    "install.req4": "<strong>Depolama:</strong> Yaklaşık 1 GB boş alan.",

    "faq.eyebrow": "Merak edilenler",
    "faq.title": "Sıkça Sorulan Sorular",
    "faq.q1": "Modpack hangi Minecraft sürümünde çalışıyor?",
    "faq.a1": "RapidSMP – Horror, <strong>Minecraft 1.21.4</strong> üzerinde <strong>Fabric</strong> yükleyicisiyle çalışır. Zip'i CurseForge uygulamasına aktardığında her şey otomatik kurulur.",
    "faq.q2": "İndirme güvenli mi?",
    "faq.a2": "Evet. Buradaki dosyanın birebir aynısı VirusTotal'da tarandı ve sonuç <strong>0 / 65</strong> — hiçbir güvenlik sağlayıcısı işaretlemedi. İndirme bölümündeki rapor linki ve SHA-256 özetiyle kendin de doğrulayabilirsin.",
    "faq.q3": "Shader'ı nasıl aktif ederim?",
    "faq.a3": "Iris pakete dahildir. Oyun içinde <em>Seçenekler → Görüntü Ayarları → Shader Paketleri</em> menüsünden <strong>Dreadlight</strong>'ı seç.",
    "faq.q4": "Arkadaşlarımla oynayabilir miyim?",
    "faq.a4": "Evet. <strong>e4mc</strong> ile dünyanı LAN'a açman yeterli — oluşturulan adresi arkadaşlarınla paylaş; sunucu veya port yönlendirme gerekmez. Normal sunucular da desteklenir.",
    "faq.q5": "Tek başına oynamak çok mu korkutucu?",
    "faq.a5": "Paket, tek oyunculu modda yoğun bir deneyim sunacak şekilde tasarlandı. Daha hafif bir deneyim istersen arkadaşlarınla oynaman önerilir.",
    "faq.q6": "Pakete mod ekleyip çıkarabilir miyim?",
    "faq.a6": "Evet — CurseForge uygulamasında profile sağ tıklayıp <em>Profile Options</em> ile özelleştirebilirsin. Tasarlanan denge için paketi geldiği gibi oynamanı öneririz.",

    "cta.title": "Karanlık Seni Bekliyor",
    "cta.sub": "{mods} mod. {textures} doku paketi. {shaders} shader. Tek bir kabus.",
    "cta.button": "Hemen İndir — Ücretsiz",

    "footer.tagline": "Minecraft 1.21.4 (Fabric) için bir korku modpack'i.",
    "footer.download": "İndir",
    "footer.mods": "Mod Listesi",
    "footer.install": "Kurulum Rehberi",
    "footer.disclaimer": "Bu site Mojang Studios veya Microsoft ile bağlantılı değildir. \"Minecraft\", Mojang Studios'un tescilli markasıdır.",
  },
};

/* ============================================================
   Site mechanics below — no need to edit
   ============================================================ */

let lang = localStorage.getItem("rapidsmp-lang") || "en";
if (!I18N[lang]) lang = "en";

const t = key => I18N[lang][key] ?? I18N.en[key] ?? key;

// — Config-driven bits —
document.querySelectorAll(".dc-link").forEach(a => (a.href = CONFIG.discordUrl));
document.querySelectorAll(".cf-mcver").forEach(el => (el.textContent = CONFIG.mcVersion));
document.querySelectorAll(".cf-verpill").forEach(el =>
  (el.textContent = `v${CONFIG.packVersion} • ${CONFIG.mcVersion} • ${CONFIG.loader}`));

// — Dynamic counts —
const COUNTS = { mods: MODS.length, textures: TEXTURE_PACKS.length, shaders: SHADERS.length };
document.querySelectorAll("[data-count]").forEach(el => (el.textContent = COUNTS[el.dataset.count]));
document.querySelectorAll("[data-count-target]").forEach(el => (el.dataset.target = COUNTS[el.dataset.countTarget]));
document.getElementById("modTotal").textContent = `(${COUNTS.mods})`;
document.getElementById("tpTotal").textContent = `(${COUNTS.textures})`;
document.getElementById("shTotal").textContent = `(${COUNTS.shaders})`;

// — i18n application —
function applyI18n() {
  document.documentElement.lang = lang;
  document.title = t("meta.title");
  document.getElementById("metaDesc").setAttribute("content", t("meta.desc"));

  document.querySelectorAll("[data-i18n]").forEach(el => (el.innerHTML = t(el.dataset.i18n)));
  document.querySelectorAll("[data-i18n-ph]").forEach(el => (el.placeholder = t(el.dataset.i18nPh)));

  document.getElementById("ctaSub").textContent = t("cta.sub")
    .replace("{mods}", COUNTS.mods)
    .replace("{textures}", COUNTS.textures)
    .replace("{shaders}", COUNTS.shaders);

  document.querySelectorAll("#langSwitch button").forEach(b =>
    b.classList.toggle("active", b.dataset.lang === lang));

  buildFilters();
  renderMods();
  renderPacks(TEXTURE_PACKS, "texturePackGrid");
  renderPacks(SHADERS, "shaderGrid", "shader");
  renderGallery();
}

document.getElementById("langSwitch").addEventListener("click", e => {
  const btn = e.target.closest("button[data-lang]");
  if (!btn || btn.dataset.lang === lang) return;
  lang = btn.dataset.lang;
  localStorage.setItem("rapidsmp-lang", lang);
  applyI18n();
});

// — Mod list rendering —
const modGrid = document.getElementById("modGrid");
const modCount = document.getElementById("modCount");
const modEmpty = document.getElementById("modEmpty");
const modSearch = document.getElementById("modSearch");
const modFilters = document.getElementById("modFilters");

let activeCat = "all";

function buildFilters() {
  const cats = [["all", `${t("mods.all")} (${MODS.length})`]];
  for (const [key, labels] of Object.entries(CATEGORIES)) {
    const count = MODS.filter(m => m.cat === key).length;
    if (count > 0) cats.push([key, `${labels[lang]} (${count})`]);
  }
  modFilters.innerHTML = cats
    .map(([key, label]) =>
      `<button class="filter-chip${key === activeCat ? " active" : ""}" data-cat="${key}">${label}</button>`)
    .join("");
}

modFilters.addEventListener("click", e => {
  const chip = e.target.closest(".filter-chip");
  if (!chip) return;
  modFilters.querySelectorAll(".filter-chip").forEach(c => c.classList.remove("active"));
  chip.classList.add("active");
  activeCat = chip.dataset.cat;
  renderMods();
});

function renderMods() {
  const q = (modSearch.value || "").toLowerCase().trim();
  const filtered = MODS.filter(m => {
    const matchCat = activeCat === "all" || m.cat === activeCat;
    const matchQ = !q || m.name.toLowerCase().includes(q) || m.desc[lang].toLowerCase().includes(q);
    return matchCat && matchQ;
  });

  modGrid.innerHTML = filtered
    .map(m => `
      <div class="mod-card">
        <span class="mod-cat">${CATEGORIES[m.cat][lang]}</span>
        <h4>${m.url
          ? `<a href="${m.url}" target="_blank" rel="noopener">${m.name}</a>`
          : `${m.name} <span class="mod-custom">${t("mods.custom")}</span>`}</h4>
        <p>${m.desc[lang]}</p>
      </div>`)
    .join("");

  modCount.textContent = t("mods.count")
    .replace("{shown}", filtered.length)
    .replace("{total}", MODS.length);
  modEmpty.hidden = filtered.length > 0;
}

modSearch.addEventListener("input", renderMods);

// — Texture & shader pack rendering —
function renderPacks(list, gridId, extraClass = "") {
  document.getElementById(gridId).innerHTML = list
    .map(p => `
      <div class="pack-card ${extraClass}">
        <div class="pack-icon">${p.icon}</div>
        <span class="pack-res">${p.res}</span>
        <h4><a href="${p.url}" target="_blank" rel="noopener">${p.name}</a></h4>
        <p>${p.desc[lang]}</p>
      </div>`)
    .join("");
}

// — Gallery rendering —
function renderGallery() {
  const grid = document.getElementById("galleryGrid");
  grid.innerHTML = GALLERY
    .map(src => `
      <a class="gallery-item" href="${src}" target="_blank" rel="noopener">
        <span class="gallery-ph">${t("gallery.soon")}</span>
        <img src="${src}" alt="${t("gallery.alt")}" loading="lazy"
             onerror="this.closest('.gallery-item').classList.add('missing')">
      </a>`)
    .join("");
}

// — Mobile menu —
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  navToggle.classList.toggle("open", open);
  navToggle.setAttribute("aria-expanded", String(open));
});

navLinks.addEventListener("click", e => {
  if (e.target.tagName === "A") {
    navLinks.classList.remove("open");
    navToggle.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

// — Reveal on scroll —
const revealObserver = new IntersectionObserver(
  entries => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    }
  },
  { threshold: 0.12 }
);
document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

// — Stat counters —
function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const duration = 1400;
  const start = performance.now();

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(target * eased);
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

const counterObserver = new IntersectionObserver(
  entries => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    }
  },
  { threshold: 0.5 }
);
document.querySelectorAll(".stat-num[data-count-target]").forEach(el =>
  counterObserver.observe(el));

// — Initial render —
applyI18n();
