(function () {
	var $emailId = document.querySelector('#emailId');
	var $telephone = document.querySelector('#tele');
	var $message = document.querySelector('#message');

	function validateEmail() {
		var userEmail = $emailId.value;

		if(!userEmail) {
			showErrorMessage($emailId,'Need Email Id.');
			return false;
		}

		if (userEmail.indexOf('@') === -1 || userEmail.indexOf('.') === -1 ) {
			showErrorMessage($emailId,'Must be a valid email id');
			return false;
		}

		showErrorMessage($emailId, null);
		return true;
	}

	function validatePhone() {
		var userPhone = parseInt($telephone.value);
		//var len = userPhone.toString().length;
		//console.log($telephone.value + ' ' + userPhone + ' ' + isNaN(userPhone) + ' ' + len);

		if(!($telephone.value)) {
			showErrorMessage($telephone,'Need phone number.');
			return false;
		}

		if (isNaN(userPhone) || userPhone.toString().length < 10){
			showErrorMessage($telephone, 'Must be a valid number.');
			return false;
		}

		showErrorMessage($telephone, null);
		return true;
	}

	function validateMessage() {
		var userMessage = $message.value;

		if (!userMessage) {
			showErrorMessage($message, 'Need some message.');
			return false;
		}
		showErrorMessage($message,null);
		return true;
	}

	function showErrorMessage($input, message) {
	  var $container = $input.parentElement; // The .input-wrapper

	  // Remove an existing error
	  var error = $container.querySelector('.error-message');
	  if (error) {
	    $container.removeChild(error);
	  }

	  // Now add the error if the message isn’t empty
	  if (message) {
	    var error = document.createElement('div');
	    error.classList.add('error-message');
	    error.innerText = message;
	    $container.appendChild(error);
	  }
	}

	function validForm(){
		var isValidEmail = validateEmail();
		var isValidPhone = validatePhone();
		var isValidMessage = validateMessage();
		return isValidEmail && isValidPhone && isValidMessage;
	}

	$emailId.addEventListener('input',validateEmail);
	$telephone.addEventListener('input',validatePhone);
	$message.addEventListener('input',validateMessage);

	document.querySelector('form').addEventListener('submit', (e) => {
		e.preventDefault();
		if (validForm()) {
			alert('Thank you for contacting me!');
		}
	});

})();