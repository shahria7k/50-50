const panels = document.querySelectorAll('.panel');

panels.forEach(element => {
    element.addEventListener('click', (e) => {
        removeActive();
        e.target.classList.add('active');
    });
});
function removeActive() {
    panels.forEach(item => {
        item.classList.remove('active');
    });
};

