import { useState, useEffect } from 'react';

const useEnvironment = () => {
    const [environment, setEnvironment] = useState({
        theme: 'dark'
    });

    useEffect(() => {
        const updateEnvironment = () => {
            const now = new Date();
            const hours = now.getHours();
            const theme = (hours >= 6 && hours < 18) ? 'light' : 'dark';
            setEnvironment({ theme });
        };

        updateEnvironment();
        const interval = setInterval(updateEnvironment, 60000);
        return () => clearInterval(interval);
    }, []);

    return environment;
};

export default useEnvironment;
