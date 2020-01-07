export default function errorMessage(parentElement, message) {
    const errorDiv = document.createElement('div')
    errorDiv.style.cssText = 'color: red;'
    errorDiv.innerHTML = message
    parentElement.insertAdjacentElement('beforebegin', errorDiv)
}