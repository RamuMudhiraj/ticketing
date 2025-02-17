
document.querySelector(".navbars").innerHTML=`
  <div class="navbar">
  <div class="logo">
      <a href="index.html">SmartTicketingSystem</a>
  </div>
    <div class="hamburger" id="hamburger">
      &#9776;
    </div>
    <ul class="nav-links" id="navLinks">
      <li><a href="about.html">About</a></li>
      <li><a href="events.html">Events</a></li>
      <li><a href="ticket.html">Tickets</a></li>
    </ul>
  </div>   

`

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  if (hamburger && navLinks) {  // Check if elements exist before using them
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }
});
