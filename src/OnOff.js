import React,{ useState } from 'react';

const OnOff= () => {
    const [On,setOn] = useState(true);

    const toggle = () => setOn(!On);

    return (
        <div>
            <button onClick={toggle}>{On? 'ON' : 'OFF'}</button>
        </div>
    );
};

export default OnOff;