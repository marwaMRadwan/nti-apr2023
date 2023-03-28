const myForm = document.querySelector("#myForm")
const userWrap = document.querySelector("#userWrap")

const heads = ["name", "age", "email"]

const readFromStorage = (key=`tasks`) => JSON.parse(localStorage.getItem(key)) || []
const writeToStorage = (data, key=`tasks`) => localStorage.setItem(key, JSON.stringify(data))

const userObjCreator = (myForm)=>{
    const user = { id:Date.now() }
    heads.forEach( h => user[h] = myForm.elements[h].value )
    return user
}

const addUser = (user)=>{
    const allUsers = readFromStorage("users")
    allUsers.push(user)
    writeToStorage(allUsers, "users")
}

function createMyOwnElement (ele, parent, txt=null, classes=null){
    const myElement = document.createElement(ele)
    parent.appendChild(myElement)
    if(txt) myElement.textContent=txt
    if(classes) myElement.classList=classes
    return myElement
}

if(myForm){
    myForm.addEventListener("submit", function(e){
        e.preventDefault()
        const user = userObjCreator(myForm)
        addUser(user)
        window.location = "index.html"
    })  
}

if(userWrap){
    const allUsers = readFromStorage("users")
    allUsers.forEach((user, i)=>{
        const tr = createMyOwnElement("tr", userWrap)
        createMyOwnElement("td", tr, user.id)
        createMyOwnElement("td", tr, user.name)
        createMyOwnElement("td", tr, user.email)
        createMyOwnElement("td", tr, user.age)
        const td = createMyOwnElement("td", tr)
        const delBtn = createMyOwnElement("button", td, "Delete","mx-2 btn btn-danger")
        delBtn.addEventListener("click", (e)=>{
            console.log(i)
        })
        const showBtn = createMyOwnElement("button", td, "Show","mx-2 btn btn-primary")
        const editBtn = createMyOwnElement("button", td, "Edit","mx-2 btn btn-warning")
    })
}















