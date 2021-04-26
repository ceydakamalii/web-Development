class Course{
    constructor(title,instructor,image){
        this.courseId = Math.floor(Math.random()*10000);
        this.title=title;
        this.instructor=instructor;
        this.image=image;
    }
}
class UI{
    addCourseList(course){
        const list=document.getElementById('course-list');
        var html=`
            <tr>
                <td><img src="img/${course.image}"></td>
                <td>${course.title}</td>
                <td>${course.instructor}</td>
                <td><a href="#" data-id="${course.courseId}" class="btn btn-danger btn-sm delete">Delete</a></td>
            </tr>
        `;
        list.innerHTML +=html;
    }
    clearControls(){
        const title=document.getElementById('title').value="";
        const instructor=document.getElementById('instructor').value="";
        const image=document.getElementById('image').value="";
    }
    deleteCourse(element){
        if(element.classList.contains('delete')){
            element.parentElement.parentElement.remove();
            return true;
        }
    }
    showAlert(message,className){
        var html=`
        <div class='alert alert-${className}'>
            ${message}
        </div>
    `;
        const row=document.querySelector('.row');
        //beforeBegin(etikete girmeden hemen üstüne ekleme)
        //afterBegin(etikete gir etiketin ilk elemanına ekle)
        //beforeEnd(etikete girme etiketin sonuna ekle)
        //afterEnd(etiketin içine gir etiketin son elemanına ekle)
        row.insertAdjacentHTML('beforeBegin',html);
        setTimeout(()=>{
            document.querySelector('.alert').remove();
        },2000);
    }
}
class Storage{
    static getCourses(){//local storageden bilgileri alıp getircek
        let courses;
        if(localStorage.getItem('courses')===null){//eğer başta courses oluşturulmadıysa
            courses=[];
        }
        else{
            //eğer courses boş değilse local storageden bilgileri alıp courses'e ekliyor.
            courses=JSON.parse(localStorage.getItem('courses'));
        }

        return courses;
    }
    static displayCourses(){//getCourse den aldığı bilgiyi ekranda göstercek.
        const courses=Storage.getCourses();
        courses.forEach(course => {
            const ui=new UI();
            ui.addCourseList(course);
        });
    }
    static addCourse(course){//aldığı courseyi localstorageye ekler
        const courses=Storage.getCourses();
        courses.push(course);
        localStorage.setItem('courses',JSON.stringify(courses));
    }
    static deleteCourse(element){//aldığı kursu local storageden silsin
        if(element.classList.contains('delete')){
            const id = element.getAttribute('data-id');
        
            const courses = Storage.getCourses();

            courses.forEach((course,index)=>{
                if(course.courseId == id){
                    courses.splice(index,1);
                }
            });

            localStorage.setItem('courses',JSON.stringify(courses));
        }
    }

}

document.addEventListener('DOMContentLoaded',Storage.displayCourses);
//DOMContentLoaded bu sayfa yüklendiği anda Storage.displayCourses yi çalıştırıyor.
document.getElementById('new-course').addEventListener('submit',function(e){
    const title=document.getElementById('title').value;
    const instructor=document.getElementById('instructor').value;
    const image=document.getElementById('image').value;
    console.log(title,instructor,image);
    //create course object
    const course =new Course(title,instructor,image);
    //create ui
    const ui=new UI();
    if(title ==='' || instructor=== '' ||image===''){
        ui.showAlert('Please complete the form','warning');
    }
    else{
        //add course list
        ui.addCourseList(course);
        // save to LS
        Storage.addCourse(course);

        //clear controls
        ui.clearControls();
        ui.showAlert('The course has been added','success');

    }
    
    
    e.preventDefault();
});
document.getElementById('course-list').addEventListener('click',function(e){
    const ui=new UI();
    if(ui.deleteCourse(e.target)==true){
        // delete from LS
        Storage.deleteCourse(e.target);
        ui.showAlert("The course has been deleted","danger");
    }
    
});