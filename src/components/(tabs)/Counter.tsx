import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHashtag } from '@fortawesome/free-solid-svg-icons';
import { increment, decrement, reset } from '../redux/counter/CounterSlice';
import { useDispatch, useSelector } from 'react-redux';

const Counter = () => {
  const count = useSelector((state: any) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View style={counterStyle.container}>
      {/* Header */}
      <View style={counterStyle.header}>
        <View style={counterStyle.iconWrapper}>
          <FontAwesomeIcon icon={faHashtag} color="white" size={20} />
        </View>

        <Text style={counterStyle.title}>Counter Page</Text>
      </View>

      {/* Body */}
      <View style={counterStyle.bodyContainer}>
        <Text style={counterStyle.count}>Count is {count}</Text>
      </View>

      <View style={counterStyle.bodyCounterControlContainer}>
        <Text style={counterStyle.counterControlTitle}>Counter Control</Text>
        <View style={counterStyle.subContainer}>
          <TouchableOpacity
            style={[counterStyle.button, counterStyle.incrementBtn]}
            onPress={() => dispatch(increment())}
          >
            <Text style={counterStyle.buttonText}>Increment</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[counterStyle.button, counterStyle.decrementBtn]}
            onPress={() => dispatch(decrement())}
          >
            <Text style={counterStyle.buttonText}>Decrement</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={[counterStyle.resetBtn]}
          onPress={() => dispatch(reset())}
        >
          <Text style={counterStyle.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Counter;

const counterStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 16,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 12,
    marginBottom: 20,
  },

  iconWrapper: {
    padding: 10,
    backgroundColor: '#6A0DAD',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },

  bodyContainer: {
    backgroundColor: '#1E1E1E',
    padding: 16,
    borderRadius: 12,
    paddingBottom: 0,
  },

  bodyCounterControlContainer: {
    backgroundColor: '#1E1E1E',
    padding: 16,
    borderRadius: 12,
    marginTop: 20,
  },

  count: {
    backgroundColor: '#6A0DAD',
    padding: 14,
    borderRadius: 10,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 20,
  },

  subContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    justifyContent: 'space-between',
  },

  button: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 10,
  },

  incrementBtn: {
    backgroundColor: '#4CAF50',
  },

  decrementBtn: {
    backgroundColor: '#D32F2F',
  },

  resetBtn: {
    backgroundColor: '#1976D2',
    marginTop: 16,
    padding: 12,
    borderRadius: 8,
  },

  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  counterControlTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});
