import { useEffect, useState } from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';
import styles from './Charts.module.css';

const Chart = () => {
    const [dailyData, setDailyData] = useState({});

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        };
        console.log(dailyData);
        fetchAPI();
    });

    const lineChart = dailyData[0] ? (
        <Line
            data={{
                labels: dailyData(({ date }) => date),
                datasets: [
                    {
                        data: dailyData(({ confirmed }) => confirmed),
                        label: 'Infected',
                        borderColor: '#3333ff',
                        fill: true,
                    },
                    {
                        data: dailyData(({ deaths }) => deaths),
                        label: 'Deaths',
                        borderColor: 'red',
                        backgroundColor: 'rgba(255, 0,0,.5)',
                        fill: true,
                    },
                ],
            }}
        />
    ) : null;

    return <h2>Chart</h2>;
};

export default Chart;
