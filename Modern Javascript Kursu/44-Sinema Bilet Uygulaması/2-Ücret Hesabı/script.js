const container = document.querySelector('.container');
const count = document.getElementById('count');//sayi
const amount = document.getElementById('amount');//fiyat
const select = document.getElementById('movie');//film


container.addEventListener('click', function(e) {
   if(e.target.classList.contains('seat') && !e.target.classList.contains('reserved')) {
       e.target.classList.toggle('selected');
       //bu sınıf yoksa ekle varsa çıkar.(toogle bu işe yarar.)
       calculateTotal()      
    }
});

select.addEventListener('change', function(e) {
    calculateTotal();  
});

function calculateTotal() {
    let selectedSeatCount = container.querySelectorAll('.seat.selected').length;
    let price = select.value;
    count.innerText = selectedSeatCount;
    amount.innerText = selectedSeatCount * price;
}