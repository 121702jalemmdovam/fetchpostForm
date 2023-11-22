const myForm = document.getElementById('myForm');
const inpOne = document.getElementById('inpOne');
const inpTwo = document.getElementById('inpTwo');
const inpThree = document.getElementById('inpThree');
const inpFour = document.getElementById('inpFour');
const myDiv = document.getElementById('myDiv');

myForm.addEventListener('submit', function (event) {
    event.preventDefault();

  axios.post("https://655c31a3ab37729791aa06eb.mockapi.io/username/students", {
    name: inpOne.value,
    surname: inpTwo.value,
    age: inpThree.value,
    studentID: inpFour.value,
  })
    .then(response => {
      console.log(response.data);
    })
})
               
// axios.get("https://655c31a3ab37729791aa06eb.mockapi.io/username/students/1")
//   .then((res) => {
//     const data = res.data;

//       const listItem = document.createElement('div');
//       listItem.innerHTML = `
//         <p>Name: ${data.name}</p>
//         <p>Surname: ${data.surname}</p>
//         <p>Age: ${data.age}</p>
//         <p>Student ID: ${data.studentID}</p>
//       `;
//       myDiv.appendChild(listItem);
//     ;
//   })
//   MyForm.addEventListener('submit',function () {
    
//   })
