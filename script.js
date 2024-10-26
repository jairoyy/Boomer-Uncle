// TERMINAL TYPING CODE BY STEVE DEKORTE
 
function getAllElementsWithAttribute(attribute)
{
  var matchingElements = [];
  
  var allElements = document.getElementsByTagName('span');
  
  for (var i = 0, n = allElements.length; i < n; i++)
  {
    if (allElements[i].getAttribute(attribute))
    {
      matchingElements.push(allElements[i]);
    }
  }
  return matchingElements;
}

var terminalElements = getAllElementsWithAttribute("terminal");

function terminals_init()
{
  var elements = terminalElements;
  for (var i = 0; i < elements.length; i++)
  {
    var e = elements[i]
    e.completeHTML = e.innerHTML
    e.innerHTML = ""
    e.i = 0
  }

}

function terminals_start()
{
  //terminalIntervalFunction = function(){ terminals_next() }
  //setInterval(terminalIntervalFunction, 1000/60);
  terminals_next()
}

function terminals_next()
{
  var done = true
  var elements = terminalElements;

  for (var i = 0; i < elements.length && done == true; i++)
  {
    var e = elements[i]

    e.i ++

    if (e.innerHTML.length >= e.completeHTML.length)
    {
      e.innerHTML = e.completeHTML
    }
    else
    {
      var s =  e.completeHTML.substring(0, e.i) 

      if (s.slice(-1) == " ") 
      {
        if(e.innerHTML.length % 6 == 0 ) { s = s + "" } else { s = s + "|" }
      }
      else
      {
        s = s + "|"
      }

      e.innerHTML = s
      e.parentNode.style.display = 'none'
      e.parentNode.style.display = 'block'
      done = false
    }
  }

  if (!done)
  {
    //window.clearInterval(terminalIntervalFunction)
    setTimeout(terminals_next, 800/20)
  }
}

terminals_init()

window.onload = function() { terminals_start() };

alert("For Educational Purpose Only");


document.addEventListener("DOMContentLoaded", () => {
    // Simulate successful action after a delay
    setTimeout(() => {
        document.querySelector('.terminal-line').innerHTML += `
            <br /><br />
            Screen off...<br />
            <div class="screen-off"></div>
        `;
        // Call function to turn off the screen
        turnOffScreen();
    }, 5000); // Adjust the delay as needed (5 seconds here)
});

function turnOffScreen() {
    // Add styles to mimic a screen off state
    const terminal = document.querySelector('.terminal');
    terminal.style.opacity = '0.5'; // Dim the screen
    terminal.style.backgroundColor = '#000'; // Change background to black
    terminal.style.color = '#444'; // Change text color to dim
    terminal.querySelector('.terminal-line').style.color = '#444'; // Dim the text
}
