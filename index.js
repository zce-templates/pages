const path = require('path')

const date = new Date()

module.exports = {
  name: 'pages',
  version: '0.1.0',
  metadata: {
    year: date.getFullYear(),
    month: ('0' + (date.getMonth() + 1)).substr(-2),
    day: ('0' + date.getDate()).substr(-2)
  },
  prompts: {
    name: {
      type: 'input',
      message: 'Project name'
    },
    version: {
      type: 'input',
      message: 'Project version'
    },
    description: {
      type: 'input',
      message: 'Project description',
      default: 'Awesome pages project'
    },
    author: {
      type: 'input',
      message: 'Project author'
    },
    github: {
      type: 'input',
      message: 'GitHub username',
      default: 'zce'
    },
    license: {
      type: 'input',
      message: 'Project license'
    }
  },
  filters: {
    // '**/*.scss': answers => answers.sass
  },
  complete: context => {
    const { dest } = context
    const cwd = process.cwd()

    console.log('✨  To get started:')
    console.log()
    dest === cwd || console.log(`   $ cd ${path.relative(cwd, dest)}`)
    console.log('   $ yarn')
    console.log()
    console.log('👻  Good luck :)')
  }
}
