// import { projects } from './projectClass';

// document.querySelector('#add-project').addEventListener('click', addNewProject)
// document.querySelector('#add-task').addEventListener('click', addNewTask)

// function addNewTask() {
//   // Create a task and then push in to array of tasks?   
//   let title = document.querySelector('#task-title').value
//   let description = document.querySelector('#task-description').value
//   let priority = document.querySelector('#task-priority').value
//   let dueDate = document.querySelector('#task-due-date').value

// }

// function addNewProject() {
//   let newProject = document.querySelector('#project-input').value
//   projects.addProject(newProject)
//   let returnedProjects = projects.getProjects();
//   console.log(returnedProjects)
//   showProjects();
// }

// function createParagraph(className, text) {
//   const paragraph = document.createElement('p')
//   paragraph.setAttribute('class', className)
//   paragraph.textContent = text
//   return paragraph
// }

// function showProjects() {
//   let returnedProjects = projects.getProjects();
//   let projectsList = document.querySelector('#projects-list')
//   projectsList.innerHTML = ""
//   let i = 0
//   do {
//     let paragraph = createParagraph("classname", returnedProjects[i])
//     projectsList.appendChild(paragraph)
//     i++
//   } while (i < returnedProjects.length)
// }

// export {
//   showProjects
// }

