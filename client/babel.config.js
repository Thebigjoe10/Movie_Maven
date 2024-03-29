module.exports = {
  presets: [
    '@babel/preset-env', // Include this preset to transpile modern JavaScript syntax to a compatible version
    '@babel/preset-react' // Include this preset to transpile JSX syntax
  ],
  plugins: [
    '@babel/plugin-proposal-optional-chaining' // Include this plugin to transpile optional chaining syntax
  ]
};
