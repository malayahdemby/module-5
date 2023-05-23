// Function to save the event in local storage
function saveEvent(hour) {
  var eventTextArea = document.getElementById('event-' + hour);
  var eventText = eventTextArea.value;

  localStorage.setItem('event-' + hour, eventText);

  alert('Event saved successfully!');
}

// Function to load events from local storage
function loadEvents() {
  for (var i = 9; i <= 17; i++) {
      var eventTextArea = document.getElementById('event-' + i);
      var eventText = localStorage.getItem('event-' + i);

      if (eventText) {
          eventTextArea.value = eventText;
      }
  }
}

// Load events when the page is loaded
window.onload = loadEvents;