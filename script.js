const response = fetch(`https://jsonplaceholder.typicode.com/photos/20`)
// Promisse que trata sucesso é o metodo then(), o parametro res recebe o retorno da função anterior. 
.then(res => {
    console.log(res.json())
})
// Promisse que trata o erro é o método catch()
.catch(error => console.log(`Deu erro na busca ${error}`))