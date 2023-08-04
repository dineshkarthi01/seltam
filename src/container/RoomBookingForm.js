import React, { useState } from 'react';

function RoomBookingForm() {
    const [bookingData, setBookingData] = useState({
        roomName: '',
        checkInDate: '',
        checkOutDate: '',
        // Add more booking data fields here as needed
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBookingData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        console.log(bookingData);
        alert('Room booked successfully!'); // Replace this with a toast notification or feedback message
        setBookingData({
            roomName: '',
            checkInDate: '',
            checkOutDate: '',
        });
    };

    return (
        <div>
            <h2>Book a Room</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Select Room:</label>
                    <select name="roomName" value={bookingData.roomName} onChange={handleChange} required>
                        <option value="">-- Select a Room --</option>
                        {/* Populate the dropdown options dynamically based on available rooms */}
                        {/* For this example, we'll hardcode two room options */}
                        <option value="Room A">Room A</option>
                        <option value="Room B">Room B</option>
                    </select>
                </div>
                <div>
                    <label>Check-in Date:</label>
                    <input
                        type="date"
                        name="checkInDate"
                        value={bookingData.checkInDate}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Check-out Date:</label>
                    <input
                        type="date"
                        name="checkOutDate"
                        value={bookingData.checkOutDate}
                        onChange={handleChange}
                        required
                    />
                </div>
                {/* Add more input fields for additional booking data as needed */}
                <button type="submit">Book Room</button>
            </form>
        </div>
    );
}

export default RoomBookingForm;