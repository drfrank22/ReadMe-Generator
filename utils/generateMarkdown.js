function renderLicense(license) {
  if (license !== "None") {
    return (
      `\n* [License](#license)\n`
    )
  }
  return ''
}

function renderLicenseSection(license) {
  if (license !== "None") {
    return (
      `## License

This project is licensed under ${license}.`
    )
  }
  return ''
}

function generateMarkdown(data) {
  return `# ${data.title}

## Description

${data.description}

## Table of Contents 

* [Installation](#installation)

* [Usage](#usage)
${renderLicense(data.license)}
* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation

To install necessary dependencies, run the following command:

\`
${data.install}
\`

## Usage

${data.usage}

${renderLicenseSection(data.license)}
  
## Contributing

${data.contributions}

## Tests

To run tests, run the following command:

\`
${data.test}
\`

## Questions

If you have any questions about the repo,please contact me at ${data.email}.

`;
}

module.exports = generateMarkdown;
