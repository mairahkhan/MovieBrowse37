var contactForm = document.getElementById("contactForm");

//This listener is called when the contact form is submitted
contactForm.addEventListener("submit",
	function(e) {
		//Submitting a form usually reloads a page, but this can be prevented
		//	by calling the preventDefault method of the event object
		if (!e.defaultPrevented) e.preventDefault();

		var inputs = contactForm.getElementsByTagName("*");

		//Rather than the form data being sent as an HTTP request to the server
		//	we can handle the inputs in the script
		console.log(inputs[0].value);
		console.log(inputs[1].value);
	}
);