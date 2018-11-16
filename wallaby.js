const ngxWallabyJest = require('ngx-wallaby-jest');

module.exports = function () {
  return {
    files: [
      'src/**/*.+(ts|html|json|snap|css|less|sass|scss|jpg|jpeg|gif|png|svg)',
      'tsconfig.json',
      'tsconfig.spec.json',
      'jest.config.js',
      '!src/**/*.spec.ts',
    ],

    tests: ['src/**/*.spec.ts'],

    env: {
      type: 'node',
      runner: 'node'
    },
    transform: [],


    preprocessors: {
      // This translate templateUrl and styleUrls to the right implementation
      // For wallaby
      'src/**/*.component.ts': ngxWallabyJest,
      '**/*.js': [
        (file) => require('babel-core').transform(file.content, {
          sourceMap: true,
          filename: file.path,
          presets: [['env', {
            targets: {
              node: "6.10"
            }
          }
          ]]
        }),
       // jestTransform
      ]
    },

    testFramework: 'jest'
  };
};
