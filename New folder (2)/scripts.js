
// Handle tracking form submission
document.getElementById('trackForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const trackingId = document.getElementById('trackingId').value;
    
    // Example logic for handling the tracking request
    if (trackingId) {
        alert(`Tracking your shipment with ID: ${trackingId}`);
    } else {
        alert('Please enter a valid tracking ID');
    }
});

// Handle video play button
document.getElementById('playVideoButton').addEventListener('click', function(event) {
    event.preventDefault();
    alert('Playing video...');
});
