const list = document.getElementById('lista');
const input = document.getElementById('item-input');
const addbtn = document.getElementById('adicionar-btn');

addbtn.addEventListener('click', () => {
  const itemText = input.value.trim();
    if (itemText !== '') {
        const listItem = document.createElement('li');
        listItem.textContent = itemText;
        list.appendChild(listItem);
        input.value = '';
    }
});