//Course constructor
function Course(title,instructor,image){
    this.title=title;
    this.instructor=instructor;
    this.image=image;
}
// UI constructor
function UI(){

}

UI.prototype.addCourseList=function(course){
    const list=document.getElementById('course-list');
    var html=`
        <tr>
            <td><img src="img/${course.image}"></td>
            <td>${course.title}</td>
            <td>${course.instructor}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">Delete</a></td>
        </tr>
    `;
    list.innerHTML +=html;
}
UI.prototype.clearControls=function(course){
    const title=document.getElementById('title').value="";
    const instructor=document.getElementById('instructor').value="";
    const image=document.getElementById('image').value="";

}
UI.prototype.deleteCourse=function(element){
    if(element.classList.contains('delete')){
        element.parentElement.parentElement.remove();
    }
}
document.getElementById('new-course').addEventListener('submit',function(e){
    const title=document.getElementById('title').value;
    const instructor=document.getElementById('instructor').value;
    const image=document.getElementById('image').value;
    console.log(title,instructor,image);
    //create course object
    const course =new Course(title,instructor,image);
    //create ui
    const ui=new UI();
    
    //add course list
    ui.addCourseList(course);


    //clear controls
    ui.clearControls();
    e.preventDefault();
});
document.getElementById('course-list').addEventListener('click',function(e){
    const ui=new UI();
    ui.deleteCourse(e.target);
})