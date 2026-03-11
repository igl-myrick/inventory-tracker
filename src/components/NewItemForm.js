import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";
import { v4 } from "uuid";

function NewItemForm(props) {
  function handleNewItemFormSubmission(event) {
    event.preventDefault();
    props.onNewItemCreation({
      name: event.target.name.value,
      origin: event.target.origin.value,
      price: event.target.price.value,
      roast: event.target.roast.value,
      stock: 130,
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewItemFormSubmission}
        buttonText="Submit"/>
    </React.Fragment>
  );
}

NewItemForm.propTypes = {
  onNewItemCreation: PropTypes.func
}

export default NewItemForm;