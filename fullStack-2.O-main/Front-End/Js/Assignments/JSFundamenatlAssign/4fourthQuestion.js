/** Q4. Create a JavaScript program that takes a regex pattern and a string as input. Write a function that not
only checks if there is a match but also extracts specific parts of the matched text using groups. Test the
function with patterns that include groups to capture different parts of a date (e.g., day, month, and year)
from a given string. */

function extractDateParts(pattern, inputString) {
    // Create a regex object with the provided pattern
    const regex = new RegExp(pattern);
  
    // Use the exec method to find the first match
    const match = regex.exec(inputString);
  
    // Check if there is a match
    if (match) {
      // Extract specific parts using groups
      const day = match[1] || 'N/A';
      const month = match[2] || 'N/A';
      const year = match[3] || 'N/A';
  
      // Display the extracted date parts
      console.log(`Match found:\nDay: ${day}\nMonth: ${month}\nYear: ${year}`);
    } else {
      console.log('No match found.');
    }
  }
  
  // Test the function with different date patterns
  const inputString = 'Today is 30-01-2024';
  
  // Test pattern with groups for day, month, and year
  const datePattern = /(\d{2})-(\d{2})-(\d{4})/;
  extractDateParts(datePattern, inputString);
  