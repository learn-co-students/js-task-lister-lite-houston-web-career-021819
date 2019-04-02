document.addEventListener("DOMContentLoaded", () => {

// grab the elements
const entireTaskForm = document.getElementById("create-task-form")
const descriptionBox = document.getElementById("new-task-description")
const taskList = document.getElementById("tasks")

// set listener
entireTaskForm.addEventListener("submit", function(e){
    e.preventDefault()
    const newTask = document.createElement("li")
    newTask.append(descriptionBox.value)
    taskList.appendChild(newTask)
})



// function that invokes w/ listener
// const createTask

// const tasks = []

// add listener to the entire object
// document.getElementById("create-task-form").addEventListener("submit", function(e)){
// be more specific
// document.getElementById("new-task-description")



});
