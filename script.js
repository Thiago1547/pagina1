const init = () => {
    const ValidateEmail = (event) => {
        const input = event.currentTarget;
        const regex = /\S+@\S+\.\S+/;
        const emailTest = regex.test(input.value)

        if(!emailTest) {
            submitButton.setAttribute('disable', 'disable',);
            input.nextElementSbling.classList.add('error')
        } else {
            submitButton.removeAttribute('disable');
            input.nextElementSbling.classList.remove('error')
        }
    }

    const validadePassword= (event) => {
        const input =event.currentTarget

        if(input.value.length < 8) {
            submitButton.setAttribute('disable', 'disable',);
            input.nextElementSbling.classList.add('error')
        }
    }

    const inputEmail = document.querySelector('input[type="email"]');
    const inputPassword = document.querySelector('input[type="password"]');
    const submitButton = document.querySelector('.login__submit');

    inputEmail.addEventListener('input', validateEmail)

    if(submitButton) {
        submitButton.addEventListener('click', (event) => {
            event.preventDefault();

            submitButton.textContent = '...Loading'

            fetch('https://reqres.in/api/login', {
                method: "POST",
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify({
                    email: inputEmail.value,
                    password: inputPassword.value,
                })
            }).then((response) => {
                return response.json;
            }).then((data) => {
                console.log(data) 
            })
        })
    }
}

window.onload = init;