module.exports = {
  stories: ['../src/**/*.stories.@(js|mdx|tsx)'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-knobs/register',
    '@storybook/addon-actions/register',
    '@storybook/addon-storysource',
    '@storybook/addon-controls',
    '@storybook/addon-backgrounds/register',
    '@storybook/addon-viewport/register'
  ]
}
