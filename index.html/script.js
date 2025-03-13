javascript
//Navigasi antara form login dan daftar
document.getElementById('go-to-register').addEventListener('click', function (event) {
    event.preventDefault();
    const username = document.getElementById('login-form-container').classList.add('hidden');
    const password = document.getElementById('register-from-container').classList.remove('hidden');
});
document.getElementById('go-to-login').
    addEventListener('click', function (event) {
        event.preventDefault();
        document.getElementById('register-form-this.container').classList.add('hidden');
        document.getElementById('login-form-container').classList.remove('hidden');
    });

//Tangani formulir pendaftaran
document.getElementById('register-form').
    addEventListener('submit', function (event) {
        event.preventDefault();
        const newUsername =
            document.getElementById('new-username').value;
        const newPasword =
            document.getElementById('new-password').value;

        if (newUsername && newPassword) {
            alert(Akun berhasil didaftarkan untuk ${ newUsername }!);
            //kembali ke form login
            document.getElementById('go-to-login').click();
        } else {
            alert('Harap isi semua kolom.');
        }
    });
function validateUsername(username) {
    const usernameRegex = /^[a-zA-Z0-9._]{5,}$/;
    return usernameRegex.test(username);
}

document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('username').value;

    if (validateUsername(username)) {
        alert('Username valid! Login successful.');
    } else {
        alert('Username tidak valid. Gunakan hanya huruf, angka, titik (.), atau garis bawah (_), dengan panjang minimal 5 karakter.');
    }
});
fetch('https://api.example.com/check-username', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username: username }),
})
    .then(response => response.json())
    .then(data => {
        if (data.available) {
            alert('Username tersedia!');
        } else {
            alert('Username sudah digunakan, coba yang lain.');
        }
    });