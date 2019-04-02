document.addEventListener("DOMContentLoaded", () => {
  // get submit value for the form
  let input = document.querySelector("#new-task-description");
  let submit = document.querySelector("#create-task-form").querySelector('input[type="submit"]');

  //if the input value is not empty
  if (input.value !== null){
    if (submit.addEventListener('click', function(){
      event.preventDefault()
      let ul = document.querySelector("#list").querySelector('ul');
      let li = document.createElement('li');
      //below will check and avoid duplicate tasks.
      if (!ul.innerText.includes(input.value)){
        li.innerHTML = `<strong>${input.value}</strong>`; //add some HTML style
        ul.append(li);
        //create delete button, assign text to button
        let deleteButton = document.createElement("button");
        deleteButton.innerText = "x";
        //append button to li element
        li.append(deleteButton);
        //add button event
        deleteButton.addEventListener('click', function () {
          event.preventDefault();
          //remove the first <li> element from ul list.
          //since button only works for each li, so the li is the first element in the ul list.
          ul.removeChild(ul.childNodes[0]);
        });
      }else{
        alert("You have added this task!");
      };
    }));
    
  };
})
