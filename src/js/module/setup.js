import command from "./command.js";

export function setupKekenikSelect(kekenik) {
    const selectedWrapper = document.createElement('div');
    const caretIcon = document.createElement('span');
    const searchBox = document.createElement('input');

    const optionNav = document.createElement('ul');

    selectedWrapper.classList.add('kek_selected-wrapper');
    kekenik.kekContainer.tabIndex = 1;
    caretIcon.classList.add('kek_select-caret');
    searchBox.classList.add('kek_select-search');
    searchBox.placeholder = kekenik.settings.searchPlaceholder;
    optionNav.classList.add('kek_select-nav');

    kekenik.kekContainer.classList.add('kek_select-container');
    kekenik.kekContainer.tabIndex = 0;

    kekenik.kekLabel.classList.add('kek_selected-item');
    kekenik.kekLabel.innerText = kekenik.selectedOption.label
    selectedWrapper.append(kekenik.kekLabel);
    selectedWrapper.append(caretIcon);

    kekenik.kekContainer.append(selectedWrapper);

    kekenik.kekItems.classList.add('kek_select-items');
    if (kekenik.settings.searchBox) kekenik.kekItems.append(searchBox);

    kekenik.options.forEach(renderCustomOptionElements.bind(this, kekenik, optionNav));

    kekenik.kekItems.append(optionNav);

    kekenik.kekContainer.append(kekenik.kekItems);

    selectedWrapper.addEventListener('click',  () => {
        kekenik.kekItems.classList.toggle('show');
        selectedWrapper.classList.add('focus');
        kekenik.kekItems.scrollTo(0, 0);
    });

    kekenik.kekContainer.addEventListener('keyup', e => {
        console.log(e.code)
        switch (e.code) {
            case 'Space':
                kekenik.kekItems.classList.toggle('show');
                kekenik.kekItems.scrollTo(0, 0);
                break;
            case 'Escape':
                kekenik.kekItems.classList.remove('show');
                break;
            case "ArrowUp":
                const prevOption = kekenik.options[kekenik.selectedOptionIndex - 1];
                if (prevOption) {
                    kekenik.selectValue(prevOption.value)
                }
                break;
            case "ArrowDown":
                const nextOption = kekenik.options[kekenik.selectedOptionIndex + 1];
                if (nextOption) {
                    kekenik.selectValue(nextOption.value)
                }
                break;
        }
    })

    document.addEventListener('click', e => {
        if (!kekenik.kekContainer.contains(e.target)) {
            kekenik.kekItems.classList.remove('show');
            selectedWrapper.classList.remove('focus');
        }
    });

    searchBox.addEventListener('keyup', e => {

        let newOptions = [];
        if (kekenik.settings.searchIn === 'value'){
            newOptions = kekenik.options.filter(option => {
                return option.value.toLowerCase().includes(searchBox.value.toLowerCase());
            });
        }else {
            newOptions = kekenik.options.filter(option => {
                return option.label.toLowerCase().includes(searchBox.value.toLowerCase());
            });
        }

        optionNav.innerHTML = '';

        if (newOptions.length <= 0){
            const nullElement = document.createElement('span');
            nullElement.classList.add('kek_select-null');
            nullElement.innerText = kekenik.settings.notFound;
            optionNav.append(nullElement);
        }else {
            newOptions.forEach(renderCustomOptionElements.bind(this, kekenik, optionNav))
        }

    });

}






function renderCustomOptionElements (kekenik, optionNav, option) {
    const optionElement = document.createElement('li');
    optionElement.classList.add('kek_select-item');
    optionElement.classList.toggle('selected', option.selected);
    optionElement.innerText = option.label;
    optionElement.dataset.value = option.value;
    if (option.selected) {
        if (kekenik.settings.checkmark) {
            optionElement.insertAdjacentHTML('beforeend', command.checkmarkSvgIcon);
        }
    }

    optionElement.addEventListener('click', () => {
        kekenik.selectValue(option.value);
        kekenik.kekItems.classList.remove('show');
    });

    optionNav.append(optionElement);

}