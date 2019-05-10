# CampusList
A project for SWEN 444 where students can make appointments for services offered by other students.

URL: https://campuslist.herokuapp.com/

# Installation
Ensure `npm` (Node Package Manager) is installed on your machine. 

If not, install it from here: https://nodejs.org/en/download/

Ensure Google Chrome is installed on your machine. 

If not, install it from here: https://www.google.com/chrome/

If you have:
- Windows: Run `start-server.bat` then 'start-client.bat' in separate shell windows
- Linux or macOS: Run `start-server.sh` then 'start-client.sh' in separate shell windows. On macOS, use the `source` command.

The application will launch the website on your default browser.

If Chrome is not your default browser, launch Chrome and navigate to http://localhost:3000/ to view the website on its ideal browser.

# Features
- See offered services on Home page
- View service details and book an appointment
- See appointments on "My Appointments"
- See your own offered listings on "My Services"
- View bio on "Profile"
- Create your own listing
- Ask for a refund on "My Appointments"
- Submit a review in "My Appointments"

This is a design prototype. Some limitations exist.

# Known Limitations
- Accounts are not persisted
- There is no moderator account
- You cannot search by category
- Google Maps location integration is not implemented
- Custom services may not have photos
- Time is ignored for bookings and there is a time zone issue where appointments booked in Chrome are one day off.
