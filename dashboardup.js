
import {db} from '/firebase.js';
import { ref, get } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-database.js";
const params = new URLSearchParams(window.location.search);
const uid = params.get('uid');
if(uid){
    const studentRef = db.ref("users/" + uid);
    studentRef.once("value", (snapshot) => {
        const data = snapshot.val();
        if(data){

            document.getElementById("batch").value = data.batch || '';
            document.getElementById("matric").value = data.matric || '';
            document.getElementById("status").value = data.status || '';
            document.getElementById("amountpaid").value = data.fees || '';
        }
    });
}












i        
                
 //fetching students data for admin dashboard//
function formatBytes(bytes) {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes === 0) return '0 Bytes';
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
}
function getDatabaseSize() {
    const dbRef = ref(db);
    onValue(dbRef, (snapshot) => {
        let totalSize = 0;
        snapshot.forEach((childSnapshot) => {
            const childData = childSnapshot.val();
            totalSize += JSON.stringify(childData).length;
        });
        document.getElementById("totalamount").textContent = formatBytes(totalSize);
    });
}
window.onload= getDatabaseSize;