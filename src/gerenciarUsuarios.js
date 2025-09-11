// const usuarios = ['Mathues', 'Marcos','Lucas', 'João']; // lista para armazenar os nomes

const usuarios = [
    {
        nome: 'Mathues',
        email:'matheus@email.com'
    },
    {
        nome: 'Marcos',
        email:'marcos@email.com'
    },
    {
        nome: 'Lucas',
        email:'lucas@email.com'
    },
    {
        nome: 'João',
        email:'joão@email.com'
    }    
]; 

function retornarUsuarios () {    
    return usuarios
}

// adiciona o usuário na lista usuarios
function adicionarUsuario (usuario) {
    usuarios.push(usuario); 
}


function capturarPropriedadeDoUsuario (indicDoUsuario, propriedade) {   
    return
}

module.exports = { 
    retornarUsuarios, 
    adicionarUsuario 
}

