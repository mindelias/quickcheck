import React, {useState, useEffect, useCallback} from 'react';
import StoriesList from '../../components/Stories/StoriesList';
import {fetchStories} from '../../services/stories';

const Stories = ({endpoint = 'topstories'}) => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [start, setStart] = useState(0);
  // const [endpoint, setEndpoint] = useState('topstories');

  const loadStories = useCallback(
    async (reset = false) => {
      if (reset) {
        setStart(0);
      }
      setLoading(true);
      const newStories = await fetchStories(endpoint, start, 30);
      setStories(
        reset ? (newStories as []) : ([...stories, ...newStories] as []),
      );
      setLoading(false);
      setStart(start + 30);
    },
    [endpoint, stories, start],
  );

  useEffect(() => {
    loadStories(true); // Initial load with reset
  }, [loadStories]);

  const handleRefresh = () => {
    setRefreshing(true);
    loadStories(true);
    setRefreshing(false);
  };

  const handleLoadMore = () => {
    if (!loading) {
      loadStories();
    }
  };

  return (
    <StoriesList
      stories={stories}
      onRefresh={handleRefresh}
      onLoadMore={handleLoadMore}
      refreshing={refreshing}
      loading={loading}
    />
  );
};

export default Stories;
