
function generateMarkdown(data) {
    return `
# ${data.title}
    Project Created By: ${data.github}

## License:
![badge](https://img.shields.io/badge/license-${data.license}-green)
* This application is covered by the ${data.license} license.   

## Table of Contents:
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contribution)
- [Tests](#tests)
- [Contact](#contact)
    
## Description
    ${data.description}

## Installation
    ${data.instructions}

## Usage
    ${data.usage}

## Contribution
    ${data.contribution}

## Tests
    ${data.test}

## Contact
If there are any additional questions regarding the application, you can reach me through the following methods:
- GitHub Profile: [${data.github}] (https://github.com/${data.github})
- Email: ${data.email}
    `;
}

module.exports = generateMarkdown;