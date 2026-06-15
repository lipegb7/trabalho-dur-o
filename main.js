function verificar() {

    let cidade = document.getElementById("cidade").value;
    let temperatura = Number(document.getElementById("temperatura").value);
    let resultado = document.getElementById("resultado");

    if (cidade === "" || isNaN(temperatura)) {
        resultado.innerHTML = "⚠️ Preencha cidade e temperatura!";
        resultado.style.color = "red";
        return;
    }

    let mensagem = "";

    if (temperatura >= 30) {
        mensagem = "🔥 Muito quente";
    } 
    else if (temperatura >= 20) {
        mensagem = "🌤️ Agradável";
    } 
    else if (temperatura >= 10) {
        mensagem = "❄️ Frio";
    } 
    else {
        mensagem = "🧊 Muito frio";
    }

    resultado.innerHTML = `
        ✅ Enviado com sucesso!<br><br>
        📍 Cidade: ${cidade}<br>
        🌡️ Temperatura: ${temperatura}°C<br>
        📢 Situação: ${mensagem}
    `;
}