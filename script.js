async function converter() {
  const valor = parseFloat(document.getElementById("valor").value);
  const de = document.getElementById("de").value;
  const para = document.getElementById("para").value;

  if (de === para) {
    document.getElementById("resultado").innerText = "Escolha moedas diferentes.";
    return;
  }

  const url = `https://economia.awesomeapi.com.br/json/last/${de}-${para}`;
  try {
    const resposta = await fetch(url);
    const dados = await resposta.json();
    const chave = `${de}${para}`;
    const cotacao = parseFloat(dados[chave].bid);
    const convertido = valor * cotacao;

    document.getElementById("resultado").innerText = 
      `${valor.toFixed(2)} ${de} = ${convertido.toFixed(2)} ${para}`;
  } catch (erro) {
    document.getElementById("resultado").innerText = "Erro ao buscar cotação.";
  }
  if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js")
    .then(() => console.log("Service Worker registrado"))
    .catch(err => console.error("Erro no Service Worker", err));
}
}