// toggle hidden menu
const toggleMenu = (toggleId, navListId) => {
    const toggle = document.getElementById(toggleId);
    const navList = document.getElementById(navListId);
    const toggleIcon = toggle.getElementsByTagName('i')[0];

    if (toggle && navList) {
        // add : 추가, remove : 제거, toggle : 추가 / 제거
        toggle.addEventListener('click', () => {
        // toggle menu
        navList.classList.toggle('show-menu');
        // change toggle icon : bx-menu <-> bx-x-circle
        toggleIcon.classList.toggle("bx-menu");
        toggleIcon.classList.toggle("bx-x-circle");
    });
    }
}

toggleMenu('nav-toggle', 'nav-list');