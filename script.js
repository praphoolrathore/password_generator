function generatePassword() {
    const length = document.getElementById('length').value;
    const includeUppercase = document.getElementById('uppercase').checked;
    const includeLowercase = document.getElementById('lowercase').checked;
    const includeNumbers = document.getElementById('numbers').checked;
    const includeSymbols = document.getElementById('symbols').checked;

    let charset = '';
    if (includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeLowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (includeNumbers) charset += '0123456789';
    if (includeSymbols) charset += '!@#$%^&*()_+~';

    if (charset === '') {
        document.getElementById('password').value = "Please select at least one option!";
        document.getElementById('strength-indicator').textContent = "Strength: None";
        return;
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    document.getElementById('password').value = password;
    evaluateStrength(password);
}

function evaluateStrength(password) {
    const strengthIndicator = document.getElementById('strength-indicator');
    let strength = 'Weak';
    if (password.length >= 12 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /\d/.test(password) && /[!@#$%^&*()_+~]/.test(password)) {
        strength = 'Strong';
    } else if (password.length >= 8 && (/[A-Z]/.test(password) || /[a-z]/.test(password)) && (/\d/.test(password) || /[!@#$%^&*()_+~]/.test(password))) {
        strength = 'Medium';
    }
    strengthIndicator.textContent = `Strength: ${strength}`;
}
