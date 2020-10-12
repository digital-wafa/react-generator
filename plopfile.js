let config = require(`${__dirname}/react-generator-config.js`)

try {
  config = {...config, ...require(`${process.cwd()}/react-generator-config.js`)};
} catch (e) {
  config = config
}

module.exports = function (plop) {

  const templatesRoot = config.typescript ? './plop-templates/typescript' : './plop-templates/javascript'

  const destination = function(componentType) {
    switch (config.projectName) {
      case 'retraite':
        return `${process.cwd()}/src/{{destination}}/${componentType}/{{pascalCase name}}`
      default:
        return `${process.cwd()}/src/${componentType}/{{pascalCase name}}`
    }
  }
  
  plop.setGenerator('react-components-generator', {
    prompts: [{
      type: 'list',
      name: 'choice',
      message: 'Specify component type please',
      choices: [
        { name: 'component', value: 'component', checked: true },
        { name: 'container', value: 'container' },
      ],
    },
    {
      type: 'input',
      name: 'name',
      message: 'component name please'
    },
    {
      type: 'list',
      name: 'destination',
      message: 'Specify destination path please',
      choices: [
        { name: 'shared', value: 'shared', checked: true },
        { name: 'adherent', value: 'adherent' },
        { name: 'souscripteur', value: 'souscripteur' },
      ],
      when: function() {
        return config.projectName === 'retraite'
      }
    }],
    actions: function (data) {

      let actions = [];

      if (data.choice === 'component') {
        actions.push({
          type: 'addMany',
          destination: destination('components'),
          base: `${templatesRoot}/component/`,
          templateFiles: `${templatesRoot}/component/*`
        });
      } else {
        actions.push({
          type: 'addMany',
          destination: destination('containers'),
          base: `${templatesRoot}/container/`,
          templateFiles: `${templatesRoot}/container/*`
        });
      }  
      return actions;
    }
  });
};
