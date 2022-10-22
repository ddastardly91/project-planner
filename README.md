<div align="center">
<h1>Project Planner - Made using Vue.js in Vite
</div>

<div align="center">
  <h2>Main Project's Page</h2>
  <p>
    This page allows you to view all the projects that have been added to the planner
    all projects are stored using json-server to simulate requests using the fetch api.
  </p>
  <p>You are able to filter by 'Completed', 'Ongoing' or 'All' projects.</p>
<div>


<img src="https://github.com/ddastardly91/project-planner/blob/main/public/screenshot1.png?raw=true" />

<hr />

<div align="center">
  <p>
    User's are able to click on the project entry to expand and view the details, once a project has been completed you can click on the check icon on the right hand side to mark the project as completed, this will change the accent color on the left side of the project box from a red colour to a green color.
  </p>
  <p>
  Users are able to edit their project details if they require any updates, this can be done by clicing on the pencil icon.
  </p>
<div>

<img src="https://github.com/ddastardly91/project-planner/blob/main/public/screenshot2.png?raw=true" />

<hr />

<div align="center">
  <p>
    Once on the edit page, the input boxes and text area are filled with the information of the project title and details, users can then edit any text and then update their project information.
  </p>
  <p>
  When updating new information users will be prompted to confirm changes before routing back to the main projects page.
  </p>
<div>

<img src="https://github.com/ddastardly91/project-planner/blob/main/public/screenshot3.png?raw=true" />

<hr />

<div align="center">
  <p>
    Clicking on the New Project link in the navbar will direct users to a blank page containing an input and textarea for the title and details respectively, this page is identical to the edit page in the image above.
  </p>
  <p>
  Once a new project is submitted it will then be added to the database and will be rendered on the main projects page.
  </p>
<div>

<img src="https://github.com/ddastardly91/project-planner/blob/main/public/screenshot4.png?raw=true" />

<hr />

# project-planner

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
