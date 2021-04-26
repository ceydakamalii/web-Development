const word_el = document.getElementById('word');
//kelimenin yazılacağı yeri word_el tutar.
const popup=document.getElementById("popup-container");
const message_el=document.getElementById("success-message");

const correctLetters = ['j','a','v','s','t','r','h','m','p','e','a','c','#','y','l','i'];//doğru harfler
const wrongLetters = [];//yanlış harfler


function getRandomWord() {
    const words = ["javascript","java","python","css","c#","html","react",'c++',"flutter"];
    //words dizisi içinden rastgele kelime seçer ve o kelimeyi bulmaya çalışırız.
    return words[Math.floor(Math.random() * words.length)];
}

function displayWord() {
    const selectedWord = getRandomWord();
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

displayWord()