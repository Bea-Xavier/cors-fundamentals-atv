const express = require('express');
const app = express();
const PORT = 8080;

// Rota simples que o frontend tenterá acessar 
app.get('/api/mensagem', (req, res) => {
    // A API nunca chega aqui se o CORS bloquear a requisição antes.
    res.json({ data: "Mensagem secreta da API em 8080!" });
});

// Sem middleware CORS configurado 

app.listen(PORT, () => { 
    console.log(`API Backend rodando em: http://localhost:${PORT}` )
});