// アコーディオン

export function initializeAccordion() {

    const accordion = document.querySelectorAll('.js-accordion');
    accordion.forEach((item) => {
        const button = item.querySelector('.js-accordion-button')
        button.addEventListener('click', () => {
            item.classList.toggle('accordion-active')
        })
    })

}