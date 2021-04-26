// Event Listeners

const btn = document.querySelector('#btnDeleteAll');
const btn2 = document.querySelector('#btnAddNewTask');

btn.addEventListener('click',function(e){
  //#btnDeleteAll idli butona basıldığında 
    let val;
    //e mouse click olayını taşır yani bi event olduğunu
    val = e;
    console.log(val);

    val = e.target;//hangi butona tıklandığını veriyor.
    console.log(val);
    val = e.target.id;//tıklanan objenin idsini verir.
    console.log(val);
    val = e.target.classList;
    console.log(val);
    val = e.type;// butonda bir event oluyor bu event ne click işlemi yani tipi click

    console.log(val);

    e.preventDefault();
    //butona bastığımızda scroll aşağıdaysa yukarı çıkıyor çünkü A ETİKETİNDE BUTON bunu engellemek için e.preventDefault(); yazıyoruz. 
});

// btn.addEventListener('click',btnClick);
// btn.addEventListener('click',btnClick2);
btn2.addEventListener('click',btnClick);
function btnClick(e){
    let val;
    val=e;
    console.log(val);
    val=e.target.id;
    console.log(val);
    val=e.target.classList;
    console.log(val);
    console.log('btn clicked');
}

// function btnClick2(){
//     console.log('btn 2 clicked');
// }