const input = document.querySelector('#favChap');
const button = document.querySelector('button');
const list = document.querySelector('___________');
const li = document.createElement('li');
const deleteButton = document.createElement ('button');
li.textContent = input.value;
deleteButton.textContent = '❌';
li.append(deleteButton);
list.append(li);