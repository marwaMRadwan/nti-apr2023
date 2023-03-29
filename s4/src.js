// const apiUrl = "https://dummyjson.com/products"
// fetch(apiUrl)
// .then( data => 
//     data.json().then(
//         res => console.log(res)
// ) )
// .catch( err => console.log( err ) )
//posts, carts, products
// const apiRes = async(apiUrl, cb) => {
//     const data = await fetch(apiUrl)
//     const res = await data.json()
//     cb(res)
// }

// apiRes(apiUrl, res=> console.log(res))

const btns = ["products", "carts", "posts"]
const apiBaseURL ="https://dummyjson.com/"
const btnWrap = document.querySelector("#btnWrap")

const apiRes = async(apiUrl, cb) => {
    try{
        const data = await fetch(apiUrl)
        const res = await data.json()
        cb(res , null)
    }
    catch(e){
        cb(null, e.message)
    }
}

btns.forEach(btn=>{
    mybtn = document.createElement("button")
    btnWrap.appendChild(mybtn)
    mybtn.textContent = btn
    mybtn.classList = "mx-3 btn btn-primary"
    mybtn.addEventListener("click", ()=>{
        apiRes(`${apiBaseURL}${btn}`, (res, err)=>{
            if(err) console.log(err)
            else console.log(res);
        })
    })
})

















