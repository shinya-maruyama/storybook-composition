module.exports = {
  refs: (config, { configType }) => {
    if (configType === 'DEVELOPMENT') {
      return {
        'fe-dashboard': {
          "title": "fe-dashboard",
          "url": "http://localhost:6006"
        },
        'fe-portal': {
          "title": "fe-portal",
          "url": "http://localhost:6007"
        },
      };
    }
    return {
      'fe-portal': {
        "title": "fe-portal",
        "url": "https://shinya-maruyama.github.io/storybook-composition/fe-portal"
      },
      'fe-dashboard': {
        "title": "fe-dashboard",
        "url": "https://shinya-maruyama.github.io/storybook-composition/fe-dashboard"
      },
    };
  },
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ]
}