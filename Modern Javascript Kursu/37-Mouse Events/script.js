// Mouse Events

const btn = document.querySelector('#btnDeleteAll');
const ul = document.querySelector('#task-list');

// click tek tıklamada olay gerçekleşir.
// btn.addEventListener('click',eventHandler);
// ul.addEventListener('click',eventHandler);

// double click çift tıklamada olay gerçekleşir.
// btn.addEventListener('dblclick',eventHandler);

//mouse down butona tıkladığın anda gerçekleşir.
// btn.addEventListener('mousedown',eventHandler);
//mouse up butonu tıklamayı bıraktıktan sonra gerçekleşir.
// btn.addEventListener('mouseup',eventHandler);

// mouseenter mouse belirlediğimiz elemente gelince gerçekleşir
// ul.addEventListener('mouseenter',eventHandler);
// mouseleave mouse belirlediğimiz elementten çıktıktan sonra gerçekleşir.
// ul.addEventListener('mouseleave',eventHandler);

// mouseover
//ul.addEventListener('mouseover',eventHandler);
// mouseout li elemanı içindeki bir etikete bassan bile mouseout olur.
//ul.addEventListener('mouseout',eventHandler);

// mouse move --> mouse hareket ettikçe event gerçekleşcek
const h5=document.querySelector('h5');
ul.addEventListener('mousemove',eventHandler);

function eventHandler(event){
    console.log(`event type : ${event.type}`);

    h5.textContent=`Mouse X : ${event.offsetX } Mouse Y : ${event.offsetY }`;
    //mousenin konumunu yazdırıyor event.offsetX x konumu verir event.offsetY ise y konumu

}