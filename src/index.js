document.addEventListener("DOMContentLoaded", () => {        
  document.addEventListener('submit', function(e){
    e.preventDefault()
    const li = document.createElement('LI')
    const input = document.querySelector('#new-task-description')
    li.innerText = input.value
    document.querySelector('#tasks').appendChild(li)      
    })
});