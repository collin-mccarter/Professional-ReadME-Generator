
function generateMarkdown(data) {
    return `
# ${data.title}
    Project Created By: ${data.github}

## Table of Contents:
- [Description] (#description)
- [Installation] (#installation)
- [Usage] (#usage)
- [Contributions] (#contribution)
- [Testing] (#testing)
- [Contact] (#contact)
    
## Description
    ${data.description}

## Installation
    ${data.instructions}

## Usage
    ${data.usage}

## Contribution
    ${data.contribution}

## Testing
    ${data.test}

## Contact
- GitHub Profile: [${data.github}] (https://github.com/${data.github})
- Email: ${data.email}
    `;
}

module.exports = generateMarkdown;