const accordionItems = document.querySelectorAll('.accordion-item');
function resetAccordion() {
    accordionItems.forEach((item, index) => {
        if (index === 0) {
            item.style.flex = '3';
            item.classList.add('expanded');
        } else {
            item.style.flex = '1';
            item.classList.remove('expanded');
        }
    });
}
resetAccordion();
accordionItems.forEach((item) => {
    item.addEventListener('mouseenter', () => {
        accordionItems.forEach((i) => {
            i.style.flex = '1';
            i.classList.remove('expanded');
        });
        item.style.flex = '3';
        item.classList.add('expanded');
    });

    item.addEventListener('mouseleave', () => {
        resetAccordion();
    });
});