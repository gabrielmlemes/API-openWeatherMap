const key = 'dc8a2568cf6a485deded6c69b890f087';
const cidade = document.querySelector("#cidade")
const content = document.querySelector(".content")
const graus = document.querySelector("#graus")
const previsao = document.querySelector("#previsao")
const tempo = document.querySelector("#tempo")
const imgPrevisao = document.querySelector("#img-previsao")

// 3-Função para colocar os dados na tela
function colocarDadosNaTela(dados) {
    content.style.display = 'block'

    if (dados.name === undefined) {
        cidade.textContent = 'Local inválido'
        graus.style.display = 'none'
        previsao.style.display = 'none'
        tempo.style.display = 'none'
        imgPrevisao.style.display = 'none'
    } else {
        cidade.innerHTML = `Tempo em ${dados.name}`
        graus.innerHTML = Math.floor(dados.main.temp) + '°C'
        previsao.innerHTML = dados.weather[0].description
        tempo.innerHTML = `Umidade: ${dados.main.humidity}%`
        imgPrevisao.src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
    }

}

// 2-Função para acessar o servidor do OpenWeather:

async function buscarCidade(cidade) {

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`)
    .then(res => res.json())

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


