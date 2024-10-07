function vetor() {
    const ds = [
        { id: "1", login: "edutbx", senha: "123" },
        { id: "2", login: "peps", senha: "1234" },
        { id: "3", login: "guigs", senha: "12345" }
    ]

    const json = JSON.stringify(ds)
    return json

}

function cadastrar(){

    // const dados = JSON.parse(vetor())

    const dados = JSON.parse(localStorage.getItem("banco"))

    let login = document.querySelector('#login').value
    let senha = document.querySelector('#pass').value
    let email = document.querySelector('#email').value 

    const usuario = {id:Date.now(), login:login, senha:senha}

    dados.push(usuario)

    const json = JSON.stringify(dados)

    localStorage.setItem("banco", json)

    console.log(dados)

}

cadastrar()
