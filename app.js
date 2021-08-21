// Pegar o input
// Se for Sim, mostra as categorias disponíveis, pergunta qual categoria ela escolhe
// Se não, mostra todos os livros em ordem crescente pela quantidade de páginas
// Projeto apenas para estudo e prática.

const livros = require('./database');
const readline = require('readline-sync');

const entradaInicial = readline.question('Deseja buscar um livro? S/N');

if (entradaInicial.toLocaleUpperCase() === 'S') {

    console.log('Essas são as categorias disponíveis: ');
    console.log('Produtividade e estilo de vida', '/Inteligência', '/Produtividade', '/estilo de vida');

    const entradaCategoria = readline.question('Qual categoria você escolhe: ');

    const retorno = livros.filter(livro => livro.categoria === entradaCategoria);

    console.table(retorno);

} else {

    const livrosOrdenados = livros.sort((a, b) => a.paginas - b.paginas)
    console.log('Esses são todos os livros disponiveis: ')
    console.table(livrosOrdenados);
    
}