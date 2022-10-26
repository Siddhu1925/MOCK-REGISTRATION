function validate() {
	let fullName = document.getElementById('full-name').value
	let gender = document.getElementById('gender').value
	let checkboxes = document.getElementsByClassName('form-check-input');
	let error = false

	if(fullName.length >= 5 && fullName.indexOf(' ') !== -1) {
		document.getElementById('full-name-valid').style.display = 'block'
		document.getElementById('full-name-invalid').style.display = 'none'
	} else {
		document.getElementById('full-name-invalid').style.display = 'block'
		document.getElementById('full-name-valid').style.display = 'none'
		error = true
	}
    
	

	if(gender != 'None') {
		document.getElementById('gender-valid').style.display = 'block'
		document.getElementById('gender-invalid').style.display = 'none'
	} else {
		document.getElementById('gender-invalid').style.display = 'block'
		document.getElementById('gender-valid').style.display = 'none'
		error = true
	}
    
	var values =[]
	for(var i=0; i<checkboxes.length; i++){
		if(checkboxes[i].checked === true){
		   values.push(checkboxes[i].value)
		}
	}
	if(values.length>0) {
		document.getElementById('hobbies-valid').style.display = 'block'
		document.getElementById('hobbies-invalid').style.display = 'none'
	} else {
		document.getElementById('hobbies-invalid').style.display = 'block'
		document.getElementById('hobbies-valid').style.display = 'none'
		error = true
	}
    
    
	if(!error) {
		if(values.length === 1){
		    alert(`Hobbies of ${fullName} (${gender}) is ${values[0]}`)
		}
		else if(values.length === 2) {
			alert(`Hobbies of ${fullName} (${gender}) are ${values[0]} and ${values[1]}`)
		}
		else if(values.length>2){
			alert(`Hobbies of ${fullName} (${gender}) are ${values.join(',')}`)
		}
         
		document.getElementById('registration-form').reset()
         
		let validFeedbacks = document.getElementsByClassName('valid-feedback')
		for(let i = 0; i < validFeedbacks.length; i++) {
			validFeedbacks[i].style.display = 'none'
		}
		let invalidFeedbacks = document.getElementsByClassName('invalid-feedback')
		for(let i = 0; i < invalidFeedbacks.length; i++) {
			invalidFeedbacks[i].style.display = 'none'
		}
	}
}
