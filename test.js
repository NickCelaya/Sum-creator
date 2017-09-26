let nick = () => {
   let a = document.querySelector("#a").value; //or can use or can use document.getElementById inseatd of querySelector
   let b = document.querySelector("#b").value; //or can use or can use document.getElementById inseatd of querySelector
   

   let sum = parseInt(a) + parseInt(b)
   console.log("this is the sum", sum)
//    return sum; 

   document.querySelector("#test").innerHTML = sum; //or can use or can use document.getElementById inseatd of querySelector

   
};

let reset = () => {

    let a = document.getElementById("a").value = ""; //or can use querySelector insted of document.getElementById
    let b = document.getElementById("b").value = ""; //or can use querySelector insted of document.getElementById
    let c = document.getElementById("test").innerHTML = ""; //or can use querySelector insted of document.getElementById

    console.log(a);
    console.log(b);
    console.log(c);
};



