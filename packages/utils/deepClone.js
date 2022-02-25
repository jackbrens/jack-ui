/**
 * 2022年2月25日21:19:24
 * @param object
 */
function deepClone (object) {
  if (typeof object === 'object') {
    let cloneObject = Array.isArray(object) ? [] : {};
    for (let i in object) {
      cloneObject[i] = deepClone(object[i]);
    }
    return cloneObject;
  } else {
    return object;
  }
}

export default deepClone;
