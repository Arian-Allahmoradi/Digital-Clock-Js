/**
 * Updates the digital clock and date every second.
 */
function updateClock() {
  const now = new Date();

  // === Time ===
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const ampm = hours >= 12 ? "PM" : "AM";

  // Convert to 12-hour format
  hours = hours % 12 || 12;

  // Add leading zeros for single digits
  const formattedHours = String(hours).padStart(2, "0");
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");

  // Update time elements
  document.getElementById("hours").textContent = formattedHours;
  document.getElementById("minutes").textContent = formattedMinutes;
  document.getElementById("seconds").textContent = formattedSeconds;
  document.getElementById("ampm").textContent = ampm;

  // === Date ===
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  document.getElementById("dayName").textContent = days[now.getDay()];
  document.getElementById("dayNumber").textContent = String(now.getDate()).padStart(2, "0");
  document.getElementById("monthName").textContent = months[now.getMonth()];
  document.getElementById("year").textContent = now.getFullYear();
}

// Run immediately and repeat every second
setInterval(updateClock, 1000);
updateClock();
