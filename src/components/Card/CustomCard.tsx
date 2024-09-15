import * as React from 'react';
import {Card, Text} from 'react-native-paper';

import {styles} from './styles';

const CustomCard: React.FC<CardProps> = ({
  Title,
  RightHeaderContent,
  ContentElement,
  FooterContent,
  hideHeader = false,
}) => {
  return (
    <Card style={styles.cardContainer}>
      {hideHeader ? null : (
        <Card.Title
          title=""
          style={styles.cardTitleContainer}
          left={() => <Text style={styles.leftTitle}>{Title}</Text>}
          right={() => RightHeaderContent}
        />
      )}
      <Card.Content>{ContentElement}</Card.Content>
      {FooterContent && (
        <Card.Actions style={styles.actionBottonsContainer}>
          {FooterContent}
        </Card.Actions>
      )}
    </Card>
  );
};

export default CustomCard;
