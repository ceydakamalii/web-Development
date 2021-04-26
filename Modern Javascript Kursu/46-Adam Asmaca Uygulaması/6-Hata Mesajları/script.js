const word_el = document.getElementById('word');
//kelimenin yazılacağı yeri word_el tutar.
const popup=document.getElementById("popup-container");
const message_el=document.getElementById("success-message");
const wrongLetters_el=document.getElementById("wrong-letters");
const items=document.querySelectorAll(".item");
const box=document.getElementById("message");

const correctLetters = [];//doğru harfler
const wrongLetters = [];//yanlış harfler
const selectedWord = getRandomWord();

function getRandomWord() {
    const words = ["javascript","java","python","css","c#","html","react",'c++',"flutter"];
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
    if(e.keyCode === 51 || e.keyCode=== 222){
        const letter=e.key;
        if(selectedWord.includes(letter)){
           if(!correctLetters.includes(letter)){
               correctLetters.push(letter);
               displayWord();
           }
       }
    }
})

displayWord()