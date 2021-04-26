document.querySelector('#getEmployee').addEventListener('click',loadEmployee);

function loadEmployee(){

    var loadImage = document.querySelector('#loading');
    loadImage.style.display = 'block';

    const xhr = new XMLHttpRequest();
    xhr.open('GET','employees.json',true);

    setTimeout(() => {
        //onload isteğin bittiğini söyler.
        xhr.onload = function(){

            loadImage.style.display="none";

            if(this.status === 200){       
                //console.log(this.responseText); bu employees.jsonu olduğu gibi verir parantezleri falan duruyo sanki kod halini veriyo
                //console.log(JSON.parse(this.responseText)); bu ise employees.jsonu objeye çeviriyo
                let employees = JSON.parse(this.responseText)
                //console.log(employees);
                let html="";
                
                employees.forEach(employee => {
                    html+= `<tr>
                                <td>${employee.firstName}</td>
                                <td>${employee.lastName}</td>
                                <td>${employee.age}</td>
                                <td>${employee.retired}</td>
                            </tr>`;
                });             
    
                document.querySelector('#employees').innerHTML = html;
    
            }
        }
        xhr.send();

    }, 1500);
}