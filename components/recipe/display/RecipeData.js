import React, {Component} from "react";
import {
    Button,
    ButtonToolbar,
    ControlLabel,
    DropdownButton,
    FormControl,
    FormGroup,
    HelpBlock,
    MenuItem,
    Radio
} from "react-bootstrap";


export default class RecipeData extends Component{


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

                <ButtonToolbar>
                    <DropdownButton bsSize="small" title="רמת קושי" id="dropdown-size-small">
                        <MenuItem eventKey="1">1</MenuItem>
                        <MenuItem eventKey="2">2</MenuItem>
                        <MenuItem eventKey="3">3</MenuItem>
                        <MenuItem eventKey="4">4</MenuItem>
                        <MenuItem eventKey="5">5</MenuItem>
                        <MenuItem eventKey="6">6</MenuItem>
                        <MenuItem eventKey="7">7</MenuItem>
                        <MenuItem eventKey="8">8</MenuItem>
                        <MenuItem eventKey="9">9</MenuItem>
                    </DropdownButton>
                </ButtonToolbar>


                <ButtonToolbar>
                    <DropdownButton bsSize="small" title="קטגוריה" id="dropdown-size-small">
                        <MenuItem eventKey="1">תבשילים בשריים</MenuItem>
                        <MenuItem eventKey="2">תבשילים חלביים</MenuItem>
                        <MenuItem eventKey="3">מרקים</MenuItem>
                        <MenuItem eventKey="4">סלטים וירקות</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey="5">אפרטיף ונשנושים</MenuItem>
                        <MenuItem eventKey="6">לחמים ופיצות</MenuItem>
                        <MenuItem eventKey="7">עוגות ועוגיות</MenuItem>
                        <MenuItem eventKey="8">קינוחים</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey="9">צמחוני</MenuItem>
                        <MenuItem eventKey="10">טבעוני</MenuItem>
                        <MenuItem eventKey="11">ללא גלוטן</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey="12">קוקטליים ומשקאות</MenuItem>
                    </DropdownButton>
                </ButtonToolbar>


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