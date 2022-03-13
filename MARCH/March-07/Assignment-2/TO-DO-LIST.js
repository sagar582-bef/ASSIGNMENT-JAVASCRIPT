function show_ToDoList(id) {
    if (id == 'yesterday') {
        document.getElementById("yesterday").classList.remove("hide");

        document.getElementById("yesterday").classList.add("show");
        document.getElementById("tommorow").classList.replace("show", "hide");
        document.getElementById("today").classList.replace("show", "hide");
        document.getElementById("yes").style.color = "red";
        document.getElementById("to").style.color = "white";



    }
    else if (id == 'tommorow') {
        document.getElementById("tommorow").classList.replace("hide", "show");
        document.getElementById("yesterday").classList.replace("show", "hide");
        document.getElementById("today").classList.replace("show", "hide");
        document.getElementById("to").style.color = "white";
        document.getElementById("tom").style.color = "red";
    }

    else {
        document.getElementById("yesterday").classList.replace("show", "hide");
        document.getElementById("tommorow").classList.replace("show", "hide");
        document.getElementById("today").classList.replace("hide", "show");
        document.getElementById("tom").style.color = "white";
        document.getElementById("to").style.color = "red";
        document.getElementById("yes").style.color = "white";

    }
}
const task = [];
// js for display task 
const render = function () {
    const parent_id = document.getElementById("special");
    parent_id.innerHTML = '';
    for (let i = 0; i < task.length; i++) {
        if (task[i].length == 0) {
            alert("please add task");
        }
        else {
            const output_text = document.createElement("div");
            output_text.style.backgroundColor = "white";
            output_text.style.boxShadow = "0px 2px 2px 2px grey"
            parent_id.appendChild(output_text);
            const final_op = document.createElement("p");
            final_op.innerText = task[i];
            final_op.style.color = "red";
            final_op.style.backgroundColorw = "whitesmoke";
            final_op.style.padding = "1px 3px";
            final_op.style.fontFamily = "cursive";

            final_op.style.textAlign = "start";

            output_text.appendChild(final_op);
        }
        // output_text.appendChild(final_op);
    }
}
//js for giving input from user
const add_task = function () {
    let result = document.getElementById("task_ip").value;
    task.push(result);
    result = '';
    render();
}

document.getElementById("add-btn").addEventListener('click', add_task)