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


    //GA Event Tracker Script. Licensed under MIT. Free for any use by all. Written by Paul Seal from codeshare.co.uk

    // Get the category, action and label from the element and send it to GA. The action is optional, because mostly it will be a click event.
    var trackClickEvent = function () {
        var eventCategory = this.getAttribute("data-event-category");
        var eventAction = this.getAttribute("data-event-action");
        var eventLabel = this.getAttribute("data-event-label");
        var eventValue = this.getAttribute("data-event-value");
        ga('send', 'event', eventCategory, (eventAction != undefined && eventAction != '' ? eventAction : 'click'), eventLabel, eventValue);
    };

    // Find all of the elements on the page which have the class 'ga-event'
    var elementsToTrack = document.getElementsByClassName("ga-event");

    // Add an event listener to each of the elements you found
    var elementsToTrackLength = elementsToTrack.length;
    for (var i = 0; i < elementsToTrackLength; i++) {
        elementsToTrack[i].addEventListener('click', trackClickEvent, false);
    }

    function colour1() {
    var colour = document.getElementById('colour1-input').value
      document.getElementById("colour1").style.background = colour;
    }

    function colour2() {
    var colour = document.getElementById('colour2-input').value
      document.getElementById("colour2").style.background = colour;
    }

    function colour3() {
    var colour = document.getElementById('colour3-input').value
      document.getElementById("colour3").style.background = colour;
    }

    function colour4() {
    var colour = document.getElementById('colour4-input').value
      document.getElementById("colour4").style.background = colour;
    }

    function colour5() {
    var colour = document.getElementById('colour5-input').value
      document.getElementById("colour5").style.background = colour;
    }

    function colourcta() {

      var colour = document.getElementById('colourcta-input').value
      var all = document.getElementsByClassName('colour-cta');
      for (var i = 0; i < all.length; i++) {
        all[i].style.background = colour;
    }
    }

