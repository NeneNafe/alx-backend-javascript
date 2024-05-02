// Define the Student interface with four properties
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  // Create two student objects that implement the Student interface
  const student1: Student = {
    firstName: 'Nene',
    lastName: 'Chiwaya',
    age: 27,
    location: 'Malawi',
  };
  
  const student2: Student = {
    firstName: 'Edith',
    lastName: 'Banda',
    age: 28,
    location: 'Malawi',
  };
  
  // Create an array of students
  const studentsList: Student[] = [student1, student2];
  
  // Get the root element where we will insert our table (assuming there's a div with id 'app')
  const app = document.getElementById('app');
  
  // If the root element exists, create a table and populate it with student data
  if (app) {
    // Create a new table
    const table = document.createElement('table');
  
    // Loop over the studentsList to create table rows with the first name and location
    studentsList.forEach((student) => {
      const row = document.createElement('tr');
  
      const firstNameCell = document.createElement('td');
      firstNameCell.textContent = student.firstName;
      row.appendChild(firstNameCell);
  
      const locationCell = document.createElement('td');
      locationCell.textContent = student.location;
      row.appendChild(locationCell);
  
      // Append the new row to the table
      table.appendChild(row);
    });
  
    // Append the table to the app container
    app.appendChild(table);
  } else {
    console.error('Could not find the app element to attach the table.');
  }
