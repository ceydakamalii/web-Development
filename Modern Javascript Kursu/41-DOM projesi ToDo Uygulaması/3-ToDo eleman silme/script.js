//UI vars
const form=document.querySelector('form');
//console.log(form);
const input=document.querySelector('#txtTaskName');
//console.log(input);
const btnDeleteAll = document.querySelector('#btnDeleteAll');
//console.log(btnDeleteAll);
const taskList = document.querySelector('#task-list');
//console.log(taskList);
eventListeners();
function eventListeners(){
    //tıklama işlemi
    form.addEventListener('submit',addNewItem);
    //silme tuşuna basma işlemi
    taskList.addEventListener('click',deleteItem);
    //tüm elemanları silme butonuna bastığımızda
    btnDeleteAll.addEventListener('click',deleteAllItems);

}
function deleteAllItems(e){
    //taskList.innerHTML=' ';
    //console.log(taskList.childNodes);
    if (confirm('are you sure ?')) {
        taskList.childNodes.forEach(function(item){
            if(item.nodeType===1){
                item.remove();
            // console.log(item);
            }
            
    });
}
    e.preventDefault();
}
function deleteItem(e) {
    if (confirm('are you sure ?')) {

        if (e.target.className === 'fas fa-times') {
            e.target.parentElement.parentElement.remove();
        }
    }
    e.preventDefault();
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