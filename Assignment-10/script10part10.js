document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    // Add Task
    addTaskButton.addEventListener("click", () => {
        const taskText = taskInput.value.trim();
        
        if (taskText !== "") {
            const li = document.createElement("li");
            li.innerHTML = `${taskText} <button class="remove-btn">Remove</button>`;

            taskList.appendChild(li);
            taskInput.value = "";

            // Add event listener to remove button
            li.querySelector(".remove-btn").addEventListener("click", () => {
                li.remove();
            });
        } else {
            alert("Please enter a task!");
        }
    });
});