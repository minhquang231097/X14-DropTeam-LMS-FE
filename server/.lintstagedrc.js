module.exports = {
  //https://github.com/okonet/lint-staged#configuration.
  'src/**/*.(ts|js)?x': ['prettier --write', 'eslint']
}
