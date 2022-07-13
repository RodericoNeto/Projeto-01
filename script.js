// const response = fetch(`https://jsonplaceholder.typicode.com/users`)
// // Promisse que trata sucesso é o metodo then(), o parametro res recebe o retorno da função anterior. 
// .then(res => {
//     console.log(res);
//     return res.json();
// })
// .then(data => {
//     for (var i = 0; i < data.length; i++){
//         console.log(`\nPessoa ${i+1}`)
//         console.log(data[i].name)
//         console.log(data[i].email)
//     }
//     data.map(user => {
//         console.log(`Nome: ${user.name}`)
//     })
// }
// )
// // Promisse que trata o erro é o método catch()
// .catch(error => console.log(`Deu erro na busca ${error}`))

const addPost = () => {


    fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(response => {
            //console.log(response.json())
            return response.json();
        })
        .then(data => {
            const lastId = data.length
            console.log(lastId)
            getUser(lastId);
        })

}
addPost();
// mesmo que: 
// function addUser(){}

const getUser = lastId => {
    fetch(`https://jsonplaceholder.typicode.com/posts`, {
        method: 'POST',
        body: JSON.stringify({
            userId: `${lastId + 1}`,
            title: 'Titulo teste',
            body: `Eu fui inserido`
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
    .then(response => response.json())
    .then(data => console.log(data))
}