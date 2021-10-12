import { useEffect, useState } from 'react';
import { fetchDailyData } from '../../api';

const Chart = () => {
    const [dailyData, setDailyData] = useState({});

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        };
        fetchAPI();
    });

    return <h2>Chart</h2>;
};

export default Chart;
