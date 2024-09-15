import {useState, useEffect} from 'react';
import {useWindowDimensions} from 'react-native';

const useIsLargeScreen = (threshold = 768) => {
  const dimensions = useWindowDimensions();
  const [isLargeScreen, setIsLargeScreen] = useState(
    dimensions.width >= threshold,
  );

  useEffect(() => {
    setIsLargeScreen(dimensions.width >= threshold);
  }, [dimensions.width, threshold]);

  return isLargeScreen;
};

export default useIsLargeScreen;
