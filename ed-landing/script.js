document.addEventListener("DOMContentLoaded", function(){
	var acc = document.getElementsByClassName("accordion");
	var i;

	for (i = 0; i < acc.length; i++) {
	  acc[i].addEventListener("click", function() {
	    this.classList.toggle("active");
	    var panel = this.nextElementSibling;
	    if (panel.style.maxHeight){
	      panel.style.maxHeight = null;
	    } else {
	      panel.style.maxHeight = panel.scrollHeight + "px";
	    } 
	  });
	}

	var acci = document.getElementsByClassName("accordion-inline");
	var x;

	for (x = 0; x < acci.length; x++) {
	  acci[x].addEventListener("click", function() {
	    this.classList.toggle("active-inline");
	    var panelInline = this.nextElementSibling;
	    if (panelInline.style.maxHeight){
	      panelInline.style.maxHeight = null;
	    } else {
	      panelInline.style.maxHeight = panelInline.scrollHeight + "px";
	    } 
	  });
	}
});


