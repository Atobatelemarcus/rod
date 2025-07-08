import {auth,db} from '/firebase.js';
import { signInWithEmailAndPassword} from 
"https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js";
import{ ref,get} from 
"https://www.gstatic.com/firebasejs/11.8.1/firebase-database.js";

const form = document.getElementById("loginform");
form.addEventListener("submit", async(e)=>
  {
e.preventDefault();
const email = form.email.value;
const password =form.password.value;
try{
  const userCredential = await signInWithEmailAndPassword(auth,email,password);
  const user =userCredential.user;
  const snapshot = await get(ref(db,"users/"+ user.uid));

  if(snapshot.exists()){
    const userdata = snapshot.val();
    const role = userdata.role;

    if(role==="STUDENT"){
      window.location.href="./student.html"
    }
    else if(role==="ADMIN"){
      window.location.href='./admin.html' 
    } else{
      alert("unknown role.contact support");
    }
  }
  else{
    alert("No user found");
  }
}  

catch(err){
  alert("Login failed:"+err.message);
}});


   
