import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {colors} from '../../../styles/colors';
import {CustomButtonProps} from '../types';

const CustomButton: React.FC<CustomButtonProps> = ({
  onPress,
  color = colors.primary,
  title,
  textColor,
  disabled,
  btnStyle,
  isLoading,
  disabledTextStyle = styles.disabledText,
  disabledBtnStyle = styles.disabledButton,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        {backgroundColor: color},
        {...btnStyle},
        disabled ? disabledBtnStyle : null,
      ]}
      disabled={disabled}>
      <Text
        style={[
          styles.text,
          textColor ? {color: textColor} : {color: colors.white},
          disabled ? disabledTextStyle : null,
        ]}>
        {title}
      </Text>
      {isLoading && <ActivityIndicator size="small" color={colors.white} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
  },
  text: {
    // color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  disabledButton: {
    backgroundColor: '#ccc', // Change the background color when disabled
  },
  disabledText: {
    color: '#999', // Change the text color when disabled
  },
});

export default CustomButton;
