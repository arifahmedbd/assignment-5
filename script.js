const date = new Date();
document.getElementById('date').textContent = date.toDateString();

function completeTask(buttonId, taskName) {
    const button = document.getElementById(buttonId);
    button.addEventListener('click', function () {
        alert(taskName + ' Task Completed');
        const totalTask = document.getElementById('total-task');
        totalTask.innerText = parseInt(totalTask.innerText) + 1;
        const assignedTask = document.getElementById('task-assigned');
        assignedTask.innerText = parseInt(assignedTask.innerText) - 1;
        button.disabled = true;
        button.style.background = 'gray';
        if (totalTask.innerText == 29 && assignedTask.innerText == 0) {
            alert('All Tasks Completed!');
        }
    });
}

completeTask('shop-ease-btn', 'Fix Mobile Button Issue');
completeTask('soft-pay-btn', 'Add Pay Success Modal');
completeTask('meta', 'Add new reaction');
completeTask('programming-hero', 'Fix Video Loading Issue');
completeTask('google-llc', 'Integrate AI search');
completeTask('polygon-tech', 'Fix Mobile Button Issue');
