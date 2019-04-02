document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#create-task-form");
  let buttons = document.querySelectorAll('button');

  form.addEventListener('submit', function(e){
    e.preventDefault();
    const description = document.querySelector("#new-task-description");
    const taskList = document.querySelector("#tasks");
    const listItem = document.createElement('li');

    listItem.textContent = description.value + " ";

    const button = document.createElement('button')
    button.id = `task-${taskList.children.length}`
    button.textContent = 'X'

    listItem.append(button);
    taskList.append(listItem);

    createNewEventListener()

    description.value = '';
  });
});

function createNewEventListener() {
  const buttons = document.querySelectorAll('button');
  const newestButton = buttons[buttons.length-1];

  newestButton.addEventListener('click', function(e){
    newestButton.parentElement.remove();
  });
};
