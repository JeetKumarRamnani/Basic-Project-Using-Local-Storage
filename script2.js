const password = document.querySelector("#password");
const retrieveBtn = document.querySelector("#retrieveBtn");
const resultContainer = document.querySelector("#resultContainer");

function getDataFromLocalStorage() {
  return JSON.parse(localStorage.getItem("studentsObject"));
}

retrieveBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const studentData = getDataFromLocalStorage();
  console.log(studentData);
  const userInput = password.value;

  if (studentData.stdPassword == password.value) {
    resultContainer.style.display = "block";
    const ul = document.querySelector("#dataList");
    ul.innerHTML = generateHtml(studentData);
  } else {
    resultContainer.style.display = "none";
    alert("Please Enter Correct Password To Get Your Data");
  }
  console.log(userInput);
});

function generateHtml(studentData) {
  console.log(studentData);
  return `
    <div class="flex list-none font-semibold gap-2">
    <span class="font-bold text-red-600">Name : </span>
    <li> ${studentData.stdName}</li>
  </div>
  <div class="flex list-none font-semibold gap-2">
  <span class="font-bold text-red-600">RollNo: </span>
  <li> ${studentData.stdRollNo}</li>
</div>
<div class="flex list-none font-semibold gap-2">
<span class="font-bold text-red-600">College Name: </span>
<li> ${studentData.stdCollegeName}</li>
</div>
<div class="flex list-none font-semibold gap-2">
<span class="font-bold text-red-600">Study Field: </span>
<li> ${studentData.stdStudyField}</li>
</div>
        `;
}
