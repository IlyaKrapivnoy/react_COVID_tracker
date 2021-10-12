import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './CountryPicker.module.css';
import { countries } from '../../api';
import { useEffect, useState } from 'react';

const CountryPicker = () => {
    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetchCountries = async () => {
            setFetchedCountries(await countries);
        };
    });

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect>
                <option value='global'>Global</option>
            </NativeSelect>
        </FormControl>
    );
};

export default CountryPicker;
