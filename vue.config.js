module.exports = {
  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        '/',
        '/prefix',
        '/speller'
      ],
      useRenderEvent: false,
      headless: true,
      onlyProduction: true
    }
  }
}
