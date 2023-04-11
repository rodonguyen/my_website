import { Input, Button, Form, Label } from "reactstrap";
import { useState } from 'react';


export default function CoolerDateForm({ onSendFunction, setResultMessage }) {
  const [inputValues, setInputValues] = useState([null, null, "rodonguyen", null]);
  const [previousValues, setPreviousValues] = useState(inputValues);

  const updateInputValue = (index, value) => {
    const newValue = [...inputValues];
    newValue[index] = value;
    setInputValues(newValue);
  };

  const isDuplicateInput = () => {
    // console.log(inputValues, previousValues);
    if (inputValues === previousValues) {
      setResultMessage('[ DUPLICATE ] Duplicate input. Change the username/code and then click submit again.')
      return true
    }
    return false;
  }
  return (
    <>
      <Form
        autoComplete="on"
        onSubmit={(e) => {
          e.preventDefault();
          if (isDuplicateInput()) return;
          onSendFunction(inputValues[0], inputValues[1], inputValues[2], inputValues[3], setResultMessage);
          setPreviousValues(inputValues)
        }}
      >
        <Label>
          Switch:
          <Input
            type="text"
            name="Switch"
            onChange={(e) => updateInputValue(0, e.target.value)}
          />
        </Label>
        <br />
        
        <Label>
          Case:
          <Input
            type="text"
            name="Case"
            onChange={(e) => updateInputValue(1, e.target.value)}
          />
        </Label>

        <br />
        <Label>
          Username:
          <Input
            type="text"
            placeholder="rodonguyen"
            name="Username"
            disabled  
            onChange={(e) => updateInputValue(2, e.target.value)}
          />
        </Label>

        <br />
        <Label>
          Code:
          <Input
            type="text"
            name="Code"
            onChange={(e) => updateInputValue(3, e.target.value)}
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
