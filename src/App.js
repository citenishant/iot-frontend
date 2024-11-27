import React, { useState } from 'react';
import DeviceList from './components/DeviceList';
import DeviceControl from './components/DeviceControl';
import Footer from './components/Footer';

const backendUrl = "https://iot-backend.onrender.com";

// Example API call
fetch(`${backendUrl}/devices`)
  .then(response => response.json())
  .then(data => console.log(data));

const App = () => {
    const [selectedDevice, setSelectedDevice] = useState(null);

    return (
        <div style={{ paddingBottom: '50px' }}> {/* Leave space for footer */}
            <h1>IoT Dashboard</h1>
            <DeviceList onSelect={setSelectedDevice} />
            {selectedDevice && <DeviceControl device={selectedDevice} />}
            <Footer />
        </div>
    );
};

export default App;
