document.addEventListener("turbolinks:load", function(){
    const shadowEls = document.querySelectorAll(".shadow-host");
	
	console.log(shadowEls);
    shadowEls.forEach(function(shadowEl) {
    	const shadow = shadowEl.attachShadow({mode: 'open'});
		
		
    // add more value to the shadow dom is the general idea, or which?
		
	    const shadowParasite = shadowEl.querySelector('.shadow-parasite')
	    shadow.appendChild(shadowParasite);
    })

});