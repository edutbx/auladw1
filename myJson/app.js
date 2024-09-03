function dados() {

    const ds = [
        { id: 1, login: "eduardo", password: "1234@", email: "eduardo@gmail.com" },
        { id: 2, login: "bobby", password: "1234@", email: "bobby@gmail.com" },
        { id: 3, login: "endrick", password: "1234@", email: "endrick@gmail.com" },
        { id: 4, login: "plinio", password: "1234@", email: "plinio@gmail.com" }
    ]

    return ds;
}

const usuarios = dados()

// console.log("O seu login é: " + usuarios[0].login+ "\nA sua senha é:  " + usuarios[0].password)

// let log = document.querySelector('login').value
// let senha = document.querySelector('password').value

function login() {

    let log = document.querySelector('#login').value
    let senha = document.querySelector('#password').value

    //Laço for 
    for (let i = 0; i < usuarios.length; i++) {
        if (log == usuarios[i].login && senha == usuarios[i].password) {
            console.log('Logado!')
            alert('Você Logou!')
        }

    }
}