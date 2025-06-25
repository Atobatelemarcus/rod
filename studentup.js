import{db,auth} from '/firebase.js';
import{signInWithEmailAndPassword,onAuthStateChanged} from "https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js";
import { ref, update } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-database.js";



document.getElementById("loginform2").addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value.trim().toLowerCase();
    const password = document.getElementById("password").value.trim();

    try{
        await signInWithEmailAndPassword(auth, email, password);
        alert("Login successful!");
    } catch (error) {
        console.error("Login failed:", error);
        alert("Login failed: " + error.message);
        return;
    }
});
onAuthStateChanged(auth, (user) => {
    if (user) {

        document.getElementById("loginform2").classList.add("hidden");
       const updateform= document.getElementById("updatee");
        updateform.classList.remove("hidden");
        updateform.classList.add("block");
        
    }});


document.getElementById("studentUpdateForm").addEventListener("submit", async(e) => {
    e.preventDefault();
    const uid = document.getElementById("uid").value.trim();

    const upData ={
       batch: document.getElementById("batch").value.trim(),
        matric: document.getElementById("matric").value.trim(),
        status: document.getElementById("status").value.trim(),
        fees: parseFloat(document.getElementById("fees").value),
        updatedAt: new Date()
    };
try{
    const studentRef = ref(db, "users/" + uid);
    await update(studentRef, upData);
    alert("Student details updated successfully!");
    document.getElementById("studentUpdateForm").reset();
}
  catch(error){
        console.error("Error updating student details:", error);
        alert("Failed to update student details. Please try again.");
    }
});
   

    