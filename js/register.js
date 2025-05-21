class Validator {

    constructor(){
        this.validations = [
            'data-min-length',
            'data-max-length',
            'data-email-validate',
            'data-only-letters',
        ]
    }

    validate(form){
        const currentErrors = document.querySelectorAll('form .error-validation');
        if(currentErrors.length > 0){
            this.clearValidations(currentErrors);
        }

        const inputs = form.getElementsByTagName('input');
        const inputsArray = [...inputs];

        let isValid = true;

        inputsArray.forEach((input) => {
            for(let i = 0; i < this.validations.length; i++){
                if(input.getAttribute(this.validations[i]) !== null){
                    const method = this.validations[i]
                        .replace('data-', '')
                        .replace('-', '');

                    const value = input.getAttribute(this.validations[i]);

                    if (!this[method](input, value)) {
                        isValid = false;
                    }
                }
            }
        });

        return isValid;
    }

    minlength(input, minValue){
        if(input.value.length < minValue){
            this.printErrorMessage(input, `Digite ao menos ${minValue} caracteres`);
            return false;
        }
        return true;
    }

    maxlength(input, maxValue){
        if(input.value.length > maxValue){
            this.printErrorMessage(input, `Digite no máximo ${maxValue} caracteres`);
            return false;
        }
        return true;
    }

    emailvalidate(input){
        const re = /\S+@\S+\.\S+/;
        if(!re.test(input.value)){
            this.printErrorMessage(input, `Digite um email no modelo nome@mail.com`);
            return false;
        }
        return true;
    }

    onlyletters(input){
        const re = /^[A-Za-zÀ-ú\s]+$/;
        if(!re.test(input.value)){
            this.printErrorMessage(input, `Apenas letras são permitidas`);
            return false;
        }
        return true;
    }

    printErrorMessage(input, msg){
        const errorMsg = input.parentNode.querySelector('.error-validation');
        if(errorMsg === null){
            const template = document.querySelector('.error-validation').cloneNode(true);
            template.textContent = msg;
            template.classList.remove('template');
            input.parentNode.appendChild(template);
        }
    }

    clearValidations(validations){
        validations.forEach(el => el.remove());
    }
}

const form = document.getElementById("register-form");
const submitBtn = document.getElementById("btn-submit");
const validator = new Validator();

submitBtn.addEventListener('click', function(e) {
    e.preventDefault();

    const isValid = validator.validate(form);

    if (isValid) {
        saveUser();
    }
});

function saveUser() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const status = document.getElementById("status").value;

    const users = JSON.parse(localStorage.getItem("usuarios")) || [];

    const editIndex = localStorage.getItem("editIndex");

    const newUser = {
        name,
        email,
        password,
        status
    };

    if (editIndex !== null) {
        users[editIndex] = newUser;
        localStorage.removeItem("editIndex");
    } else {
        users.push(newUser);
    }

    localStorage.setItem("usuarios", JSON.stringify(users));

    alert("Usuário salvo com sucesso!");

    window.location.href = "../index.html";
};