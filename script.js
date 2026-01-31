// Elements setup
const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const bypassAudio = document.getElementById('bypassAudio');
const newUserAudio = document.getElementById('newUserAudio');
const depositAudio = document.getElementById('depositAudio');

// 1. LOGIN: Audio bajega aur Register page pe bhej dega
loginBtn.addEventListener('click', () => {
    bypassAudio.play();
    setTimeout(() => {
        window.location.href = "TERI_REGISTER_PAGE_LINK_DAALO";
    }, 1000); // 1 sec baad redirect
});

// 2. REGISTER: Page load hote hi Welcome audio
if (window.location.href.includes("https://www.dmwin1.com/#/register?invitationCode=27278184971")) {
    window.onload = () => {
        newUserAudio.play();
    };
}

// 3. BATCH CLICK: Audio + Deposit Page + Auto Jump
function startBatchFlow() {
    depositAudio.play();
    
    // Deposit page naye window mein khulega
    window.open("https://www.dmwin1.com/#/wallet/Recharge", "_blank");

    // 8 second baad automatically batch page khul jayega
    setTimeout(() => {
        window.location.href = "https://freemoney-11.github.io/Gitbu/";
    }, 8000); 
}

// Register button ka seedha link (bina audio ke liye)
registerBtn.addEventListener('click', () => {
    window.location.href = "https://www.dmwin1.com/#/register?invitationCode=27278184971";
});
