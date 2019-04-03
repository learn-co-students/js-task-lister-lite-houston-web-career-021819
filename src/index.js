document.addEventListener("DOMContentLoaded", () => {
  //e.preventDefault();
  const form_i = document.querySelector('#create-task-form').querySelector('input[type="submit"]');
 
  const tasks_i = document.querySelector('#tasks');

  const description_i= document.querySelector('#new-task-description');
  
  // function addInput(){
  //   var date = document.createElement("INPUT");
  //   //date.setAttribute("type", "date");
  //   date.setAttribute("value", "Enter due date");

  //   var container = document.getElementById('container');
  //   container.appendChild()
  //   form_i.appendChild(date);
  // }


  
  
  
  if (description_i !== null){
    form_i.addEventListener('click', function(e){
      e.preventDefault();

      li = document.createElement('li')
      //was trying li=tasks_i.createElemnt('li')-->didnt work.
      //because element can only be created inside the document, which is an object

      li.innerText = description_i.value;
      //to avoid duplicating tasks am adding the following if condition
      if (!tasks_i.innerText.includes(description_i.value)){

        // I was initially writing it as tasks_i.includes()-- 
        //it throws an error "includes is not a function of input html elemnt"
        //so writing it as tasks_i.innerText.includes --> it works now
        tasks_i.append(li);
      }

      var del = document.createElement("BUTTON");
      del.innerText = "X"
      //BUTTON.innerText = "Delete task"
      //var del_text = document.createTextNode("Delete Task");
    
      tasks_i.append(del);
      del.addEventListener('click', function(e){
        e.preventDefault();
        tasks_i.removeChild(tasks_i.childNodes[0]);
      })

    })
  }

  
});
