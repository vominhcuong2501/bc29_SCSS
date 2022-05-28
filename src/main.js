var service = new Services();

function getEle(id) {
    return document.getElementById(id);
}

function getListTeacher() {
    getEle("loader").style.display = "block";
    service
        .getListTeacherApi()
        .then(function(result){
            renderListTeacher(result.data);
            getEle("loader").style.display = "none";
        })
        .catch(function(error){
            console.log(error);
        });
}

getListTeacher();

function renderListTeacher(data) {
    var contentHTML = "";
    data.forEach(function(teacher){
        contentHTML += `
        <div class="col-6 col-md-4 col-lg-3 wow animate__animated  animate__fadeInLeft">
                    <div class="teacher__item">
                        <img class="image" src="./../images/${teacher.hinhAnh}" alt="" />
                        <div class="teacher__text">
                            <span>${teacher.quocTich}</span>
                            <h5>${teacher.ten}</h5>
                            <p>${teacher.moTa}</p>
                        </div>
                    </div>
                </div>`
    });
    console.log(contentHTML);
    getEle("listTeacher").innerHTML = contentHTML;
}