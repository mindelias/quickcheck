import React from 'react';
import {View, StyleSheet} from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {colors} from '../../styles/colors';

const OtpInput: React.FC<OtpInputProps> = ({pinCount = 4, onCodeFill}) => {
  return (
    <View>
      <OTPInputView
        style={styles.otpContainer}
        pinCount={pinCount}
        // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
        // onCodeChanged = {code => { this.setState({code})}}
        autoFocusOnLoad
        codeInputFieldStyle={styles.codeInput}
        onCodeFilled={code => {

          onCodeFill(code);
        }}
      />
      <View style={styles.margin30}>
        {/* <View style={styles.otpTextContainer}>
          <Text>I didn’t receive the code</Text>
          <Text style={{color: colors.primary}} onPress={() => {}}>
            {' '}
            Resend
          </Text>
        </View> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  otpContainer: {width: '100%', height: 50},
  codeInput: {
    height: 60,
    width: 60,
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
});

export default OtpInput;
