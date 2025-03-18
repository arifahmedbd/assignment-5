// Body Color 
document.getElementById('random').addEventListener('click', function changeColor() {
    var colors = ["red", "blue", "green", "yellow", "orange", "purple"];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById('body').style.background = randomColor
  })

//   Switiching Page 

  function goToPage (id, link){
    document.getElementById(id).addEventListener('click', function(){
      window.location.href = link;
    })
  }

  goToPage ('discover', 'blogs.html')
  // goToPage ('back', 'index.html')



//   Date 
let date = new Date();
document.getElementById('date').textContent = date.toDateString();

// Task Function 
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
        const container = document.getElementById('activity-container')
        const p = document.createElement('p');
        p.innerText = `
        Completed ${taskName} at ${date.getHours()}:${date.getMinutes()}:${date.getUTCHours()}`
        container.appendChild(p);
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
completeTask('polygon-tech', 'Review Ami Probashi Site');

// Delete History 
const container = document.getElementById('activity-container')
const clearHistory = document.getElementById('clear-history').addEventListener('click', function(){
    container.innerHTML = '';
})


  
