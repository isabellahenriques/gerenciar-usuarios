const { retornarUsuarios, adicionarUsuario } = require('../src/gerenciarUsuarios');
const { expect } = require('chai');

describe('Testar as funções de Gestão de Usuários', function () {
    it('Validar que posso adicionar um novo nome de usuário na lista', function () {
        adicionarUsuario('Ana'); // adiciona o nome 'Ana' na lista
        const listaDeUsuarios = retornarUsuarios(); // retorna a lista de usuáriosnp
        expect(listaDeUsuarios.at(-1)).to.equal('Ana'); // valida se o nome 'Ana' está na lista
    });
});

