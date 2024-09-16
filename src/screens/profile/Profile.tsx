import React from 'react';
import {ScrollView, View, Text, Image} from 'react-native';
import Avatar from '../../assets/images/avatar.png';
import {styles} from './styles';
import CustomButton from '../../components/UiKits/CustomButton/CustomButton';
import useAuthtStore from '../../store/auth/signup.store';
import {LOGIN_TOKEN} from '../../utils/constants';
import {deleteLocalState} from '../../utils/localstorage';
import {colors} from '../../styles/colors';

const ProfileScreen = () => {
  const updateStoreData = useAuthtStore(state => state.updateStoreData);

  const handleLogout = () => {
    updateStoreData({
      isLoggedIn: false,
      userData: null,
    });
    deleteLocalState(LOGIN_TOKEN);
  };
  return (
    <ScrollView style={styles.container}>
      {/* @ts-ignore */}
      <Image source={Avatar} style={styles.avatar} />
      <Text style={styles.name}>Aminat Shotade</Text>
      <Text style={styles.title}>Senior Frontend Engineer</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About Me</Text>
        <Text style={styles.sectionContent}>
          I’m Aminat Shotade, a Senior Frontend Engineer with a passion for
          developing efficient and scalable design systems in React. My
          experience spans over six years, during which I've led significant
          projects like AVICASH and NSIB, creating intuitive and responsive
          interfaces that cater to diverse user needs.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Projects</Text>
        <Text style={styles.sectionContent}>
          At my current role with Avitech, I spearheaded the creation of a
          design system for AVICASH, a point-of-sale software built with React
          Native. I also led the NSIB project, a business intelligence dashboard
          where I implemented a design system that streamlined our development
          process, significantly enhancing our product’s consistency and user
          interface across multiple platforms.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Skills</Text>
        <Text style={styles.sectionContent}>
          My technical toolkit is extensively equipped with advanced React
          techniques, CSS-in-JS with Styled Components, and comprehensive tools
          like Storybook for component documentation and testing.
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <CustomButton
          title="Logout"
          onPress={handleLogout}
          color={colors.black}
        />
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
