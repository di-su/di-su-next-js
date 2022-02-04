const pageContents = (() => {

  function createWrapper(id, className) {
    const titleDiv = document.createElement('div')
    titleDiv.setAttribute('id', id)
    titleDiv.setAttribute('class', className)
    return titleDiv
  }

  function createTitle(className, text) {
    const title = document.createElement('h1');
    title.setAttribute('class', className)
    title.textContent = text
    return title;
  }

  function createImage(className, src) {
    const image = document.createElement('img')
    image.setAttribute('class', className)
    image.setAttribute('src', src)
    return image
  }

  function createParagraph(className, text) {
    const paragraph = document.createElement('p')
    paragraph.setAttribute('class', className)
    paragraph.textContent = text
    return paragraph
  }

  return {
    createTitle,
    createImage,
    createParagraph,
    createWrapper,
  }

})();

export {
  pageContents
}