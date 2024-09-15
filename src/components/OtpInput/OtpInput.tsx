import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {colors} from '../../styles/colors';
import {Controller} from 'react-hook-form';
import {ms} from 'react-native-size-matters';

const OtpInput: React.FC<OtpInputProps> = ({
  pinCount = 4,
  control,
  name,
  errors,
  onCodeFill,
}) => {
  return (
    <View style={styles.container}>
      <Controller
        control={control}
        render={({field: {onChange, value}}) => (
          <OTPInputView
            style={styles.otpContainer}
            pinCount={pinCount}
            code={value}
            onCodeChanged={code => {
              onChange(code);
            }}
            autoFocusOnLoad
            codeInputFieldStyle={styles.codeInput}
            onCodeFilled={code => {
              onCodeFill(code);
            }}
          />
        )}
        name={name}
        defaultValue=""
      />

      {errors && errors[name] && (
        <Text style={styles.textError}>{errors[name]?.message as string}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 20,
  },
  otpContainer: {width: '100%', height: ms(50)},
  codeInput: {
    height: ms(60, 0.004),
    width: ms(60, 0.004),
    borderRadius: 15,
    color: colors.black,
    fontWeight: 'bold',
    backgroundColor: colors.appBgColor3,
    borderColor: colors.borderColor3,
  },
  margin30: {
    marginVertical: 10,
  },
  otpTextContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textError: {
    color: colors.danger,
  },
});

export default OtpInput;
