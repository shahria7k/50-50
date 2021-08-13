const panels = document.querySelectorAll('.panel');

panels.forEach(element => {
    element.addEventListener('click', (event) => {
        //e.terget.parentNode.childNodes.forEach(item=>{item.classList.remove('active')})
        removeActive();
        event.target.classList.add('active');
    });
});
function removeActive() {
    panels.forEach(item => {
        item.classList.remove('active');
    });
};

