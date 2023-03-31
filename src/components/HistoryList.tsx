import React from 'react';
import { useSelector } from 'react-redux';
import {FlatList, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

const HistoryList = () => {
    const histories = useSelector((store) => store.histories.histories);
    return (
        <View style={{ backgroundColor: ''}}>
            <FlatList
                data={histories}
                renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
            />
        </View>
    );
};

export default HistoryList;