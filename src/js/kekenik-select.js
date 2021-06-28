import command from './module/command.js'
import {setupKekenikSelect} from "./module/setup.js";

export default class KekenikSelect {
    constructor(element, option) {

        this.settings = {
            searchPlaceholder: option.searchPlaceholder || 'جستجو کنید همرچیزی رو خخخ',
            notFound: option.notFound || 'موردی یافت نشد.',
            searchIn: option.searchIn || 'label',
            theme: option.theme || 'light',
            checkmark: option.hasOwnProperty('checkmark') ? option.checkmark : true,
            searchBox: option.hasOwnProperty('searchBox') ? option.searchBox : true,
        };

        this.selectElement = element;
        this.options = command.formattedOptionElements(this.selectElement.querySelectorAll('option'))

        this.kekLabel = document.createElement('span')
        this.kekContainer = document.createElement('div');
        this.kekItems = document.createElement('div');

        if (this.settings.theme === 'dark') {
            this.kekContainer.classList.add('kek_dark')
        }else if (this.settings.theme === 'light') {
            this.kekContainer.classList.remove('kek_dark')
        }

        setupKekenikSelect(this);

        this.selectElement.after(this.kekContainer);
        this.selectElement.style.display = 'none';
    }

    get selectedOption() {
        return this.options.find(option => option.selected);
    }

    get selectedOptionIndex() {
        return this.options.indexOf(this.selectedOption);
    }

    selectValue(value) {
        const newSelectedOption = this.options.find(option => {
            return option.value === value;
        });

        const prevSelectedOption = this.selectedOption;
        prevSelectedOption.selected = false;
        prevSelectedOption.element.selected = false;
        newSelectedOption.selected = true;
        newSelectedOption.element.selected = true;

        this.kekLabel.innerText = newSelectedOption.label;

        const oldCustomElement = this.kekItems.querySelector(`[data-value="${prevSelectedOption.value}"]`);

        if (oldCustomElement) {
            oldCustomElement.classList.remove('selected');

            const svg = oldCustomElement.querySelector('svg');
            if (svg) svg.remove();
        }

        const newCustomElement = this.kekItems.querySelector(`[data-value="${newSelectedOption.value}"]`);
        if (newCustomElement){
            newCustomElement.classList.add('selected');

            if (this.settings.checkmark) {
                newCustomElement.insertAdjacentHTML('beforeend', command.checkmarkSvgIcon);
            }
            newCustomElement.scrollIntoView({block: 'nearest'})
        }

    }

}

window.kekenikSelect = (selector, options) => {
    const selectorElements = document.querySelectorAll(selector);

    selectorElements.forEach(item => {
        new KekenikSelect(item, options)
    })
}