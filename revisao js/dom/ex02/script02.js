const list = document.getElementById('lista');
const input = document.getElementById('item-input');
const addbtn = document.getElementById('adicionar-btn');

addbtn.addEventListener('click', () => {
  const inputText = input.value.trim();
    if (inputText !== '') {
        const listItem = document.createElement('li');
        listItem.textContent = inputText;
        list.appendChild(listItem);
        input.value = '';
    }
});