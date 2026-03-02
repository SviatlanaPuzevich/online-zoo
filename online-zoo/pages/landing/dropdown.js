const dropdown = document.querySelector('.dropdown');
const trigger = dropdown.querySelector('.dropdown__trigger');
const value = dropdown.querySelector('.dropdown__value');
const options = dropdown.querySelectorAll('.dropdown__menu a');

trigger.addEventListener('click', () => {
    dropdown.classList.toggle('open');
});

options.forEach(option => {
    option.addEventListener('click', (e) => {
        e.preventDefault();
        value.textContent = option.textContent;
        options.forEach(o => o.classList.remove('selected'));
        option.classList.add('selected');
        dropdown.classList.remove('open');
    });
});

document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target)) {
        dropdown.classList.remove('open');
    }
});