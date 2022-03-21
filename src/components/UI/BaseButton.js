import React from 'react';
import {Button} from "reactstrap";

const BaseButton = (props) => {

    return (
        <div>
            <Button
                color="info"
                outline
                size=""
                onClick={props.onClick}
                type={"submit"}
            >
                Add
            </Button>
        </div>
    );
};

export default BaseButton;