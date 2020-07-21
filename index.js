// creates a README file
// writing to the README file
// ask user some questions
// based on answers will generate a README file

const inquirer = require("inquirer");
const fs = require("fs");
// const num = ["x"+ "y"];
// num.push(2);
//ask user questions
function askQuestion() {
    return inquirer.prompt([{
        type: "input",
        message: "What is your projects name?",
        name: "projectName"
    }, {
        type: "input",
        message: "What is your projects link?",
        name: "projectLink"
    }]);
}

function generateReadme(response) {
    return `# ${response.projectName}
    
    ## Description
    ${response.projectLink}


# DU - project - 1
# Elifino - City Search, Maps and Language Translator
    GIVEN a city search dashboard with a form input
    WHEN I search for a city
THEN I am presented with city weather, map and language translation for that city.That city is added to the search history
        * Search Bar`
}


// saveReadme(response)
// saves README to a file, how do I save a file??? Is that save place in the browser???
function saveReadme(readmeData) {
    fs.writeFile('README.md', readmeData, function (err) {
        if (err) throw err;
        console.log('The file has been saved!');
    })
}


// initializing the script 
async function init(reponse) {
    const answers = await askQuestion();
    const text = generateReadme(answers);
    saveReadme(text);
}

init();