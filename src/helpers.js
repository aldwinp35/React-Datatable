/**
 * Check and validate object keys.
 */
export function checkObjectKeys(obj, keys = null) {
  let objKeys = Object.keys(obj);
  if (objKeys.indexOf("id") === -1)
    throw new Error('Each data object should have an "id" key.');

  if (keys) {
    if (!Array.isArray(keys)) {
      throw new Error("Keys or fields should be an array.");
    }

    objKeys = keys;
    objKeys.forEach((key) => {
      if (!obj.hasOwnProperty(key)) {
        throw new Error(
          `Key or field "${key}" doesn't exist in the data object.`
        );
      }
    });
  }

  return objKeys;
}

/**
 * Convert string to title case.
 */
export function toTitle(title) {
  const newTitle = title
    .replaceAll("_", " ")
    .split(" ")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(" ");
  return newTitle;
}
