import React, {useRef, useEffect, useState, ReactNode} from 'react';
import {
  View,
  TouchableOpacity,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import {ms} from 'react-native-size-matters';

interface DropdownMenuProps {
  visible: boolean;
  handleClose: () => void;
  handleOpen: () => void;
  trigger: React.ReactNode;
  children: React.ReactNode;
  dropdownWidth?: number; // Optional, for fixed width dropdown
  align?: string;
  positionValue?: number;
}
export const MenuTrigger = ({children}: {children: ReactNode}) => {
  return <>{children}</>;
};

export const MenuOption = ({
  onSelect,
  children,
}: {
  onSelect: () => void;
  children: ReactNode;
}) => {
  return (
    <TouchableOpacity onPress={onSelect} style={styles.menuOption}>
      {children}
    </TouchableOpacity>
  );
};
const DropdownMenu: React.FC<DropdownMenuProps> = ({
  visible,
  handleOpen,
  handleClose,
  trigger,
  children,
  dropdownWidth = 150,
  align = 'center',
  positionValue,
}) => {
  const triggerRef = useRef<View>(null);
  const [position, setPosition] = useState({x: 0, y: 0, width: 0});

  const calculateLeftPosition = () => {
    switch (align) {
      case 'left':
        return position.x; // Align to the left edge of the trigger
      case 'right':
        return position.x + position.width - dropdownWidth; // Align to the right edge
      case 'custom':
        return positionValue;

      case 'center':
      default:
        return position.x + position.width / 2 - dropdownWidth / 2; // Center the dropdown
    }
  };

  useEffect(() => {
    if (triggerRef.current && visible) {
      triggerRef.current.measure((fx, fy, width, height, px, py) => {
        setPosition({
          x: px,
          y: py + height,
          width: width,
        });
      });
    }
  }, [visible]); // Re-measure when trigger or visibility changes

  return (
    <View>
      <TouchableWithoutFeedback onPress={handleOpen}>
        <View ref={triggerRef}>{trigger}</View>
      </TouchableWithoutFeedback>
      {visible && triggerRef.current && (
        <Modal
          transparent={true}
          visible={visible}
          animationType="fade"
          onRequestClose={handleClose}>
          <TouchableWithoutFeedback onPress={handleClose}>
            <View style={styles.modalOverlay}>
              <TouchableWithoutFeedback onPress={e => e.stopPropagation()}>
                <View
                  style={[
                    styles.menu,
                    {
                      top: position.y,
                      left: calculateLeftPosition(),
                      // left: position.x + position.width / 2 - dropdownWidth / 2, // Center the dropdown
                      width: dropdownWidth,
                    },
                  ]}>
                  {children}
                </View>
              </TouchableWithoutFeedback>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'transparent',
  },
  menu: {
    position: 'absolute',
    width: ms(80),
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 10,
    zIndex: 1000,
    // shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  menuOption: {
    padding: 5,
  },
});

export default DropdownMenu;
