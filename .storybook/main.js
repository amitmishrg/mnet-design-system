module.exports = {
  stories: [
    '../src/**/Intro.stories.mdx',
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.(js|mdx)',
  ],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-storysource',
    '@storybook/addon-knobs',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
  ],
};
