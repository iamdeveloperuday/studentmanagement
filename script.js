//=================================================
//                   STUDENT OBJECT
//                ==================================================

// json.parse ka kam hai string ko array ma change karna
const savedStudents = JSON.parse(localStorage.getItem("students"));
// student saved ma aaiyanga
const students = savedStudents || [
  {
    name: "Uday Kumar Baniya",
    image: "https://i.pravatar.cc/500?img=12",
    status: "Active",
    className: "Class 12",
    stream: "Computer",
    admissionYear: 2024,

    dob: "12 January 2008",
    gender: "Male",
    section: "A",
    phone: "98XXXXXXXX",
    email: "aman@example.com",
    address: "Birgunj, Nepal",
  },
  {
    name: "aman Kumar Baniya",
    image: "https://i.pravatar.cc/500?img=12",
    status: "Active",
    className: "Class 11",
    stream: "Computer",
    admissionYear: 2026,

    dob: "12 January 2008",
    gender: "Male",
    section: "A",
    phone: "98XXXXXXXX",
    email: "aman@example.com",
    address: "Birgunj, Nepal",
  },

  {
    name: "Anisha Sharma",
    image: "https://i.pravatar.cc/500?img=47",
    status: "Active",
    className: "Class 12",
    stream: "Science",
    admissionYear: 2024,

    dob: "12 January 2008",
    gender: "Male",
    section: "A",
    phone: "98XXXXXXXX",
    email: "aman@example.com",
    address: "Birgunj, Nepal",
  },

  {
    name: "Aayush Thapa",
    image: "https://i.pravatar.cc/500?img=33",
    status: "Active",
    className: "Class 12",
    stream: "Management",
    admissionYear: 2023,

    dob: "12 January 2008",
    gender: "Male",
    section: "A",
    phone: "98XXXXXXXX",
    email: "aman@example.com",
    address: "Birgunj, Nepal",
  },

  {
    name: "Sneha Karki",
    image: "https://i.pravatar.cc/500?img=49",
    status: "Active",
    className: "Class 11",
    stream: "Science",
    admissionYear: 2025,

    dob: "12 January 2008",
    gender: "Male",
    section: "A",
    phone: "98XXXXXXXX",
    email: "aman@example.com",
    address: "Birgunj, Nepal",
  },

  {
    name: "Rohan Yadav",
    image: "https://i.pravatar.cc/500?img=11",
    status: "Active",
    className: "Class 12",
    stream: "Computer",
    admissionYear: 2024,

    dob: "12 January 2008",
    gender: "Male",
    section: "A",
    phone: "98XXXXXXXX",
    email: "aman@example.com",
    address: "Birgunj, Nepal",
  },

  {
    name: "Priya Gupta",
    image: "https://i.pravatar.cc/500?img=45",
    status: "Active",
    className: "Class 11",
    stream: "Management",
    admissionYear: 2025,

    dob: "12 January 2008",
    gender: "Male",
    section: "A",
    phone: "98XXXXXXXX",
    email: "aman@example.com",
    address: "Birgunj, Nepal",
  },

  {
    name: "Bibek Shah",
    image: "https://i.pravatar.cc/500?img=68",
    status: "Active",
    className: "Class 12",
    stream: "Science",
    admissionYear: 2024,

    dob: "12 January 2008",
    gender: "Male",
    section: "A",
    phone: "98XXXXXXXX",
    email: "aman@example.com",
    address: "Birgunj, Nepal",
  },

  {
    name: "Kritika Rai",
    image: "https://i.pravatar.cc/500?img=25",
    status: "Active",
    className: "Class 12",
    stream: "Computer",
    admissionYear: 2024,

    dob: "12 January 2008",
    gender: "Male",
    section: "A",
    phone: "98XXXXXXXX",
    email: "aman@example.com",
    address: "Birgunj, Nepal",
  },

  {
    name: "Sujan Chaudhary",
    image: "https://i.pravatar.cc/500?img=59",
    status: "Active",
    className: "Class 11",
    stream: "Science",
    admissionYear: 2025,

    dob: "12 January 2008",
    gender: "Male",
    section: "A",
    phone: "98XXXXXXXX",
    email: "aman@example.com",
    address: "Birgunj, Nepal",
  },

  {
    name: "Nisha Thapa",
    image: "https://i.pravatar.cc/500?img=32",
    status: "Active",
    className: "Class 12",
    stream: "Management",
    admissionYear: 2024,

    dob: "12 January 2008",
    gender: "Male",
    section: "A",
    phone: "98XXXXXXXX",
    email: "aman@example.com",
    address: "Birgunj, Nepal",
  },

  {
    name: "Sagar Bista",
    image: "https://i.pravatar.cc/500?img=14",
    status: "Active",
    className: "Class 12",
    stream: "Science",
    admissionYear: 2024,

    dob: "12 January 2008",
    gender: "Male",
    section: "A",
    phone: "98XXXXXXXX",
    email: "aman@example.com",
    address: "Birgunj, Nepal",
  },

  {
    name: "Aarati Joshi",
    image: "https://i.pravatar.cc/500?img=44",
    status: "Active",
    className: "Class 11",
    stream: "Computer",
    admissionYear: 2025,

    dob: "12 January 2008",
    gender: "Male",
    section: "A",
    phone: "98XXXXXXXX",
    email: "aman@example.com",
    address: "Birgunj, Nepal",
  },
];

