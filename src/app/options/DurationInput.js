import React from 'react';
import {
  Form,
  FormGroup,
  Label,
  Input,
  InputGroup,
  InputGroupAddon
} from 'reactstrap';
import './DurationInput.css';

const DurationInput = () => (
  <Form inline className="options__duration-input">
    <FormGroup>
      <Label for="duration-input">Calc time:</Label>
      <InputGroup size="sm">
        <Input id="duration-input" type="number" min={1} />
        <InputGroupAddon addonType="append">ms</InputGroupAddon>
      </InputGroup>
    </FormGroup>
  </Form>
);

export default DurationInput;
