function dados() {
    const ds = [
        { id: "1", login: "edutbx", senha: "123", nome:"Eduardo", email:"eduardo@gmail.com", fone:"123" },
        { id: "2", login: "peps", senha: "1234" },
        { id: "3", login: "guigs", senha: "12345" }
    ]

    const json = JSON.stringify(ds)

    localStorage.setItem("banco", json)

}

function logar() {
    //Conversão/Promoção de dados em json para Array(vetor)
    const ds = JSON.parse(localStorage.getItem("banco"))

    let lg = document.querySelector('#login').value
    let ps = document.querySelector('#pass').value

    for (let i = 0; i < ds.length; i++) {
        if (lg == ds[i].login || email == ds[1].email && ps == ds[i].senha) {
            alert("encontrou")  
        }
    }
}







function remover() {
    localStorage.removeItem("banco")
}  
