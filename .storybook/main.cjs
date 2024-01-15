const tsconfigPaths = require('vite-tsconfig-paths').default;

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],

  addons: [
    '@storybook/addon-links', 
    '@storybook/addon-essentials', 
    '@storybook/addon-interactions', 
    '@storybook/addon-designs', 
    '@storybook/addon-postcss',
    'storybook-dark-mode'
  ],

  framework: {
    name: '@storybook/react-vite',
    options: {}
  },

  features: {
    storyStoreV7: true,
  },

  viteFinal: async (config) => {
    config.plugins.push(tsconfigPaths());
    return config;
  },

  docs: {
    autodocs: true
  }
};