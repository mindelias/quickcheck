import React, {useCallback, useEffect, useState} from 'react';
import ProtectedRoute from '../../navigation/navigators/ProtectedRoute';
import {NavigationProp} from '@react-navigation/native';
import {ActivityIndicator, FlatList, Image, Text, View} from 'react-native';
import {styles} from './styles';
import {fetchStories} from '../../services/stories';
import StoryItem from '../../components/Stories/StoryItem';
import useAuthtStore from '../../store/auth/signup.store';
import Avatar from '../../assets/images/avatar.png';
import CustomSearchBar from '../../components/SearchBar/SearchBar';
import {colors} from '../../styles/colors';

const Home: React.FC<{
  navigation: NavigationProp<any, any>;
}> = ({navigation}) => {
  const [loading, setLoading] = useState(true);
  const [topStories, setTopStories] = useState<any[]>([]);
  const [newStories, setNewStories] = useState<any[]>([]);
  const {userData} = useAuthtStore();

  const fetchStoriesData = useCallback(async () => {
    setLoading(true);
    try {
      const top = await fetchStories('topstories');
      const newS = await fetchStories('newstories');
      setTopStories(top.slice(0, 3));
      setNewStories(newS.slice(0, 3));
    } catch (error) {
    } finally {
      setLoading(false);
    }

    setLoading(false);
  }, []);

  useEffect(() => {
    fetchStoriesData();
  }, [fetchStoriesData]);
  return (
    <ProtectedRoute navigation={navigation}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            {/* @ts-ignore */}
            <Image source={Avatar} style={styles.avatar} />
            <View>
              <Text style={styles.welcomeText}>Welcome, </Text>
              <Text style={styles.profileTitle}>
                {userData?.firstName} {userData?.lastName}
              </Text>
            </View>
          </View>
          <View>
            <CustomSearchBar placeholder="Search stories" />
          </View>
        </View>

        {loading ? (
          <ActivityIndicator size="large" color={colors.primary} />
        ) : (
          <View style={styles.storiesContainer}>
            <FlatList
              data={topStories}
              renderItem={({item}) => (
                <StoryItem
                  {...item}
                  onPress={() => console.log('Story pressed')}
                />
              )}
              keyExtractor={item => item.id.toString()}
              showsVerticalScrollIndicator={false}
              ListHeaderComponent={
                <Text style={styles.sectionTitle}>Top Stories</Text>
              }
              ListEmptyComponent={() => <Text>No stories found</Text>}
            />
            <FlatList
              data={newStories}
              renderItem={({item}) => (
                <StoryItem
                  {...item}
                  onPress={() =>
                    // navigation.navigate('StoryDetails', {storyId: item.id})
                    console.log('Story pressed')
                  }
                />
              )}
              keyExtractor={item => item.id.toString()}
              showsVerticalScrollIndicator={false}
              ListHeaderComponent={
                <Text style={styles.sectionTitle}>New Stories</Text>
              }
              ListEmptyComponent={() => <Text>No stories found</Text>}
            />
          </View>
        )}
      </View>
    </ProtectedRoute>
  );
};

export default Home;
