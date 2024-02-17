/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
  let arr2=arr.filter(stu=>stu.marks>50);
  console.log(arr2);
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  arr.forEach(element => {
    if(element.marks>50) console.log(element);
  });
}

function addData() {
  //Write your code here, just console.log
  arr.push({id:4,name:"susan",age:"20",marks:55});
  console.log(arr);
}

function removeFailedStudent() {
  //Write your code here, just console.log
  for(let k in arr) if(arr[k].marks<50) arr.splice(k,1);
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  let arr1 = [
    { id: 5, name: "johny", age: "18", marks: 80 },
    { id: 6, name: "jacky", age: "20", marks: 85 },
    { id: 7, name: "kareny", age: "19", marks: 35 },
  ];
  let newArr=arr.concat(arr1);
  console.log(newArr);
}
