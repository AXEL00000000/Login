const sidebar = document.getElementById("sidebar");
const menuBtn = document.getElementById("menu-btn");
const menuDrops = document.querySelectorAll(".menu-item-dropdown");
menuDrops.forEach(item => item.addEventListener("click", () => {
    const sub = item.querySelector(".sub-menu");
    const open = item.classList.toggle("sub-menu-toggle");
    if (open) { sub.style.height = `${sub.scrollHeight + 6}px`; sub.style.padding = "0.5rem"; }
    else { sub.style.height = "0"; sub.style.padding = "0"; }
    menuDrops.forEach(o => {
        if (o !== item) {
            const s = o.querySelector(".sub-menu"); o.classList.remove("sub-menu-toggle"); s.style.height = "0"; s.style.padding = "0";
        }
    });
}));
menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle('minimize');
    menuDrops.forEach(o => {
        const s = o.querySelector(".sub-menu"); o.classList.remove("sub-menu-toggle"); s.style.height = "0"; s.style.padding = "0";
    });
});

// Login
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('loginBtn').addEventListener('click', () => {
        const user = document.getElementById('usuario').value.trim();
        const pass = document.getElementById('contraseña').value;
        if (user === 'AXEL' && pass === '23DEMAYO') window.location.href = 'https://axel00000000.github.io/Portafolio';
        else alert('Usuario o contraseña incorrectos');
    });
});
