import {auth,db} from '/firebase.js';
import { createUserWithEmailAndPassword} from 
firebase/auth

import{ref,set} from 
"https://www.gstatic.com/firebasejs/11.8.1/firebase-database.js";

const form = document.getElementById("signupform");

form.addEventListener("submit", async(e)=>{
    e.preventDefault();
    const fullname = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim().toLowerCase() 
    const password = document.getElementById("password").value;
    const sex = document.getElementById("sex").value;
    const age = document.getElementById("date").value;
    const role = document.getElementById("role").value;
    const phone= document.getElementById("phone").value;
    const department = document.getElementById("department").value;
    const faculty = document.getElementById("faculty").value;
    const state = document.getElementById("state").value;
  

    if (!fullname) {
     alert("please enter your name"); 
     return;  
  }

try{
    const userCredential = await
    createUserWithEmailAndPassword(auth,email,password);
const user = userCredential.user;
await set( ref(db, "users/"+user.uid), {
    fullname: fullname,
    email: email,
    phone: phone,
    sex: sex,
    state:state,
    role: role,
    department:department,
    faculty:faculty,
    age:age,
    uid:user.uid
});
alert("registration successful");
window.location.href="./index.html";
} catch(err){
    alert("Error:"+ err.message);
}
});
