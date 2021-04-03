const getWork = document.getElementById("new-todo-title"); // 할 일을 적는 input 태그
const todoList = document.getElementById("todo-list"); // 작성한 할 일이 삽입되는 ul 태그
const viewAllList = document.querySelector(".all"); // 전체 보기 버튼
const viewTodoList = document.querySelector(".active"); // 해야할 일 보기 버튼
const viewCompleteList = document.querySelector(".completed"); // 완료한 일 보기 버튼
const filter = document.querySelector(".filters");

function init() {
  // 페이지 로드 시 이벤트 리스너 부착
  getWork.addEventListener("keypress", AddNewList);

  todoList.addEventListener('click', itemClickControl);
  todoList.addEventListener('dblclick', workContentCopy);
  todoList.addEventListener('keyup',workUpdate);

  filter.addEventListener("click", filterButtonControl);

  window.addEventListener("beforeunload", saveLocalStorage);
  window.addEventListener("DOMContentLoaded", loadLocalStorage);
}


function AddNewList(e) {
  // 새로운 항목을 추가하는 기능
  if (e.key === "Enter") {
    if (e.target.value !== "" && !/^\s+|\s+$/g.exec(e.target.value)) {
      let text = e.target.value;
      e.target.value = null;

      let item = listAssemble(text);

      if (!/(completed)/.exec(window.location.href)) {
        item.classList.add("selected");
      } else {
        item.style.display = "none";
      }

    } else {
      alert("불필요한 공백을 제거해주세요!");
    }
  }
  renewStrong();
}



function itemClickControl({target}){
  if(target.classList.contains('toggle')) workCheck({target});
  else if(target.classList.contains('destroy')) workDelete({target});
}



function workCheck({target}) {

  // 등록된 항목들을 체크하거나 푸는 기능
  target.closest('li').classList.toggle("completed");
  
  if (target.checked) target.setAttribute("checked", "");
  else target.removeAttribute("checked");
  
  if (/(active)/.exec(window.location.href)) viewTodo();
  else if (/(completed)/.exec(window.location.href)) viewDone();
}

function workDelete({target}) {
  // 등록된 항목들을 제거하는 기능
  if (confirm("정말 삭제하시겠습니까?")) {
    let li = target.closest('li')
    li.parentNode.removeChild(li);
    renewStrong();
  }
}

function workContentCopy({target}) {
  // 등록된 항목의 수정을 위해 내용을 입력칸에 복사하는 기능
  let li = target.closest('li');
  li.classList.add("editing");
  let chginput = li.querySelector(".edit");
  chginput.value = target.innerText;
}

function workUpdate({target, key}) {
  // 등록된 항목을 수정하는 기능
  let li = target.closest('li');
  if (key== 'Escape') {
    li.classList.remove("editing");
  }
  if (key == 'Enter') {
    if (target.value !== "" && !/^\s+|\s+$/g.exec(target.value)) {
      let label = target.parentNode.querySelector(".label");
      label.innerText = target.value;
      target.value = "";
      li.classList.remove("editing");
    } else {
      alert("불필요한 공백을 제거해주세요!");
    }
  }
}

function renewStrong() {
  // 리스트 하단의 총 목록 갯수를 갱신하는 기능
  let list = document.querySelectorAll("#todo-list>li.selected");
  let items = document.querySelector("strong");
  items.innerText = list.length;
}

function filterButtonControl({target}){
    if(target.classList.contains('all')) viewAll();
    else if(target.classList.contains('active')) viewTodo();
    else if(target.classList.contains('completed'))viewDone();
}

function viewAll() {
  // "전체보기" 버튼 클릭 시의 기능
  let list = document.querySelectorAll("#todo-list>li");
  for (let i = 0; i < list.length; i++) {
    list[i].classList.add("selected");
  }
  changeBox(viewAllList);
  reflectView();
}

function viewTodo() {
  // "해야할 일" 버튼 클릭 시의 기능
  let list = document.querySelectorAll("#todo-list>li");

  for (let i = 0; i < list.length; i++) {
    if (list[i].querySelector(".toggle").hasAttribute("checked")) {
      list[i].classList.remove("selected");
    } else {
      list[i].classList.add("selected");
    }
  }
  changeBox(viewTodoList);
  reflectView();
}

function viewDone() {
  // "완료한 일" 버튼 클릭 시의 기능
  let list = document.querySelectorAll("#todo-list>li");
  for (let i = 0; i < list.length; i++) {
    if (!list[i].querySelector(".toggle").hasAttribute("checked")) {
      list[i].classList.remove("selected");
    } else {
      list[i].classList.add("selected");
    }
  }
  changeBox(viewCompleteList);
  reflectView();
}

function changeBox(box) {
  // 선택한 버튼을 표시하는 기능
  viewAllList.classList.remove("selected");
  viewTodoList.classList.remove("selected");
  viewCompleteList.classList.remove("selected");

  if (box.classList.contains("all")) {
    viewAllList.classList.add("selected");
  } else if (box.classList.contains("active")) {
    viewTodoList.classList.add("selected");
  } else if (box.classList.contains("completed")) {
    viewCompleteList.classList.add("selected");
  }
}

function reflectView() {
  // 현재 누른 버튼에 대한 뷰를 반영하는 기능
  let list = document.querySelectorAll("#todo-list>li");
  for (let i = 0; i < list.length; i++) {
    if (list[i].classList.contains("selected")) {
      list[i].style.display = "block";
    } else {
      list[i].style.display = "none";
    }
  }
  renewStrong();
}

function saveLocalStorage() {
  // 페이지 종료 시 현재 리스트를 저장하는 기능
  let list = document.querySelectorAll("#todo-list>li");
  let listArray = [];

  for (let i = 0; i < list.length; i++) {
    let dataset = { liClass: "", Checked: "", label: "" };
    if (list[i].classList.contains("completed")) {
      dataset.liClass = "completed";
      dataset.Checked = "checked";
    }
    dataset.label = list[i].querySelector(".label").innerText;
    listArray.push(dataset);
  }

  let jsonArray = JSON.stringify(listArray);

  localStorage.setItem("json", jsonArray);
}

function loadLocalStorage() {
  // 페이지 실행 시 현재 리스트를 불러오는 기능
  var load = JSON.parse(localStorage.getItem("json"));
  for (let i in load) {
    getLocalStorageList(load[i]);
  }
  if (/(active)/.exec(window.location.href)) viewTodo();
  else if (/(completed)/.exec(window.location.href)) viewDone();
  else viewAll();
}

function getLocalStorageList(e) {
  // 페이지 실행 시 현재 리스트를 불러오는 기능
  let liClass = e["liClass"];
  let Checked = e["Checked"];
  let Label = e["label"];

  let li = listAssemble(Label);
  let checkbox = li.querySelector(".toggle");

  if (Checked === "checked") checkbox.setAttribute("checked", "");
  if (liClass === "completed") li.classList.add("completed");
}

function listAssemble(content) {
  let li = document.createElement('li');

  listTemplate = `<div class="view">
                      <input class="toggle" type="checkbox"/>
                      <label class="label" >${content}</label>
                      <button class="destroy" ></button>
                    </div>
                    <input class="edit" value="${content}" />`;
                   

  li.innerHTML = listTemplate;
  todoList.append(li);

  return li;
}

init();