// ==========================================
// 🔥 ROASIFY SMART ADS MANAGER (WATERFALL) 🔥
// ==========================================

function initAllAds(isPremium) {
    if (isPremium === "true") {
        console.log("🌟 VIP User: Ads Disabled. Enjoy Premium!");
        return; 
    }

    console.log("💰 Free User: Smart Ads Loading...");

    // 1. POPUNDER (Adsterra) - Background mein khulega
    loadScript("https://powderencouraged.com/fd/46/5e/fd465eacc9049ad8b3e1819bb7b1c0ac.js");

    // 2. SOCIAL BAR (Adsterra) - Screen ke neeche
    loadScript("https://powderencouraged.com/09/61/b5/0961b550aa00a4b6c5823c89a156caf5.js");

    // 3. EZMOB IN-PAGE PUSH
    window.adk_pdisp = { 'h': 'xml.qualiclicks.com', 'f': 1148016, 'a': 'pNG9', 'ps': [1, 5], 'cin': 4, 's': '', 'q': [], 't': 24 };
    loadScript("//static.qualiclicks.com/tabu/display.js");
}

// 🔥 IN-FEED ADS WITH FALLBACK (Ezmob -> Adsterra) 🔥
function loadInFeedAdWithFallback(containerId) {
    let container = document.getElementById(containerId);
    if (!container) return;

    // Step 1: Ezmob Banner/Video lagane ki koshish (Aapka Ezmob code yahan aayega)
    // Abhi ke liye hum yahan ek loading text daal rahe hain
    container.innerHTML = `<div class="text-xs text-gray-500 py-2"><i class="fa-solid fa-spinner fa-spin"></i> Loading High-Paying Video Ad...</div>`;
    
    // Step 2: FALLBACK SYSTEM (7 seconds wait karega)
    setTimeout(() => {
        // Agar 7 second baad bhi ad load nahi hua (height choti hai), toh Adsterra laga do
        if (container.clientHeight < 60 || container.innerHTML.includes("Loading")) {
            console.log(`Ezmob failed in ${containerId}, switching to Adsterra Fallback!`);
            container.innerHTML = ""; // Purana kachra saaf karein
            
            // Adsterra ka 300x250 Banner laga do taaki impression waste na ho
            let conf = document.createElement('script');
            conf.innerHTML = `atOptions = { 'key' : '2a5d40fcc1c73802296077dcb8af960f', 'format' : 'iframe', 'height' : 250, 'width' : 300, 'params' : {} };`;
            container.appendChild(conf);
            
            let script = document.createElement('script');
            script.src = `https://powderencouraged.com/2a5d40fcc1c73802296077dcb8af960f/invoke.js`;
            container.appendChild(script);
        }
    }, 7000); // 7000 milliseconds = 7 seconds
}

function loadScript(src) {
    let script = document.createElement('script');
    script.src = src;
    script.async = true;
    document.body.appendChild(script);
}

// Smartlink Trigger (Jab post par click ho)
function openSmartLinkAd() {
    window.open("https://powderencouraged.com/m7yj4ni4?key=a8c8428108a596b78c9be2f7e9427284", "_blank");
}