document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form  = document.querySelector('#create-task-form');
  form.addEventListener('submit', function(e){
  let input = document.querySelector('#new-task-description').value;
    e.preventDefault();
    if(input !== ""){
        let list = document.createElement('li');
        let ul = document.querySelector('#tasks');
            ul.appendChild(list);
        list.innerText = input;


 //create delete function once a list is created
      let removeButton = document.createElement('button');
        removeButton.innerText = "Delete";
        removeButton.style.fontSize = "10px";
        list.appendChild(removeButton);
    
        removeButton.addEventListener('click', function(e){
           //console.log(this.parentElement);
           //console.log(list === this.parentElement)
           list.remove();
        })

// create color menu   
      let colorMenu = document.createElement('select');
      colorMenu.id = "color-menu"
      list.appendChild(colorMenu);
      let options = document.createElement('option');
      options.innerText = "priority";
      colorMenu.appendChild(options);

      let firstOption = document.createElement('option');
      firstOption.value = "high priority"
      firstOption.innerText = "high priority";
      colorMenu.appendChild(firstOption);
    
      let secondOption = document.createElement('option');
      secondOption.value = "medium";
      colorMenu.appendChild(secondOption); 
      secondOption.innerText = "medium";

      let thirdOption = document.createElement('option');
      thirdOption.value = "low";
      colorMenu.appendChild(thirdOption); 
      thirdOption.innerText = "low";
      
      colorMenu.addEventListener('change', function(){
        //console.log(colorMenu.value)
        if(colorMenu.value == "high priority"){
          list.style.color = "Red";
       }else if(colorMenu.value == "medium"){
         list.style.color = "Yellow";
       }else if(colorMenu.value == "low"){
         list.style.color = "Green";
       }
      })
  
  // create due date input    
    let date = document.createElement('input');
    date.placeholder = "Date Due";
    list.appendChild(date); 
    
  // sort by priority 
  //array = Array.from(document.querySelectorAll('#tasks li')); 
   //array.map(function(li){
   //    if(li.style.color == "Red"){
   //     li.className = "1";
   //    }else if(li.style.color == "Yellow"){
   //     li.className = "2";
   //    }else if(li.style.color == "green")
   //    li.className = "3";
   //  })




    }
   
  })

});
 