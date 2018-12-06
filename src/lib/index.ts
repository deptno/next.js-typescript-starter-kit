export function cleanObject(object: object, valueKeeper?: any) {
  return Object
    .entries(object)
    .reduce((ret, [key, value]) => {
      if (value === undefined || value === null) {
        if (typeof valueKeeper !== 'undefined') {
          ret[key] = valueKeeper
        }
        return ret
      }
      if (!Array.isArray(value) && typeof value === 'object') {
        ret[key] = cleanObject(value)
      } else {
        ret[key] = value
      }
      return ret
    }, {})
}
