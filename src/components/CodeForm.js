import { Input, Button, Form, Label } from "reactstrap";
import { useState } from 'react';


export default function CodeForm({ onSubmitFunction }) {
  const [inputValues, setInputValues] = useState(["rodonguyen", null]);
  const [previousValues, setPreviousValues] = useState(inputValues);

  const updateInputValue = (index, value) => {
    const newValue = [...inputValues];
    newValue[index] = value;
    setInputValues(newValue);
  };

  const isDuplicateInput = () => {
    // console.log(inputValues, previousValues);
    if (inputValues === previousValues) {
      console.log('[ DUPLICATE ] Duplicate input. Change the username/code and then click submit again.')
      return true
    }
    return false;
  }
  return (
    <>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          if (isDuplicateInput()) return;
          onSubmitFunction(inputValues[0], inputValues[1]);
          setPreviousValues(inputValues)
        }}
      >
        <Label>
          Username:
          <Input
            type="text"
            name="username"
            placeholder="rodonguyen"
            disabled  
            onChange={(e) => updateInputValue(0, e.target.value)}
          />
        </Label>

        <br />
        <Label>
          Code:
          <Input
            type="text"
            name="code"
            onChange={(e) => updateInputValue(1, e.target.value)}
          />
        </Label>
        <br />
        
        {/* <Input type="submit" value="Submit" /> */}
        <Button type="submit" className="search-submit">
          Submit
        </Button>
      </Form>
    </>
  );
}
