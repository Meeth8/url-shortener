document.addEventListener('DOMContentLoaded', function() {
    // Function to handle form submission
    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // got the input value
        const originalUrl = document.getElementById('originalUrl').value;

        // Generate a random shortened URL
        const shortenedUrl = generateShortenedUrl();

        // Adding the URLs to the table
        const row = document.getElementById('urlTable').insertRow(-1);
        row.innerHTML = `<td>${originalUrl}</td><td>${shortenedUrl}</td>`;

        // Cleared the input field
        document.getElementById('originalUrl').value = '';
    });

    // Function to generate a random shortened URL (for demonstration purposes)
    function generateShortenedUrl() {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const length = 6;
        let result = '';
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return '' + result; 
    }
});


