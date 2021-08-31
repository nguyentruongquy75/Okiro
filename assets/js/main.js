const changeThemeBtn = document.querySelector('#change-theme');
const changeThemeCheckBox = document.querySelector('#change-theme');
const logo = document.querySelectorAll('.logo');
const dropdown = document.querySelector('.dropdown-btn');
const subnav = document.querySelector('.sub-nav');

changeThemeBtn.onclick = function () {
    if (changeThemeCheckBox.checked) {
        document.body.classList.add('dark');

        for (const item of logo) {
            item.src = './assets/img/logo-dark.svg';
        }
    } else {
        document.body.classList.remove('dark');
        for (const item of logo) {
            item.src = './assets/img/logo.svg';
        }
    }
}
if (dropdown) {
    dropdown.onclick = function () {
        subnav.classList.toggle('display');
    }
    window.onclick = function (e) {
        if (!subnav.contains(e.target) && !dropdown.contains(e.target)) {
            if (subnav.classList.contains('display')) {
                subnav.classList.remove('display');
            }
        }
    }
}

