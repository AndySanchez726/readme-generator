const generateBadge = badgeText => {
  if (badgeText === 'GNU AGPLv3') {
    return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;
  } else if (badgeText === 'GNU GPLv3') {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (badgeText === 'GNU LGPLv3') {
    return `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`;
  } else if (badgeText === 'Mozilla Public 2.0') {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
  } else if (badgeText === 'Apache 2.0') {
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else if (badgeText === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (badgeText === 'Unlicense') {
    return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
  } 
}


// function to generate markdown for README
function generateMarkdown(data) {
  // console.log(data)
  return `
# ${data.title}
${generateBadge(data.license)}
## Description
${data.description}
## Table of Contents
[Installation](#installation)

[Usage](#usage)

[Credits](#credits)

[License](#license)

[Tests](#tests)

[Questions](#questions)

## Installation
${data.installation}
## Usage
${data.useage}
## Credits
${data.credits}
## License
Licensed under ${data.license}.
## Tests
${data.test}
## Questions
If you have any questions, here is a link to my github as well as my email address. Feel free to contanct me!

[Github](github.com/${data.github} "My Github")

[Email](${data.email} "My Email")
  `;
}

module.exports = generateMarkdown
