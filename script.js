const perguntas = {
  '/help':'Olá, até o momento eu fui programado para responder algumas perguntas muito especificas como "O que é JavaScript e para que ele é usado?", caso falte algum ou tenha um caracter a mais na pergunta posso não reconhecer, use o comando "/perguntas" e exibirei uma lista de perguntas no qual fui programado a responder ',
  '/perguntas':'Bem, fui programado até o momento para responder as seguintes perguntas: <br>1- O que é JavaScript e para que ele é usado?</br><br>2- como incluir um arquivo javascript em um documento html?</br><br>3- como incluir um arquivo javascript em um documento html?</br><br>4- como declarar uma variável em javascript?</br><br>5- qual é a diferença entre let e var em javascript?</br><br>6- o que é uma função em javascript?</br><br>7- como declarar uma função em javascript?</br>',
  'olá':'Olá, sou o chatbot',
  'ola':'Olá, sou o chatbot',
  'oi':'Olá, sou o chatbot',
  'o que é javascript e para que ele é usado?': 'JavaScript é uma linguagem de programação popular usada para desenvolver aplicativos web interativos e dinâmicos.',
  'como incluir um arquivo javascript em um documento html?': 'Você pode incluir um arquivo JavaScript em um documento HTML usando a tag <script> com o atributo src definido como o caminho para o arquivo JavaScript.',
  'como declarar uma variável em javascript?': 'Você pode declarar uma variável em JavaScript usando as palavras-chave let ou var, seguidas pelo nome da variável e, opcionalmente, um valor inicial. Por exemplo: let idade = 25;',
  'qual é a diferença entre let e var em javascript?': 'A diferença entre let e var em JavaScript é que let tem escopo de bloco, o que significa que a variável só pode ser acessada dentro do bloco em que foi declarada, enquanto var tem escopo de função, o que significa que a variável pode ser acessada em toda a função em que foi declarada.',
  'o que é uma função em javascript?':'Uma função em JavaScript é um bloco de código reutilizável que realiza uma tarefa específica e pode receber argumentos e retornar um valor.',
  'como declarar uma função em javascript?':'Você pode declarar uma função em JavaScript usando a palavra-chave function, seguida pelo nome da função, os parâmetros entre parênteses e o corpo da função entre chaves. Por exemplo: function somar(a, b) { return a + b; }'
 
};

//Elementos do DOM
const chatbotContainer = document.getElementById('chatbot-container');
const output = document.getElementById('output');
const input = document.getElementById('input');
const submit = document.getElementById('submit');

// Add evento de clique para o botão "Enviar"
submit.addEventListener('click', () => {
  const pergunta = input.value.toLowerCase();



  // Checagem da pergunta se está no objeto de perguntas e respostas
  if (pergunta in perguntas) {
    output.innerHTML += '<div class="pergunta"><span>Você:</span> ' + pergunta+ '</div>' +
                        '<div class="resposta"><span>Chat-bot:</span> ' + perguntas[pergunta] + '</div>';
  } else {
    output.innerHTML += '<div class="pergunta"><span>Você:</span> ' + pergunta + '</div>' +
                        '<div class="resposta"><span>Chat-bot:</span> Desculpe, eu não entendi a pergunta.</div>' +
                        '<div class="resposta"><span>Chat-bot:</span> Use o comando /help para obter mais informações</div>';
  }

  // Limpa o campo de entrada
  input.value = '';

  // Scrollda janela para o final
  output.scrollTop = output.scrollHeight;
});

// Faz com que o Enter tenha a função de enviar a mensagem através da criação de evento
input.addEventListener('keydown', (event) => {
  if (event.keyCode === 13) {
    submit.click();
  }
});
