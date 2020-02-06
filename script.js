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

function addNumbers()
{
    var val1 = parseInt(document.getElementById("value1").value);
    var val2 = parseInt(document.getElementById("value2").value);
    var ansD = document.getElementById("answer");
    ansD.value = val1 + val2;
}
