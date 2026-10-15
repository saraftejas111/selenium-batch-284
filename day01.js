// var , let , const   ---> Homework

age = 12;

if (age >= 18) {
  console.log("eligible for voting");
} else {
  console.log("not eligible");
}

function greet() {
  console.log("hello world");
}

greet();

function sum(a, b) {
  return a + b;
}

console.log(sum(12, 3));

function giveMsg() {
  console.log("Hello i am from geveMsg function...");
}

// fetch the elements : document

let name = document.getElementById("one");

console.log("User Name : ", name.innerHTML);

console.log("check id : ", name.id);

function valid() {
  let u = document.getElementById("uname").value;
  let p = document.getElementById("pass").value;

  if (u == "tejas" && p == "tka") {

    window.open("success.html");

  } else {

    alert("invalid username or password");
    
  }
}
