function focused() {
    const fields = Array.from(document.getElementsByTagName('input'));

    for (const element of fields) {
        element.addEventListener('focus', onFocus);
        element.addEventListener('blur', onBlur);
    }

    function onFocus(e) {
        const divParentElement = e.currentTarget.parentNode;
        divParentElement.classList.add('focused');
    }

    function onBlur(e) {
        const divParentElement = e.currentTarget.parentNode;
        divParentElement.classList.remove('focused');
    }
}