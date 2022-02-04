window.onload = function() {
    tabs = document.getElementsByClassName('tab');
    for(let i = 0; i < tabs.length; i++) {
        tabs[i].onclick = function() {
            toggleTabs(this)
        }
    }
}

function toggleTabs(tab) {
  let dataTab = tab.getAttribute('data-tab')
  let tabbedContent = document.getElementsByClassName('tabbed-content');
  
  for (let i = 0; i < tabs.length; i++) {
    if (dataTab !== tabs[i].getAttribute('data-tab')) {
      tabs[i].classList.remove('active')
      tabs[i].classList.add('inactive')
    } else {
      tabs[i].classList.remove('inactive')
      tabs[i].classList.add('active')
    }
  }

  for (let i = 0; i < tabbedContent.length; i++) {
    if (dataTab !== tabbedContent[i].id) {
      tabbedContent[i].classList.remove('show')
      tabbedContent[i].classList.add('hide')
    } else {
      tabbedContent[i].classList.remove('hide')
      tabbedContent[i].classList.add('show')
    }
  }

}