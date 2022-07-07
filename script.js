const response = fetch(`https://jsonplaceholder.typicode.com/users`)
// Promisse que trata sucesso é o metodo then(), o parametro res recebe o retorno da função anterior. 
.then(res => {
    console.log(res);
    return res.json();
})
.then(data => {
    for (var i = 0; i < data.length; i++){
        console.log(`\nPessoa ${i+1}`)
        console.log(data[i].name)
        console.log(data[i].email)
    }
    data.map(user => {
        console.log(`Nome: ${user.name}`)
    })
}
)
// Promisse que trata o erro é o método catch()
.catch(error => console.log(`Deu erro na busca ${error}`))