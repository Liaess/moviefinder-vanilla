const menu = document.querySelector(".movies");


request()

function request(){
const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/moviefinder/filmes");
promise.then(process);
promise.catch(whenfail)
}

function process(response){
    console.log(response.data)
    for(let i = 0; i<response.data.length; i++){
        menu.innerHTML += `
            <div class="movie">
                <img src="${response.data[i].imagem}">
                <div class="title">${response.data[i].titulo}</div>
                <button onclick='buy(${response.data[i].id})'>
                Comprar
                <ion-icon name="cart-outline"></ion-icon>
                </button>
            </div>`;
    }   
}

function buy(id){
    const name = prompt("Qual seu nome?");
    const qntsit = parseInt(prompt("Quantidade de assentos?"));

    const buyrequest = {nome: name,
        quantidade: qntsit
    }
    const test = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/moviefinder/filmes/${id}/ingresso`, buyrequest)
    test.then(whensucess)
    test.catch(whenfail)
}

function whenfail(){
    alert("Ingressos esgotados!")
}
function whensucess(){
    alert("Ingresso comprado com sucesso")
}