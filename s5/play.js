const btn = document.querySelector("editBtn")
allUsers = [
    {status:true},
    {status:false},
]

i = 1
btn.addEventListener("click", ()=>{
    allUsers[i].status=!allUsers[i].status

})