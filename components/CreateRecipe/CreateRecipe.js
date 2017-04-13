import React, {Component} from "react";
import {Button, ControlLabel, FormControl, FormGroup, HelpBlock, Radio} from "react-bootstrap";


export default class CreateRecipe extends Component{

    render(){

        function FieldGroup({ id, label, help, props }) {
            return (
                <FormGroup controlId={id}>
                    <ControlLabel>{label}</ControlLabel>
                    <FormControl {...props} />
                    {help && <HelpBlock>{help}</HelpBlock>}
                </FormGroup>
            );
        }


        const formInstance = (
            <form>
                <FieldGroup
                    id="recipeName"
                    type="text"
                    label="שם המתכון"
                    placeholder="הזן טקסט..."
                />
                {/*level*/}
                {/*veggie - spicy - ...*/}

                <FormGroup>
                    <ControlLabel>כשרות</ControlLabel>
                    <Radio inline>כשר</Radio>
                    <Radio inline>לא כשר</Radio>
                </FormGroup>

                <FormGroup controlId="formControlSelect">
                    {/*<ControlLabel>בחזקת כשרות</ControlLabel>*/}
                    <FormControl componentClass="select" placeholder="כשרות בחזקת">
                        <option value="חלבי"> חלבי </option>
                        <option value="בשרי"> בשרי </option>
                        <option value="פרווה"> פרווה </option>
                    </FormControl>
                </FormGroup>


                <FieldGroup
                    id="timeToReady"
                    type="text"
                    label="זמן הכנה"
                    placeholder="הזן טקסט..."
                />
                דקות


                <FormGroup controlId="formControlsTextarea">
                    <ControlLabel>אופן ההכנה</ControlLabel>
                    <FormControl componentClass="textarea" placeholder="הזן טקסט..." />
                </FormGroup>

                <FormGroup controlId="formControlsTextarea">
                    <ControlLabel>הערות</ControlLabel>
                    <FormControl componentClass="textarea" placeholder="הזן טקסט..." />
                </FormGroup>


                <FieldGroup
                    id="formControlsFile"
                    type="image"
                    label="Image"
                    help="העלה תמונה של המוצר המוגמר"
                />


                <FieldGroup
                    id="credit"
                    type="text"
                    label="תן קרדיט"
                    placeholder="הזן טקסט..."
                />

                <Button type="submit">
                    שלח מתכון
                </Button>
            </form>

        );
        return(formInstance);

    }
}

