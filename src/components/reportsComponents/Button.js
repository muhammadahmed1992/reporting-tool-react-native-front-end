import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {Fonts, Colors} from '../../utils';

const Button = ({onPress, title, buttonStyle, textStyle, enabled}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={buttonStyle ? buttonStyle : styles.button}>
      <Text style={textStyle ? textStyle : styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
    borderRadius: 4,
  },
  text: {
    fontFamily: Fonts.family.bold,
    color: Colors.white,
    textAlign: 'center',
    width: 110,
    flexWrap: 'wrap'
  },
});

export default Button;
