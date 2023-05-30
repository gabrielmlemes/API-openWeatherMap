const key = 'dc8a2568cf6a485deded6c69b890f087';

// 3-Função para colocar os dados na tela
function colocarDadosNaTela(dados) {
    console.log(dados);
    const content = document.querySelector(".content")
    content.style.display = 'block'
    document.querySelector("#cidade").innerHTML = `Tempo em ${dados.name}`
    document.querySelector("#graus").innerHTML = Math.floor(dados.main.temp) + '°C'
    document.querySelector("#previsao").innerHTML = dados.weather[0].description
    document.querySelector("#tempo").innerHTML = `Umidade: ${dados.main.humidity}%`
    document.querySelector("#img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

// 2-Função para acessar o servidor do OpenWeather:

async function buscarCidade(cidade) {

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())

    colocarDadosNaTela(dados)
}

// 1-Função para recuperar o valor do input através do clique do botão (Para saber qual é a cidade desejada):

function clicar() {
    const cidade = document.querySelector('#input').value

    buscarCidade(cidade)
}


document.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        const btnSubmit = document.querySelector("#btn-search")

        btnSubmit.click()
    }
})


