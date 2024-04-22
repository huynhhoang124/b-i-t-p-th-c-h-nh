document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Kiểm tra tên đăng nhập và mật khẩu (trong ví dụ này, chỉ kiểm tra một cách cứng rắn)
    if (username === '1' && password === '123456') {
        // Nếu đăng nhập thành công, chuyển hướng sang trang khác
        window.location.href = 'http://127.0.0.1:5500/bai1.html';
    } else {
        alert('Tên đăng nhập hoặc mật khẩu không đúng.');
    }
});
