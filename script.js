
let sum=0;

const addition=document.querySelector(".addition");
const addModal=document.querySelector(".add-Modal-wrapper");
const closeButton=document.querySelector(".close");

const btnAdd=document.querySelector(".btn-add");
const showModal=()=>{
    addModal.style.display="block";
};
const closeModal=()=>{
    addModal.style.display="none";
};
addition.addEventListener("click",()=>{
    showModal();
});
closeButton.addEventListener("click",()=>{
    closeModal();
});

btnAdd.addEventListener("click",()=>{
    addNumbers();
    updateScreen();

});
function addNumbers()
{
   
    const val1=parseInt(document.querySelector(".value1").value);
    const val2=parseInt(document.querySelector(".value2").value); 
    sum=val1 + val2;
    console.log(sum);
}
const updateScreen=()=>{
    const ansD=document.querySelector(".answer");
    ansD.value=sum.toString();
};
/*answer.addEventListener("click",()=>{
    ansD();
});*/
