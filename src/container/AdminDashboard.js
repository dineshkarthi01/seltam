import React from 'react';
import RoomForm from './RoomForm';
import { getRooms } from '../services/api'; // Example API call function for getting room details

function AdminDashboard() {
    // Implement authentication check for admin login
    const isAdminLoggedIn = true;

    if (!isAdminLoggedIn) {
        // Redirect to login page if admin is not logged in
        return <Redirect to="/admin/login" />;
    }

    return (
        <div>
            <h1>Admin Dashboard</h1>
            <RoomForm />
            {getRooms().map((room) => (
                <div key={room.id}>
                    <h3>{room.name}</h3>
                    <p>{room.description}</p>
                </div>
            ))}
        </div>
    );
}

export default AdminDashboard;