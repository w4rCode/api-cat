 async function clicou(){
    await fetch('https://api.thecatapi.com/v1/images/search?limit=10')
    .then((response) => {
       return response.json();
    })
    .then((json) => {
        // Exibindo as URLs de todas as imagens de gatos
        json.forEach((cat) => {
            Swal.fire({
                title: 'Surpresa!',
                text: 'Você ama gatos? Clique de novo para ver mais fofuras felinas!',
                imageUrl: `${cat.url}`,
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
              })
        });
    })
    .catch((error) => {
        console.error('Erro na requisição:', error);
    });
}

document.querySelector('#botao').addEventListener('click', clicou);