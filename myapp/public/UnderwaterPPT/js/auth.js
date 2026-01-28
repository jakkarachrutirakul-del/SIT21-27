// ไฟล์: js/auth.js

// ฟังก์ชันลงทะเบียน (จำลอง)
function register(email, password) {
    // ตรวจสอบว่ามีผู้ใช้นี้หรือยัง
    if(localStorage.getItem(email)) {
        alert("อีเมลนี้ถูกใช้งานแล้ว!");
        return false;
    }
    
    // บันทึกข้อมูลลงเครื่อง (ในงานจริงห้ามเก็บรหัสผ่านตรงๆ แบบนี้ ต้องเข้ารหัสก่อน)
    const user = {
        email: email,
        password: password, // จริงๆ ต้อง Hash ก่อน
        name: "User " + Math.floor(Math.random() * 1000)
    };
    
    // แปลง Object เป็น String แล้วเก็บ
    localStorage.setItem(email, JSON.stringify(user));
    alert("ลงทะเบียนสำเร็จ!");
    return true;
}

// ฟังก์ชันเข้าสู่ระบบ
function login(email, password) {
    const storedUser = localStorage.getItem(email);
    
    if(!storedUser) {
        alert("ไม่พบผู้ใช้งานนี้");
        return false;
    }
    
    const user = JSON.parse(storedUser);
    
    if(user.password === password) {
        alert("เข้าสู่ระบบสำเร็จ! ยินดีต้อนรับ " + user.name);
        
        // บันทึกสถานะว่า Login แล้ว
        sessionStorage.setItem('currentUser', email);
        
        // ย้ายไปหน้าแรก
        window.location.href = 'index.html';
        return true;
    } else {
        alert("รหัสผ่านไม่ถูกต้อง");
        return false;
    }
}

// ฟังก์ชันตรวจสอบสถานะ Login (เอาไว้ใช้หน้า index.html)
function checkAuth() {
    const currentUser = sessionStorage.getItem('currentUser');
    if(currentUser) {
        console.log("User is logged in: " + currentUser);
        // ตรงนี้เขียนโค้ดเปลี่ยนปุ่ม Login เป็น Logout ได้
    }
}
// ฟังก์ชันเข้าสู่ระบบ
        function handleLogin(event) {
            event.preventDefault(); // ป้องกันไม่ให้เว็บรีโหลด

            const email = document.getElementById('emailInput').value;
            const password = document.getElementById('passwordInput').value;

            // 1. ลองดึงข้อมูลจาก LocalStorage (ที่สมัครไว้)
            const storedUser = localStorage.getItem(email);

            if (storedUser) {
                // ถ้ามีข้อมูล user นี้ในระบบ
                const userData = JSON.parse(storedUser);

                // 2. เช็ครหัสผ่าน
                if (password === userData.password) {
                    alert("✅ ยินดีต้อนรับกลับคุณ " + userData.name);
                    
                    // บันทึกสถานะว่า Login อยู่ (เผื่อเอาไปใช้หน้าอื่น)
                    localStorage.setItem('currentUser', JSON.stringify(userData));

                    // 3. สั่งย้ายหน้าไป index.html
                    window.location.href = 'index.html';
                } else {
                    alert("❌ รหัสผ่านไม่ถูกต้อง");
                }
            } else {
                // กรณีไม่พบ user (หรืออยากให้กดแล้วไปเลยสำหรับทดสอบ)
                
                // แบบที่ 1: แจ้งเตือนจริงๆ (แนะนำ)
                alert("❌ ไม่พบชื่อผู้ใช้งานนี้ กรุณาสมัครสมาชิกก่อน");

                // แบบที่ 2: (ทางลัด) ถ้าอยากให้กดแล้วไปหน้า index เลยโดยไม่สนรหัสผ่าน ให้ลบ alert ข้างบนแล้วใส่บรรทัดนี้แทน:
                // window.location.href = 'index.html'; 
            }
        }
