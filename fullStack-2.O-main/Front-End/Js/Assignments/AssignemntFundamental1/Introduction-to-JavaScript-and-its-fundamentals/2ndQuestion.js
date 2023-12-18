// 2: Explain the key differences between JavaScript and HTML. Provide examples of situations where
// you would use each.

// ````
// ### JavaScript and HTML serve different purposes in web development:

// HTML (HyperText Markup Language): It's the standard language used to create web pages and their structure. HTML provides the basic framework or skeleton of a webpage by defining elements and their layout.

// <!DOCTYPE html>
// <html>
// <head>
//   <title>My Webpage</title>
// </head>
// <body>
//   <h1>Welcome to my webpage!</h1>
//   <p>This is a paragraph of text.</p>
//   <img src="image.jpg" alt="An image">
//   <a href="https://www.example.com">Click here</a> to visit Example.com.
// </body>
// </html>

``
{/* JavaScript: It's a programming language that allows for dynamic content, interactivity, and manipulation of HTML and CSS. JavaScript can change the content, appearance, and behavior of a webpage in response to user actions or events. */}

// Changing text content using JavaScript
document.getElementById("myText").innerHTML = "New text!";

// Handling a button click event
document.getElementById("myButton").addEventListener("click", function() {
  alert("Button clicked!");
});

// When to use HTML:

// Defining Structure: HTML is essential for creating the structure of a webpage, using elements like <html>, <head>, <body>, <div>, <p>, <h1>-<h6>, etc.
// Static Content: Elements that don't require dynamic changes, like text, images, links, and basic layouts, are primarily defined in HTML.



// When to use JavaScript:

// Interactivity: For creating interactive elements such as forms validation, animations, sliders, and pop-ups.
// Dynamic Updates: Changing content dynamically based on user actions or data updates without reloading the entire page.
// Event Handling: Managing user interactions, like clicks, scrolls, input, etc., to trigger specific actions or functions.
// In a nutshell, HTML provides the structure and static content of a webpage, while JavaScript enables interactivity, dynamic updates, and manipulation of that content to create a more engaging and responsive user experience. They often work together, with HTML providing the foundation and JavaScript adding functionality on top of 