import React from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';
import {InputProps} from '../types';
import {moderateScale as ms} from 'react-native-size-matters';
import {colors} from '../../../styles/colors';
import {globalStyles} from '../../../styles/common';

const CustomInput: React.FC<InputProps> = ({
  label,
  suffixIcon,
  style,
  textInputProps,
  ...rest
}) => {
  return (
    <View style={styles.container} {...rest}>
      <Text style={styles.label}>{label}</Text>
      <View style={[styles.inputContainer, style]}>
        <TextInput
          style={styles.input}
          {...textInputProps}
          returnKeyType={'done'}
        />

        {suffixIcon}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    marginBottom: ms(1),
    ...globalStyles.heading5,
    color: colors.black,
    fontWeight: 'bold',
  },
  inputContainer: {
    ...globalStyles.input,
    flexDirection: 'row',
    //   display: 'flex',
    //   flexDirection: 'row',
    alignItems: 'center',
    //   gap: 10,
    //   height: 50,
  },
  input: {
    flex: 1,
    color: colors.black,
    // height: 50,
    backgroundColor: 'transparent',
    // padding: ms(10),
  },
});

export default CustomInput;

// START 2

// import React, {useEffect, useState} from 'react';
// import {
//   View,
//   TextInput,
//   Text,
//   StyleSheet,
//   KeyboardAvoidingView,
//   Keyboard,
//   Platform,
// } from 'react-native';
// import {InputProps} from '../types';

// const CustomTextInput: React.FC<InputProps> = ({
//   label,
//   value,
//   onChangeText,
//   style,
//   ...rest
// }) => {
//   const [keyboardSpace, setKeyboardSpace] = useState(0);

//   useEffect(() => {
//     const keyboardDidShowListener = Keyboard.addListener(
//       Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow',
//       event => {
//         setKeyboardSpace(event.endCoordinates.height);
//       },
//     );

//     const keyboardDidHideListener = Keyboard.addListener(
//       Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide',
//       () => {
//         setKeyboardSpace(0);
//       },
//     );

//     return () => {
//       keyboardDidShowListener.remove();
//       keyboardDidHideListener.remove();
//     };
//   }, []);

//   return (
//     <View style={[styles.container, {marginBottom: keyboardSpace}]}>
//       <Text style={styles.label}>{label}</Text>
//       <View style={[styles.inputContainer, style]}>
//         <TextInput
//           value={value}
//           onChangeText={onChangeText}
//           style={styles.input}
//           {...rest}
//         />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginBottom: 40,
//   },
//   label: {
//     marginBottom: 5,
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   inputContainer: {
//     borderRadius: 12,
//     borderWidth: 1,
//     borderColor: '#F5F5F5',
//     backgroundColor: '#F0F0F0',
//     display: 'flex',
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 10,
//     height: 50,
//   },
//   input: {
//     flex: 1,
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//   },
// });

// export default CustomTextInput;

// END 2

// import React from 'react';
// import {View, Text, TextInput, TextInputProps} from 'react-native';
// import {globalStyles} from '../../../styles/common';
// import {colors} from '../../../styles/colors';

// interface inputProps {
//   isError?: boolean;
//   suffixIcon?: JSX.Element;
//   error?: string;
//   prefix?: JSX.Element;
//   textInputProps: TextInputProps;
// }
// const CustomInput = ({
//   isError,
//   suffixIcon,
//   error,
//   textInputProps,
//   prefix,
// }: inputProps) => {
//   return (
//     <>
//       <View
//         style={{
//           ...globalStyles.input,
//           flexDirection: 'row',
//           alignItems: 'center',
//           paddingLeft: 15,
//           borderWidth: isError ? 1 : 0,
//           borderColor: colors.danger,
//         }}>
//         <View style={{marginRight: 10}}>{prefix}</View>
//         <TextInput
//           placeholderTextColor={colors.darkGrey}
//           returnKeyType={'done'}
//           style={{
//             ...globalStyles.paragraph,
//             color: colors.dark,
//             flex: 1,
//             backgroundColor: 'transparent',
//           }}
//           {...textInputProps}
//         />
//         {suffixIcon}
//       </View>
//       {isError && (
//         <Text style={{color: colors.danger, ...globalStyles.small}}>
//           {error}
//         </Text>
//       )}
//     </>
//   );
// };

// export default CustomInput;
