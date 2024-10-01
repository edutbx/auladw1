function dados (){
    const ds = [
                {id:"1", login:"edutbx", senha:"123"},
                {id:"2", login:"peps", senha:"1234"},
                {id:"3", login:"guigs", senha:"12345"}
                ]

    const json = JSON.stringify(ds)

    localStorage.setItem("banco", json)

}

function remover(){
    localStorage.removeItem("banco")
}