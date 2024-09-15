import * as React from 'react';
import {Text, View} from 'react-native';
import CustomButtonSecondary from '../UiKits/CustomButton/CustomButtonSecondary';

import PreviousIcon from '../../assets/icons/previous-icon.svg';
import DisabledPreviousIcon from '../../assets/icons/disabled-previous-icon.svg';
import NextIcon from '../../assets/icons/next-icon.svg';
import DisabledNextIcon from '../../assets/icons/disabled-next-icon.svg';
import {styles} from './styles';

const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
  onPageChange,
  currentPage,
}) => {
  // const [currentPage, setCurrentPage] = React.useState(1);

  //get total number of pages based on number of items to show per page
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // React.useEffect(() => {
  //   // Call onPageChange whenever currentPage changes
  //   onPageChange(currentPage);

  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [currentPage]);

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
      // setCurrentPage(prevPage => prevPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
      // setCurrentPage(prevPage => prevPage + 1);
    }
  };
  return (
    <View style={styles.paginationContainer}>
      <Text style={styles.itemsPerPage}>{totalItems}</Text>
      <View style={styles.btnsContainer}>
        <View style={styles.previousBtn}>
          <CustomButtonSecondary
            icon={
              currentPage === 1 ? <DisabledPreviousIcon /> : <PreviousIcon />
            }
            title="Previous"
            onPress={goToPreviousPage}
            btnStyle={styles.btn}
            style={styles.btnText}
            disabled={currentPage === 1}
            disabledTextStyle={styles.disabledText}
          />
        </View>
        <View>
          <Text style={styles.currentPage}>
            {currentPage}
            {/* {currentPage} of {totalPages} */}
          </Text>
        </View>
        <View>
          <CustomButtonSecondary
            rightIcon={
              currentPage === totalPages ? <DisabledNextIcon /> : <NextIcon />
            }
            title="Next"
            onPress={goToNextPage}
            btnStyle={styles.btn}
            style={styles.btnText}
            disabled={currentPage === totalPages}
            disabledTextStyle={styles.disabledText}
          />
        </View>
      </View>
    </View>
  );
};

export default Pagination;
