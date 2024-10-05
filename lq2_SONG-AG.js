//Part3
// Conditional statement for Course detection
// Define the course
const course = 'BSCS'; // Replace with the actual course value
const classRole = 'Officer'; // Replace with the actual class role value
const name = 'John Doe'; // Replace with the actual name value
const age = 20; // Replace with the actual age value
switch (course) {
  case "BSCS":
    if (classRole === "Officer") {
      for (let i = 0; i < age / 4; i++) {
        console.log(name);
      }
    } else if (classRole === "Student") {
      for (let i = 0; i < age / 4; i++) {
        console.log(name);
      }
    } else if (classRole === "Teacher") {
      for (let i = 0; i < age / 4; i++) {
        console.log(name);
      }
    } else {
      console.log("Invalid class role.");
    }
    break;

  case "BSM":
    if (classRole === "Officer") {
      for (let i = 0; i < age / 4; i++) {
        console.log(name);
      }
    } else if (classRole === "Student") {
      for (let i = 0; i < age / 4; i++) {
        console.log(name);
      }
    } else if (classRole === "Teacher") {
      for (let i = 0; i < age / 4; i++) {
        console.log(name);
      }
    } else {
      console.log("Invalid class role.");
    }
    break;

  case "BAEL":
    if (classRole === "Officer") {
      for (let i = 0; i < age / 4; i++) {
        console.log(name);
      }
    } else if (classRole === "Student") {
      for (let i = 0; i < age / 4; i++) {
        console.log(name);
      }
    } else if (classRole === "Teacher") {
      for (let i = 0; i < age / 4; i++) {
        console.log(name);
      }
    } else {
      console.log("Invalid class role.");
    }
    break;
  default:
    console.log("Invalid course.");
               }
