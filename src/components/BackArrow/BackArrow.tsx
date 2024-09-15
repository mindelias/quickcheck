import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import BackArrowIcon from '../../assets/icons/back-arrow.svg';
import {globalStyles} from '../../styles/common';
import {colors} from '../../styles/colors';

const BackArrow: React.FC<{onPress: () => void; color?: string}> = ({
  onPress,
  color = colors.black,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <BackArrowIcon color={color} />
        <Text style={styles.text}>Back</Text>
      </View>
    </TouchableOpacity>
  );
};

export default BackArrow;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    ...globalStyles.paragraph,
    fontWeight: 'bold',
    color: colors.black,
    marginLeft: 8,
  },
});
