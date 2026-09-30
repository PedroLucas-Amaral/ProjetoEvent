// 1. Array com os dados de cada espaço/imagem
const espacos = [
    {
        imagem: 'css/imgs/mampu-restaurant-435588.jpg',
        nome: 'Pátio das Oliveiras',
        detalhes: 'Área externa aconchegante com iluminação especial. <br><br> Reviews: <br><br> Capcidade: <br><br> Preço: <br><br>'
    },
    {
        imagem: 'css/imgs/kleinheinz-event-6927353.jpg',
        nome: 'Salão Principal',
        detalhes: 'Ambiente climatizado, perfeito para grandes eventos. <br><br> Reviews: <br><br> Capcidade: <br><br> Preço: <br><br>'
    },
    {
        imagem: 'css/imgs/pexels-wedding-1854074_640.jpg',
        nome: 'Varanda VIP',
        detalhes: 'Espaço reservado com vista para o jardim. <br><br> Reviews: <br><br> Capcidade: <br><br> Preço: <br><br>'
    }
];

// 2. Variável para controlar qual imagem está sendo exibida (inicia no primeiro item: 0)
let indiceAtual = 0;

// 3. Captura dos elementos do HTML usando as suas IDs exatas
const imgElement = document.querySelector('#anuncio img');
const nameElement = document.getElementById('nameover');
const campoAnuElement = document.querySelector('#campoanu p');
const btnRight = document.getElementById('nav-btn-right');
const btnLeft = document.getElementById('nav-btn-left');

// 4. Função que atualiza o conteúdo na tela com base no índice atual
function atualizarAnuncio() {
    const itemAtual = espacos[indiceAtual];
    
    // Atualiza a imagem e os textos
    imgElement.src = itemAtual.imagem;
    nameElement.innerHTML = itemAtual.nome;
    
    // Atualiza o texto dentro do div #campoanu
    if (campoAnuElement) {
        campoAnuElement.innerHTML = itemAtual.detalhes;
    }
}

// 5. Evento para o botão DIREITO (Avançar no carrossel)
btnRight.addEventListener('click', () => {
    // Usa o resto da divisão (%) para voltar a 0 quando chegar ao fim da lista
    indiceAtual = (indiceAtual + 1) % espacos.length;
    atualizarAnuncio();
});

// 6. Evento para o botão ESQUERDO (Voltar no carrossel)
btnLeft.addEventListener('click', () => {
    // Garante que ao voltar do índice 0 ele vá para o último item da lista
    indiceAtual = (indiceAtual - 1 + espacos.length) % espacos.length;
    atualizarAnuncio();
});

// 7. Inicializa o anúncio na tela assim que o script carrega
atualizarAnuncio();