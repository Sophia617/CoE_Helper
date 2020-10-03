import React from "react";
import { Form } from "react-bootstrap";
import { CENTERDIV, ICON } from "./FeesCalculator.styles";
import FormGroup from "../ReusableComponents/FormGroup";

const InputGroupsDisplay = ({
  inputTextHandler,
  addClickHandler,
  deleteClickHandler,
  id,
  deleteBtn,
}) => {
  return (
    <Form.Row>
      <FormGroup
        xs={5}
        sm={3}
        md={3}
        controlId={"subjectFees"}
        label={"Fees"}
        name={"subjectFees"}
        type={"number"}
        inputTextHandler={inputTextHandler}
      />
      <CENTERDIV className="col-xs-1">
        <ICON className="fas fa-times"></ICON>
      </CENTERDIV>
      <FormGroup
        xs={4}
        sm={2}
        md={2}
        controlId={"subjectNumbers"}
        label={"Numbers"}
        name={"subjectNumbers"}
        type={"number"}
        inputTextHandler={inputTextHandler}
      />
      <CENTERDIV className="col-xs-1">
        <ICON className="fas fa-equals"></ICON>
      </CENTERDIV>

      <FormGroup
        xs={9}
        sm={3}
        md={4}
        controlId={"totalSum"}
        label={"Total: "}
        name={"totalSum"}
        type={"number"}
        disabled={true}
        inputTextHandler={inputTextHandler}
      />

      <CENTERDIV className="col-xs-1" onClick={addClickHandler}>
        <ICON
          style={{ fontSize: "2.4rem" }}
          className="fas fa-plus-square"
        ></ICON>
      </CENTERDIV>
      {deleteBtn && (
        <CENTERDIV className="col-xs-1" onClick={() => deleteClickHandler(id)}>
          <ICON
            style={{ fontSize: "2.2rem" }}
            className="fas fa-trash-alt"
          ></ICON>
        </CENTERDIV>
      )}
    </Form.Row>
  );
};

export default InputGroupsDisplay;