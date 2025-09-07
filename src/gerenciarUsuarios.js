const usuarios = ['Mathues', 'Marcos','Lucas', 'João']; // lista para armazenar os nomes

function retornarUsuarios () {    
    return usuarios
}

function adicionarUsuario (nome) {
    usuarios.push(nome); // adiciona o nome na lista usuarios
}

module.exports = { 
    retornarUsuarios, 
    adicionarUsuario 
}

