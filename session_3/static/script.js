// ATTENTION: Read all the notes in this document very carefully as you proceed.

/**
  The jQuery in this document is equivalent to the following code in plain JavaScript:

  let inputText = ""

  const input = document.getElementsByTagName('input')[0]

  input.addEventListener('input', function(event) {
    inputText = event.target.value
  })

  const button = document.getElementsByTagName('button')[0]

  button.addEventListener('click', function(event) {
    console.log(inputText)
  })

  ...notice how much simpler & intuitive it is to use jQuery (below)!
*/

/**
  Select the input using the '$' symbol (that is how you invoke the use of jQuery)
  pass a function (in other words, a chunk of logic) to execute 'on' the event
  this should feel very similiar to the JavaScript we wrote in class, the only
  difference being that it is much more terse and intuituve. Selecting HTML elements
  with jQuery is meant to feel like CSS, where you simply target elements using
  their tag names, IDs, or class names (as opposed to JavaScript, where it's
  'document.getElementsByTagName(...)[...]')
*/

// Alas, allow me to present you with jQuery:

// delcare a variable in the outer scope to hold the text we will recieve from the input
let inputText = ''

// select our HTML elements using jQuery so that we have access to them
const input = $('input')
const button = $('button')

/**
  declare the functions that we want to execute when our events happens
  notice the intuitive naming convention I use for our functions (ie, inputHandler)
  functions are very much like variables, in that we can declare and name them as we please
  the main difference, however, is that functions encapsulate chunks of logic that we can re-use
  whereas a simple variable (ie, const or let) just holds a refernece to a single value
  moreover, functions accept arguments (see the inputHandler below) that we can use
  inside the function when we execute it.
*/
function inputHandler(event) {
  /**
    a list of all events the browser listens for: https://developer.mozilla.org/en-US/docs/Web/Events
    a function that is used to handle an event will ALWAYS have the 'event' given to it as argument
    we use the 'event' argument to pluck the value of the keys the user has typed
    we save that value from the event to our 'inputText' variable
    so that we can reference that value again in our clickHandler below!
  */
  inputText = event.target.value
}

function clickHandler() {
  /**
    when the click event is triggered we refernece our 'inputText' variable
    which has convienantly stored all the input text in the above function!
    and that's how we use variables, functions, and events to accomplish interactivity
    on webpages! This is the crux of what is going on behind the scenes of almost
    every website you're interacting with on a daily basis :)
  */
  console.log(inputText)
}

/**
  here we use jQuery to add an event listener to each of our elements of interest
  the 'on' keyword is used (that is specifically from jQuery) and then, just like in JavaScript,
  we name the event. After the event, the second argument we provide is the piece of logic (ie, function)
  that we want to execute when the event happens!
*/
input.on('input', inputHandler)
button.on('click', clickHandler)
