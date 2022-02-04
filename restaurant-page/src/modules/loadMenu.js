import { pageContents } from './pageContents'

function loadMenu() {
  const content = document.querySelector('#content')

  // content wrapper
  const contentDiv = pageContents.createWrapper('menu-contents', 'contents-wrapper')
  content.appendChild(contentDiv)

  // title wrapper
  const titleDiv = pageContents.createWrapper('', 'title-wrapper')
  contentDiv.appendChild(titleDiv)

  // add title
  const title = pageContents.createTitle('title', 'Menu')
  titleDiv.appendChild(title)

  // intro wrapper
  const introDiv = pageContents.createWrapper('', 'intro-div')
  contentDiv.appendChild(introDiv)

  // add image
  const image = pageContents.createImage('intro-image','https://www.budgetbytes.com/wp-content/uploads/2013/07/Creamy-Spinach-Tomato-Pasta-bowl-500x375.jpg')
  introDiv.appendChild(image)

  // add copy
  const paragraph = pageContents.createParagraph('intro-copy', 'All of our pizzas are made fresh to order. Our pizzaioli are happy to tailor your pizza to your dietary requirements. We have a vegan special in all pizzerias and gluten free options available. Choose buffalo mozzarella instead on any pizza for £2.35.')
  introDiv.appendChild(paragraph)
}

export {
  loadMenu
}