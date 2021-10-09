import React from 'react';

import { Cards, CountryPicker, Chart } from './components';
import styles from './App.module.css';
import { fetchData } from './api';

class App extends React.Component {
    async componentDidMount() {
        const {
            data: { confirmed, recovered, deaths, lastUpdate },
        } = await fetchData();

        const modifiedData = {
            confirmed: confirmed,
            recovered: recovered,
            deaths: deaths,
            lastUpdate: lastUpdate,
        };

        return modifiedData;
    }

    render() {
        return (
            <div className={styles.container}>
                <Cards />
                <CountryPicker />
                <Chart />
            </div>
        );
    }
}

export default App;
