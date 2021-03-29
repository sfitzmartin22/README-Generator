// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "Apache") {
    return '![Badge](https://img.shields.io/badge/License-Apache%202.0-blue.svg)'
  } else if (license === "MIT") {
    return '![Badge](https://img.shields.io/badge/License-MIT-yellow.svg)'
  }; 
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (license) => {
  if (license === "Apache") {
    return '![License: Apache](https://opensource.org/licenses/Apache-2.0)'
  } else if (license === "MIT") {
    return '![License: MIT](https://opensource.org/licenses/MIT)'
  };
}
    

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}       

  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}
 
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installations)
  - [Usage](#usage)
  - [License](#licenses)
  - [Contributors](#contributors)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installations
  ${data.installations}

  ## Usage
  ${data.usage}

  ## Licenses  
  ${renderLicenseLink(data.license)}
  ${renderLicenseBadge(data.license)}



  ## Contributors
  ${data.contributors}

  ## Tests
  ${data.tests}

  ## Questions 
  ${data.questions}
  [Please reach out to ${data.email} with any questions]
  [I can also be reached at my Github profile](https://github.com/${data.username})

`;
}

module.exports = generateMarkdown;
