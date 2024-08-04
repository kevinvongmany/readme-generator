// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseText = `[License: ${license}]`
  if (license === "MIT") {
    return `![${licenseText}(https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if (license === "Apache 2.0") {
    return `![${licenseText}(https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else if (license === "GPL 3.0") {
    return `![${licenseText}(https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  } else if (license === "BSD 3") {
    return `![${licenseText}(https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
  } else {
    return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return `[MIT](https://opensource.org/licenses/MIT)`
  } else if (license === "Apache 2.0") {
    return `[Apache 2.0](https://opensource.org/licenses/Apache-2.0)`
  } else if (license === "GPL 3.0") {
    return `[GPL 3.0](https://www.gnu.org/licenses/gpl-3.0)`
  } else if (license === "BSD 3") {
    return `[BSD 3](https://opensource.org/licenses/BSD-3-Clause)`
  } else {
    return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  console.log(license);
  if (license !== "None") {
    return `## License
${renderLicenseBadge(license)}

This project is licensed under the ${renderLicenseLink(license)} license.`
  } else {
    return ""
  }
}

function renderSection(sectionTitle, sectionText, sectionCode=null) {
  let codeBlock = ""
  if (sectionCode) {
    let codeString = sectionCode.split(";").map(line => line.trim()).join('\n');
    codeBlock = `\n
\`\`\`shell
${codeString}
\`\`\`
  `
  } else {
    codeBlock = ""
  }
  return `## ${sectionTitle}
${sectionText}${codeBlock}`

}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
${data.license === "None" ? "" : `- [License](#license)`}
- [Contribution](#contribution)
- [Tests](#tests)
- [Questions](#questions)

${renderSection("Installation", data.installation, data.installationCode)}

${renderSection("Usage", data.usage, data.usageCode)}

${renderLicenseSection(data.license)}

${renderSection("Contribution", data.contribution)}

${renderSection("Tests", data.tests, data.testCode)}

${renderSection("Questions", 
  `
If you have any questions you can find me on GitHub here: [${data.github}](https://github.com/${data.github})
  
You can also contact me via email here: [${data.email}](${data.email})`
  )}
`;
}

module.exports = generateMarkdown;
