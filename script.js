const d = document;
const stdName = d.querySelector("#stdName");
const stdRollNo = d.querySelector("#stdRollNo");
const stdCollegeName = d.querySelector("#stdCollegeName");
const stdStudyField = d.querySelector("#stdStudyField");
const stdPassword = d.querySelector("#stdPassword");
const submitBtn = d.querySelector("#submitButton");
console.log(submitBtn);

const studentData = {
  stdName,
  stdRollNo,
  stdCollegeName,
  stdStudyField,
  stdPassword,
};

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(e);
  studentData.stdName = stdName.value;
  studentData.stdRollNo = stdRollNo.value;
  studentData.stdCollegeName = stdCollegeName.value;
  studentData.stdStudyField = stdStudyField.value;
  studentData.stdPassword = stdPassword.value;
  localStorage.setItem("studentsObject", JSON.stringify(studentData));
  location.href = "./GetYourData.html";
});
