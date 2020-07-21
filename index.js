const inquirer = require("inquirer");
const fs = require("fs");

function askQuestion() {
    return inquirer.prompt([{
        type: "input",
        message: "What is your project's name?",
        name: "projectName"
    }, {
        type: "input",
        message: "What is your project's description?",
        name: "projectDescription"
    }, {
        type: "input",
        message: "What is your project's table of Contents?",
        name: "projectTableofContents"
    }, {
        type: "input",
        message: "Is there an Installation needed?",
        name: "projectInstallation"
    }, {
        type: "input",
        message: "Usage?",
        name: "projectUsage"
    }, {
        type: "input",
        message: "License?",
        name: "projectLicense"
    }, {
        type: "input",
        message: "Contributing?",
        name: "projectContributing"
    }, {
        type: "input",
        message: "Tests?",
        name: "projectTests"
    }, {
        type: "input",
        message: "Questions?",
        name: "projectQuestions"
    }

    ]);
}

function generateReadme(response) {
    return `# ${response.projectName}
    
    # Project Name
    ${response.projectName}

    ## Description
    ${response.projectDescription}

    ## Table of Contents
    ${response.projectTableofContents}

    ## Installation
    ${response.projectInstallation}

    ## Usage
    ${response.projectUsage}

    ## License
    ${response.projectLicense}

    ## Contributing
    ${response.projectContributing}

    ## Tests
    ${response.projectTests}
    
    ## Questions?
    ${response.projectQuestions}
    `
}

function saveReadme(readmeData) {
    fs.writeFile('generated/README.md', readmeData, function (err) {
        if (err) throw err;
        console.log('The file has been saved!');
    })
}

async function init() {
    const answers = await askQuestion();
    const text = generateReadme(answers);
    saveReadme(text);
}

init();