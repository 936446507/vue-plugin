export function hasClass(el, cls) {
  if (!el || !cls) return false

  return el.className.indexOf(cls) >= 0
}

export function addClass(el, cls = '') {
  if (!el) return false
  const classes = cls.match(/\w+/g) || []

  el.className = classes.reduce((className, cur) => {
    if (!hasClass(el, cur)) {
      className.push(cur)
    }
    return className
  }, [...classes]).join(' ')
}

export function removeClass(el, cls = '') {
  if (!el) return false
  const curClass = el.className.match(/\w+/g)
  const classes = cls.match(/\w+/g) || []

  el.className = classes.reduce((className, cur) => {
    if (hasClass(el, cur)) {
      const index = curClass.reduce((result, curClass, index) => {
        if (curClass === cur) {
          result = index
        }
        return result
      }, null)
      index !== null && className.splice(index, 1)
    }
    return className
  }, [...curClass]).join(' ')
}
