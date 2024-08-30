const input = document.querySelector('.login__input');
const button = document.querySelector('.login__button');
const form = document.querySelector('.login-form')

const validateInput = ({ target }) => { /* Ele acessa o evento do evento, o evento que é disparado ao realizar uma ação, neste caso a ação de digitar no espaço do input. */
    if (target.value.length > 2) {/* Se o valor do input tiver uma quantidade de caracteres ele seguirá para o próximo passo. Length é a quantidade de caracteres do valor, ou seja, essa constante avaliará se possui a quantidade de caracteres no valor digitado no input. */
      button.removeAttribute('disabled'); /* Por padrão o disabled está ativado no corpo do html, de forma que só ficará habilitado quando ao digitar ao menos 3 caracteres ele se tornara habilitado. */
    } else { /* Caso após a ação de disable ficar "enable" com a ação do usuario de apagar os caracteres o botão retornará a forma disabled */
        button.setAttribute('disabled', ''); /*setattribute coloca o valor disabled, não precisa de valor, por isso a string vazia*/
    } 
}

const handleSubmit = () => {
    
}

input.addEventListener('input', validateInput); /*Atributo que verifica as mudanças em tempo real do input*/
form.addEventListener('submit', handleSubmit); 