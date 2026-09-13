//=================================================
//                   STUDENT OBJECT
//                ==================================================

// json.parse ka kam hai string ko array ma change karna
const savedStudents = JSON.parse(localStorage.getItem("students"));
// student saved ma aaiyanga
const students = savedStudents || [
  {
    studentId: 1000,
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
    studentId: 1001,
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
    studentId: 1002,
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
    studentId: 1003,
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
    studentId: 1004,
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
    studentId: 1005,
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
    studentId: 1006,
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
    studentId: 1007,
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
    studentId: 1008,
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
    studentId: 1009,
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
    studentId: 1010,
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
    studentId: 1011,
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
    studentId: 1012,
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

  // student ka bio dekhna ka liya
  let openStudentModel = document.querySelector("#studentModal");

  //model element

  const studentModelImg = document.querySelector("#studentModelimg img");
  const studentModelName = document.querySelector("#studentModelName");
  const studentModelAbout = document.querySelector("#studentModelabout");
  const studentModelFullName = document.querySelector("#studentModelFullName");
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

  //student ka bio close karna ka liya
  let closeStudentModel = document.querySelector("#closeStudentModal");

  closeStudentModel.addEventListener("click", () => {
    openStudentModel.classList.remove("show");
  });

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

    const searchValue = searchInput.value.trim().toLowerCase();
    const studentName = student.name;

    if (searchValue && studentName.toLowerCase().includes(searchValue)) {
      const start = studentName.toLowerCase().indexOf(searchValue);
      const end = start + searchValue.length;

      name.innerHTML =
        studentName.slice(0, start) +
        `<span class="highlight">${studentName.slice(start, end)}</span>` +
        studentName.slice(end);
    } else {
      name.textContent = studentName;
    }

    name.style.textTransform = "capitalize";

    // Admission year
    const admissionYear = document.createElement("p");
    admissionYear.classList.add("admission-year");
    admissionYear.textContent = `◷ Admission Year: ${student.admissionYear}`;

    // Button
    const viewBtn = document.createElement("button");
    viewBtn.classList.add("view-btn");
    viewBtn.type = "button";
    viewBtn.textContent = "View Information";

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

    // delete btn

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", () => {
      const confirmDelete = confirm(`Delete ${student.name}?`);
      if (!confirmDelete) return;

      let index = students.indexOf(student);

      if (index !== -1) {
        students.splice(index, 1);
        localStorage.setItem("students", JSON.stringify(students));

        displayCard(students);
      }
    });

    // Arrow
    const arrow = document.createElement("span");
    arrow.textContent = "→";

    // Put arrow inside button
    viewBtn.append(arrow);

    // Put content inside studentContent
    studentContent.append(
      studentClass,
      name,
      admissionYear,
      viewBtn,
      deleteBtn,
    );

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
//                  ADD STUDENTS FORM OPEN AND CLOSE
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

// let editStudentModel = document.querySelector("#editStudentModel");

// editStudentModel.addEventListener("click", () => {
//   formOverlay.style.display = "flex";
// });

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
    studentId: students.length
      ? Math.max(...students.map((student) => student.studentId || 999)) + 1
      : 1000,

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

//contact form reset

// let contactForm = document.querySelector("#contactForm");
// contactForm.addEventListener("submit", () =>{
//   setTimeout(() => {
// contactForm.reset();
//   },1000);
// });

let contactForm = document.querySelector("#contactForm");

contactForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(contactForm);

  try {
    const response = await fetch(contactForm.action, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      contactForm.reset();
      alert("Message sent successfully!");
    } else {
      alert("Something went wrong. Please try again.");
    }
  } catch (error) {
    alert("Network error. Please try again.");
  }
});

//=================================================
//              welcome msg
//=================================================

//WELCOME NOTIFICATION
let parentDiv = document.querySelector(".parents");

