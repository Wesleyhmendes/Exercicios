import "./style.css";
import validator from 'validator';



const btn = document.querySelector('#button');
const message = document.querySelector('.mensagem');


btn.addEventListener('click', (event) => {
    event.preventDefault();

    const label = document.querySelector('.label');
    const option = document.querySelector('#option').value;
    if (option === "email") message.innerHTML = `A validação retornou ${validator.isEmail(label.value)}`;

    if (option === "cpf") message.innerHTML = `A validação retornou ${validator.isTaxID(label.value, 'pt-BR')}`;

    if (option === "hexColor") message.innerHTML = `A validação retornou ${validator.isHexColor(label.value)}`;

    if (option === "url") message.innerHTML = `A validação retornou ${validator.isURL(label.value)}`;

    if (option === "uuid") message.innerHTML = `A validação retornou ${validator.isUUID(label.value)}`;
});