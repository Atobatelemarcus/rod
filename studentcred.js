import { db} from"./firebase.js";
import {getAuth, onAuthStateChanged} from "https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js";
import{ref,query,orderByChild,equalTo,get,update} from "https://www.gstatic.com/firebasejs/11.8.1/firebase-database.js";



const updateform =document.getElementById("studentUpdateForm");
 updateform.addEventListener("submit", async (e) => {
    e.preventDefault();
const email = document.getElementById("email").value.trim().toLowerCase();
    const batch= document.getElementById("batch").value.trim();
    const matric = document.getElementById("matric").value.trim();
    const status = document.getElementById("status").value.trim();
   const fees= parseFloat(document.getElementById("fees").value);

   onAuthStateChanged(getAuth(), async (user) => {
      if(user){
         const adminRef = ref(db, "users/" + user.uid + "/role");
         const adminSnapshot = await get(adminRef);
         if(adminSnapshot.exists()&& adminSnapshot.val() === "ADMIN"){
            const studentsRef = ref(db, "users");
            const Q= query(studentsRef, orderByChild("email"), equalTo(email));
            const snapshot = await get(Q);
            if(snapshot.exists()) {
               snapshot.forEach((childSnapshot) => {
                  const uid = childSnapshot.key; // Get the unique ID of the user
                  // Now you can update the student's details in the "users" collection
                  const studentRef = ref(db, "users/" + uid);
                  update(studentRef, {
                     batch: batch,
                     matric: matric,
                     status: status,
                     fees: fees,
                     updatedAt: new Date()
                   }); });}

}}

});

 });


   