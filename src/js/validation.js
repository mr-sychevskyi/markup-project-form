$(function () {

    var regForm = $(".registration-form");
    var btnSubmit = $(".btn-submit");
    var optionsRegForm = $(".input-radio[name='reg-form']");

    var inputName = $("#name");
    var inputEmail = $("#email");
    var inputPassword = $("#password");
    var inputConfirmation = $("#confirmation");

    var nameValidationHelp = $(".validation-help-name");
    var emailValidationHelp = $(".validation-help-email");
    var passwordValidationHelp = $(".validation-help-password");

    btnSubmit.prop('disabled', true);

    regForm.on('input', function () {
        function isChecked(input) {
            return input.is(':checked');
        }

        function isValidName(name) {
            var regexname = /^[a-zA-Zа-яА-Я]+$/;
            return name.match(regexname);
        }

        function isValidEmail(email) {
            var regexemail = /(\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6})/;
            return email.match(regexemail);
        }

        function isValidPassword(pass) {
            var regexpassword = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15})/;
            return pass.match(regexpassword);
        }

        function checkValid(input, checkValidFunc, placeholder, helpElement, helpElementText) {
            var value = input.val();
            var valid = value.length && checkValidFunc(value);

            if (!value.length) {
                input.attr("placeholder", placeholder);
                input.addClass("error");
                helpElement.addClass("hidden");
            } else if (!checkValidFunc(value)) {
                helpElement.text(helpElementText);
                helpElement.addClass("error-message");
                helpElement.removeClass("hidden");
            } else {
                input.removeClass("error");
                helpElement.addClass("hidden");
            }

            input.css('border-color', valid ? '#d3d3d3' : 'rgb(255,0,0)');

            return valid;
        }

        function render() {
            var valid = isChecked(optionsRegForm)
                && checkValid(inputName, isValidName, "Введите свое имя", nameValidationHelp,
                    "Имя может содержать только буквы!")
                && checkValid(inputEmail, isValidEmail, "Неверный формат email", emailValidationHelp,
                    "Email должен соответствовать шаблону [email@example.com]!")
                && checkValid(inputPassword, isValidPassword, "Придумайте новый пароль", passwordValidationHelp,
                    "Пароль должен соответствовать следующим требованиям: " +
                    "от 6 до 15 символов, минимум одна цифра, минимум одна заглавная и одна строчная буквы")
                && isChecked(inputConfirmation);

            btnSubmit.prop('disabled', !valid);
        }

        render();
    });
});
