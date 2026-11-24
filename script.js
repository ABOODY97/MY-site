/* =========================================================
   ABOODY — Achievements | script.js
   ========================================================= */
(() => {
    const $ = (s, c = document) => c.querySelector(s);
    const $$ = (s, c = document) => [...c.querySelectorAll(s)];
    const body = document.body;
    const html = document.documentElement;

    /* ---------------- Translations ---------------- */
    const T = {
        ar: {
            title_page: "إنجازاتي | ABOODY",
            nav_home: "الرئيسية", nav_achievements: "إنجازاتي", nav_radar: "Ghost Radar", nav_projects: "مشاريعي",
            nav_skills: "مهاراتي", nav_journey: "رحلتي", nav_contact: "تواصل",
            hero_badge: "👋 مطوّر ألعاب • مواقع • أدوات أمن معلومات", hero_hi: "أنا",
            hero_desc: "أحوّل الأفكار إلى مشاريع حقيقية — من ألعاب تفاعلية، إلى مواقع ويب متجاوبة، وصولاً إلى أدوات فحص شبكات احترافية مكتوبة بلغة Python.",
            hero_cta1: "استكشف إنجازاتي", hero_cta2: "👻 Ghost Radar",
            stat_projects: "مشاريع منجزة", stat_games: "ألعاب منشورة", stat_langs: "لغات مدعومة في أدواتي", stat_aes: "بت تشفير AES",
            ach_tag: "الإنجازات", ach_title: "أبرز ما أنجزته", ach_sub: "محطات أفتخر بها في رحلتي البرمجية.",
            ach1_t: "أداة Ghost Radar V5.0", ach1_d: "بناء أداة استطلاع وفحص شبكات متكاملة ببنية معيارية وتشفير AES-256-GCM.",
            ach2_t: "نشر ألعاب للكمبيوتر والهاتف", ach2_d: "تطوير لعبة المتاهة \"Try Again\" ونشرها بنسختين: Windows و Android.",
            ach3_t: "مواقع ويب متجاوبة", ach3_d: "تصميم متجر إلكتروني، مدونة تقنية، وموقع ديني منشور على الإنترنت.",
            ach4_t: "دعم تعدد اللغات", ach4_d: "دعم العربية والإنجليزية والتركية حتى داخل التيرمنال مع اتجاه RTL سليم.",
            ach5_t: "جودة واختبارات CI", ach5_d: "اختبارات آلية باستخدام pytest وتكامل مستمر عبر GitHub Actions.",
            ach6_t: "موقع أعمال شخصي", ach6_d: "موقع بوضع ليلي/نهاري، جزيئات متحركة، وتبديل لغة فوري — منشور على Netlify.",
            gr_tag: "المشروع المميّز",
            gr_sub: "أداة فحص شبكات واستطلاع متقدمة وسريعة مبنية بـ Python، تجمع بين البنية المعيارية والتشفير القوي ووضع التخفي.",
            f1_t: "فحص الشبكة المحلية (ARP)", f1_d: "اكتشاف الأجهزة، عناوين MAC، الشركات المصنّعة، وتخمين نظام التشغيل عبر بصمة TTL مع تنبيه فوري للأجهزة الجديدة.",
            f2_t: "استطلاع المواقع (Web Recon)", f2_d: "الموقع الجغرافي، مزود الخدمة، شهادات SSL/TLS، الترويسات الأمنية، سجلات DNS عبر DoH، والنطاقات الفرعية.",
            f3_t: "فحص المنافذ والثغرات", f3_d: "مسح SYN، جلب بصمات الخدمات (Banner Grabbing)، والتحقق التلقائي من الثغرات عبر قاعدة NVD الرسمية.",
            f4_t: "خزنة AES-256-GCM", f4_d: "تشفير تلقائي للسجلات والتقارير JSON/HTML مع أداة فك تشفير (Unseal) داخل البرنامج والمتصفح.",
            f5_t: "وضع الشبح (Ghost Mode)", f5_d: "تغيير توقيت الطلبات وإخفاء اسم العملية محلياً، مع دعم البروكسي و Tor عبر متغيرات البيئة.",
            f6_t: "عربي / English / Türkçe", f6_d: "عرض سليم للعربية في التيرمنال من اليمين لليسار مع تبديل فوري بين ثلاث لغات.",
            arch_title: "البنية المعيارية للمشروع",
            gr_disc: "⚠️ مصمّمة للأغراض التعليمية واختبار الاختراق الأخلاقي على الأنظمة المصرّح بها فقط.",
            pr_tag: "أعمالي", pr_title: "الألعاب ومشاريع الويب", pr_sub: "مجموعة من الألعاب والمواقع التي قمت بتصميمها وتطويرها.",
            flt_all: "الكل", flt_games: "ألعاب", flt_web: "مواقع", chip_game: "لعبة", chip_web: "موقع",
            p1_t: "لعبة المتاهة — Try Again", p1_d: "اختبر مهاراتك في السرعة والتركيز. متوفرة للكمبيوتر والهاتف.",
            p2_t: "3D Shooter", p2_d: "لعبة تصويب ثلاثية الأبعاد — قريباً.",
            p3_t: "موقع متجر إلكتروني", p3_d: "متجر كامل متجاوب يركّز على تجربة المستخدم وسهولة التصفح.",
            p4_t: "مدونة شخصية تقنية", p4_d: "منصة لعرض المقالات التقنية وآخر الأخبار في مجال البرمجة.",
            p5_t: "موقع ديني — صلاتك", p5_d: "يعرض المحتوى الديني والقرآن الكريم، وجارٍ تحويله إلى تطبيق.",
            link_play: "العب الآن", link_soon: "قريباً", link_browse: "تصفح الموقع",
            sk_tag: "المهارات", sk_title: "أدواتي وتقنياتي", sk_net: "أمن الشبكات", sk_game: "تطوير الألعاب", sk_crypto: "التشفير",
            jr_tag: "الرحلة", jr_title: "محطات رحلتي",
            tl1_t: "البداية مع الويب", tl1_d: "تعلّم HTML و CSS و JavaScript وبناء أولى المواقع المتجاوبة.",
            tl2_t: "عالم الألعاب", tl2_d: "تطوير لعبة \"Try Again\" ونشرها على الكمبيوتر والهاتف.",
            tl3_t: "مشاريع منشورة", tl3_d: "إطلاق المتجر الإلكتروني والمدونة وموقع \"صلاتك\" للجمهور.",
            tl4_t: "Ghost Radar V5.0", tl4_d: "الانتقال إلى أمن المعلومات وبناء أداة فحص شبكات احترافية بـ Python.",
            ct_title: "لنعمل معاً 🤝", ct_sub: "لديك فكرة أو مشروع؟ أرسل لي رسالة وسأعود إليك قريباً.", ct_send: "إرسال",
            ph_name: "اسمك", ph_email: "بريدك الإلكتروني", ph_msg: "رسالتك",
            footer_text: "© 2026 جميع الحقوق محفوظة.",
            msg_ok: "✅ تم إرسال رسالتك بنجاح! شكراً لك.", msg_err: "⚠️ يرجى تعبئة جميع الحقول بشكل صحيح.",
            msg_like: "❤️ شكراً على الإعجاب!", msg_dark: "🌙 تم تفعيل الوضع الليلي", msg_light: "☀️ تم تفعيل الوضع النهاري",
            typed: ["مطوّر Python 🐍", "صانع ألعاب 🎮", "مصمّم مواقع 🌐", "باحث أمن معلومات 👻"]
        },
        en: {
            title_page: "My Achievements | ABOODY",
            nav_home: "Home", nav_achievements: "Achievements", nav_radar: "Ghost Radar", nav_projects: "Projects",
            nav_skills: "Skills", nav_journey: "Journey", nav_contact: "Contact",
            hero_badge: "👋 Game • Web • Security-tools developer", hero_hi: "I'm",
            hero_desc: "I turn ideas into real projects — from interactive games, to responsive websites, all the way to professional network-scanning tools written in Python.",
            hero_cta1: "Explore my work", hero_cta2: "👻 Ghost Radar",
            stat_projects: "Completed projects", stat_games: "Published games", stat_langs: "Languages in my tools", stat_aes: "bit AES encryption",
            ach_tag: "Achievements", ach_title: "Highlights", ach_sub: "Milestones I'm proud of in my coding journey.",
            ach1_t: "Ghost Radar V5.0", ach1_d: "Built a complete recon & network-scanning tool with a modular architecture and AES-256-GCM encryption.",
            ach2_t: "Games on PC & Mobile", ach2_d: "Developed the maze game \"Try Again\" and shipped it for both Windows and Android.",
            ach3_t: "Responsive websites", ach3_d: "Designed an e-commerce store, a tech blog, and a live religious website.",
            ach4_t: "Multilingual support", ach4_d: "Arabic, English and Turkish — even inside the terminal with proper RTL rendering.",
            ach5_t: "Quality & CI", ach5_d: "Automated tests with pytest and continuous integration via GitHub Actions.",
            ach6_t: "Personal portfolio", ach6_d: "Day/night mode, animated particles and instant language switching — live on Netlify.",
            gr_tag: "Featured project",
            gr_sub: "A fast, advanced network-scanning and reconnaissance tool built with Python, combining modular design, strong encryption and stealth mode.",
            f1_t: "Local network scan (ARP)", f1_d: "Discover devices, MAC addresses, vendors and guess the OS via TTL fingerprinting, with instant new-device alerts.",
            f2_t: "Web Recon", f2_d: "Geo-location, ISP, SSL/TLS certificates, missing security headers, DNS records over DoH, and subdomains.",
            f3_t: "Deep port & CVE scanner", f3_d: "SYN scanning, banner grabbing, and automatic vulnerability checks against the official NVD database.",
            f4_t: "AES-256-GCM vault", f4_d: "Automatic encryption of logs and JSON/HTML reports with an Unseal tool in-app and in the browser.",
            f5_t: "Ghost Mode", f5_d: "Varies request timing and hides the local process name, with proxy / Tor support via env variables.",
            f6_t: "Arabic / English / Türkçe", f6_d: "Correct right-to-left Arabic in the terminal with instant switching between three languages.",
            arch_title: "Modular architecture",
            gr_disc: "⚠️ Built for education and ethical penetration testing on authorized systems only.",
            pr_tag: "My work", pr_title: "Games & Web projects", pr_sub: "A collection of games and websites I designed and developed.",
            flt_all: "All", flt_games: "Games", flt_web: "Websites", chip_game: "Game", chip_web: "Website",
            p1_t: "Maze game — Try Again", p1_d: "Test your speed and focus. Available for PC and mobile.",
            p2_t: "3D Shooter", p2_d: "A 3D shooting game — coming soon.",
            p3_t: "E-commerce store", p3_d: "A fully responsive store focused on user experience and easy browsing.",
            p4_t: "Tech blog", p4_d: "A platform for tech articles and the latest programming news.",
            p5_t: "Religious site — Salatuk", p5_d: "Religious content and the Holy Quran — currently being turned into an app.",
            link_play: "Play now", link_soon: "Coming soon", link_browse: "Visit site",
            sk_tag: "Skills", sk_title: "My tools & tech", sk_net: "Network security", sk_game: "Game development", sk_crypto: "Cryptography",
            jr_tag: "Journey", jr_title: "Milestones",
            tl1_t: "Starting with the web", tl1_d: "Learned HTML, CSS and JavaScript and built my first responsive websites.",
            tl2_t: "The world of games", tl2_d: "Developed \"Try Again\" and released it on PC and mobile.",
            tl3_t: "Live projects", tl3_d: "Launched the store, the blog and the \"Salatuk\" website to the public.",
            tl4_t: "Ghost Radar V5.0", tl4_d: "Moved into cybersecurity and built a professional network-scanning tool in Python.",
            ct_title: "Let's work together 🤝", ct_sub: "Have an idea or a project? Send me a message and I'll get back to you soon.", ct_send: "Send",
            ph_name: "Your name", ph_email: "Your email", ph_msg: "Your message",
            footer_text: "© 2026 All rights reserved.",
            msg_ok: "✅ Your message was sent successfully! Thank you.", msg_err: "⚠️ Please fill in all fields correctly.",
            msg_like: "❤️ Thanks for the like!", msg_dark: "🌙 Dark mode enabled", msg_light: "☀️ Light mode enabled",
            typed: ["Python developer 🐍", "Game maker 🎮", "Web designer 🌐", "Security researcher 👻"]
        }
    };
    /* ---- Extra translations: Lab (Void Eye / Smart Door) + downloads ---- */
    Object.assign(T.ar, {
        nav_lab: "المختبر",
        ach7_t: "أداة VOID EYE", ach7_d: "محلّل حزم شبكة (Mini Wireshark) يلتقط TCP و UDP و ICMP لحظياً ويحوّل عناوين IP إلى أسماء مواقع.",
        ach8_t: "الباب الذكي ESP32", ach8_d: "نظام تحكم بالدخول عبر رمز سري أو بطاقة RFID مع مؤشرات LED وتنبيهات صوتية.",
        lab_tag: "المختبر", lab_title: "أدوات الشبكات وإنترنت الأشياء", lab_sub: "مشروعان من مستودعي على GitHub — جرّبهما مباشرة هنا!",
        ve_desc: "أداة لمراقبة وتحليل حزم الشبكة تعترض الحزم المارة عبر كرت الشبكة وتعرض المصدر والوجهة، مع التعرف التلقائي على أسماء المواقع والخدمات عبر نظام Resolver ذكي.",
        ve_f1: "📡 التقاط حي لحزم TCP و UDP و ICMP", ve_f2: "🧠 تحويل IP إلى أسماء مواقع مع ذاكرة Cache",
        ve_f3: "🔌 اختيار تفاعلي لكرت الشبكة", ve_f4: "🇸🇦 دعم كامل للعربية داخل التيرمنال",
        gh_view: "عرض على GitHub", demo_badge: "جرّبها", card_ok: "بطاقة صحيحة", card_bad: "بطاقة غريبة",
        door_hint: "💡 أدخل الرمز التجريبي 1234 ثم اضغط # — أو اضغط على إحدى البطاقات لتمريرها على القارئ. (* للمسح)",
        sd_desc: "مشروع أمان متكامل للتحكم في الدخول باستخدام متحكم ESP32، يعتمد على إدخال رمز سري عبر لوحة مفاتيح 4x4 أو تمرير بطاقة ذكية RFID.",
        sd_f1: "⚪ لمبة بيضاء: النظام جاهز", sd_f2: "🟢 لمبة خضراء + نغمة صاعدة: تم فتح الباب",
        sd_f3: "🔴 لمبة حمراء + نغمة منخفضة: دخول مرفوض", sd_f4: "⏱️ مسح الإدخال تلقائياً بعد 10 ثوانٍ",
        flt_tools: "أدوات و IoT", chip_tool: "أداة", chip_iot: "IoT",
        link_dl_pc: "حمّل اللعبة (نسخة الكمبيوتر)", link_dl_mobile: "حمّل اللعبة (نسخة الهاتف)", link_github: "عرض الكود",
        p6_d: "محلّل حزم شبكة بسيط وقوي (Mini Wireshark) مكتوب بـ Python و Scapy.",
        p7_t: "الباب الذكي — ESP32", p7_d: "تحكم بالدخول برمز سري أو بطاقة RFID مع لمبات LED وطنان صوتي.",
        tl5_t: "عالم الهاردوير و IoT", tl5_d: "بناء نظام الباب الذكي بـ ESP32 مع RFID ولوحة مفاتيح.",
        tl6_t: "VOID EYE", tl6_d: "تطوير محلّل حزم شبكة لفهم ما يجري داخل الشبكة لحظة بلحظة.",
        msg_dl_pc: "⬇️ جارٍ تحميل نسخة الكمبيوتر...", msg_dl_mobile: "⬇️ جارٍ تحميل نسخة الهاتف (APK)...",
        msg_ios: "⚠️ ملف APK يعمل على أجهزة Android فقط"
    });
    Object.assign(T.en, {
        nav_lab: "Lab",
        ach7_t: "VOID EYE tool", ach7_d: "A packet analyzer (Mini Wireshark) capturing TCP, UDP and ICMP live and resolving IPs to site names.",
        ach8_t: "ESP32 Smart Door", ach8_d: "Access control via a secret code or an RFID card, with LED indicators and audio feedback.",
        lab_tag: "Lab", lab_title: "Networking & IoT tools", lab_sub: "Two projects from my GitHub — try them right here!",
        ve_desc: "A tool for monitoring and analyzing network packets: it intercepts traffic on your network card and shows source and destination, automatically recognizing site and service names through a smart resolver.",
        ve_f1: "📡 Live TCP, UDP & ICMP capture", ve_f2: "🧠 IP → site name resolving with cache",
        ve_f3: "🔌 Interactive interface selection", ve_f4: "🇸🇦 Full Arabic support in the terminal",
        gh_view: "View on GitHub", demo_badge: "Try it", card_ok: "Valid card", card_bad: "Unknown card",
        door_hint: "💡 Enter the demo code 1234 then press # — or tap one of the cards to swipe it on the reader. (* to clear)",
        sd_desc: "A complete access-control security project using an ESP32, based on entering a secret code on a 4x4 keypad or swiping an RFID smart card.",
        sd_f1: "⚪ White LED: system ready", sd_f2: "🟢 Green LED + rising tone: door opened",
        sd_f3: "🔴 Red LED + low tone: access denied", sd_f4: "⏱️ Input auto-clears after 10 seconds",
        flt_tools: "Tools & IoT", chip_tool: "Tool", chip_iot: "IoT",
        link_dl_pc: "Download (PC version)", link_dl_mobile: "Download (Mobile version)", link_github: "View code",
        p6_d: "A simple yet powerful packet analyzer (Mini Wireshark) written in Python & Scapy.",
        p7_t: "Smart Door — ESP32", p7_d: "Access control with a secret code or RFID card, LEDs and a buzzer.",
        tl5_t: "Hardware & IoT", tl5_d: "Built the ESP32 smart door system with RFID and a keypad.",
        tl6_t: "VOID EYE", tl6_d: "Developed a packet analyzer to see what happens inside the network in real time.",
        msg_dl_pc: "⬇️ Downloading the PC version...", msg_dl_mobile: "⬇️ Downloading the mobile version (APK)...",
        msg_ios: "⚠️ APK files only work on Android devices"
    });

    /* ---- Device detection for the Try Again download ---- */
    const UA = navigator.userAgent;
    const isIOS = /iPhone|iPad|iPod/i.test(UA) || (navigator.maxTouchPoints > 1 && /Macintosh/.test(UA));
    const isMobile = isIOS || /Android|Mobile|Tablet|Silk|Kindle|Opera Mini|IEMobile|BlackBerry/i.test(UA) ||
        !!(navigator.userAgentData && navigator.userAgentData.mobile);
    const dl = document.getElementById("try-again-dl");
    if (dl) {
        const file = isMobile ? "TRY AGAIN.apk" : "TRY AGAIN.zip";
        dl.href = "downloads/" + encodeURIComponent(file);
        dl.setAttribute("download", file);
        document.getElementById("try-again-label").dataset.key = isMobile ? "link_dl_mobile" : "link_dl_pc";
        document.getElementById("try-again-size").textContent = isMobile ? "APK • Android • 40.2 MB" : "ZIP • Windows • 45.6 MB";
    }

    let lang = localStorage.getItem("ab_lang") || "ar";
    const t = k => T[lang][k] ?? k;

    function applyLang() {
        html.lang = lang;
        html.dir = lang === "ar" ? "rtl" : "ltr";
        $$("[data-key]").forEach(el => { if (T[lang][el.dataset.key]) el.textContent = T[lang][el.dataset.key]; });
        $$("[data-ph]").forEach(el => el.placeholder = t(el.dataset.ph));
        document.title = t("title_page");
        $("#lang-toggle").textContent = lang === "ar" ? "EN" : "ع";
        typedRestart();
    }
    $("#lang-toggle").addEventListener("click", () => {
        lang = lang === "ar" ? "en" : "ar";
        localStorage.setItem("ab_lang", lang);
        applyLang();
    });

    /* ---------------- Notification ---------------- */
    let notifTimer;
    function notify(msg, error = false) {
        const bar = $("#notification-bar");
        bar.textContent = msg;
        bar.classList.toggle("error", error);
        bar.classList.add("show");
        clearTimeout(notifTimer);
        notifTimer = setTimeout(() => bar.classList.remove("show"), 2600);
    }

    /* ---------------- Dark mode ---------------- */
    const modeBtn = $("#mode-toggle");
    function setMode(dark, announce) {
        body.classList.toggle("dark-mode", dark);
        modeBtn.textContent = dark ? "☀️" : "🌙";
        localStorage.setItem("ab_dark", dark ? "1" : "0");
        initParticles();
        if (announce) notify(t(dark ? "msg_dark" : "msg_light"));
    }
    modeBtn.addEventListener("click", () => setMode(!body.classList.contains("dark-mode"), true));

    /* ---------------- Typed text ---------------- */
    let typedTimer, wi = 0, ci = 0, deleting = false;
    function typeLoop() {
        const words = T[lang].typed, w = words[wi % words.length], el = $("#typed");
        ci += deleting ? -1 : 1;
        el.textContent = w.slice(0, ci);
        let d = deleting ? 45 : 95;
        if (!deleting && ci === w.length) { deleting = true; d = 1600; }
        else if (deleting && ci === 0) { deleting = false; wi++; d = 400; }
        typedTimer = setTimeout(typeLoop, d);
    }
    function typedRestart() { clearTimeout(typedTimer); wi = 0; ci = 0; deleting = false; typeLoop(); }

    /* ---------------- Header / progress / to-top / active nav ---------------- */
    const header = $("#header"), toTop = $("#to-top"), progress = $("#scroll-progress");
    const sections = $$("main section[id]"), navLinks = $$("#main-nav a");
    function onScroll() {
        const y = window.scrollY, max = document.documentElement.scrollHeight - innerHeight;
        header.classList.toggle("scrolled", y > 50);
        toTop.classList.toggle("show", y > 600);
        progress.style.width = (max > 0 ? (y / max) * 100 : 0) + "%";
        let current = "home";
        sections.forEach(s => { if (y >= s.offsetTop - 140) current = s.id; });
        navLinks.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + current));
    }
    addEventListener("scroll", onScroll, { passive: true });
    toTop.addEventListener("click", () => scrollTo({ top: 0 }));

    /* ---------------- Hamburger ---------------- */
    const burger = $("#hamburger-btn"), nav = $("#main-nav");
    burger.addEventListener("click", () => { burger.classList.toggle("open"); nav.classList.toggle("open"); });
    navLinks.forEach(a => a.addEventListener("click", () => { burger.classList.remove("open"); nav.classList.remove("open"); }));

    /* ---------------- Reveal + counters + skill bars ---------------- */
    const io = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (!e.isIntersecting) return;
            const el = e.target;
            el.classList.add("revealed");
            $$(".stat-num", el).forEach(countUp);
            $$(".bar-fill", el).forEach(b => b.style.width = b.dataset.w + "%");
            if (el.classList.contains("terminal")) startTerminal();
            io.unobserve(el);
        });
    }, { threshold: 0.15 });
    $$(".reveal").forEach((el, i) => { el.style.transitionDelay = (i % 3) * 0.1 + "s"; io.observe(el); });

    function countUp(el) {
        const target = +el.dataset.target, dur = 1600, t0 = performance.now();
        const step = now => {
            const p = Math.min((now - t0) / dur, 1);
            el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
            if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    }

    /* ---------------- Terminal animation (Ghost Radar) ---------------- */
    const banner = [
        '<span class="c">   ██████╗ ██╗  ██╗ ██████╗ ███████╗████████╗</span>',
        '<span class="c">  ██╔════╝ ██║  ██║██╔═══██╗██╔════╝╚══██╔══╝</span>',
        '<span class="c">  ██║  ███╗███████║██║   ██║███████╗   ██║   </span>',
        '<span class="c">  ██║   ██║██╔══██║██║   ██║╚════██║   ██║   </span>',
        '<span class="c">  ╚██████╔╝██║  ██║╚██████╔╝███████║   ██║   </span>',
        '<span class="c">   ╚═════╝ ╚═╝  ╚═╝ ╚═════╝ ╚══════╝   ╚═╝   </span>',
        '<span class="y">          R  A  D  A  R    V 5.0</span>',
        '<span class="w">            -= FROM ABOODY =-</span>',
        '',
        '<span class="w">[1] Local network scan   [2] Web recon</span>',
        '<span class="w">[3] Deep port + CVE      [4] Ghost mode</span>',
        '',
        '<span class="y">ghost@radar:~$</span> 1',
        '[*] Scanning 192.168.1.0/24 via ARP ...',
        '[+] 192.168.1.1    a4:2b:b0:**:**:**  TP-Link   Linux (TTL 64)',
        '[+] 192.168.1.14   3c:22:fb:**:**:**  Apple     macOS (TTL 64)',
        '[+] 192.168.1.27   f0:9f:c2:**:**:**  Samsung   Android',
        '<span class="r">[!] NEW device: 192.168.1.42  (unknown vendor)</span>',
        '[✓] 4 hosts found — report sealed with AES-256-GCM 🔐',
        '<span class="y">ghost@radar:~$</span> <span class="cur"></span>'
    ];
    let termStarted = false;
    function startTerminal() {
        if (termStarted) return; termStarted = true;
        const out = $("#terminal-body");
        let i = 0;
        (function next() {
            if (i >= banner.length) { setTimeout(() => { out.innerHTML = ""; i = 0; next(); }, 6000); return; }
            out.innerHTML += banner[i] + (i < banner.length - 1 ? "\n" : "");
            i++;
            setTimeout(next, i < 9 ? 90 : i < 13 ? 300 : 520);
        })();
    }

    /* ---------------- Project filters ---------------- */
    $$(".filter").forEach(btn => btn.addEventListener("click", () => {
        $$(".filter").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const f = btn.dataset.filter;
        $$(".game-box").forEach(box => box.classList.toggle("hide", f !== "all" && box.dataset.cat !== f));
    }));

    /* ---------------- Likes (saved locally) ---------------- */
    const likes = JSON.parse(localStorage.getItem("ab_likes") || "{}");
    const liked = JSON.parse(localStorage.getItem("ab_liked") || "{}");
    $$(".like-button").forEach(wrap => {
        const span = $(".like-count", wrap), id = span.dataset.id;
        span.textContent = likes[id] || 0;
        if (liked[id]) wrap.classList.add("liked");
        $("button", wrap).addEventListener("click", () => {
            if (liked[id]) { liked[id] = false; likes[id] = Math.max(0, (likes[id] || 1) - 1); wrap.classList.remove("liked"); }
            else { liked[id] = true; likes[id] = (likes[id] || 0) + 1; wrap.classList.remove("liked"); void wrap.offsetWidth; wrap.classList.add("liked"); notify(t("msg_like")); }
            span.textContent = likes[id];
            localStorage.setItem("ab_likes", JSON.stringify(likes));
            localStorage.setItem("ab_liked", JSON.stringify(liked));
        });
    });

    /* ---------------- Contact form ---------------- */
    $("#contact-form").addEventListener("submit", e => {
        e.preventDefault();
        const fields = [$("#c-name"), $("#c-email"), $("#c-msg")];
        const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test($("#c-email").value.trim());
        let ok = true;
        fields.forEach(f => {
            const bad = !f.value.trim() || (f.id === "c-email" && !emailOk);
            if (bad) { ok = false; f.classList.remove("shake-error"); void f.offsetWidth; f.classList.add("shake-error"); setTimeout(() => f.classList.remove("shake-error"), 900); }
        });
        if (!ok) return notify(t("msg_err"), true);
        notify(t("msg_ok"));
        e.target.reset();
    });

    /* ---------------- Custom cursor + glow ---------------- */
    const cursor = $("#custom-cursor"), glow = $("#mouse-glow-star");
    let mx = innerWidth / 2, my = innerHeight / 2, gx = mx, gy = my;
    addEventListener("mousemove", e => {
        mx = e.clientX; my = e.clientY;
        cursor.style.left = mx + "px"; cursor.style.top = my + "px";
        glow.classList.add("visible");
    });
    document.addEventListener("mouseleave", () => glow.classList.remove("visible"));
    (function glowLoop() {
        gx += (mx - gx) * 0.12; gy += (my - gy) * 0.12;
        glow.style.left = gx + "px"; glow.style.top = gy + "px";
        requestAnimationFrame(glowLoop);
    })();
    document.addEventListener("mouseover", e => {
        cursor.classList.toggle("active-cursor", !!e.target.closest("a, button, input, textarea, .game-box, .ach-card"));
    });

    /* ---------------- Particles (clouds-dust by day, stars by night) ---------------- */
    const cv = $("#particle-canvas"), ctx = cv.getContext("2d");
    let parts = [], W, H;
    function resize() { W = cv.width = innerWidth; H = cv.height = innerHeight; }
    function initParticles() {
        resize();
        const dark = body.classList.contains("dark-mode");
        const n = Math.min(dark ? 160 : 70, Math.floor(W * H / (dark ? 9000 : 18000)));
        parts = Array.from({ length: n }, () => ({
            x: Math.random() * W, y: Math.random() * H,
            r: dark ? Math.random() * 1.6 + .3 : Math.random() * 3 + 1,
            vx: (Math.random() - .5) * (dark ? .08 : .35), vy: dark ? (Math.random() - .5) * .08 : -Math.random() * .4 - .1,
            a: Math.random(), da: (Math.random() * .02 + .005) * (Math.random() < .5 ? -1 : 1)
        }));
    }
    function draw() {
        const dark = body.classList.contains("dark-mode");
        ctx.clearRect(0, 0, W, H);
        for (const p of parts) {
            p.x += p.vx; p.y += p.vy; p.a += p.da;
            if (p.a <= .1 || p.a >= 1) p.da *= -1;
            if (p.x < -5) p.x = W + 5; if (p.x > W + 5) p.x = -5;
            if (p.y < -5) p.y = H + 5; if (p.y > H + 5) p.y = -5;
            // mouse repulse
            const dx = p.x - mx, dy = p.y - my, d2 = dx * dx + dy * dy;
            if (d2 < 10000) { p.x += dx / 60; p.y += dy / 60; }
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = dark ? `rgba(255,255,255,${p.a})` : `rgba(255,255,255,${p.a * .7})`;
            ctx.fill();
        }
        requestAnimationFrame(draw);
    }
    addEventListener("resize", initParticles);

    /* ---------------- Try Again download feedback ---------------- */
    if (dl) dl.addEventListener("click", () => {
        notify(t(isMobile ? "msg_dl_mobile" : "msg_dl_pc"));
        if (isIOS) setTimeout(() => notify(t("msg_ios"), true), 2700);
    });

    /* ---------------- Web Audio buzzer (Smart Door) ---------------- */
    let AC;
    function tone(freq, ms, delay = 0) {
        try {
            AC = AC || new (window.AudioContext || window.webkitAudioContext)();
            const o = AC.createOscillator(), g = AC.createGain();
            o.type = "square"; o.frequency.value = freq; g.gain.value = 0.035;
            o.connect(g).connect(AC.destination);
            const t0 = AC.currentTime + delay / 1000;
            o.start(t0); o.stop(t0 + ms / 1000);
        } catch (_) { /* audio not available */ }
    }

    /* ---------------- Smart Door simulator (mirrors Smart_Door.ino) ---------------- */
    (() => {
        const screen = $("#door-screen"); if (!screen) return;
        const W_ = $("#led-white"), G_ = $("#led-green"), R_ = $("#led-red"), reader = $("#rfid-btn");
        const PASSWORD = "1234", VALID_UID = "A3F19C2E";
        let input = "", busy = false, idleTimer;
        const show = (txt, cls = "") => { screen.textContent = txt; screen.className = "door-screen " + cls; };
        const ready = () => { W_.classList.add("on"); G_.classList.remove("on"); R_.classList.remove("on"); show("READY_"); input = ""; busy = false; };

        function granted() {
            busy = true; W_.classList.remove("on"); G_.classList.add("on");
            show("ACCESS GRANTED ✔", "ok");
            tone(2000, 150); tone(2500, 150, 150); tone(3000, 300, 300);
            setTimeout(ready, 3000);
        }
        function denied() {
            busy = true; W_.classList.remove("on"); R_.classList.add("on");
            show("ACCESS DENIED ✖", "bad");
            tone(500, 300); tone(300, 500, 300);
            setTimeout(ready, 2000);
        }
        function press(k) {
            if (busy) return;
            tone(1500, 50);
            clearTimeout(idleTimer);
            if (k === "#") { input === PASSWORD ? granted() : denied(); return; }
            if (k === "*") { input = ""; show("CLEARED"); setTimeout(() => !busy && show("READY_"), 700); return; }
            if (input.length >= 12) return;
            input += k;
            show("CODE: " + "•".repeat(input.length));
            idleTimer = setTimeout(() => { if (!busy && input) { input = ""; show("TIMEOUT"); setTimeout(() => !busy && show("READY_"), 900); } }, 10000);
        }
        $$("#keypad button").forEach(b => b.addEventListener("click", () => press(b.textContent.trim())));

        // physical keyboard support while the device is hovered
        const device = $(".door-device");
        let hover = false;
        device.addEventListener("mouseenter", () => hover = true);
        device.addEventListener("mouseleave", () => hover = false);
        addEventListener("keydown", e => {
            if (!hover) return;
            const k = e.key === "Enter" ? "#" : e.key === "Backspace" || e.key === "Escape" ? "*" : e.key.toUpperCase();
            const btn = $$("#keypad button").find(b => b.textContent.trim() === k);
            if (!btn) return;
            e.preventDefault();
            btn.classList.add("pressed"); setTimeout(() => btn.classList.remove("pressed"), 120);
            press(k);
        });

        $$(".rfid-card").forEach(card => card.addEventListener("click", () => {
            if (busy) return;
            busy = true;
            $$(".rfid-card").forEach(c => c.classList.remove("selected"));
            card.classList.add("selected");
            reader.classList.add("armed");
            show("READING...");
            setTimeout(() => {
                const uid = card.dataset.uid.replace(/\s/g, "");
                reader.classList.remove("armed");
                card.classList.remove("selected");
                show("UID: " + uid);
                setTimeout(() => (uid === VALID_UID ? granted() : denied()), 700);
            }, 800);
        }));
        reader.addEventListener("click", () => { if (!busy) { show("TAP A CARD ↓"); setTimeout(() => !busy && show("READY_"), 1200); } });
    })();

    /* ---------------- VOID EYE live packet stream ---------------- */
    (() => {
        const out = $("#void-body"); if (!out) return;
        const hosts = ["192.168.1.5", "google.com", "youtube.com", "github.com", "dns.google", "cloudflare.com",
            "whatsapp.net", "netflix.com", "router.local", "microsoft.com", "instagram.com", "discord.gg"];
        const services = { 80: "HTTP", 443: "HTTPS", 53: "DNS", 22: "SSH", 21: "FTP", 3306: "MySQL", 8080: "HTTP-Alt" };
        const svc = p => services[p] || String(p);
        const pick = a => a[Math.floor(Math.random() * a.length)];
        const pad = (s, n) => (s + " ".repeat(n)).slice(0, n);
        const eph = () => 49152 + Math.floor(Math.random() * 16000);
        const cnt = { total: 0, tcp: 0, udp: 0, icmp: 0 };
        const lines = [];
        let timer = null;

        function push(html) {
            lines.push(html);
            if (lines.length > 13) lines.shift();
            out.innerHTML = lines.join("\n");
        }
        push('<span class="cy">[*] VOID EYE started on Wi-Fi... (Ctrl+C to stop)</span>');
        push('<span class="cy">' + "-".repeat(60) + "</span>");

        function tick() {
            const r = Math.random();
            const local = "192.168.1.5", remote = pick(hosts.slice(1));
            const outgoing = Math.random() < .5;
            const src = outgoing ? local : remote, dst = outgoing ? remote : local;
            let line;
            if (r < .62) {
                const port = pick([443, 443, 443, 80, 22, 8080]);
                const [sp, dp] = outgoing ? [eph(), port] : [port, eph()];
                line = `[<span class="g">TCP</span>] ${pad(src, 16)} <span class="y">&gt;&gt;</span> ${pad(dst, 16)} | ${svc(sp)} -&gt; ${svc(dp)}`;
                cnt.tcp++;
            } else if (r < .9) {
                const [sp, dp] = outgoing ? [eph(), 53] : [53, eph()];
                line = `[<span class="cy">UDP</span>] ${pad(src, 16)} <span class="y">&gt;&gt;</span> ${pad(dst, 16)} | ${svc(sp)} -&gt; ${svc(dp)}`;
                cnt.udp++;
            } else {
                line = `[<span class="y">ICMP</span>] ${pad(src, 15)} <span class="y">&gt;&gt;</span> ${pad(dst, 16)} | Type: ${outgoing ? 8 : 0}`;
                cnt.icmp++;
            }
            cnt.total++;
            push(line);
            if (cnt.total % 100 === 0) push(`<span class="c">[INFO] Packets: ${cnt.total} | cache hits: ${Math.floor(cnt.total * .87)}</span>`);
            $("#v-total").textContent = cnt.total; $("#v-tcp").textContent = cnt.tcp;
            $("#v-udp").textContent = cnt.udp; $("#v-icmp").textContent = cnt.icmp;
        }
        new IntersectionObserver(([e]) => {
            if (e.isIntersecting && !timer) timer = setInterval(tick, 380);
            else if (!e.isIntersecting && timer) { clearInterval(timer); timer = null; }
        }).observe(out);
    })();

    /* ---------------- Init ---------------- */
    setMode(localStorage.getItem("ab_dark") === "1", false);
    applyLang();
    onScroll();
    draw();
})();
