const path = require('path');

module.exports = api => {
  api.cache(true);

  const presets = ['next/babel', '@zeit/next-typescript/babel'];

  const plugins = [
    ['relay', { artifactDirectory: path.resolve(__dirname, '../relay/generated') }],
    [
      'module-resolver'
    ],
    [
      "import",
      {
        "libraryName": "antd", "style": true, "libraryDirectory": "lib"
      }
    ]
  ];

  return { plugins, presets };
};
