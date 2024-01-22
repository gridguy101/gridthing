      const buttons = document.querySelectorAll('.button');
      
      buttons.forEach(button => {
        button.addEventListener('click', event => {
          // Do something when button is clicked
        });
      });
	  
      function search(input) {
      	var names = document.getElementsByTagName("h2");
      	var bttns = document.getElementsByTagName("button");
        var noresults = document.getElementById("noresults");
				noresults.style.display = "none";
      	for (let i = 0; i < names.length; i++) { 
      		bttns[i].style = "";
      		var name = names[i].innerText.toLowerCase()
      		if (name.search(input.toLowerCase()) == -1) {
      			bttns[i].style.display = "none";
      		}
      	}
        for (let i = 0; i < bttns.length; i++) { 
        	if(!bttns[i].style.display) {
            return;
        	}
        }
        noresults.style = "";
      }