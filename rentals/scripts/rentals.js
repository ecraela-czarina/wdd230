fetch('data/rentals.json')
    .then(response => response.json())
    .then(data => {
        const rentalTable = document.getElementById('rentalTable').getElementsByTagName('tbody')[0];

        // Iterate through rental options and populate the table
        data['Max Rental Pricing']['RentalOptions'].forEach(option => {
            const row = rentalTable.insertRow();

            // Create cell for vehicle image and insert image
            const imageCell = row.insertCell(0);
            const vehicleImage = document.createElement('img');
            vehicleImage.src = option.Image; // Set image source
            vehicleImage.alt = option.Vehicle; // Set alt text
            imageCell.classList.add('image-column'); // Add a class for styling
            imageCell.appendChild(vehicleImage); // Append image to cell

            const vehicleCell = row.insertCell(1);
            vehicleCell.textContent = option.Vehicle;

            const maxPersonsCell = row.insertCell(2);
            maxPersonsCell.textContent = option.MaxPersons;

            const reservationHalfDayCell = row.insertCell(3);
            reservationHalfDayCell.textContent = option.HalfDay.Price;

            const reservationFullDayCell = row.insertCell(4);
            reservationFullDayCell.textContent = option.FullDay.Price;

            const walkInHalfDayCell = row.insertCell(5);
            walkInHalfDayCell.textContent = option.HalfDay.Price;

            const walkInFullDayCell = row.insertCell(6);
            walkInFullDayCell.textContent = option.FullDay.Price;
        });
    })
    .catch(error => console.error('Error fetching JSON:', error));
