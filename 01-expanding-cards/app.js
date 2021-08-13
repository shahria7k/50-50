const panels = document.querySelectorAll('.panel');

panels.forEach(element => {
    element.addEventListener('click', (event) => {
        /**
         * !  e.terget.parentNode.childNodes.forEach(item=>{item.classList.remove('active')})
         * ? Why it says forEach() is not a function?
         * ? Should I run for loop instead?
         */
        removeActive();
        event.target.classList.add('active');
    });
});
function removeActive() {
    panels.forEach(item => {
        item.classList.remove('active');
    });
};

