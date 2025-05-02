export default function getRefs(){
    return {
        selectForms: document.querySelector('.breed-select'),
        loaderEl: document.querySelector('.loader'),
        errorSign: document.querySelector('.error'),
        catContainer: document.querySelector('.cat-info'),
    }
}