//=================================================
//                   STUDENT CARDS
//                ==================================================

function displayCard(arr) {
  const studentGrid = document.querySelector(".students-grid");

  //clearing previous card
  studentGrid.innerHTML = "";

  //if no student found
  if (arr.length === 0) {
    let noStudentMsg = document.createElement("h2");
    noStudentMsg.textContent = "No Student Found!";
    studentGrid.append(noStudentMsg);
    return;
  }

  // showing cards
  arr.forEach((student) => {
    // Article
    const articleCard = document.createElement("article");
    articleCard.classList.add("student-card");

    // Image box
    const imageBox = document.createElement("div");
    imageBox.classList.add("student-image-box");

    // Image
    const image = document.createElement("img");
    image.src = student.image;
    image.alt = student.name;

    // Status
    const status = document.createElement("span");
    status.classList.add("status");
    status.textContent = student.status;

    // Put image + status inside imageBox
    imageBox.append(image, status);

    // Content
    const studentContent = document.createElement("div");
    studentContent.classList.add("student-content");

    // Class + stream
    const studentClass = document.createElement("span");
    studentClass.classList.add("student-class");
    studentClass.textContent = `${student.className} • ${student.stream}`;

    // Name
    const name = document.createElement("h3");
    name.textContent = student.name;

    // Admission year
    const admissionYear = document.createElement("p");
    admissionYear.classList.add("admission-year");
    admissionYear.textContent = `◷ Admission Year: ${student.admissionYear}`;

    // Button
    const viewBtn = document.createElement("button");
    viewBtn.classList.add("view-btn");
    viewBtn.type = "button";
    viewBtn.textContent = "View Information";

    // student ka bio dekhna ka liya
    let openStudentModel = document.querySelector("#studentModal");

    //model element

    const studentModelImg = document.querySelector("#studentModelimg img");
    const studentModelName = document.querySelector("#studentModelName");
    const studentModelAbout = document.querySelector("#studentModelabout");
    const studentModelFullName = document.querySelector(
      "#studentModelFullName",
    );
    const studentModelId = document.querySelector("#studentModelid");
    const studentModelDob = document.querySelector("#studentModelDob");
    const studentModelGender = document.querySelector("#studentModelgender");
    const studentModelClass = document.querySelector("#studentModelclass");
    const studentModelSection = document.querySelector("#studentModelSection");
    const studentModelAdmissionYear = document.querySelector(
      "#studentModelAddmisionYear",
    );
    const studentModelNumber = document.querySelector("#studentmodelNumber");
    const studentModelEmail = document.querySelector("#studentModelEmail");
    const studentModelAddress = document.querySelector("#studentModelAddress");

    viewBtn.addEventListener("click", () => {
      studentModelImg.src = student.image;
      studentModelImg.alt = student.name;

      studentModelName.textContent = student.name;
      studentModelAbout.textContent = `${student.className} • ${student.stream}`;

      studentModelFullName.textContent = student.name;
      studentModelId.textContent = student.studentId;
      studentModelDob.textContent = student.dob;
      studentModelGender.textContent = student.gender;
      studentModelClass.textContent = student.className;
      studentModelSection.textContent = student.section;
      studentModelAdmissionYear.textContent = student.admissionYear;
      studentModelNumber.textContent = student.phone;
      studentModelEmail.textContent = student.email;
      studentModelAddress.textContent = student.address;

      openStudentModel.classList.add("show");
    });

    //student ka bio close karna ka liya
    let closeStudentModel = document.querySelector("#closeStudentModal");

    closeStudentModel.addEventListener("click", () => {
      openStudentModel.classList.remove("show");
    });

    // Arrow
    const arrow = document.createElement("span");
    arrow.textContent = "→";

    // Put arrow inside button
    viewBtn.append(arrow);

    // Put content inside studentContent
    studentContent.append(studentClass, name, admissionYear, viewBtn);

    // Put imageBox + content inside article
    articleCard.append(imageBox, studentContent);

    // Put article inside grid
    studentGrid.append(articleCard);
  });
}

