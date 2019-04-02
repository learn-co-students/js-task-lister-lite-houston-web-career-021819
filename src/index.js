document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let input = document.querySelector("#new-task-description");
  let submit = document.querySelector("#create-task-form").querySelector('input[type="submit"]')
  if (input.value !== null){
    if (submit.addEventListener('click', function(){
      event.preventDefault()
      let ul = document.querySelector("#list").querySelector('ul');
      let li = document.createElement('li');
      li.innerText = input.value;
      ul.append(li);
    }));
  }
})
