const bbb = document.querySelector(".movies");
const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/moviefinder/filmes");
promise.then(process);

function process(aaa){
    for(let i = 0; i<aaa.data.length; i++){
        bbb.innerHTML += `
            <div class="movie">
                <img src="${aaa.data[i].imagem}">
                <div class="title">${aaa.data[i].titulo}</div>
                <button onclick='buy(this)'>
                Comprar
                <ion-icon name="cart-outline"></ion-icon>
                </button>
            </div>`;
    }   
}

