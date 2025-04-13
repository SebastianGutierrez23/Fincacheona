# PROYECTO-FINCA-CHEONA
 Proyecto practico finca cheona hoteleria
 
 <a name="readme-top"></a>

<div align="center">

<img src="logo.png" alt="logo" width="140" height="auto" style="border-radius:50%"   />
<br/>
<h3><b>Proyecto practico finca cheona hoteleria</b>

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

# 📖 [Proyecto Finca Cheona]<a name="about-project"></a>

*[Proyecto Finca Cheona]* 

Implement a comprehensive information system at the CHEONA recreational property to optimize reservation management and improve direct communication with customers, reducing dependence on external services and strengthening the company's operational and competitive efficiency.

## ⚒️ Build With <a name="built-with"></a>

<p>
This Projects was built using:
HTML,CSS, JAVA SCRIPT, PYTHON, GIT, GITHUB,MYSQL,SQL,SELENIUM,NEXT.JS
</p>

### Tech Stack <a name="tech-stack"></a>

<li> HTML </li>
<li> CSS </li>
<li> JAVE SCRIPT </li>
<li> SQL </li>
<li> GIT </li>
<li> GITHUB </li>
<li> MYSQL </li>
<li> NEXT.JS </li>
<li> SELENIUM </li>

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
- [SELENIUM]
- [FAST API]



### Setup

FAST API

🚀 What is FastAPI?
FastAPI is a modern Python framework for creating APIs (programming interfaces) quickly, efficiently, and securely.

It's widely used in the backend when you want your app (e.g., built in React, Next.js, Angular, etc.) to connect to a server to read or send data.

🎯 What is it for?
Create RESTful APIs (create, read, update, delete data).

Develop fast backends for web and mobile applications.

Integrate with databases.

Connect with modern frontends (React, Vue, Next.js, etc.).

Use in machine learning, data science, or microservices.

1: pip install fastapi uvicorn

2: Crea un archivo llamado main.py con este contenido:

python
Copiar
Editar
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def leer_inicio():
    return {"mensaje": "¡Hola desde FastAPI!"}
    

3: uvicorn main:app --reload



### Install

Install FAS API

1: 1: First, install Python.

2: Download it from the official Python website.

3: Run the installer to install all the complete packages.

4: Then, run pip install fastapi uvicorn in the command console.

5:We must also install the SQL connector.
pip install mysql-connector-python


    
    



### Usage 

1. BACKEND


2:Esta contruido en fast api en lenguaje python,para realizar las pruebes del crud

3:It's built on Fast API in Python to perform CRUD testing.

The backend must be run in the command console by running python -m uvicorn main:app --reload

Then we can view our application at the address that it gives us in this case http://127.0.0.1:8000/docs

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