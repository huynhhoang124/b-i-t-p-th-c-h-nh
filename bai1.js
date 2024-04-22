function addDepartment() {
    var departmentName = prompt('Nhập tên Khoa mới:');
    if (departmentName) {
        var departmentList = document.getElementById('departmentList');
        var li = document.createElement('li');
        li.textContent = departmentName;
        departmentList.appendChild(li);
    }
}

function addMajor() {
    var majorName = prompt('Nhập tên Ngành mới:');
    if (majorName) {
        var majorList = document.getElementById('majorList');
        var li = document.createElement('li');
        li.textContent = majorName;
        majorList.appendChild(li);
    }
}

function addStudent() {
    var studentName = prompt('Nhập tên Sinh viên mới:');
    if (studentName) {
        var studentList = document.getElementById('studentList');
        var li = document.createElement('li');
        li.textContent = studentName;
        studentList.appendChild(li);
    }
}

function addClass() {
    var className = prompt('Nhập tên Lớp mới:');
    if (className) {
        var classList = document.getElementById('classList');
        var li = document.createElement('li');
        li.textContent = className;
        classList.appendChild(li);
    }
}

function addTeacher() {
    var teacherName = prompt('Nhập tên Giáo viên mới:');
    if (teacherName) {
        var teacherList = document.getElementById('teacherList');
        var li = document.createElement('li');
        li.textContent = teacherName;
        teacherList.appendChild(li);
    }
}

function addEducationSystem() {
    var educationSystemName = prompt('Nhập tên Hệ đào tạo mới:');
    if (educationSystemName) {
        var educationSystemList = document.getElementById('educationSystemList');
        var li = document.createElement('li');
        li.textContent = educationSystemName;
        educationSystemList.appendChild(li);
    }
}

function addAcademicYear() {
    var academicYear = prompt('Nhập tên Niên khóa mới:');
    if (academicYear) {
        var academicYearList = document.getElementById('academicYearList');
        var li = document.createElement('li');
        li.textContent = academicYear;
        academicYearList.appendChild(li);
    }
}
