const subscribeButtonInvalid = document.querySelector('.subscribe-button-invalid');
const subscribeButtonValid = document.querySelector('.subscribe-button-valid');
const mainDiv = document.querySelector('main');
const successDiv = document.querySelector('.success-message');
const successEmail = document.querySelector('.success-email');
let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

function validation() {

	let email = document.getElementById('email').value;

	if (email.match(pattern)) {
		console.log("valid");
		subscribeButtonInvalid.style.display = 'none';
		subscribeButtonValid.style.display = 'block';
	} else {
		console.log("not");
		subscribeButtonInvalid.style.display = 'block';
		subscribeButtonValid.style.display = 'none';
	}
}

function submitEmail() {

	let email = document.querySelector('.email').value;

	mainDiv.style.display = 'none';
	successDiv.style.display = 'block';
	successEmail.textContent = email;
}