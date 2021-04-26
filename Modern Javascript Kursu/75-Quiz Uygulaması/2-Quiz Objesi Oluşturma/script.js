function Question(text,choices,answer){
    this.text=text;
    this.choices=choices;
    this.answer=answer;
}

Question.prototype.checkAnswer=function(e){//seçilen cevap doğru mu kontrolü
    return this.answer===e;
}
function Quiz(questions){
    this.questions=questions;
    this.score=0;
    this.questionIndex=0;//kaçıncı soru
}
Quiz.prototype.getQuestion=function(){//hangi soruyu getircek
    return this.questions[this.questionIndex];
}
Quiz.prototype.isFinish=function(){
    return this.questions.length === this.questionIndex;
}
Quiz.prototype.guess=function(answer){
    var question=this.getQuestion();//index numarasını söylediği soru gelcek
    if(question.checkAnswer(answer)){
        this.score++;
    }
    this.questionIndex++;
}

var q1 = new Question("what's the best programming language ?",["C#","javascript","pyhton","asp.net"],"javascript");

var q2 = new Question("what's the most popular programming language ?",["c#","visual basic","nodejs","javascript"],"javascript");

var q3 = new Question("what's the best modern programming language ?",["C#","javascript","pyhton","asp.net"],"javascript");
var q4 = new Question("what's the best modern programming language ?",["C#","javascript","pyhton","asp.net"],"javascript");
var questions=[q1,q2,q3,q4];
var quiz=new Quiz(questions);
console.log(quiz.isFinish());
console.log(quiz.getQuestion());
quiz.guess('javascript');

console.log(quiz.getQuestion());
quiz.guess('python');

console.log(quiz.getQuestion());
quiz.guess('javascript');



console.log(quiz.score);
console.log(quiz.isFinish());