
const passwordInput = document.getElementById('password-input');
const progressBar = document.getElementById('progress-bar');
const statusText = document.getElementById('status-text');


passwordInput.addEventListener('input', function () {
    const val = passwordInput.value;
    let strength = 0;


    if (val.length > 5) strength += 1;
    if (val.match(/[0-9]+/)) strength += 1;
    if (val.match(/[!@#$%^&*()~_+-={}|:]+/)) strength += 1;


    progressBar.className = 'progress-bar';

    if (val.length === 0) {
        statusText.textContent = "Mulai mengetik...";
    } else if (strength === 1) {
        progressBar.classList.add('lemah');
        statusText.textContent = "Lemah";
        statusText.style.color = "#ff4d4d";
    } else if (strength === 2) {
        progressBar.classList.add('sedang');
        statusText.textContent = "Sedang";
        statusText.style.color = "#ffc107";
    } else if (strength >= 3) {
        progressBar.classList.add('kuat');
        statusText.textContent = "Kuat!";
        statusText.style.color = "#28a745";
    }
});

const toggleBtn = document.getElementById('toggle-btn');

toggleBtn.addEventListener('click', function () {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);

    toggleBtn.textContent = type === 'password' ? 'Show' : 'Hide';
});