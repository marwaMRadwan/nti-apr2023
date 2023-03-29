const apiUrl = "https://dummyjson.com/products"
// fetch(apiUrl)
// .then( data => 
//     data.json().then(
//         res => console.log(res)
// ) )
// .catch( err => console.log( err ) )

const apiRes = async(apiUrl, cb) => {
    const data = await fetch(apiUrl)
    const res = await data.json()
    cb(res)
}


apiRes(apiUrl, res=> console.log(res))

