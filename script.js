const d = document;
const stdName = d.querySelector("#stdName");
const stdRollNo = d.querySelector("#stdRollNo");
const stdCollegeName = d.querySelector("#stdCollegeName");
const stdStudyField = d.querySelector("#stdStudyField");
const stdPassword = d.querySelector("#stdPassword");
const submitBtn = d.querySelector("#submitButton");
const themeBtn = d.querySelector("#themeBtn");
console.log(submitBtn);
const studentData = {
  stdName,
  stdRollNo,
  stdCollegeName,
  stdStudyField,
  stdPassword,
};

themeBtn.addEventListener("click", () => {
  const darkMode = document.body.classList.toggle("bg-gray-100");
  // document.body.classList.add("transition")
  themeBtn.classList.toggle("bg-blue-500");
  themeBtn.classList.toggle("text-white");

  themeBtn.textContent = darkMode
    ? "Switch To Dark Mode"
    : "Switch To Light Mode";
});

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(e);
  studentData.stdName = stdName.value;
  studentData.stdRollNo = stdRollNo.value;
  studentData.stdCollegeName = stdCollegeName.value;
  studentData.stdStudyField = stdStudyField.value;
  studentData.stdPassword = stdPassword.value;
  localStorage.setItem("studentsObject", JSON.stringify(studentData));
  const notifierToast = document.createElement("div");
  notifierToast.innerHTML = "Data Saved Successfully";
  notifierToast.classList.add(
    "bg-green-400",
    "p-3",
    "font-semibold",
    "font-sans",
    "inline-block",
    "absolute",
    "top-1",
    "left-1"
  );
  document.body.appendChild(notifierToast);
  setTimeout(() => {
    notifierToast.style.display = "none";
    setTimeout(() => {
      location.href = "./GetYourData.html";
    }, 2000);
  }, 1000);
});
