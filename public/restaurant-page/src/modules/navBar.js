function createNavButton(id, text) {
  const navButton = document.createElement('li');
  navButton.setAttribute('id', id)
  navButton.setAttribute('class', 'nav-button')
  navButton.textContent = text
  return navButton;
}

function navBar() {

  // nav wrapper
  const navDiv = document.createElement('nav')
  navDiv.setAttribute('id', 'nav-bar')
  content.appendChild(navDiv)

  // add nav
  const home = createNavButton('home', 'Home')
  navDiv.appendChild(home)
  const menu = createNavButton('menu', 'Menu')
  navDiv.appendChild(menu)
  const contact = createNavButton('contact', 'Contact')
  navDiv.appendChild(contact)


}

export {
  navBar
}