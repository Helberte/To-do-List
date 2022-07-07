function taskFinish(element){
  if(element.checked){
    var label = document.getElementsByClassName(element.id);
    label[0].classList.add("checked");
    label[0].classList.remove("not-checked");    
  }else{
    var label = document.getElementsByClassName(element.id);
    label[0].classList.toggle("not-checked");    
  }
}

function addListTask(){
  var texto = document.getElementById("camp-text");

  var tasks = document.getElementsByClassName("tasks");
  var cont = tasks.length;

  cont++;

  if(texto.value != ""){
    document.getElementById("list-tasks").innerHTML += `<input class="tasks" type="checkbox" id="task-`+ cont +`" onchange="taskFinish(this);">
                                                         <label class="task-` + cont + `" for="task-` + cont + `">` + texto.value + `</label><br>`;
    texto.value = "";
    texto.focus();
  } 
}

