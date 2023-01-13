/**
 * Replaces each instance of {n} in a string with a corresponding argument.
 *
 * Ex: formatStr("Hello, my name is {0}. I live in {1}.", "Sean", "Denver")
 */
export const formatStr = (str: string, ...args: string[]) => {
  for (let i = 0; i < args.length; i++) {
    const reg = new RegExp("\\{" + i + "\\}", "g");
    str = str.replace(reg, args[i]);
  }
  return str;
};
