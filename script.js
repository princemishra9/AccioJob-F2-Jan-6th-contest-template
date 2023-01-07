/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperswithMap() {
  //Write your code here
  arr.map(value);
  function value(arritem) {
    if (arritem.profession === "developer") {
      console.log(arritem);
    }
  }

}

function PrintDeveloperbyForEach() {
  //Write your code here
  arr.forEach(value1);
  function value1(arritem) {
    if (arritem.profession === "developer") {
      console.log(arritem);
    }
  }
}

function addData() {
  //Write your code here
  let object4 = { id: 4, name: "susan", age: "20", profession: "intern" };
  arr.push(object4);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here
  let arr = arr.filter(function (removeobj) {
    //callback function
    if (removeobj.profession !== "admin") {
      //filtering criteria
      return removeobj;
    }
  });
  console.log(arr);

}

function concatenateArray() {
  //Write your code here
  let newarray = [
    { id: 5, name: "preeti", age: "24", profession: "foodvlogger" },
    { id: 6, name: "aanjana", age: "22", profession: "prince ki gf" },
    { id: 7, name: "prince", age: "23", profession: "aanjana ka Bodygard" },
  ];
  let newArray = arr.concat(arr);
  console.log(newArray);

}
