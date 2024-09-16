import axios from 'axios';

export const fetchStories = async (endpoint: string, start = 0, limit = 30) => {
  try {
    const url = `https://hacker-news.firebaseio.com/v0/${endpoint}.json?print=pretty`;
    const response = await axios.get(url);
    const storyIds = response.data;

    const pagedIds = storyIds.slice(start, start + limit);
    const stories = await Promise.all(
      pagedIds.map(async (id: number) => {
        const itemUrl = `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`;
        const storyResponse = await axios.get(itemUrl);
        return storyResponse.data;
      }),
    );

    return stories;
  } catch (error) {
    console.error('Error fetching stories:', error);
    throw error; // Rethrow the error if you want to handle it outside of this function
  }
};
