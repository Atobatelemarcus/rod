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
             document.getElementById("name1").textContent = data.fullname || "Not provided";
            document.getElementById("name").textContent = data.fullname || "Not provided";
            document.getElementById("mail").textContent = data.email || "Not provided";
            document.getElementById("phone").textContent = data.phone || "Not provided";
            document.getElementById("dob").textContent=data.age;
             document.getElementById("gender").textContent=data.sex;
              document.getElementById("state").textContent=data.state;

        }
           

         else {
            alert("No such user found!");
        }
    });
    

   


  
    

