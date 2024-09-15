import React from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';
import {InputProps} from '../types';
import {moderateScale as ms} from 'react-native-size-matters';
import {colors} from '../../../styles/colors';
import {globalStyles} from '../../../styles/common';
import {Controller} from 'react-hook-form';

const FormInputController: React.FC<InputProps> = ({
  label,
  defaultValue,
  name,
  errors,
  control,
  placeholder,
  suffix,
  style,
  textInputProps,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={[styles.inputContainer, style ? style : {}]}>
        <Controller
          name={name}
          control={control}
          defaultValue={defaultValue}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={[styles.input]}
              value={value}
              placeholder={placeholder}
              returnKeyType={'done'}
              onBlur={onBlur}
              onChangeText={onChange}
              {...textInputProps}
            />
          )}
        />

        {suffix}
      </View>

      {errors && errors[name] ? (
        errors[name]?.value ? (
          <Text style={styles.textError}>
            {errors[name]?.value?.message as string}
          </Text>
        ) : (
          <Text style={styles.textError}>
            {errors[name]?.message as string}
          </Text>
        )
      ) : (
        <Text style={styles.textError}>{errors?.message}</Text>
      )}
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
    fontWeight: '600',
  },
  inputContainer: {
    ...globalStyles.input,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    color: colors.black,
    backgroundColor: 'transparent',
    // padding: ms(10),
  },
  textError: {
    color: colors.danger,
  },
});

export default FormInputController;
