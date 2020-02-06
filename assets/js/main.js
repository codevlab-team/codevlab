const popupWrapper = document.querySelector('#popupWrapper');

function openPopup() {
    popupWrapper.classList.add('visible')
    popupWrapper.classList.remove('hidden')
}

function closePopup() {
    popupWrapper.classList.add('hidden')
    popupWrapper.classList.remove('visible')
}