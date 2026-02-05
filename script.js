const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask() {
  const taskText = taskInput.value.trim();
  if(taskText === "") return;

  const li = document.createElement("li");

  // Texto da tarefa
  const span = document.createElement("span");
  span.textContent = taskText;
  li.appendChild(span);

  // Botão Concluído
  const doneBtn = document.createElement("button");
  doneBtn.textContent = "✓";
  doneBtn.className = "done-btn";
  doneBtn.onclick = () => {
    li.classList.toggle("completed");
  };
  li.appendChild(doneBtn);

  // Botão Deletar
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "🗑";
  deleteBtn.className = "delete-btn";
  deleteBtn.onclick = () => {
    li.remove();
  };
  li.appendChild(deleteBtn);

  taskList.appendChild(li);
  taskInput.value = "";
  taskInput.focus();
}