displayCard(students);

//=================================================
//                   FILTER CARDS
//                ==================================================
//selecting input

let input = document.querySelector("#searchInput");

input.addEventListener("input", () => {
  let inputValue = input.value.toLowerCase().trim();

  let studentNameFilter = students.filter(function (student) {
    return (
      student.name.toLowerCase().includes(inputValue) ||
      student.className.toLowerCase().includes(inputValue) ||
      student.stream.toLowerCase().includes(inputValue)
    );
  });

  displayCard(studentNameFilter);
});

//=================================================
//                  TOGGLE BUTTON
//                ==================================================
//selecting button
let toggleBtn = document.querySelector("#themeToggle");

// getting saved theme from localstorage
const saveTheme = localStorage.getItem("theme");

if (saveTheme === "light") {
  //if light is saved in localstorage
  document.body.classList.add("light");
  toggleBtn.classList.add("sun");
} else {
  //if dark is saved in localstorage
  document.body.classList.add("dark");
  toggleBtn.classList.add("moon");
}

//events for toggling
toggleBtn.addEventListener("click", () => {
  //switch between dark and light
  document.body.classList.toggle("light");
  if (document.body.classList.contains("light")) {
    // for light adding sun and removing moon
    toggleBtn.classList.remove("moon");
    toggleBtn.classList.add("sun");
    //saving light to localstorage
    localStorage.setItem("theme", "light");
  } else {
    // for dark adding moon and removing sun
    toggleBtn.classList.add("moon");
    toggleBtn.classList.remove("sun");
    //saving dark to localstorage
    localStorage.setItem("theme", "dark");
  }
});

//=================================================
//                  ADDSTUDENTS FORM OPEN AND CLOSE
//                ==================================================
//add student

let addStudentBtn = document.querySelector("#openAddStudent");
let formOverlay = document.querySelector(".form-overlay");
let addStudentForm = document.querySelector(".student-form");
let closeBtn = document.querySelectorAll(".close-form, .cancel-btn");

// when add student clicked form open
addStudentBtn.addEventListener("click", (e) => {
  formOverlay.style.display = "flex";
});

//this is for closing form if multiple close btn
function closeForm() {
  formOverlay.style.display = "none";
}
//iss ka kam form close karna hai
closeBtn.forEach((button) => {
  button.addEventListener("click", closeForm);
});

//=================================================
//                  ADD STUDENT FORM VALIDATION
//                ==================================================

//=================================================
//                  CREATING NEW OBJECTS FOR NEW STUDENT AND PUSHING THEM IN STUDENTS OBJECT
//                ==================================================
//=================================================
//              ADD STUDENT FORM VALIDATION
//=================================================

let addFormName = document.querySelector("#addFormName");
let addFormClass = document.querySelector("#addFormClass");
let addFormStream = document.querySelector("#addFormStream");
let addFormStatus = document.querySelector("#addFormStatus");
let admissionYear = document.querySelector("#admissionYear");
let addFormImage = document.querySelector("#addFormImage");

let addFormDob = document.querySelector("#addFormDob");
let addFormGender = document.querySelector("#addFormGender");
let addFormSection = document.querySelector("#addFormSection");
let addFormPhone = document.querySelector("#addFormPhone");
let addFormEmail = document.querySelector("#addFormEmail");
let addFormAddress = document.querySelector("#addFormAddress");

