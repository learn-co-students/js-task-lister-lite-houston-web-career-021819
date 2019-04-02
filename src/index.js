document.addEventListener("DOMContentLoaded", () => {
  let inputbox = document.querySelector("#new-task-description");
  let tasklist = document.querySelector("#tasks");
  let submitButton = document.forms[0].querySelectorAll("input")[1];

  submitButton.addEventListener("click", function(e) {
    e.preventDefault();
    //new task is added
    let newTask = document.createElement("li");
    newTask.innerText = inputbox.value;
    tasklist.appendChild(newTask);
    inputbox.value = ("");

    //X button is created
    let xbutton = document.createElement("BUTTON");
    xbutton.innerHTML = "x";
    newTask.append(xbutton);
    
    xbutton.addEventListener("click", function(e){
      newTask.remove();
    })
  })
});
