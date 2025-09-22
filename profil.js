const allowedNIKs = [
    '1234567890', '0987654321', '240103191', '240103188', '240103249',
    '12345678', '4445556667', '8889990001', '2223334445', '9998887776', '240103189'
  ];
  
  document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const nama = document.getElementById('nama').value.trim();
    const email = document.getElementById('email').value.trim();
    const nik = document.getElementById('nik').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorBox = document.getElementById('error');
  
    if (!allowedNIKs.includes(nik)) {
      errorBox.textContent = 'NIK tidak terdaftar.';
      errorBox.style.display = 'block';
      return;
    }
  
    if (password !== confirmPassword) {
      errorBox.textContent = 'Password tidak cocok.';
      errorBox.style.display = 'block';
      return;
    }
  
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.find(u => u.nik === nik)) {
      errorBox.textContent = 'NIK sudah digunakan.';
      errorBox.style.display = 'block';
      return;
    }
  
    users.push({ nama, email, nik, password });
    localStorage.setItem('users', JSON.stringify(users));
    alert('Registrasi berhasil!');
    window.location.href = 'login.html';
  });