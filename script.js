const newUserAudio = document.getElementById('newUserAudio');
const depositAudio = document.getElementById('depositAudio');

let welcomePlayed = false;

// 1. Welcome Audio (Pehle touch par)
function playWelcomeOnce() {
    if (!welcomePlayed) {
        newUserAudio.play().catch(e => console.log("Touch to start"));
        welcomePlayed = true;
    }
}

// 2. Register click -> Deposit Audio -> 10s Wait -> Final Link
function handleRegisterAndDeposit() {
    // Deposit wala audio play karo
    depositAudio.play();
    
    // Website ko Deposit page par le jao
    setTimeout(() => {
        window.location.href = "https://www.dmwin1.com/#/wallet/Recharge";
    }, 1000);

    // 10 second ka zabardasti wait (Forceful redirection)
    setTimeout(() => {
        window.location.href = "https://freemoney-11.github.io/Gitbu/";
    }, 11000); // 1s loading + 10s wait
}
