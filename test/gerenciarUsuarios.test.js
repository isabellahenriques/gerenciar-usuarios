const { retornarUsuarios, adicionarUsuario } = require('../src/gerenciarUsuarios');
const { expect } = require('chai');

describe('Testar as funções de Gestão de Usuários', function () {
    it('Validar que posso adicionar um novo nome de usuário na lista', function () {
       // Adiciona o nome 'Ana' na lista
        adicionarUsuario({
        nome: 'Ana',
        email:'ana@email.com'
    }); 

        const listaDeUsuarios = retornarUsuarios(); // retorna a lista de usuáriosnp
        //expect(listaDeUsuarios.at(-1).nome).to.equal('Ana'); // valida se o nome 'Ana' está na lista
        //expect(listaDeUsuarios.at(-1).email).to.equal('ana@email.com'); // valida o email de 'Ana'da na lista
        expect(listaDeUsuarios.at(-1)).to.eql({
            nome: 'Ana',
            email:'ana@email.com'
        });
    });
});

