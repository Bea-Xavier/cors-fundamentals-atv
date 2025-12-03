const express = require('express');
const cors = require('cors'); // <-- Importa o middleware CORS
const app = express();
const PORT = 8080;

// 2. Configuração do CORS: Permite APENAS a origem do frontend (3000)
const corsOptions = {
    origin: 'http://localhost:3000',
    methods: 'GET',
    optionSuccessStatus: 200 // Algumas versõs legadas precisam disso
};

// 3. Aplica o middleware CORS 
app.use(cors(corsOptions));

// Rota simples que o frontend tenterá acessar 
app.get('/api/mensagem', (req, res) => {
    // AGORA o navegador permite a comunicação, e a API responde: 
    res.json({ data: "Mensagem secreta da API em 8080! - COM PERMISSÃO CORS! :)" });
});

app.listen(PORT, () => { 
    console.log(`API Backend rodando em: http://localhost:${PORT}` )
    console.log('AGORA PERMITINDO acesso de: http://localhost:3000');
});