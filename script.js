let sitename=document.getElementById("nameE");
let siteUrl =document.getElementById("URL");
var boxModal = document.querySelector(".box-info");
let innput =document.getElementById("nameE");
let arr;

if(localStorage.getItem("Site")==null){
    arr =[];
}
else {
    arr=JSON.parse(localStorage.getItem("Site")) ;
    DisplaySite();
}
function check(ss){
  if (ss.length < 3) {
    innput.style.color='red';
  } else {
      innput.style.color='black';
  }

}
// sitename.addEventListener("input", function() {
  
// });

function AddSite(){
   
     if(sitename.value != "" &&  siteUrl.value !=""){
       let sites = {
        name:sitename.value,
        urll:siteUrl.value,
       
    }
    arr.push(sites);
    localStorage.setItem("Site",JSON.stringify(arr));
    DisplaySite();
    
    }
     else {
      boxModal.classList.remove("d-none");
     }
   ClearForm();  
}
function ClearForm(){
  
    sitename.value ="";
    siteUrl.value ="";
   
}
function DisplaySite(){
    var cartonaa=``;
    for(let i=0 ; i<arr.length ; i++){
        cartonaa+=`<tr><td>${i+1}</td>
        <td>${arr[i].name}</td>
      
        <td><a target="_blank" href="${arr[i].urll}" type="button" class="btn btn-outline-warning">Visit</a></td>
        <td><button onclick="deletesite(${i}) "type="button" class="btn btn-outline-danger">Delete</button></td>
        </tr>`
    }
    document.getElementById("TTbody").innerHTML=cartonaa;
    
}
function deletesite(index){
    arr.splice(index,1);//cut one object
    localStorage.setItem("Site",JSON.stringify(arr));
    DisplaySite();
}
function closeModal() {
  boxModal.classList.add("d-none");
}
closeBtn.addEventListener("click", closeModal);