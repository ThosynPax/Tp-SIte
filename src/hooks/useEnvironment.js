import { useState, useEffect } from 'react';

const useEnvironment = () => {
    const [environment, setEnvironment] = useState({
        theme: 'dark',
        season: 'Winter',
    });

    useEffect(() => {
        const updateEnvironment = () => {
            const now = new Date();
            // System time is GMT+1 as per metadata
            const hours = now.getHours();
            const month = now.getMonth(); // 0-indexed (0 = Jan, 11 = Dec)

            // Time detection: Day (6 AM to 6 PM), Night (6 PM to 6 AM)
            const theme = (hours >= 6 && hours < 18) ? 'light' : 'dark';

            // Season detection
            // Spring: March-May (2, 3, 4)
            // Summer: June-August (5, 6, 7)
            // Autumn: September-November (8, 9, 10)
            // Winter: December-February (11, 0, 1)
            let season = 'Winter';
            if (month >= 2 && month <= 4) {
                season = 'Spring';
            } else if (month >= 5 && month <= 7) {
                season = 'Summer';
            } else if (month >= 8 && month <= 10) {
                season = 'Autumn';
            }

            setEnvironment({ theme, season });
        };

        updateEnvironment();
        // Update every minute to catch theme transitions
        const interval = setInterval(updateEnvironment, 60000);
        return () => clearInterval(interval);
    }, []);

    return environment;
};

export default useEnvironment;
