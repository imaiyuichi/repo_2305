// タブメニュー

export function initializeTab () {

    const tab = document.querySelectorAll('.js-tab');
    const tabContent = document.querySelectorAll('.js-content');
    tab.forEach(clicked => {
        clicked.addEventListener('click',() => {
            tab.forEach(item => {
                item.classList.remove('tab__active')
            });
            clicked.classList.add('tab__active')
            tabContent.forEach(item => {
                item.classList.remove('tab__active')
            })
            document.getElementById(clicked.dataset.id).classList.add('tab__active')
        })
    })

}

