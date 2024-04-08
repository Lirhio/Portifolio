/* 

- Objetivo 1 - quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html 
  Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o usuário clicar em cima dele 
  Passo 2 - identificar o clique no botão 
  Passo 3 - adicionar a classe ativo nos projetos escondidos 

- Objetivo 2 - esconder o botão de mostrar mais 
  Passo 1 - pegar o botão e esconder ele *

*/

const btn = document.querySelector('.btn-show-projects');
const inativeProjects = document.querySelectorAll('.project:not(.active)');

function btnFunc() {
    inativeProjects.forEach(project => project.classList.add('active'));
    btn.classList.add('remove');
}

btn.addEventListener('click', btnFunc);
>