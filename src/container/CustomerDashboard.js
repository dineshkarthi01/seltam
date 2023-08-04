import React from 'react';
import RoomBookingForm from './RoomBookingForm';
import { getAvailableRooms } from '../services/api'; // Example API call function for getting available rooms
import {Redirect } from 'redirect'

function CustomerDashboard() {
    // Implement authentication check for customer login
    const isCustomerLoggedIn = true;

    if (!isCustomerLoggedIn) {
        // Redirect to login page if customer is not logged in
        return <Redirect to="/customer/login" />;
    }

    return (
        <div>
            <h1>Customer Dashboard</h1>
            <RoomBookingForm />
            {getAvailableRooms().map((room) => (
                <div key={room.id}>
                    <h3>{room.name}</h3>
                    <p>{room.description}</p>
                    {/* Display more room details here */}
                </div>
            ))}
        </div>
    );
}

export default CustomerDashboard;