// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { 
  //if no license  then return null
  if (license === "None") {
    return '';
  }

  
  return `https://img.shields.io/badge/license-test-red`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "None") {
    return '';
  }
  //take you to license  section in TOC

  //-[License](#license)

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return '';
  }
  return `## License
  
  This project had the ${license} Liscense`

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  let licenseBadge = renderLicenseBadge(data.projectLicense);
  let licenseSection = renderLicenseSection(data.projectLicense);

  return `# ${data.projectTitle}
  ${licenseBadge}
  
  ## Description
  ${data.projectDescription}

  ## Table of contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [Testing](#testing)
  
  ## Installation
  ${data.installInstructions}

  ## Usage 
  ${data.usageInstructions}

  ## Contribution
  ${data.contributionInstructions}

  ## Testing
  ${data.testInstructions}

  ## Questions
  If you have any questions, please reach out through GitHub or by email.

  GitHub: https://github.com/${data.githubUsername}

  Email: ${data.emailAddress}

 
  ${licenseSection}

`;
}

module.exports = generateMarkdown;





// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
