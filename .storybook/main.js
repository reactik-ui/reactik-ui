module.exports = {
  stories: ['../packages/**/*.story.tsx', '../packages/**/*.story.ts'],
  addons: ['@storybook/addon-docs'],
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
    },
  },
};
