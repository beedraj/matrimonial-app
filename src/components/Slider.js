import React, {useState} from 'react';

import {View, Text, StyleSheet} from 'react-native';

import RNSlider from 'rn-range-slider';

const Thumb = () => <View style={styles.thumb} />;

const Rail = () => <View style={styles.rail} />;

const RailSelected = () => <View style={styles.railSelected} />;

const Slider = () => {
  const [low, setLow] = useState(0);

  const [high, setHigh] = useState(1000);
  

  return (
    <View style={styles.container}>
      
      <RNSlider
        style={styles.slider}
        min={0}
        max={100}
        step={1}
        initialLowValue={low}
        initialHighValue={high}
        onValueChanged={(low, high) => {
          setLow(low);

          setHigh(high);
        }}
        
        renderThumb={Thumb}
        renderRail={Rail}
        renderRailSelected={RailSelected}
      />

      <View style={styles.priceContainer}>
        <Text style={styles.price}>{low}</Text>
        <Text style={styles.price}>{high}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',

    justifyContent: 'center',
    marginTop:30,
  },

  slider: {
    width: '80%',

    height: 50,
  },

  text: {
    fontSize: 24,

    marginBottom: 10,
  },

  priceContainer: {
    flexDirection: 'row',

    justifyContent: 'space-between',

    width: '80%',
    marginBottom:20,
  },

  price: {
    fontSize: 20,

    color: '#310060',
  },

  thumb: {
    width: 20,

    height: 20,

    borderRadius: 10,

    backgroundColor: '#310060',
  },

  rail: {
    flex: 1,

    height: 4,

    borderRadius: 2,

    backgroundColor: '#808080',
  },

  railSelected: {
    height: 4,

    backgroundColor: '#310060',
  },
});

export default Slider;
