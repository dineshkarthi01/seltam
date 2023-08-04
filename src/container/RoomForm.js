import React, { useState } from 'react';

function RoomForm() {
    const [roomData, setRoomData] = useState({
        name: '',
        description: '',
        capacity: '',
        amenities: '',
        // Add more room data fields here as needed
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRoomData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(roomData);
        alert('Room created successfully!'); // Replace this with a toast notification or feedback message
        setRoomData({
            name: '',
            description: '',
            capacity: '',
            amenities: '',
        });
    };

    return (
        <div>
            <h2>Create Room</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Room Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={roomData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea
                        name="description"
                        value={roomData.description}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Capacity:</label>
                    <input
                        type="number"
                        name="capacity"
                        value={roomData.capacity}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Amenities:</label>
                    <input
                        type="text"
                        name="amenities"
                        value={roomData.amenities}
                        onChange={handleChange}
                        required
                    />
                </div>
                {/* Add more input fields for additional room data as needed */}
                <button type="submit">Create Room</button>
            </form>
        </div>
    );
}

export default RoomForm;