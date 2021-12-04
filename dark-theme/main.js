'use strict'
const checkbox = document.querySelector('.checkbox');
checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark')
})
