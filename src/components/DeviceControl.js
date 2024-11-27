import React, { useState } from 'react';
import { controlDevice } from '../api';

const DeviceControl = ({ device }) => {
    const [command, setCommand] = useState('');

    const handleSendCommand = () => {
        controlDevice(device._id, { command }).then(() =>
            alert('Command sent!')
        );
    };

    return (
        <div>
            <h2>Control {device.name}</h2>
            <input
                type="text"
                placeholder="Enter command"
                value={command}
                onChange={(e) => setCommand(e.target.value)}
            />
            <button onClick={handleSendCommand}>Send Command</button>
        </div>
    );
};

export default DeviceControl;