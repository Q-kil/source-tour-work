export function isObject(val: any) {
  return typeof val === 'object' && val !== null
}

// onClick
export function isOn(key: string) {
  return key[0] === 'o' && key[1] === 'n'
}
