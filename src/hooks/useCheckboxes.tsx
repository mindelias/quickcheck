import {useEffect, useState} from 'react';

interface ItemWithId {
  id: number;
  isChecked?: boolean; // Add optional isChecked field
}

interface UseCheckboxesProps<T extends ItemWithId> {
  itemsData: T[];
  checkedItems: T[];
  handleCheckboxChange: (id: number, isChecked: boolean) => void;
  handleCheckAll: (isChecked: boolean) => void;
}

function useCheckboxes<T extends ItemWithId>(
  initialItems: T[],
  isLoading: boolean,
): UseCheckboxesProps<T> {
  const [itemsData, setItemsData] = useState<T[]>(initialItems);
  const [checkedItems, setCheckedItems] = useState<T[]>([]);

  useEffect(() => {
    if (!isLoading) {
      setItemsData(initialItems);
    }
  }, [isLoading]);

  //this handles each clicked checkbox
  const handleCheckboxChange = (id: number, isChecked: boolean) => {
    //toggles each checkbox
    const updatedItems = itemsData.map(item =>
      item.id === id ? {...item, isChecked} : item,
    );
    setItemsData(updatedItems);

    //updates the item/items checked
    if (isChecked) {
      setCheckedItems(prevCheckedItems => [
        ...prevCheckedItems,
        updatedItems.find(item => item.id === id)!,
      ]);
    } else {
      setCheckedItems(prevCheckedItems =>
        prevCheckedItems.filter(item => item.id !== id),
      );
    }
  };

  //this handles check all checkboxes
  const handleCheckAll = (isChecked: boolean) => {
    //toggles all checkboxes
    const updatedItems = itemsData.map(item => ({...item, isChecked}));
    setItemsData(updatedItems);

    //if it is checked, returns all items or uncheck to return empty list
    if (isChecked) {
      setCheckedItems(updatedItems);
    } else {
      setCheckedItems([]);
    }
  };

  return {itemsData, checkedItems, handleCheckboxChange, handleCheckAll};
}

export default useCheckboxes;
