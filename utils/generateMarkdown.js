// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description
  ${data.description}
 
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installations)
  - [Usage](#usage)
  - [Licence](#license)
  - [Contributors](#contributors)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installations
  ${data.installations}

  ## Usage
  ${data.usage}

  ## Licenses
   ${data.license}

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
