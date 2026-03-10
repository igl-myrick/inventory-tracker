import React, { useState } from "react";
import NewItemForm from "./NewItemForm";
import EditItemForm from "./EditItemForm";
import ItemList from "./ItemList";
import ItemView from "./ItemView";

function StoreControl() {
  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
  const [mainItemList, setMainItemList] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleClick = () => {
    if (selectedItem !== null) {
      setFormVisibleOnPage(false);
      setSelectedItem(null);
      setIsEditing(false);
    } else {
      setFormVisibleOnPage(!formVisibleOnPage);
    }
  }

  const handleAddingNewItemToList = (newItem) => {
    const newMainItemList = mainItemList.concat(newItem);
    setMainItemList(newMainItemList);
    setFormVisibleOnPage(false);
  }

  const handleChangingSelectedItem = (id) => {
    const selection = mainItemList.find(item => item.id === id);
    setSelectedItem(selection);
  }

  const handleDeleteItem = (id) => {
    const newMainItemList = mainItemList.filter(item => item.id !== id);
    setMainItemList(newMainItemList);
    setSelectedItem(null);
  }

  const handleEditClick = () => {
    setIsEditing(true);
  }

  const handleEditItem = (itemToEdit) => {
    const editedItemList =  mainItemList.map(item => 
      item.id === selectedItem.id ? itemToEdit : item
    );

    setMainItemList(editedItemList);
    setIsEditing(false);
    setSelectedItem(null);
  }

  let currentlyVisibleState = null;
  let buttonText = null;

  if (isEditing) {
    currentlyVisibleState = (
      <EditItemForm
        item={selectedItem}
        onItemEdit={handleEditItem}/>
    );
    buttonText = "Back to Item List"
  } else if (selectedItem !== null) {
    currentlyVisibleState = 
      <ItemView
        item={selectedItem}
        onClickingDelete={handleDeleteItem}
        onClickingEdit={handleEditClick}/>;
    buttonText = "Back to Item List";
  } else if (formVisibleOnPage) {
    currentlyVisibleState =
      <NewItemForm
        onNewItemCreation={handleAddingNewItemToList}
      />;
    buttonText = "Back to Item List";
  } else {
    if (mainItemList.length > 0) {
      currentlyVisibleState =
        <ItemList
          itemList={mainItemList}
          onItemSelection={handleChangingSelectedItem}
        />;
      buttonText = "Add Item";
    } else {
      currentlyVisibleState = <p><i>No items yet...</i></p>
    }
  }

  return (
    <React.Fragment>
      {currentlyVisibleState}
      <button onClick={handleClick}>{buttonText}</button>
    </React.Fragment>
  );
}

export default StoreControl;