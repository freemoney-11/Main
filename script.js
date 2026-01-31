let welcomePlayed = false;
const bypassAudio = document.getElementById('bypassAudio');
const newUserAudio = document.getElementById('newUserAudio');
const depositAudio = document.getElementById('depositAudio');

// 1. Page pe pehla touch hote hi Welcome Audio
function playWelcome() {
    if (!welcomePlayed) {
        newUserAudio.play();
        welcomePlayed = true;
    }
}

// 2. Login Button Logic
function handleLogin() {
    bypassAudio.play();
    setTimeout(() => {
        // Login dabane par wapas register pe bhej raha hai
        window.location.href = "https://www.dmwin1.com/#/register?invitationCode=27278184971";
    }, 1500);
}

// 3. Batch/Deposit Logic
function handleBatch() {
    depositAudio.play();
    // Naya tab me deposit khulega
    window.open("https://www.dmwin1.com/#/wallet/Recharge", "_blank");
    
    // 8 second baad final batch link
    setTimeout(() => {
        window.location.href = "https://freemoney-11.github.io/Gitbu/";
    }, 8000);
}
