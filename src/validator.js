const validator = {
	isValid: function (valorNombre) {
		const name = 'carolina';
		let nameValidated = true;
		if (valorNombre.toLowerCase() === name) {
			nameValidated;
		} else {
			nameValidated = false;
		}

		return nameValidated;
	},
};

export default validator;