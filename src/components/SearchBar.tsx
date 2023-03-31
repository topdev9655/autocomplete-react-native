import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateHistory } from '../redux/action';

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import HistoryList  from './HistoryList';

const GooglePlaces = () => {

    const dispatch = useDispatch();
    const histories = useSelector((store) => store.histories.histories);

    return (
        <>
            <GooglePlacesAutocomplete
                placeholder='Search'
                fetchDetails = {true}
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true

                    console.log(data.description);
                    console.log(details);
                    dispatch(updateHistory(data.description));
                    console.log(histories);
                }}
                query={{
                    key: 'AIzaSyC9ynxGKzJ6J7a4FkHqxaNsnZ1gHejiwKE',
                    language: 'en',
                }}
            />
            <HistoryList/>
        </>
    );
};

export default GooglePlaces;