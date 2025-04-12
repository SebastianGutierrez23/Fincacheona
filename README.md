# PROYECTO-FINCA-CHEONA
 Proyecto practico finca cheona hoteleria
 
 <a name="readme-top"></a>

<div align="center">

<img src="logo.png" alt="logo" width="140" height="auto" style="border-radius:50%"   />
<br/>
<h3><b>Proyecto formulario web pack</b>

</div>

# ✅ TABLE OF CONTENTS
- [📖 About the Project](#about-project)
  - [⚒️ Build With](#built-with)
    - [Tech Stack](#tech-stack)
    - [Key Features](#key-features)
  - [🚀 Live Demo](#live-demo)
 - [💻 Getting Started](#getting-started)
   - [Setup](#setup)
   -  [Prerequisites](#prerequisites)
   - [Install](#install)
   - [Usage](#usage)
   - [Run tests](#run-tests)
   - [Deployment](#deployment)
- [👥 Authors](#authors)
- [🕹️ Future Features](#future-features)
- [🤝 Contributing](#contributing)
- [⭐ Show your Support](#support)
- [👏 Acknowledgements ](#ackknowledgements)
- [❓ FAQ ](#faq)
- [📃 License](#license)

# 📖 [Formulario Web]<a name="about-project"></a>

*[Formulario Web]* 
This is my first project at SENA in which we use configurations to perform deployments in Azure.

## ⚒️ Build With <a name="built-with"></a>

<p>
This Projects was built using:
HTML,CSS, JAVA SCRIPT, MARKDOWN AND SHELLSCRIPT, GIT, GITHUB
</p>

### Tech Stack <a name="tech-stack"></a>

<li> HTML </li>
<li> CSS </li>
<li> JAVE SCRIPT </li>
<li> MARKDOWN </li>
<li> GIT </li>
<li> GITHUB </li>

<details>
<summary> Client </summary>
    <ul>
    <li><a href="
https://developer.mozilla.org/es/docs/Web/HTML
">HTML</a></li>    
    </ul>
</details>

<details>
<summary>Markdown</summary>
<ul>
<li><a href="
https://markdown.es/sintaxis-markdown/
">Markdown</a></li>
</ul>
</details>


### Key Features <a name="key-features"></a>

<p align="right"><a href="#readme-top">Back to top</a></p>

## 💻 Getting Started <a name="getting-started"></a>


To get a local copy up and running follow these steps:

### Prerequsites 

To run this project you need the following tools:

- [VS Code]
- [Node.js]
- [Git and GitHub]


### Setup

Linters
A linter is a tool that analyzes your source code to flag programming errors, bugs, stylistic errors, and suspicious constructs(source: Wikipedia).

There are a few reasons for using linters:

Catching syntax errors is more efficient. There is no need to debug simple mistakes like typos - the linter does it for you.
The entire codebase looks like written by one person.
Programmers can focus on solving problems, instead of cleaning up the code.

1: The project structure must be organized

2: The files .hintrc.txt and .stylelintrc.json must be copied to save them.

3: The installations must be started as appropriate following the steps mentioned.

4: It must be verified that there are no errors, if there are, they must be corrected.

5: The following files are copied and configured 
server.js, webpack.config.js, .babelrc.

6: Then, the installation of what is requested by the previous files for its operation is carried out.


### Install

Install this project with:

Lighthouse run

    npm install -g @lhci/cli@0.7.x
Webhint:

     npm install --save-dev hint@7.x
Stylelint:

     npm install --save-dev stylelint@13.x stylelint-scss@3.x stylelint-config-standard@21.x stylelint-csstree-validator@1.x
Eslint

     npm install --save-dev eslint@7.x eslint-config-airbnb-base@14.x eslint-plugin-import@2.x babel-eslint@10.x

Webpack

     npm init -y
     npm install webpack webpack-cli --save-dev
Webpack Css loader

     npm install --save-dev style-loader css-loader
Webpack html loader

     npm install --save-dev html-loader
Webpack html plugin

     npm install --save-dev html-webpack-plugin
Webpack dev server

     npm install --save-dev webpack-dev-server     



### Usage 

1. Install a linter
First, you must install the linter corresponding to the language you are using. Some common examples:

JavaScript/TypeScript: ESLint (npm install eslint --save-dev)

Python: Flake8 or Pylint (pip install flake8 or pip install pylint)

CSS/SCSS: Stylelint (npm install stylelint --save-dev)

HTML: HTMLHint (npm install htmlhint --save-dev)

Go: Golangci-lint (go install github.com/golangci/golangci-lint/cmd/golangci-lint@latest)

2. Configure the linter
Linters are usually highly configurable. You can define specific rules in a configuration file. For example:

ESLint: Create an .eslintrc.json or .eslintrc.js file in the root of your project.

Pylint: Create a .pylintrc file.

Stylelint: Create a .stylelintrc.json file.

3. Run the linter
You can run the linter manually from the terminal or integrate it into your code editor.

From the terminal:

Example with ESLint: npx eslint file.js

Example with Flake8: flake8 file.py

In a code editor (such as VS Code):

Install the linter extension (for example, the ESLint extension for VS Code).

The linter will automatically check your code as you type and display errors and warnings in real time.

Examples of popular linters:
JavaScript/TypeScript: ESLint, Prettier (for formatting).

Python: Flake8, Pylint, Black (for formatting).

CSS/SCSS: Stylelint.

HTML: HTMLHint.

Go: Golangci-lint.

Ruby: RuboCop.

Java: Checkstyle, PMD.

** USO DE WEBPACK**

Step 1: Create a Project
Create a folder for your project:

bash
Copy
mkdir my-webpack-project
cd my-webpack-project
Initialize a Node.js project:

bash
Copy
npm init -y
Install Webpack and Webpack CLI (command-line interface):

bash
Copy
npm install webpack webpack-cli --save-dev
Step 2: Project Structure
Create the following file structure:

Copy
my-webpack-project/
├── src/
│ ├── index.js
│ └── styles.css
├── dist/
├── webpack.config.js
└── package.json
src/index.js: Main JavaScript file.

src/styles.css: CSS styles file.

dist/: Folder where Webpack will generate optimized files.

webpack.config.js: Webpack configuration file.

### Run Test

To run tests, run the following command:

To test the Stylelint linter:

    npx stylelint "**/*.{css,scss}"
To test the Webhint:

    npx hint .
To test the ESLint linter:

    npx eslint .

** WEBPACK**

Ejecutar Webpack
Ejecuta Webpack para empaquetar tu proyecto:

bash
Copy
npx webpack
Webpack generará un archivo bundle.js en la carpeta dist/.




### Deployment

Deploy using your local enviroment

<p align="right"><a href="#readme-top">Back to top</a></p>

## 👥 Authors <a name="authors"></a>

Jeysson Contreras

🧑🏻‍💻 *Author 1*

 - GitHub: [@alyconr](
https://github.com/alyconr
)
 - LinkedIn: [LinkedIn](
https://www.linkedin.com/in/jeysson-aly-contreras
)
🧑🏻‍💻 *Author 2*
 - GitHub: [Nelson Sebastian Castañeda Gutierrez](
https://github.com/SebastianGutierrez23
)
 - LinkedIn: [LinkedIn](
https://www.linkedin.com/in/sebastian-guti%C3%A9rrez-236b9b206/


## 🕹️ Future Features <a name="future-features"></a>

- [ ] *[Ping]*
- [ ] *[Nslookup]*
- [ ] *[BandWitdth Test]*


## 🤝 Contributing <a name="contributing"></a>


Contributions, issues, and  feature requests are welcome!

Feel free tp check the [issues page](
https://github.com/alyconr/Network-Shell-Script-/issues
)


## ⭐ Show your Support

Wrrite a message to encourage readers to support your project

If you like this project please give one start

## 👏 Acknowledgements <a name="acknowledgements"></a>

I would like to thank my learning teammates  and Sena Instructor

## 📃 License <a name="license"></a>

This Project is [MIT](./LICENSE.md) licensed

<p align="right"><a href="#readme-top">Back to top</a></p>