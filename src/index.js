document.addEventListener("DOMContentLoaded", () => {
  // your code here
  box = document.getElementById("new-task-description");
  button = document.getElementById("input-button");
  dateBox = document.getElementById("due-date");
  tasksHigh = document.getElementById("tasks-high");
  tasksMed = document.getElementById("tasks-medium");
  tasksLow = document.getElementById("tasks-low");
  priorityDropdown = document.getElementById("priority-dropdown");
  button.addEventListener("click", function(e) {
    e.preventDefault();
    let newListItem = document.createElement("li");
    let priority = priorityDropdown.value;
    newListItem.innerText = box.value;
    let dueDate = document.createElement("p");
    if (dateBox.value != "") {
      dueDate.innerText = `Due Date: ${dateBox.value}`;
    }
    let newDeleteButton = document.createElement("button");
    newDeleteButton.innerText = "remove this task";
    newDeleteButton.addEventListener("click", function(e) {
      e.preventDefault();
      newListItem.remove();
      newDeleteButton.remove();
    });

    if (priority === "high") {
      newListItem.className = "high";
      newDeleteButton.className = "high";
      tasksHigh.append(newListItem);
      tasksHigh.append(newDeleteButton);
      tasksHigh.append(dueDate);
    } else if (priority === "medium") {
      newListItem.className = "medium";
      newDeleteButton.className = "medium";
      tasksMed.append(newListItem);
      tasksMed.append(newDeleteButton);
      tasksMed.append(dueDate);
    } else if (priority === "low") {
      newListItem.className = "low";
      newDeleteButton.className = "low";
      tasksLow.append(newListItem);
      tasksLow.append(newDeleteButton);
      tasksLow.append(dueDate);
    }

    box.value = "";
    dateBox.value = "";

    if (priority === "high") {
      newListItem.style.color = "#9b2b43";
    } else if (priority === "medium") {
      newListItem.style.color = "#bfbc31";
    } else if (priority === "low") {
      newListItem.style.color = "#70b260";
    }
  });
});
