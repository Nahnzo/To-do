const ButtonAddMessage = document.querySelector(".AddMessage");
const InputMessage = document.getElementById("Message");
const Body = document.querySelector("body");
const ButtonDeleteAll = document.querySelector(".DeletedAll");

let ToDo = [];
let Quests = {
  cheked: false,
};

let AddQuest = function () {
  let NewDiv = document.createElement("div");
  NewDiv.classList.add("Div");
  Body.appendChild(NewDiv);
  NewDiv.textContent += InputMessage.value;
  Quests.id = NewDiv.textContent;
  const DivCheckbox = document.createElement("div");
  DivCheckbox.classList.add("DivCheckbox");
  const Checkbox = document.createElement("input");
  const NewButtonRemove = document.createElement("button");
  NewButtonRemove.classList.add("Remove");
  Checkbox.type = "checkbox";
  DivCheckbox.appendChild(Checkbox);
  NewDiv.appendChild(DivCheckbox);
  NewDiv.appendChild(NewButtonRemove);
  NewButtonRemove.addEventListener("click", function () {
    NewDiv.classList.remove("Div");
    NewDiv.textContent = "";
  });

  if (NewDiv.textContent == "") {
    NewDiv.classList.remove("Div");
    NewDiv.textContent = "";
  }
  setTimeout(() => {
    InputMessage.value = "";
  });
  // ---------------------------
  Checkbox.addEventListener("click", () => {
    NewDiv.style.backgroundColor = "green";
    setTimeout(() => {
      NewDiv.classList.remove("Div");
      NewDiv.textContent = "";
    }, 1500);
  });
};

let DeleteContent = function () {
  const nodes = document.querySelectorAll("Div");
  for (let i = 1; i < nodes.length; i++) {
    nodes[i].textContent = "";
  }
};

let DeleteAll = function () {
  const nodes = document.querySelectorAll("Div");
  nodes.forEach((item) => {
    item.classList.remove("Div");
    DeleteContent();
  });
};

ButtonAddMessage.addEventListener("click", AddQuest);
ButtonDeleteAll.addEventListener("click", DeleteAll);
