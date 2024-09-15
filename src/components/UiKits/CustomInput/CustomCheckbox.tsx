// import {View, Text, StyleSheet} from 'react-native';
// import React from 'react';
// import {CustomCheckboxProps} from '../types';
// import {colors} from '../../../styles/colors';
// import {Checkbox} from 'react-native-paper';
// import {globalStyles} from '../../../styles/common';

// const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
//   label,
//   isChecked,
//   color = colors.primary,
//   onPress,
// }) => {
//   return (
//     <View style={styles.container}>
//       <Checkbox
//         status={isChecked ? 'checked' : 'unchecked'}
//         color={color}
//         onPress={onPress}
//       />
//       {label ? <Text style={globalStyles.paragraph}>{label}</Text> : null}
//     </View>
//   );
// };

// export default CustomCheckbox;

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     gap: 5,
//     alignItems: 'center',
//     justifyContent: 'flex-start',
//     width: '100%',
//   },
// });

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Controller} from 'react-hook-form';
import {CustomCheckboxProps} from '../types';
import {colors} from '../../../styles/colors';
import {Checkbox} from 'react-native-paper';
import {globalStyles} from '../../../styles/common';

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  label,
  control,
  name,
  defaultValue = false,
  color = colors.primary,
  errors,
  style,
  disabled,
}) => {
  return (
    <View style={[styles.container, style]}>
      <Controller
        control={control}
        name={name}
        defaultValue={defaultValue}
        render={({field: {onChange, value}}) => (
          <Checkbox
            status={value ? 'checked' : 'unchecked'}
            color={color}
            onPress={() => onChange(!value)}
            disabled={disabled}
          />
        )}
      />
      {label ? <Text style={globalStyles.paragraph}>{label}</Text> : null}
      {errors && errors[name] ? (
        <Text style={styles.textError}>{errors[name]?.message as string}</Text>
      ) : null}
    </View>
  );
};

export default CustomCheckbox;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
  },
  textError: {
    color: colors.danger,
    marginLeft: 8,
  },
});
