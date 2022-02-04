import { pageContents } from './pageContents'

function loadHome () {
  const content = document.querySelector('#content')

  // content wrapper
  const contentDiv = pageContents.createWrapper('home-contents', 'contents-wrapper')
  content.appendChild(contentDiv)

  // title wrapper
  const titleDiv = pageContents.createWrapper('', 'title-wrapper')
  contentDiv.appendChild(titleDiv)

  // add title
  const title = pageContents.createTitle('title', 'Pizzeria')
  titleDiv.appendChild(title)

  // intro wrapper
  const introDiv = pageContents.createWrapper('', 'intro-div')
  contentDiv.appendChild(introDiv)

  // add image
  const image = pageContents.createImage('intro-image','https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg')
  introDiv.appendChild(image)

  // add copy
  const paragraph = pageContents.createParagraph('intro-copy', 'All of our pizzas are made fresh to order. Our pizzaioli are happy to tailor your pizza to your dietary requirements. We have a vegan special in all pizzerias and gluten free options available. Choose buffalo mozzarella instead on any pizza for £2.35.')
  introDiv.appendChild(paragraph)
}
 
export { 
  loadHome
}