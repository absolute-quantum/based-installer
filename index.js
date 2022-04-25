class BasedInstaller {
    constructor() {
        console.log('yeet')
    }

    show_logo() {
        var inquirer = require('inquirer')
        inquirer
            .prompt([
                /* Pass your questions in here */
            ])
            .then((answers) => {
                // Use user feedback for... whatever!!
            })
            .catch((error) => {
                if (error.isTtyError) {
                    // Prompt couldn't be rendered in the current environment
                } else {
                    // Something else went wrong
                }
            })
        var figlet = require('figlet')

        figlet(
            'Based Installer',
            {
                font: 'ANSI Regular',
                horizontalLayout: 'default',
                verticalLayout: 'default',
                width: 200,
                whitespaceBreak: true
            },
            function (err, data) {
                if (err) {
                    console.log('Something went wrong...')
                    console.dir(err)
                    return
                }
                console.log(data)
            }
        )
    }
}

const bi = new BasedInstaller()
