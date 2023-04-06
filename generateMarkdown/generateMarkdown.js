const { isModuleNamespaceObject } = require("util/types")

function generateMarkdown(data) {
    return `${data.title}
    by ${data.name}
    ## Table of Contents:
    * [Description] (#description)
    * [Install Instrutions] (#requirements)
    * [Usage] (#usage)
    * [Contributions] (#contribution)
    * [Test Instructions] (#tests)
    * [Contact] (#contact)
    
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
        * GitHub Profile: ${data.github} 
        * Email: ${data.email}
    `
}

module.exports = generateMarkdown;