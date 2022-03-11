const tittle = [];
const tittle_render = function () {
    const parent_id = document.getElementById("note-tittle-id");
    parent_id.innerHTML='';
    for (let i = 0; i < tittle.length; i++) {
        const p_id = document.createElement('p');
        p_id.innerText = tittle[i];
        p_id.style.color = "red";
        parent_id.appendChild(p_id);

    }
}
const add_tittle = function () {
    const tittle_value = document.getElementById("note-tittle-input").value;
    tittle.push(tittle_value);
    tittle_render();
    tittle.tittle_value.value='';
}

document.getElementById("tittle_btn").addEventListener('click', add_tittle);