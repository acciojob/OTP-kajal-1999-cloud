//your JS code here. If required.
let input = document.getElementsByClassName('code');

	for(let i=0; i< input.length; i++){
		input[i].addEventListener('keyup', (event) =>{
	  // 
			// it will target the current html input at ith
			let currentElement = event.target ;
          if(event.key === "Backspace"){
			  // we will target the previous element
			  let prevElement = currentElement.previousElementSibling;
			  //precaution for first input -- we will ensure the current input is not first as there will no prevElement 
				 if(prevElement){
					 prevElement.focus();
				 }
			  return;
		  }
			// check the input is digit or not
			let code = event.key.charCodeAt(0);
			if(48 <= code && code<=57) {
				// if input is num we will target next element
			let nextElement  = currentElement.nextElementSibling;
				if(nextElement) {
					nextElement.focus();
				}
				
			}
			else{
					console.log(event.target.value);
					event.target.value = "";
				}
			})
		}

