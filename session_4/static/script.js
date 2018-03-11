// the input text from the user
let inputText = ''

// a reference to the HTML elements we will attach event listeners to
const input = $('input')
const button = $('button')

// the function we will execute when the user types something
function inputHandler(event) {
  inputText = event.target.value
}

// the function we will execute when the user clicks the button
function clickHandler() {
  // write some more code inside my function
  $.ajax({
    url: '/form',
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify({ data: inputText })
  })
}

// here we attach our click handlers to our HTML elements
input.on('input', inputHandler)
button.on('click', clickHandler)
