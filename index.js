
// var nameinp = document.getElementById("name");
// var email = document.getElementById("email");
// var roll_no = document.getElementById("roll_no");
// var course = document.getElementById("course");
// var picture = document.getElementById("picture");

// var nameError = document.getElementById("nameError");
// var emailError = document.getElementById("emailError");
// var rollNoError = document.getElementById("rollNoError");
// var courseError = document.getElementById("courseError");
// var pictureError = document.getElementById("pictureError");

// function clearErrors() {
//     nameError.style.display = 'none';
//     emailError.style.display = 'none';
//     rollNoError.style.display = 'none';
//     courseError.style.display = 'none';
//     pictureError.style.display = 'none';
// }

// function validateData() {
//     let isValid = true;

//     if (nameinp.value === "") {
//         nameError.style.display = 'block';
//         isValid = false;
//     } else {
//         nameError.style.display = 'none';
//     }

//     if (email.value === "") {
//         emailError.style.display = 'block';
//         isValid = false;
//     } else {
//         emailError.style.display = 'none';
//     }

//     if (roll_no.value === "") {
//         rollNoError.style.display = 'block';
//         isValid = false;
//     } else {
//         rollNoError.style.display = 'none';
//     }

//     if (course.value === "") {
//         courseError.style.display = 'block';
//         isValid = false;
//     } else {
//         courseError.style.display = 'none';
//     }

//     if (picture.files.length === 0) {
//         pictureError.style.display = 'block';
//         isValid = false;
//     } else {
//         pictureError.style.display = 'none';
//     }

//     return isValid;
// }

// function displayImage(templateId) {
//     const file = picture.files[0];
//     const reader = new FileReader();
//     reader.onloadend = function () {
//         document.getElementById(templateId).src = reader.result;
//     }
//     if (file) {
//         reader.readAsDataURL(file);
//     } else {
//         document.getElementById(templateId).src = "";
//     }
// }

// function temp1() {
//     clearErrors();
//     if (!validateData()) {
//         hideTemplates();
//     } else {
//         displayImage("profilePic1");
//         document.getElementById("temp1").style.display = 'block';
//         document.getElementById("temp2").style.display = 'none';
//         document.getElementById("Name1").innerText = "Name: " + nameinp.value;
//         document.getElementById("Email1").innerText = "Email: " + email.value;
//         document.getElementById("RollNo1").innerText = "Roll No: " + roll_no.value;
//         document.getElementById("course1").innerText = "Course: " + course.value;
//     }
// }

// function temp2() {
//     clearErrors();
//     if (!validateData()) {
//         hideTemplates();
//     } else {
//         displayImage("profilePic2");
//         document.getElementById("temp1").style.display = 'none';
//         document.getElementById("temp2").style.display = 'block';
//         document.getElementById("Name2").innerText = "Name: " + nameinp.value;
//         document.getElementById("email2").innerText = "Email: " + email.value;
//         document.getElementById("rollno2").innerText = "Roll No: " + roll_no.value;
//         document.getElementById("course2").innerText = "Course: " + course.value;
//     }
// }

// function hideTemplates() {
//     document.getElementById("temp1").style.display = 'none';
//     document.getElementById("temp2").style.display = 'none';
// }

function validateData() {
    let isValid = true;

    // Validate fields
    const fields = [
        { id: 'name', errorId: 'nameError' },
        { id: 'email', errorId: 'emailError' },
        { id: 'phone', errorId: 'phoneError' },
        { id: 'address', errorId: 'addressError' },
        { id: 'dob', errorId: 'dobError' },
        { id: 'degree', errorId: 'degreeError' },
        { id: 'institution', errorId: 'institutionError' },
        { id: 'graduationYear', errorId: 'gradYearError' },
        { id: 'skills', errorId: 'skillsError' }
    ];

    fields.forEach(field => {
        const input = document.getElementById(field.id);
        const error = document.getElementById(field.errorId);
        if (input.value.trim() === "") {
            error.style.display = 'inline';
            isValid = false;
        } else {
            error.style.display = 'none';
        }
    });

    return isValid;
}

function generateResume() {
    if (!validateData()) {
        return;
    }

    
    document.getElementById("resumeTemplate").style.display = 'block';
    
    document.getElementById("displayName").innerText = document.getElementById("name").value;
    document.getElementById("displayEmail").innerText = document.getElementById("email").value;
    document.getElementById("displayPhone").innerText = document.getElementById("phone").value;
    document.getElementById("displayAddress").innerText = document.getElementById("address").value;
    document.getElementById("displayDOB").innerText = document.getElementById("dob").value;
    document.getElementById("displayDegree").innerText = document.getElementById("degree").value;
    document.getElementById("displayInstitution").innerText = document.getElementById("institution").value;
    document.getElementById("displayGradYear").innerText = document.getElementById("graduationYear").value;
    document.getElementById("displaySkills").innerText = document.getElementById("skills").value;

 
    const photoInput = document.getElementById("photo");
    const profilePic = document.getElementById("profilePic");
    const file = photoInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            profilePic.src = event.target.result;
        };
        reader.readAsDataURL(file);
    }
}







// Show template and display the data
   // Display uploaded photo