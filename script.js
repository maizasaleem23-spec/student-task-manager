const searchInput = document.getElementById("searchInput");
const taskList = document.getElementById("taskList");

const tasks = [
    "Complete assignment",
    "Study for exam",
    "Submit project"
];

function displayTasks(searchText = "") {
    taskList.innerHTML = "";

    tasks.forEach(function(task) {
        if (task.toLowerCase().includes(searchText.toLowerCase())) {
            const taskItem = document.createElement("p");
            taskItem.textContent = task;
            taskList.appendChild(taskItem);
        }
    });
}

searchInput.addEventListener("input", function() {
    displayTasks(searchInput.value);
});

displayTasks();