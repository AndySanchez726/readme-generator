
// function to generate markdown for README
function generateMarkdown(data) {
  // console.log(data)
  return `
    # ${data.title}

    ## Description
    
    ## Table of Contents

    ## Installation

    ## Usage

    ## Credits

    ## Credits

    ## Licesnse

    ## Badges

    ## Tests
  `;
}

module.exports = generateMarkdown
