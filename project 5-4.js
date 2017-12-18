const buttonUp = document.querySelector('.up');
		const buttonDown = document.querySelector('.down');

		const buttonLeft = document.getElementById('left-button');
		const addLeft = document.querySelector('.add-left');
		const addInputLeft = document.querySelector('.item-left');

		const buttonRight = document.getElementById('right-button');
		const addRight = document.querySelector('.add-right');
		const addInputRight = document.querySelector('.item-right');

		const removeButton = document.querySelector('.remove');
		const rightOl = document.querySelector('.col3');
		const leftOl = document.querySelector('.col1');
		const rightItems = rightOl.children; // all right list items
		const leftItems = leftOl.children; // all left list items

		// **make it so only one column can have selected item?**
		// click to highlight selected (both sides working)
		rightOl.addEventListener('click', (e) => {
		    if (e.target.className.indexOf('aqua') >= 0) {
		    	e.target.classList.remove('aqua');
		    	e.target.classList.add('white');
		    } else {
		        if (rightOl.querySelectorAll('.aqua').length) {
		            rightOl.querySelectorAll('.aqua')[0].className = 'white';
		        }
		        if (e.target.className.indexOf('white') >= 0) {
		            e.target.classList.add('aqua');
		            e.target.classList.remove('white');
		        } 
		    }
		});
		leftOl.addEventListener('click', (e) => { 
		    if (e.target.className.indexOf('aqua') >= 0) {
		    	e.target.classList.remove('aqua');
		    	e.target.classList.add('white');
		    } else { 
		        if (leftOl.querySelectorAll('.aqua').length) {
		        	leftOl.querySelectorAll('.aqua')[0].className = 'white';
		        }
		        if (e.target.className.indexOf('white') >= 0) {
		        	e.target.classList.add('aqua');
		        	e.target.classList.remove('white');
		        } 
		    }
		});

		// remove selected item (both sides working)
		removeButton.addEventListener('click', (e) => {
		    console.log(e.target.style); // button style
		    let selectedLeft = leftOl.querySelectorAll('.aqua')[0];
		    let selectedRight = rightOl.querySelectorAll('.aqua')[0];
		    if (selectedLeft) {
		    	selectedLeft.remove();
		    } 
		    if (selectedRight) {
		    	selectedRight.remove();
		    }
		});

		// up button, both sides working
		buttonUp.addEventListener('click', (e) => {
		    let aquaR = rightOl.querySelectorAll('.aqua')[0];
		    let aquaL = leftOl.querySelectorAll('.aqua')[0];
		    if (aquaR) {
		    	let prevLiR = aquaR.previousElementSibling;
		    	rightOl.insertBefore(aquaR, prevLiR);
		    }
		  if (aquaL) {
		    let prevLiL = aquaL.previousElementSibling;
		    leftOl.insertBefore(aquaL, prevLiL);
		  }
		});
		// down button, both sides working
		buttonDown.addEventListener('click', (e) => {
		  let aquaR = rightOl.querySelectorAll('.aqua')[0];
		  let aquaL = leftOl.querySelectorAll('.aqua')[0];
		  if (aquaR) {
		    let nextLiR = aquaR.nextElementSibling;
		    if (rightItems[rightItems.length - 1] == aquaR) {
		      rightOl.insertBefore(aquaR, rightItems[0]);
		      // console.log(rightItems);
		      // rightItems.unshift(); // says not a function
		      //console.log( rightItems.pop() ); // says not a function
		    } else {
		      rightOl.insertBefore(nextLiR, aquaR);
		    }
		  }
		  if (aquaL) {
		    let nextLiL = aquaL.nextElementSibling;
		    if (leftItems[leftItems.length - 1] == aquaL) {
		      leftOl.insertBefore(aquaL, leftItems[0]);
		    } else {
		      leftOl.insertBefore(nextLiL, aquaL);
		    }
		  }
		});
		// left button working. Should it remove highlight for item in same list?
		buttonLeft.addEventListener('click', (e) => {
		  let aqua = rightOl.querySelectorAll('.aqua')[0];
		  if (aqua) {
		    leftOl.appendChild(aqua);
		    aqua.classList.remove('aqua');
		    aqua.classList.add('white');
		  }
		});
		// working
		buttonRight.addEventListener('click', (e) => {
		  let aqua = leftOl.querySelectorAll('.aqua')[0];
		  if (aqua) {
		    rightOl.appendChild(aqua);
		    aqua.classList.remove('aqua');
		    aqua.classList.add('white');
		  }
		});

		// done
		addLeft.addEventListener('click', (e) => { 
		  let li = document.createElement('li');
		  li.textContent = addInputLeft.value;
		  li.classList.add('white');
		  leftOl.appendChild(li);
		  addInputLeft.value = '';
		});
		// done
		addRight.addEventListener('click', () => {
		  let li = document.createElement('li');
		  li.textContent = addInputRight.value;
		  li.classList.add('white');
		  rightOl.appendChild(li);
		  addInputRight.value = '';
		});
