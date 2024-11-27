import React, { useState, useEffect } from 'react';
import DeviceList from './components/DeviceList';
import DeviceControl from './components/DeviceControl';
import Footer from './components/Footer';

const App = () => {
    const [selectedDevice, setSelectedDevice] = useState(null);
    const [devices, setDevices] = useState([]);  // New state for storing devices

    // Fetch devices from the backend when the component mounts
    useEffect(() => {
        const backendUrl = "https://iot-backend-1-5s3t.onrender.com"; // Your backend URL

        // Fetch device data from the backend
        fetch(`${backendUrl}/devices`)
            .then(response => response.json())
            .then(data => {
                setDevices(data); // Update the devices state with the fetched data
            })
            .catch(error => console.error("Error fetching devices:", error));
    }, []); // Empty dependency array to run the effect only once when the component mounts

    return (
        <div style={{ paddingBottom: '50px' }}> {/* Leave space for footer */}
            <h1>IoT Dashboard</h1>
            <DeviceList devices={devices} onSelect={setSelectedDevice} /> {/* Pass devices as props */}
            {selectedDevice && <DeviceControl device={selectedDevice} />}
            <Footer />
        </div>
    );
};

export default App;
