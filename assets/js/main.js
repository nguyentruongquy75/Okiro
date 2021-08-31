const changeThemeBtn = document.querySelector('#change-theme');
const changeThemeCheckBox = document.querySelector('#change-theme');
const logo = document.querySelectorAll('.logo');

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