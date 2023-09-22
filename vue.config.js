module.exports = {
  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        '/',
        '/perfix',
        '/speller'
      ],
      useRenderEvent: false,
      headless: true,
      onlyProduction: true
    }
  }
}
