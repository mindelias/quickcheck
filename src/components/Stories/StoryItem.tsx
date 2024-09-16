import {StyleSheet} from 'react-native';
import React from 'react';
import {Card, Paragraph, Subheading} from 'react-native-paper';
import {colors} from '../../styles/colors';

type StoryItemProps = {
  title: string;
  by: string;
  kids?: number[];
  onPress: () => void;
};

const StoryItem: React.FC<StoryItemProps> = ({title, by, kids, onPress}) => (
  <Card onPress={onPress} style={styles.card}>
    <Card.Content>
      <Subheading style={{fontWeight: 'bold'}}>{title}</Subheading>
      <Paragraph>
        By {by} | {kids?.length || 0} comments
      </Paragraph>
    </Card.Content>
  </Card>
);

export default StoryItem;

const styles = StyleSheet.create({
  card: {
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: colors.white,
  },
});
