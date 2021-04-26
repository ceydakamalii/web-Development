const word_el = document.getElementById('word');
//kelimenin yazılacağı yeri word_el tutar.
const popup=document.getElementById("popup-container");
const message_el=document.getElementById("success-message");
const wrongLetters_el=document.getElementById("wrong-letters");
const items=document.querySelectorAll(".item");
const box=document.getElementById("message");
const PlayAgainBtn=document.getElementById("play-again");

const correctLetters = [];//doğru harfler
const wrongLetters = [];//yanlış harfler
let selectedWord = getRandomWord();

function getRandomWord() {
    const words = ["javascript","java","python","css","c#","html","react",'c++',"flutter","yazılım","mühendislik","bilgisayar","web","tasım","kodlama","programlama","algoritma","mobil","nesne","veri","bootstrap","jquery"];
    //words dizisi içinden rastgele kelime seçer ve o kelimeyi bulmaya çalışırız.
    return words[Math.floor(Math.random() * words.length)];
}

function displayWord() {
    
    //ilk aranacak kelime seçilir ve selectWordde eşitlenir.
    //kelimenin yazılacağı yerde html yazıcaz
    word_el.innerHTML = `
        ${selectedWord.split('').map(letter => ` 
            <div class="letter">
                ${correctLetters.includes(letter) ? letter: ''}
            </div>
        `).join('')}
    
    `;
    //burada ilk kelimeyi harflere bölüyoruz ve bir dizinin içine atıyoruz.
    //daha sonra clası letter olan bir div oluşturuyoruz her harf için,divin içine ise 
    //her harfi kıyaslıcaz doğru harfler içerisinde olup olmadıpını eğer var ise hafi yazcaz yoksa harfi yazmicaz.
    //daha sonra oluşsan diziyi joinle stringe dönüştürcez harfleri yan yana getirerek.
    const w = word_el.innerText.replace(/\n/g,'');
    if (w === selectedWord) {
       popup.style.display="flex";
       message_el.innerText="Tebrikler, kazandınız"
    }
    //yazılan harfler alt alta o yüzden yan yana getircez .replace(/\n/g,'') bu işlemle
    
}
PlayAgainBtn.addEventListener('click',function(){
    correctLetters.splice(0);
    wrongLetters.splice(0);
    selectedWord=getRandomWord();
    displayWord();
    updateWrongLetters();
    popup.style.display="none";
});
function updateWrongLetters(){
    wrongLetters_el.innerHTML=`
        ${wrongLetters.length>0?'<h3>Hatalı Harfler</h3>' : ''}
        ${wrongLetters.map(letter => `<span>${letter}</span>`)}
    `;

    items.forEach((item,index) =>{
        const errorCount=wrongLetters.length;
        if(index<errorCount){
            item.style.display='block';
        }
        else{
            item.style.display='none';
        }
    })
    if(wrongLetters.length === items.length){
        popup.style.display='flex';
        message_el.innerText='Maalesef, Kaybettiniz.';
    }

    

}
function displayMessage(){
    box.classList.add("show");
    setTimeout(function(){
        box.classList.remove("show");
    },1500);
}
window.addEventListener('keydown',function(e){
    if(e.keyCode >= 65 && e.keyCode <=90){
       const letter=e.key;
       if(selectedWord.includes(letter)){
           if(!correctLetters.includes(letter)){
               correctLetters.push(letter);
               displayWord();
           }
           else{
               displayMessage();
               
           }
       }
       else{
           if(!wrongLetters.includes(letter)){
               wrongLetters.push(letter);
               updateWrongLetters();
              
           }
           else{
               displayMessage();
           }
       }
    }
    if(e.keyCode === 51 || e.keyCode=== 222 || e.keyCode===107){
        const letter=e.key;
        if(selectedWord.includes(letter)){
           if(!correctLetters.includes(letter)){
               correctLetters.push(letter);
               displayWord();
           }
           else{
               displayMessage();
           }
       }
       else{
           if(!wrongLetters.includes(letter)){
               wrongLetters.push(letter);
               updateWrongLetters();
           }
           else{
               displayMessage();
           }
       }
    }
})

displayWord()