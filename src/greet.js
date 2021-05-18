export default function greet(...rest) {
  let greeting = ''
  if (rest.length < 1) {
    greeting = 'Hi, stranger'
  } else if (rest.length > 1) {
    greeting = 'Hi, guys'
  } else if (rest.length === 1 && rest[0] === 'Jerry') {
    greeting = 'Hi, coach'
  } else if (rest.length === 1) {
    greeting = 'Hi, ' + rest[0]
  return greeting
}
