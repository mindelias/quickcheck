import React from 'react';
import {
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Text,
} from 'react-native';
import StoryItem from './StoryItem';
import {colors} from '../../styles/colors';

type StoryProps = {
  stories: any[];
  onRefresh: () => void;
  onLoadMore: () => void;
  refreshing: boolean;
  loading: boolean;
};

const StoriesList: React.FC<StoryProps> = ({
  stories,
  refreshing,
  loading,
  onRefresh,
  onLoadMore,
}) => (
  <SafeAreaView style={styles.container}>
    <FlatList
      data={stories}
      renderItem={({item}) => (
        <StoryItem {...item} onPress={() => console.log('Story pressed')} />
      )}
      keyExtractor={(item, index) => `${item.id.toString()}-${index}`}
      onRefresh={onRefresh}
      refreshing={refreshing}
      onEndReached={onLoadMore}
      onEndReachedThreshold={0.5}
      // eslint-disable-next-line react/no-unstable-nested-components
      ListFooterComponent={() =>
        loading && <ActivityIndicator size="large" color={colors.primary} />
      }
      // eslint-disable-next-line react/no-unstable-nested-components
      ListEmptyComponent={() => <Text>No stories found</Text>}
    />
  </SafeAreaView>
);

export default StoriesList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  paragraph: {
    fontSize: 14,
  },
});
