document.getElementById('form-contato').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const servico = document.getElementById('servico').value;

    alert(`Obrigado, ${nome}! Recebemos seu interesse em ${servico}. Entraremos em contato em breve.`);
    
    // Aqui você poderia integrar com uma API de e-mail ou WhatsApp
    this.reset();
});

fetch("https://formspree.io/f/seu-id", {
    method: "POST",
    body: new FormData(this),
    headers: { 'Accept': 'application/json' }
}).then(response => {
    if (response.ok) {
        alert("Mensagem enviada com sucesso!");
        this.reset(); // Limpa o formulário apenas se o envio funcionar
    }
});


