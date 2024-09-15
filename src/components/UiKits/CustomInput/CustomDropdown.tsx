import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Controller} from 'react-hook-form';
import {Dropdown} from 'react-native-element-dropdown'; // Add this line
import {CustomDropdownProps} from '../types';
import {globalStyles} from '../../../styles/common';
import {
  moderateScale as ms,
  verticalScale as vs,
} from 'react-native-size-matters';
import {colors} from '../../../styles/colors';

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  label,
  control,
  defaultValue,
  name,
  data,
  placeholder,
  disabled,
  errors,
  style,
  search = true,
  setIsFocus,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Controller
        control={control}
        render={({field: {onChange, value, onBlur}}) => (
          <Dropdown
            // ref={dropdownRef as unknown as React.RefObject<IDropdownRef>}
            style={[styles.dropdown, style ? style : {}]}
            placeholderStyle={styles.placeholderStyle}
            containerStyle={styles.containerStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            itemTextStyle={styles.itemTextStyle}
            iconStyle={styles.iconStyle}
            data={data}
            search={search}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={placeholder}
            searchPlaceholder="Search..."
            value={value}
            disable={disabled}
            onFocus={() => setIsFocus?.(true)}
            onBlur={() => {
              setIsFocus?.(false);
              onBlur;
            }}
            onChange={item => {
              onChange(item);
              setIsFocus?.(false);
            }}
            autoScroll
          />
        )}
        name={name}
        defaultValue={defaultValue}
      />

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
  containerStyle: {
    backgroundColor: colors.white,
    borderRadius: 16,
  },
  label: {
    marginBottom: ms(1),
    ...globalStyles.heading5,
    color: colors.black,
    fontWeight: '600',
  },

  dropdown: {
    ...globalStyles.input,
  },
  icon: {
    marginRight: 5,
  },

  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    ...globalStyles.paragraph,
    fontSize: ms(10), //16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  itemContainerStyle: {
    backgroundColor: 'white',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    height: vs(40), //40,
  },

  itemTextStyle: {
    ...globalStyles.paragraph,
  },
  dropdownItemContainerStyle: {
    flex: 1,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: ms(10), //16,
  },
  textError: {
    color: colors.danger,
  },
});

export default CustomDropdown;
