import React from 'react';
import {View, TextInput, StyleSheet, Pressable} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../../styles/colors';

// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const CustomSearchBar: React.FC<SearchBarProps> = ({
  placeholder,
  onChangeText,
  handleClick,
  value,
  editable = true,
  ...rest
}) => {
  return (
    <Pressable onPress={handleClick}>
      <View style={styles.container}>
        <MaterialIcons
          name="search"
          size={30}
          color={colors.black}
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#A9A9A9"
          onChangeText={onChangeText}
          value={value}
          editable={editable}
          {...rest}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#A9A9A9',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginTop: 10,
    // marginHorizontal: 20,
    flexDirection: 'row', // to align icon and input horizontally
    alignItems: 'center', // to align icon and input vertically
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1, // to allow input to take remaining space
    height: 40,
    color: '#000',
  },
});

export default CustomSearchBar;
