import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {Snackbar} from 'react-native-paper';
import {scale} from 'react-native-size-matters';

type ToastProps = {
  isVisible: boolean;
  handleCloseToast: () => void;
  children: React.ReactNode;
  closeIconColor?: string;
  toastStyle?: any;
};

const Toast: React.FC<ToastProps> = ({
  isVisible,
  handleCloseToast,
  children,
  toastStyle,
}) => {
  return (
    <View style={styles.toastArea}>
      <Snackbar
        style={[styles.toastBackground, toastStyle ? toastStyle : '']}
        visible={isVisible}
        onDismiss={handleCloseToast}
        // icon={(<Icon name="close" size={16} color={closeIconColor} />) as Element}
        onIconPress={handleCloseToast}>
        {children}
      </Snackbar>
    </View>
  );
};

const styles = StyleSheet.create({
  toastArea: {
    minHeight: 50,
  },
  toastBackground: {
    backgroundColor: '#000000',
    minWidth: scale(100),

    zIndex: 100,
  },
});

export default Toast;
