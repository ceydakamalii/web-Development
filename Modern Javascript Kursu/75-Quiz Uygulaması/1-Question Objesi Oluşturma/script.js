
function Question(text,choices,answer){
    this.text=text;
    this.choices=choices;
    this.answer=answer;
}

Question.prototype.checkAnswer=function(e){
    return this.answer===e;//gönderilen cevap doğrumu kontrolü
}

var q1 = new Question("what's the best programming language ?",["C#","javascript","pyhton","asp.net"],"javascript");

var q2 = new Question("what's the most popular programming language ?",["c#","visual basic","nodejs","javascript"],"javascript");

var q3 = new Question("what's the best modern programming language ?",["C#","javascript","pyhton","asp.net"],"javascript");

console.log(q1.checkAnswer('C#'));
console.log(q2.checkAnswer('javascript'));
console.log(q3.checkAnswer('python'));