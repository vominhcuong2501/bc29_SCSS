var service = new Services();

function getEle(id) {
    return document.getElementById(id);
}
/**
 * Câu 3: Sử dụng Axios để lấy Danh sách người dùng từ API
 */
function getListTeacher() {
    getEle("loader").style.display = "block";
    service
        .getListTeacherApi()
        .then(function(result){
            /**
             * Câu 4: Có 2 loại người dùng là GV và HV. Chỉ hiện loại người dùng GV lên trang "Our Teach“
             */
            var arrTeacher = result.data.map(function (teacher) {
                if (teacher.loaiND == "GV") {
                    return teacher;
                }
            })
            var arrTeacherGV = arrTeacher.filter(function (teacherGV) {
                return teacherGV !== undefined;
            })
            renderListTeacher(arrTeacherGV);
            getEle("loader").style.display = "none";
        })
        .catch(function(error){
            console.log(error);
        });
}

getListTeacher();

/**
 * Câu 2: Chuyển phần danh sách Teacher của trang "Our Teach" (Bài tập phần SASS) sang dữ liệu động
 */
function renderListTeacher(data) {
    var contentHTML = "";
    data.forEach(function(teacher){
        contentHTML += `
        <div class="col-6 col-md-4 col-lg-3 wow animate__animated  animate__fadeInLeft">
                    <div class="teacher__item">
                        <img class="image" src="./../images/${teacher.hinhAnh}" alt="" />
                        <div class="teacher__text">
                            <span>${teacher.ngonNgu}</span>
                            <h5>${teacher.hoTen}</h5>
                            <p>${teacher.moTa}</p>
                        </div>
                    </div>
                </div>`
    });
    console.log(contentHTML);
    getEle("listTeacher").innerHTML = contentHTML;
}
