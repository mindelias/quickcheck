import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown'; // Add this line
import {CustomDropdownMenuProps} from '../types';
import {globalStyles} from '../../../styles/common';
import {
  moderateScale as ms,
  verticalScale as vs,
} from 'react-native-size-matters';
import {colors} from '../../../styles/colors';

const CustomDropdownMenu: React.FC<CustomDropdownMenuProps> = ({
  data,
  placeholder,
  disabled,
  iconColor = colors.white,
  selectedTextStyle,
  handleBlur,
  handleChange,
  value,
  style,
  search = true,

  setIsFocus,
}) => {
  return (
    <View style={styles.container}>
      <Dropdown
        // ref={dropdownRef as unknown as React.RefObject<IDropdownRef>}
        style={[styles.dropdown, style ? style : {}]}
        placeholderStyle={styles.placeholderStyle}
        containerStyle={styles.containerStyle}
        selectedTextStyle={[
          styles.selectedTextStyle,
          selectedTextStyle ? selectedTextStyle : {},
        ]}
        inputSearchStyle={styles.inputSearchStyle}
        itemTextStyle={styles.itemTextStyle}
        iconStyle={styles.iconStyle}
        iconColor={iconColor}
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
        onBlur={handleBlur}
        onChange={item => handleChange(item)}
        autoScroll
      />
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

  // dropdown: {
  //   ...globalStyles.input,
  // },

  dropdown: {
    ...globalStyles.input,
    backgroundColor: colors.primary,
  },

  icon: {
    marginRight: 5,
  },

  placeholderStyle: {
    fontSize: 16,
    color: colors.white,
  },
  selectedTextStyle: {
    ...globalStyles.paragraph,
    color: colors.white,
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

export default CustomDropdownMenu;
