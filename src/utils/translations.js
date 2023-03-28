export const trFromInlineToModule = (input) => {
  return input
    .replaceAll(`,`, `;`)
    .replaceAll(`'`, ` `)
    .replaceAll(`"`, ` `)
    .replaceAll(" ", "")
    .replace(/^(.*?){{/, "")
    .replace("}}", "")
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .toLowerCase();
};
export const trFromModuleToInline = (input) => {
  function cssModuleToInlineStyle(input) {
    const styleObj = {};

    const declarationsRegex = /([^;\s]+)\s*:\s*([^;\s]+)(?:\s*;\s*|$)/g;

    let match;
    while ((match = declarationsRegex.exec(input)) !== null) {
      const [fullMatch, property, value] = match;

      const reactProperty = property.replace(/-([a-z])/g, (_, letter) =>
        letter.toUpperCase()
      );

      styleObj[reactProperty] = value;
    }

    return styleObj;
  }

  const styleObj = cssModuleToInlineStyle(input);
  const myString =
    `style={{\n` +
    Object.entries(styleObj)
      .map(([key, value]) => `${key}: '${value}'`)
      .join(`, \n`) +
    `\n}}`;
  return myString;
};
