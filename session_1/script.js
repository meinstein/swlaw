// write javascript here
let inputText = ""
// grab reference to HTML element of interest
const input = document.getElementsByTagName('input')[0]
// attach an event listener to the HTML element
input.addEventListener('input', function(event) {
  // add my logic for what to do on input event
  inputText = event.target.value
})
// grab a refernece to Button element
const button = document.getElementsByTagName('button')[0]
button.addEventListener('click', function(event) {
  // add my logic for what to do on input event
  console.log(inputText)
})
