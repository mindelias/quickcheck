import {Text, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {moderateScale as ms} from 'react-native-size-matters';
import {colors} from '../../../styles/colors';
import {globalStyles} from '../../../styles/common';
import {CustomButtonProps} from '../types';

const CustomButtonSecondary: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  icon,
  rightIcon,
  subscriptText,
  btnStyle,
  style,
  disabledBtnStyle,
  disabledTextStyle,
  disabled,
}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        style={[
          styles.wrapper,
          btnStyle && {...btnStyle},
          disabled && {...disabledBtnStyle},
        ]}>
        {icon && icon}

        <Text
          style={[
            styles.title,
            {...style},
            disabled && {...disabledTextStyle},
          ]}>
          {title}
        </Text>
        {rightIcon && rightIcon}
      </TouchableOpacity>
      {subscriptText ? (
        <View style={styles.subscriptTextWrapper}>
          <Text style={styles.subscriptText}>{subscriptText}</Text>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  wrapper: {
    // width: ms(100),
    paddingHorizontal: ms(5),
    paddingVertical: 10,
    borderRadius: 10,
    gap: ms(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    borderColor: colors.borderColor,
    borderWidth: 1,
  },
  title: {
    ...globalStyles.paragraph,
    fontWeight: '600',
    color: colors.black,
  },
  subscriptTextWrapper: {
    width: ms(15),
    height: ms(15),
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    position: 'absolute',
    right: -3,
    top: -6,
  },
  subscriptText: {
    ...globalStyles.small,
    fontWeight: '600',
    color: colors.white,
  },
});

export default CustomButtonSecondary;
