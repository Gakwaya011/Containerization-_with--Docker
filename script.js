document.addEventListener("DOMContentLoaded", function() {
    const inputBox = document.getElementById("input-package");
    const addButton = document.getElementById("add-button");
    const recordContainer = document.getElementById("record-container");

    addButton.addEventListener("click", addTask);
    recordContainer.addEventListener("click", toggleTaskDone);

    function addTask() {
        const taskText = inputBox.value.trim();
        if (taskText === '') {
            alert("You must write something!");
            return;
        }
        
        const li = document.createElement("li");
        li.textContent = taskText;

        const deleteButton = document.createElement("span");
        deleteButton.textContent = "\u00d7";
        deleteButton.classList.add("delete");
        li.appendChild(deleteButton);

        recordContainer.appendChild(li);
        inputBox.value = ""; // Clear input field
        saveData();
    }

    function toggleTaskDone(event) {
        const target = event.target;
        if (target.tagName === "SPAN" && target.classList.contains("delete")) {
            target.parentElement.remove();
        } else {
            target.classList.toggle("done");
        }
        saveData();
    }

    function saveData() {
        localStorage.setItem("tasks", recordContainer.innerHTML);
    }

    function loadTasks() {
        const savedTasks = localStorage.getItem("tasks");
        if (savedTasks) {
            recordContainer.innerHTML = savedTasks;
        }
    }

    loadTasks();
});
