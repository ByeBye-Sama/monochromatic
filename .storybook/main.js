module.exports = {
  stories: ['../src/**/*.stories.(js|mdx|tsx)'],
  addons: [
    '@storybook/preset-typescript',
    '@storybook/addon-docs',
    '@storybook/addon-knobs/register',
    '@storybook/addon-actions/register',
    '@storybook/addon-backgrounds/register',
    '@storybook/addon-viewport/register'
  ]
}
