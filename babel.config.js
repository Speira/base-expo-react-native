module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./root'],
          alias: {
            '~': './root/',
            '~contexts': './root/contexts',
            '~components': './root/components',
            '~containers': './root/containers',
            '~hooks': './root/hooks',
            '~utils': './root/utils',
          },
        },
      ],
      [
        'babel-plugin-styled-components',
        {
          ssr: true,
          displayName: true,
        },
      ],
    ],
  }
}
