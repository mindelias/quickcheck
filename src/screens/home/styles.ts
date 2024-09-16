import {StyleSheet} from 'react-native';
import {colors} from '../../styles/colors';
import {verticalScale} from 'react-native-size-matters';
import {globalStyles} from '../../styles/common';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    gap: 20,
    height: verticalScale(150),
    justifyContent: 'center',
    color: colors.white,
    fontWeight: 'bold',
    padding: 20,
    backgroundColor: colors.primary,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  headerContent: {
    ...globalStyles.flexHorizontal,
    gap: 20,
  },
  storiesContainer: {
    padding: 10,
    // height: '100%',
    width: '100%',
    flex: 1,
  },

  sectionTitle: {
    ...globalStyles.heading4,
    color: colors.black,
    fontWeight: 'bold',

    paddingVertical: 10,
    marginVertical: 10,
  },
  welcomeText: {
    ...globalStyles.heading4,
    color: colors.white,
    fontWeight: 'bold',
  },
  profileTitle: {
    ...globalStyles.heading4,
    color: colors.white,
    // fontWeight: 'bold',
  },
  card: {
    marginHorizontal: 10,
    width: 300,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#fff', // Example: white border
    shadowColor: '#000', // Adding shadow
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5, // Elevation for Android
  },
});
