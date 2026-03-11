import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function EditItemForm(props) {
  const { item, onItemEdit } = props;

  function handleEditItemFormSubmission(event) {
    event.preventDefault();
    onItemEdit({
      name: event.target.name.value,
      origin: event.target.origin.value,
      price: event.target.price.value,
      roast: event.target.roast.value,
      id: item.id
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditItemFormSubmission}
        buttonText={"Update Item"}/>
    </React.Fragment>
  );
}

EditItemForm.propTypes = {
  item: PropTypes.object,
  onItemEdit: PropTypes.func
}

export default EditItemForm;