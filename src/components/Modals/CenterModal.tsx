import React, {Dispatch, ReactNode} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Modal} from 'react-native-paper';
import CustomCard from '../Card/CustomCard';
import CustomButtonSecondary from '../UiKits/CustomButton/CustomButtonSecondary';
import CustomButton from '../UiKits/CustomButton/CustomButton';
import {globalStyles} from '../../styles/common';

type CenterModalProps = {
  modalVisible: boolean;
  title: string;
  disableAction?: boolean;
  isLoading?: boolean;
  hideHeader?: boolean;
  actionTitle?: string;
  containerStyle?: any;
  setModalVisible: Dispatch<React.SetStateAction<boolean>>;
  handleAction: () => void;
  handleCancel: () => void;
  children: ReactNode;
};

const CustomCenterModal = ({
  modalVisible = false,
  title,
  hideHeader = false,
  containerStyle,
  actionTitle,
  children,
  disableAction,
  isLoading,
  setModalVisible,
  handleCancel,
  handleAction,
}: CenterModalProps) => {
  return (
    <Modal
      //   animationType="slide"
      //   transparent={true}
      visible={modalVisible}
      onDismiss={() => {
        // Alert.alert('Modal has been closed.');
        setModalVisible(false);
      }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={styles.centeredView}>
          <View
            style={[styles.container, containerStyle ? containerStyle : {}]}>
            <CustomCard
              Title={title}
              hideHeader={hideHeader}
              RightHeaderContent={
                <Pressable onPress={() => setModalVisible(false)}>
                  <Text style={styles.buttonClose}> x </Text>
                </Pressable>
              }
              ContentElement={
                <View style={styles.contentWrapper}>{children}</View>
              }
              FooterContent={
                <View
                  style={[
                    globalStyles.centerHorizontally,
                    globalStyles.gutterMd,
                  ]}>
                  <CustomButtonSecondary
                    title="Cancel"
                    onPress={handleCancel}
                  />
                  {actionTitle ? (
                    <CustomButton
                      title={actionTitle as string}
                      onPress={handleAction}
                      disabled={disableAction}
                      isLoading={isLoading}
                    />
                  ) : null}
                </View>
              }
            />
          </View>

          {/* <View style={styles.modalView}>

        </View> */}
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default CustomCenterModal;

const styles = StyleSheet.create({
  centeredView: {
    width: '100%',
    alignItems: 'center',
    // marginTop: 22,
  },

  container: {
    width: '75%',
    // backgroundColor: colors.white,
  },
  contentWrapper: {
    width: '100%',
  },
  modalView: {
    width: '50%',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  buttonClose: {
    ...globalStyles.heading4,
  },
});
