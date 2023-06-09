//map foreach filter find
// const users = [
//     {
//     id: 3,
//     name: "Leanne Graham",
//     username: "Bret",
//     email: "Sincere@april.biz",
//     address: {
//     street: "Kulas Light",
//     suite: "Apt. 556",
//     city: "Gwenborough",
//     zipcode: "92998-3874",
//     geo: {
//     lat: "-37.3159",
//     lng: "81.1496"
//     }
//     },
//     phone: "1-770-736-8031 x56442",
//     website: "hildegard.org",
//     company: {
//     name: "Romaguera-Crona",
//     catchPhrase: "Multi-layered client-server neural-net",
//     bs: "harness real-time e-markets"
//     }
//     },
//     {
//     id: 2,
//     name: "Ervin Howell",
//     username: "Antonette",
//     email: "Shanna@melissa.tv",
//     address: {
//     street: "Victor Plains",
//     suite: "Suite 879",
//     city: "Wisokyburgh",
//     zipcode: "90566-7771",
//     geo: {
//     lat: "-43.9509",
//     lng: "-34.4618"
//     }
//     },
//     phone: "010-692-6593 x09125",
//     website: "anastasia.net",
//     company: {
//     name: "Deckow-Crist",
//     catchPhrase: "Proactive didactic contingency",
//     bs: "synergize scalable supply-chains"
//     }
//     },
//     {
//     id: 3,
//     name: "Clementine Bauch",
//     username: "Samantha",
//     email: "Nathan@yesenia.net",
//     address: {
//     street: "Douglas Extension",
//     suite: "Suite 847",
//     city: "McKenziehaven",
//     zipcode: "59590-4157",
//     geo: {
//     lat: "-68.6102",
//     lng: "-47.0653"
//     }
//     },
//     phone: "1-463-123-4447",
//     website: "ramiro.info",
//     company: {
//     name: "Romaguera-Jacobson",
//     catchPhrase: "Face to face bifurcated interface",
//     bs: "e-enable strategic applications"
//     }
//     },
//     {
//     id: 4,
//     name: "Patricia Lebsack",
//     username: "Karianne",
//     email: "Julianne.OConner@kory.org",
//     address: {
//     street: "Hoeger Mall",
//     suite: "Apt. 692",
//     city: "South Elvis",
//     zipcode: "53919-4257",
//     geo: {
//     lat: "29.4572",
//     lng: "-164.2990"
//     }
//     },
//     phone: "493-170-9623 x156",
//     website: "kale.biz",
//     company: {
//     name: "Robel-Corkery",
//     catchPhrase: "Multi-tiered zero tolerance productivity",
//     bs: "transition cutting-edge web services"
//     }
//     },
//     {
//     id: 5,
//     name: "Chelsey Dietrich",
//     username: "Kamren",
//     email: "Lucio_Hettinger@annie.ca",
//     address: {
//     street: "Skiles Walks",
//     suite: "Suite 351",
//     city: "Roscoeview",
//     zipcode: "33263",
//     geo: {
//     lat: "-31.8129",
//     lng: "62.5342"
//     }
//     },
//     phone: "(254)954-1289",
//     website: "demarco.info",
//     company: {
//     name: "Keebler LLC",
//     catchPhrase: "User-centric fault-tolerant solution",
//     bs: "revolutionize end-to-end systems"
//     }
//     }
    // ]

// users.forEach((el, index, arr)=>{
//     console.log(`${index} - name is ${el.name} and email is ${el.email}`)
// })

// const result = users.find(el=>{
//     return el.id == 3
// })//findIndex

// console.log(result);

// const result = users.filter(el=>{
//     return el.name.toLowerCase.includes("a")
// })

// console.log(result);

/*
user => name, email, age
*/

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
        // const user = { id:Date.now() }
        // heads.forEach( h => user[h] = myForm.elements[h].value )
        const user = userObjCreator(myForm)
        // const allUsers = readFromStorage("users")
        // allUsers.push(user)
        // writeToStorage(allUsers, "users")
        addUser(user)
        window.location = "index.html"
    })  
}

if(userWrap){
    const allUsers = readFromStorage("users")
    allUsers.forEach(user=>{
        const tr = createMyOwnElement("tr", userWrap)
        createMyOwnElement("td", tr, user.id)
        createMyOwnElement("td", tr, user.name)
        createMyOwnElement("td", tr, user.email)
        createMyOwnElement("td", tr, user.age)
        const td = createMyOwnElement("td", tr)
        const showBtn = createMyOwnElement("a", td, "Show","mx-2 btn btn-primary")
        const editBtn = createMyOwnElement("a", td, "Edit","mx-2 btn btn-warning")
        const delBtn = createMyOwnElement("a", td, "Delete","mx-2 btn btn-danger")
        showBtn.href="#"
        editBtn.href="#"
        delBtn.href="#"
        // const tr = document.createElement("tr")
        // userWrap.appendChild(tr)
    // let td = document.createElement("td")
    // td.innerText=user.id
    // tr.appendChild(td)
    // td = document.createElement("td")
    // td.innerText=user.name
    // tr.appendChild(td)
    // td = document.createElement("td")
    // td.innerText=user.email
    // tr.appendChild(td)
    // td = document.createElement("td")
    // td.innerText=user.age
    // tr.appendChild(td)
    // td = document.createElement("td")
    // tr.appendChild(td)
    // const showBtn = document.createElement("a")
    // showBtn.textContent="show"
    // showBtn.classList="mx-2 btn btn-primary"
    // console.log(showBtn)
    // td.appendChild(showBtn)
    // const editBtn = document.createElement("a")
    // editBtn.textContent="Edit"
    // editBtn.classList="mx-2 btn btn-warning"
    // td.appendChild(editBtn)
    // const delBtn = document.createElement("a")
    // delBtn.textContent="Delete"
    // delBtn.classList="mx-2 btn btn-danger"
    // td.appendChild(delBtn)
})
}















