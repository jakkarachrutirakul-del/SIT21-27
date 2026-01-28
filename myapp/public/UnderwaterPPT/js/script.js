// ไฟล์: script.js

document.addEventListener('DOMContentLoaded', () => {
    
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar'); // ต้องตรงกับ class ใน HTML

    window.addEventListener('scroll', () => {
        // หาตำแหน่งปัจจุบันของการ Scroll
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // ถ้าเลื่อนลง (scrollTop มากกว่าเดิม) และเลื่อนลงมาเกิน 50px แล้ว
        if (scrollTop > lastScrollTop && scrollTop > 50) {
            navbar.classList.add('navbar-hidden'); // ซ่อนเมนู
        } else {
            // ถ้าเลื่อนขึ้น หรืออยู่ที่บนสุด
            navbar.classList.remove('navbar-hidden'); // โชว์เมนู
        }
        
        // อัปเดตตำแหน่งล่าสุด
        // ป้องกันค่าติดลบ (Mobile scroll bounce)
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; 
    });

});
window.addEventListener("load", () => {
    const splash = document.getElementById("splash");

    setTimeout(() => {
        splash.style.opacity = "0";
        splash.style.pointerEvents = "none";
    }, 1300);
});
