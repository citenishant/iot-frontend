import React, { useEffect, useState } from 'react';
import { fetchDevices } from '../api';

const DeviceList = ({ onSelect }) => {
    const [devices, setDevices] = useState([]);

    useEffect(() => {
        fetchDevices().then((res) => setDevices(res.data));
    }, []);

    return (
        <div>
            <h2>Devices</h2>
            <ul>
                {devices.map((device) => (
                    <li key={device._id} onClick={() => onSelect(device)}>
                        {device.name} - {device.status}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DeviceList;