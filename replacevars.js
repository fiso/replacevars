function replaceVars (str, vars = {}) {
  return Object.keys(vars).reduce(
      (str, varName) =>
        str.replace(
            new RegExp('\\$\\{' + String(varName) + '\\}', 'g'),
            vars[varName]),
      str);
}

module.exports = {
  replaceVars,
};
