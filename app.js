document.addEventListener('DOMContentLoaded', () => {
    const backgroundSelect = document.getElementById('background-select');
    const changeBackgroundButton = document.getElementById('change-background');

    const updateBackground = () => {
        const value = backgroundSelect.value;
        if (value === 'light-blue') {
            document.body.style.backgroundImage = "url('lightblue.jpg')";
        } else if (value === 'light-gold') {
            document.body.style.backgroundImage = "url('lightgold.jpg')";
        } else {
            document.body.style.backgroundImage = "none";
            document.body.style.backgroundColor = 'white';
        }
    };

    backgroundSelect.addEventListener('change', updateBackground);
    changeBackgroundButton.addEventListener('click', updateBackground);
});

// Register the service worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
        .then(() => console.log('Service Worker Registered'))
        .catch(err => console.error('Service Worker Registration Failed:', err));
}