// Error messages
let nameError = addFormName.parentElement.querySelector(".error");
let classError = addFormClass.parentElement.querySelector(".error");
let streamError = addFormStream.parentElement.querySelector(".error");
let statusError = addFormStatus.parentElement.querySelector(".error");
let yearError = admissionYear.parentElement.querySelector(".error");
let imageError = addFormImage.parentElement.querySelector(".error");
let dobError = addFormDob.parentElement.querySelector(".error");
let genderError = addFormGender.parentElement.querySelector(".error");
let sectionError = addFormSection.parentElement.querySelector(".error");
let phoneError = addFormPhone.parentElement.querySelector(".error");
let emailError = addFormEmail.parentElement.querySelector(".error");
let addressError = addFormAddress.parentElement.querySelector(".error");

// Regex
const nameRegex = /^[A-Za-z]+(?:\s[A-Za-z]+)*$/;
const classRegex = /^[0-9]+$/;

//=================================================
//                  SUBMIT FORM
//=================================================

addStudentForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let isValid = true;

  // Get values
  let name = addFormName.value.trim();
  let classValue = addFormClass.value.trim();
  let streamValue = addFormStream.value;
  let statusValue = addFormStatus.value;
  let yearValue = admissionYear.value.trim();
  let imageURL = addFormImage.value.trim();

  let dob = addFormDob.value;
  let gender = addFormGender.value;
  let section = addFormSection.value.trim();
  let phone = addFormPhone.value.trim();
  let email = addFormEmail.value.trim();
  let address = addFormAddress.value.trim();

  //=================================================
  //                  NAME VALIDATION
  //=================================================

  if (name === "") {
    nameError.textContent = "Enter your name";

    addFormName.classList.add("input-error");
    addFormName.classList.remove("input-valid");

    isValid = false;
  } else if (!nameRegex.test(name)) {
    nameError.textContent = "Name can contain alphabets and spaces only";

    addFormName.classList.add("input-error");
    addFormName.classList.remove("input-valid");

    isValid = false;
  } else {
    nameError.textContent = "";

    addFormName.classList.remove("input-error");
    addFormName.classList.add("input-valid");
  }

  //=================================================
  //                  CLASS VALIDATION
  //=================================================

  if (classValue === "") {
    classError.textContent = "Enter class";

    addFormClass.classList.add("input-error");
    addFormClass.classList.remove("input-valid");

    isValid = false;
  } else if (!classRegex.test(classValue)) {
    classError.textContent = "Class must contain numbers only";

    addFormClass.classList.add("input-error");
    addFormClass.classList.remove("input-valid");

    isValid = false;
  } else {
    classError.textContent = "";

    addFormClass.classList.remove("input-error");
    addFormClass.classList.add("input-valid");
  }

  //=================================================
  //                  STREAM VALIDATION
  //=================================================

  if (streamValue === "") {
    streamError.textContent = "Select a stream";

    addFormStream.classList.add("input-error");
    addFormStream.classList.remove("input-valid");

    isValid = false;
  } else {
    streamError.textContent = "";

    addFormStream.classList.remove("input-error");
    addFormStream.classList.add("input-valid");
  }

  //=================================================
  //                  STATUS VALIDATION
  //=================================================

  if (statusValue === "") {
    statusError.textContent = "Select status";

    addFormStatus.classList.add("input-error");
    addFormStatus.classList.remove("input-valid");

    isValid = false;
  } else {
    statusError.textContent = "";

    addFormStatus.classList.remove("input-error");
    addFormStatus.classList.add("input-valid");
  }

  //=================================================
  //              ADMISSION YEAR VALIDATION
  //=================================================

  let year = Number(yearValue);

  if (yearValue === "") {
    yearError.textContent = "Enter admission year";

    admissionYear.classList.add("input-error");
    admissionYear.classList.remove("input-valid");

    isValid = false;
  } else if (year < 1900 || year > 2100) {
    yearError.textContent = "Enter a valid year between 1900 and 2100";

    admissionYear.classList.add("input-error");
    admissionYear.classList.remove("input-valid");

    isValid = false;
  } else {
    yearError.textContent = "";

    admissionYear.classList.remove("input-error");
    admissionYear.classList.add("input-valid");
  }

  //=================================================
  //                  IMAGE URL VALIDATION
  //=================================================

  if (imageURL === "") {
    imageError.textContent = "Enter an image URL";

    addFormImage.classList.add("input-error");
    addFormImage.classList.remove("input-valid");

    isValid = false;
  } else {
    try {
      let url = new URL(imageURL);

      if (url.protocol !== "http:" && url.protocol !== "https:") {
        throw new Error();
      }

      imageError.textContent = "";

      addFormImage.classList.remove("input-error");
      addFormImage.classList.add("input-valid");
    } catch {
      imageError.textContent = "Enter a valid image URL";

      addFormImage.classList.add("input-error");
      addFormImage.classList.remove("input-valid");

      isValid = false;
    }
  }

  //=================================================
  //                  DOB VALIDATION
  //=================================================

  if (dob === "") {
    dobError.textContent = "Select date of birth";

    addFormDob.classList.add("input-error");
    addFormDob.classList.remove("input-valid");

    isValid = false;
  } else {
    dobError.textContent = "";

    addFormDob.classList.remove("input-error");
    addFormDob.classList.add("input-valid");
  }

  //=================================================
  //                  GENDER VALIDATION
  //=================================================

  if (gender === "") {
    genderError.textContent = "Select gender";

    addFormGender.classList.add("input-error");
    addFormGender.classList.remove("input-valid");

    isValid = false;
  } else {
    genderError.textContent = "";

    addFormGender.classList.remove("input-error");
    addFormGender.classList.add("input-valid");
  }

  //=================================================
  //                  SECTION VALIDATION
  //=================================================

  if (section === "") {
    sectionError.textContent = "Enter section";

    addFormSection.classList.add("input-error");
    addFormSection.classList.remove("input-valid");

    isValid = false;
  } else {
    sectionError.textContent = "";

    addFormSection.classList.remove("input-error");
    addFormSection.classList.add("input-valid");
  }

  //=================================================
  //                  PHONE VALIDATION
  //=================================================

  const phoneRegex = /^[0-9]{10}$/;

  if (phone === "") {
    phoneError.textContent = "Enter phone number";

    addFormPhone.classList.add("input-error");
    addFormPhone.classList.remove("input-valid");

    isValid = false;
  } else if (!phoneRegex.test(phone)) {
    phoneError.textContent = "Phone number must contain 10 digits";

    addFormPhone.classList.add("input-error");
    addFormPhone.classList.remove("input-valid");

    isValid = false;
  } else {
    phoneError.textContent = "";

    addFormPhone.classList.remove("input-error");
    addFormPhone.classList.add("input-valid");
  }

  //=================================================
  //                  EMAIL VALIDATION
  //=================================================

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === "") {
    emailError.textContent = "Enter email";

    addFormEmail.classList.add("input-error");
    addFormEmail.classList.remove("input-valid");

    isValid = false;
  } else if (!emailRegex.test(email)) {
    emailError.textContent = "Enter a valid email";

    addFormEmail.classList.add("input-error");
    addFormEmail.classList.remove("input-valid");

    isValid = false;
  } else {
    emailError.textContent = "";

    addFormEmail.classList.remove("input-error");
    addFormEmail.classList.add("input-valid");
  }

  //=================================================
  //                  ADDRESS VALIDATION
  //=================================================

  if (address === "") {
    addressError.textContent = "Enter address";

    addFormAddress.classList.add("input-error");
    addFormAddress.classList.remove("input-valid");

    isValid = false;
  } else {
    addressError.textContent = "";

    addFormAddress.classList.remove("input-error");
    addFormAddress.classList.add("input-valid");
  }

  //=================================================
  //              STOP IF INVALID
  //=================================================

  if (!isValid) {
    return;
  }

  //=================================================
  //              CREATE NEW STUDENT
  //=================================================

  let newStudent = {
    name: name,
    image: imageURL,
    status: statusValue,
    className: classValue,
    stream: streamValue,
    admissionYear: year,

    dob: dob,
    gender: gender,
    section: section,
    phone: phone,
    email: email,
    address: address,
  };

  // Add student to array
  students.push(newStudent);

  // adding new student data save to student
  localStorage.setItem("students", JSON.stringify(students));

  // Display updated cards
  displayCard(students);

  // Close form
  closeForm();

  // Reset form
  addStudentForm.reset();

  // Remove validation effects
  addFormName.classList.remove("input-valid");
  addFormClass.classList.remove("input-valid");
  addFormStream.classList.remove("input-valid");
  addFormStatus.classList.remove("input-valid");
  admissionYear.classList.remove("input-valid");
  addFormImage.classList.remove("input-valid");
  addFormDob.classList.remove("input-valid");
  addFormGender.classList.remove("input-valid");
  addFormSection.classList.remove("input-valid");
  addFormPhone.classList.remove("input-valid");
  addFormEmail.classList.remove("input-valid");
  addFormAddress.classList.remove("input-valid");
});
