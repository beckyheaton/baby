

document.addEventListener('DOMContentLoaded', function() {

    // alert("The scripts.js file is working");

    // Make the title fall
    // Select the title element
    const title = document.getElementById('title');
    
    // Add click event listener to the title
    title.addEventListener('click', function() {
        // Call the function to make the title fall
        fallTitle(title);
    });
    

    
});

// Functions

// Function to make the title fall letter by letter from right to left
function fallTitle(titleElement) {
    // Get all the letters in the title
    const letters = titleElement.textContent.split('');
    
    // Clear the title container
    titleElement.innerHTML = '';
    
    // Iterate through each letter
    letters.forEach((letter, index) => {
        // Create a span element for the letter
        const span = document.createElement('span');
        span.textContent = letter;
        
        // Add CSS styles for positioning
        span.style.position = 'relative';
        span.style.transition = `top ${(index + 1) * 0.1 + 1}s ease`;
        span.style.top = '0';
        
        // Append the letter to the title container
        titleElement.appendChild(span);
        
        // Delay to create a staggered effect
        setTimeout(() => {
            // Calculate the distance to fall
            const distanceToFall = window.innerHeight - span.getBoundingClientRect().top - span.offsetHeight;
            
            // Move the letter to the bottom of the screen
            span.style.top = `${distanceToFall}px`;
        }, 100 * (index + 1));
    });
}