function welComeNotification(config) {
  return function (str) {
    let div = document.createElement("div");
    div.classList.add("notification");
    div.textContent = str;
    parentDiv.appendChild(div);
    setTimeout(() => {
      parentDiv.removeChild(div);
    }, config.duration * 1000);
    if (document.body.classList.contains("dark")) {
      div.style.backgroundColor = "rgb(18, 16, 16)";
      div.style.color = "white";
    } else {
      div.style.backgroundColor = "white";
      div.style.color = "rgb(18, 16, 16)";
    }
  };
}

let fcn = welComeNotification({
  positionX: "right",
  positionY: "top",
  duration: 3,
});

fcn("WELCOME TO STUDORA-UDAY");
setTimeout(() => {
  fcn("CONTACT FOR ANY QUERRY");
}, 2000);

//=================================================
//              GOTOPBTN
//=================================================

let goTopBtn = document.querySelector("#goTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    goTopBtn.style.display = "block";
  } else {
    goTopBtn.style.display = "none";
  }
});

goTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

//=================================================
//              MENUBTN
//=================================================

//selecting menuBtn
let menuBtn = document.querySelector("#menu");

//creating menusHow using js
const menuShow = document.createElement("div");

menuShow.classList.add("mobile-menu");

menuShow.innerHTML = `
  <a href="#home">Home</a>
  <a href="#students">Students</a>
  <a href="#about">About</a>
  <a href="#contact">Contact</a>

  <div class="menu-divider"></div>

  <button class="mobile-signin" id="mobileSignIn" type="button">
    <i class="fa-solid fa-right-to-bracket"></i>
    Sign In
  </button>
`;

document.body.appendChild(menuShow);

//toggling menu btn

menuBtn.addEventListener("click", () => {

let isOpen = menuShow.classList.toggle("show")

  if (isOpen) {
        menuBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`;

  } else {
       menuBtn.innerHTML = `<i class="fa-duotone fa-solid fa-bars-staggered"></i>`;

  }
});

//for links
menuShow.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuShow.classList.remove("show");
    menuBtn.innerHTML = `<i class="fa-duotone fa-solid fa-bars-staggered"></i>`;
  });
});

//for singIn
let mobileSingBtn = document.querySelector("#mobileSignIn");

mobileSingBtn.addEventListener("click", () => {
  menuShow.classList.remove("show");
  menuBtn.innerHTML = `<i class="fa-duotone fa-solid fa-bars-staggered"></i>`;
});

//=================================================
//             CURSOR
//=================================================

const cursorDot = document.querySelector(".cursor-dot");
const cursorRing = document.querySelector(".cursor-ring");
const cursorIcon = document.querySelector(".cursor-icon");

let mouseX = 0;
let mouseY = 0;

let ringX = 0;
let ringY = 0;

// Mouse position
document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  cursorDot.style.left = `${mouseX}px`;
  cursorDot.style.top = `${mouseY}px`;
});

// Smooth ring movement
function animateCursor() {
  ringX += (mouseX - ringX) * 0.15;
  ringY += (mouseY - ringY) * 0.15;

  cursorRing.style.left = `${ringX}px`;
  cursorRing.style.top = `${ringY}px`;

  requestAnimationFrame(animateCursor);
}
animateCursor();

//clickable element
let clickAbleElement = document.querySelectorAll(
  "a, button, input, textarea, select",
);

clickAbleElement.forEach((element) => {
  // Skip navbar elements
  if (element.closest(".nav-container")) return;

  element.addEventListener("mouseenter", () => {
    document.body.classList.add("cursor-hover");
    cursorIcon.textContent = "↗";
  });

  element.addEventListener("mouseleave", () => {
    document.body.classList.remove("cursor-card");

    cursorIcon.textContent = "";
  });
});

// Student cards
const studentCards = document.querySelectorAll(".student-card");

studentCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    document.body.classList.remove("cursor-hover");
    document.body.classList.add("cursor-card");

    cursorIcon.textContent = "✦";
  });

  card.addEventListener("mouseleave", () => {
    document.body.classList.remove("cursor-hover");

    cursorIcon.textContent = "";
  });
});

// Hide when mouse leaves website
document.addEventListener("mouseleave", () => {
  document.body.classList.add("cursor-hidden");
});

document.addEventListener("mouseenter", () => {
  document.body.classList.remove("cursor-hidden");
});
