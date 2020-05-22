module.exports = {
  stories: ['../src/**/*.stories.[tj]s'],
  addons: [
    '@storybook/addon-knobs/register',
    '@storybook/addon-actions/register',
    '@storybook/addon-backgrounds/register',
    '@storybook/addon-viewport/register'
  ]
}
