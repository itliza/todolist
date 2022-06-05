const btn = document.querySelector('.btn');
const inputField = document.querySelector('.inputField');
const listContainer = document.querySelector('.listContainer');
const date = document.querySelector('.date');
const day = new Date().getDate();
const month = new Date().getUTCMonth() + 1;
const year = new Date().getFullYear();

date.innerHTML = `${day} . ${month} . ${year}`;

btn.addEventListener('click', ()=>{
    const itemContainer = document.createElement('div');
    const checkbox = document.createElement('input');
    const label = document.createElement('label');

    checkbox.type = 'checkbox';
    checkbox.name = "name";
    checkbox.value = "value";

    checkbox.classList.add('checkboxStyle');

    label.appendChild(document.createTextNode(inputField.value));

    if (inputField.value.length === 0) {
        alert('Please, add some plan')
        return false;
    }

    itemContainer.appendChild(checkbox);
    itemContainer.appendChild(label);
    itemContainer.classList.add('itemContainer');

    listContainer.appendChild(itemContainer);

    inputField.value = '';

    checkbox.addEventListener('click', ()=> {
        label.classList.toggle('itemDone');

    })

    itemContainer.addEventListener('mouseenter', ()=>{
        const trashContainer = document.createElement('div');
       
        trashContainer.classList.add('trash');
        
        itemContainer.appendChild(trashContainer);

        itemContainer.addEventListener('mouseleave', ()=>{
            trashContainer.classList.add('trashInvisible');
        })

        trashContainer.addEventListener('click', ()=>{
            trashContainer.classList.add('trashInvisible');
            listContainer.removeChild(itemContainer);
        })
    })
})