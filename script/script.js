window.onscroll = function() {
    navbarScrollFunction();
    scrollFunction();
};

function scrollFunction() {
    let scrollTopBtn = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
}

function navbarScrollFunction() {
    let navbar = document.querySelector('nav');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
}


document.getElementById("scrollTopBtn").addEventListener("click", function(){
    window.scrollTo({top: 0, behavior: 'smooth'});
});


// variable declaration

var myVariable = "Some value";
let mySecond = true;
const pi = 3.141592653589793;
console.log(myVariable);
console.log(mySecond);
console.log(pi);

let n = (3/2 < 1) && (5-2 > 6) && (3*8 === 24);
console.log("N is =",n);

let ageRequire = 18;
if(ageRequire >= 18){
    console.log("Access granted")
}else{
    console.log("Access Denied")
}

let num = 150; 

if (num > 0) {
    if (num > 100) {
        console.log("The number is positive and greater than 100.");
    } else {
        console.log("The number is positive but less than 100.");
    }
} else {
    console.log("The number is negative.");
}

let grade = 43; 

// if..else statement for grading
if (grade >= 90) {
    console.log("A");
} else if (grade >= 80) {
    console.log("B");
} else if (grade >= 70) {
    console.log("C");
} else if (grade >= 55) {
    console.log("D");
} else {
    console.log("F");
}