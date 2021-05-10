module.exports = {
  // "refs": {
  //   // 'fe-dashboard': {
  //   //   "title": "fe-dashboard",
  //   //   "url": "http://localhost:6006"
  //   //   // "url": "https://shinya-maruyama.github.io/storybook-composition/fe-dashboard"
  //   // },
  //   'fe-portal': {
  //     "title": "fe-portal",
  //     "url": "http://localhost:6007"
  //     // "url": "https://shinya-maruyama.github.io/storybook-composition/fe-portal"
  //   },
  // },
  refs: (config, { configType }) => {
    if (configType === 'DEVELOPMENT') {
      return {
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
    };
  },
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app"
  ]
}