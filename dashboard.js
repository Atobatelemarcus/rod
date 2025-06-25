import {auth,db} from '/firebase.js';
import { onAuthStateChanged} from 
"https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js";
import{ ref,get} from 
"https://www.gstatic.com/firebasejs/11.8.1/firebase-database.js";


 onAuthStateChanged( auth,async(user)=> {
if(!user){window.location.href="index.html";
    return;
}

    const snapshot = await get(ref(db, "users/" + user.uid));
      if (snapshot.exists()){
         const data= snapshot.val();
             document.getElementById("sname").textContent = data.fullname || "Not provided";
            document.getElementById("uname").textContent = data.fullname || "Not provided";
            document.getElementById("smail").textContent = data.email || "Not provided";
            document.getElementById("sphone").textContent = data.phone || "Not provided";
            document.getElementById("sdob").textContent=data.age;
             document.getElementById("sgender").textContent=data.sex;

        }
           

         else {
            alert("No such user found!");
        }
    });
    

   


  
    

