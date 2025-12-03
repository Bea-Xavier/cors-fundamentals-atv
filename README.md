# 🔗 Prática de Fundamentação do CORS
Esta atividade, tem como objetivo experimentar na prática o funcionamento do CORS (Cross-Origin Resource Sharing). Que é um mecanismo de segurança na qual permite ou não que um navegador acesso recursos de uma api/origem externa.

📝 É por meio de requisições HTTP feitas em cabeçalhos pelos navegadores que o servidor por meio do CORS avalia se a origem tem a permissão para acessar algum de seu conteúdo. Depois da checagem, o CORS devolve um cabeçalho de resposta para o navegador que está autorizado, a realizar as suas requisições normalmente, permitindo assim a troca segura de informações entre diferentes origens. 

---

## 📈 Primeiros passos
1. Clone o repositório na sua máquina:

```bash

git clone https://github.com/Bea-Xavier/cors-fundamentals-atv.git
```
2. Abra o arquivo do projeto em um ambiente de desenvolvimento de sua escolha

3. Entre nas pasta *Backend* e *Frontend* e baixe as dependências (se necessário):

```bash
npm install
```

4. Dentro da pasta *Backend* inicie o servidor:


```bash
node server.js
```

5. Dentro da pasta *Frontend* inicie o arquivo:


```bash
npx serve -l 3000
```

6. Em um navegador de sua escolha digite a seguinte origem e abra a página:

```bash
http://localhost:3000
```

## ⚙️ Testando na prática

Com o servidor rodando, na página abra o console (F12), e aperte o botão "Acessar API". Em seguida será exibida uma mensagem de sucesso, que poderá ser observado também no status da aba Network nas ferramentas de desenvolvedor do navegador. Isso significa que foi bem sucessida a comunicação e a requisição do frontend com o backend.

## ✒️ Considerações finais
Pronto! Agora você já compreendeu o que é e como funciona o mecanismo de segurança CORS, além de estar apto para a utilização do projeto.

## 👩‍💻 Autora

*Nome:* [Beatriz V. Xavier](https://github.com/Bea-Xavier)

*Tecnologias:* 

[![My Skills](https://skillicons.dev/icons?i=html,javascript&theme=dark)](https://skillicons.dev)

## 📄 Licença

Este projeto é apenas para fins acadêmicos e de estudo. 🚀
