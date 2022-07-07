"use strict";
class FormValidator {
    constructor() {
        this.name = document.getElementById('name');
        this.phone = document.getElementById('phone');
        this.email = document.getElementById('email');
        this.website = document.getElementById('website');
        this.password1 = document.getElementById('password1');
        this.password2 = document.getElementById('password2');
        this.submit = document.getElementById('submit');
        this.form = document.getElementById('form');
        this.result = document.getElementById('result');
        this.form.addEventListener('submit', this.submission.bind(this));
    }
    helper(elem, toggleClass, text, result = false) {
        elem.className = '';
        elem.classList.add(toggleClass);
        elem.nextElementSibling.innerText = text;
        return result;
    }
    submission(e) {
        e.preventDefault();
        this.validateName(this.name.value);
        this.validatePhone(this.phone.value);
        this.validateEmail(this.email.value);
        this.validateWebsite(this.website.value);
        this.validatePassword1(this.password1.value);
        this.validatePassword2();
        if (this.validateName(this.name.value) &&
            this.validatePhone(this.phone.value) &&
            this.validateEmail(this.email.value) &&
            this.validateWebsite(this.website.value) &&
            this.validatePassword1(this.password1.value) &&
            this.validatePassword2()) {
            this.result.innerText = 'Form Successfully Submitted';
            this.result.style.color = 'green';
            this.submit.style.display = 'none';
            // * Then send this data to server
            return {
                name: this.name.value,
                phone: this.phone.value,
                email: this.email.value,
                website: this.website.value,
                password: this.password1.value,
            };
        }
    }
    validateName(value) {
        if (/^[a-zA-Z0-9]+([_ -]?[a-zA-Z0-9])*$/.test(value) &&
            /^[\w]{1,50}(?!\w+)/.test(value)) {
            return this.helper(this.name, 'valid', '', true);
        }
        else {
            return this.helper(this.name, 'error', 'Invalid name or string length more than 50 characters');
        }
    }
    validatePhone(value) {
        if (/^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(value)) {
            return this.helper(this.phone, 'valid', '', true);
        }
        else {
            return this.helper(this.phone, 'error', 'Invalid phone number');
        }
    }
    validateEmail(value) {
        if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)) {
            return this.helper(this.email, 'valid', '', true);
        }
        else {
            return this.helper(this.email, 'error', 'Invalid email address provided');
        }
    }
    validateWebsite(value) {
        if (/^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?\/?$/.test(value)) {
            return this.helper(this.website, 'valid', '', true);
        }
        else {
            return this.helper(this.website, 'error', "Invalid Website's URL");
        }
    }
    validatePassword1(value) {
        if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/.test(value)) {
            return this.helper(this.password1, 'valid', '', true);
        }
        else {
            return this.helper(this.password1, 'error', 'Password must be 6 to 20 characters, with at least one numeric digit, one uppercase and one lowercase letter');
        }
    }
    validatePassword2() {
        if (this.password1.value === this.password2.value &&
            this.password1.value !== '') {
            return this.helper(this.password2, 'valid', '', true);
        }
        else {
            return this.helper(this.password2, 'error', 'Invalid confirmation');
        }
    }
}
const formValidator = new FormValidator();
