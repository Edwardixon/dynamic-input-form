import React, {useState, useEffect} from "react";
import FormHeaderComponent from "./FormHeaderComponent";
import FormContentComponent from "./FormContentComponent";
import "../Styles/Form.css";

function Form() {
  const [mainInputForm, setMainInputForm] = useState("");
  // The number of array elements represents the number if inputs 
  const [dynamicInputForms, setDynamicInputs] = useState([""]);
  const [displayForm, setDisplayForm] = useState(true);

  let handleClick = () => {
    setDisplayForm(true);
  }

  let handleMainInputForm = (event) => {
    setMainInputForm(event.target.value);
  }

  let handleDynamicInputForms = (event, index) => {
    const newInputs = dynamicInputForms.map((input, x) => {
      // Ignore it if the index is NOT the same
      if(index !== x)
        return input;
      // Return new value where index matches
      return [...input], event.target.value;
    })
    // Set the text to match what the user typed
    setDynamicInputs(newInputs);
  }


  useEffect(() => {
    const lasIndex = dynamicInputForms.length - 1
    dynamicInputForms.forEach((input, index) => {
      // If it's not the last input element
      if(index !== lasIndex)
        // And If the input element is empty then remove it
        if(input.length == 0) {
          const newInputs = dynamicInputForms.slice();
          newInputs.splice(index, 1);
          setDynamicInputs(newInputs);
        }
    });
    // Add new input into the form
    if(dynamicInputForms[lasIndex].length == 1){
      const newInput = dynamicInputForms.slice();
      newInput.push("");
      setDynamicInputs(newInput);
    }
  }, [dynamicInputForms])

  
  return (
    <div className="form">
      <FormHeaderComponent />
      <FormContentComponent 
        // State
        mainInputForm={mainInputForm}
        dynamicInputForms={dynamicInputForms}
        displayForm={displayForm}

        // Handlers
        handleDynamicInputForms={handleDynamicInputForms}
        handleMainInputForm={handleMainInputForm}
      />
    </div>
  )
}


export default Form;