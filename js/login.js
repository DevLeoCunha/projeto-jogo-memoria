const input = document.querySelector('.login__input');
const button = document.querySelector('.login__button');

const validateInput = ({target}) => { /* Ele acessa o evento do evento, o evento que é disparado ao realizar uma ação, neste caso a ação de digitar no espaço do input. */
    if (target.value.lenght > 2) {/* Se o valor do input tiver uma quantidade de caracteres ele seguirá para o próximo passo. Length é a quantidade de caracteres do valor, ou seja, essa constante avaliará se possui a quantidade de caracteres no valor digitado no input. */
      
    }     
}

input.addEventListener('input', validateInput);