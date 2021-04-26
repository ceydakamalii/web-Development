//UI vars
const form=document.querySelector('form');//form elemanı
//console.log(form);
const input=document.querySelector('#txtTaskName');//yazı yazılan yer
//console.log(input);
const btnDeleteAll = document.querySelector('#btnDeleteAll');
//console.log(btnDeleteAll);
const taskList = document.querySelector('#task-list');//ul etiketi
//console.log(taskList);
eventListeners();
function eventListeners(){
    form.addEventListener('submit',addNewItem);

}
function addNewItem(e){
    if(input.value ===''){
        alert('add new item');
    }

    // create li
    const li= document.createElement('li');
    li.className='list-group-item list-group-item-secondary';
    li.appendChild(document.createTextNode(input.value));

    // create a
    const a =document.createElement('a');
    a.classList='delete-item float-right';
    a.setAttribute('href','#');
    a.innerHTML='<i class="fas fa-times"></i>';

    // add a to li
    li.appendChild(a);

    // add li to ul
    taskList.appendChild(li);

    // clear input
    input.value='';

    e.preventDefault();

}