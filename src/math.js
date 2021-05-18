export function add(...rest) {
  const result = rest.reduce((acc, curr) => acc + curr)
  return result
}
