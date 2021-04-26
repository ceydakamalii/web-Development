const word_el = document.getElementById('word');
//kelimenin yazılacağı yeri word_el tutar.
const popup=document.getElementById("popup-container");
const message_el=document.getElementById("success-message");

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
window.addEventListener('keydown',function(e){
    if(e.keyCode >= 65 && e.keyCode <=90){
       const letter=e.key;
       if(selectedWord.includes(letter)){
           if(!correctLetters.includes(letter)){
               correctLetters.push(letter);
               displayWord();
           }
           else{
               console.log("zaten bu harf ekli");
           }
       }
       else{
           if(!wrongLetters.includes(letter)){
               wrongLetters.push(letter);
               console.log("hatali harfleri güncelle");
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