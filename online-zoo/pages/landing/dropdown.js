document.querySelectorAll('.dropdown').forEach(dropdown => {

    const trigger = dropdown.querySelector('.dropdown__trigger');
    const value = dropdown.querySelector('.dropdown__value');
    const options = dropdown.querySelectorAll('.dropdown__menu a');

    trigger.addEventListener('click', (e) => {
        e.stopPropagation();
        document.querySelectorAll('.dropdown').forEach(d => {
            if (d !== dropdown) {
                d.classList.remove('open');
            }
        });

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

});

document.addEventListener('click', () => {
    document.querySelectorAll('.dropdown')
        .forEach(d => d.classList.remove('open'));
});