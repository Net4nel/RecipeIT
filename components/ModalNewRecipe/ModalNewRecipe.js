import React, {Component} from "react";
import {Button, Modal} from "react-bootstrap";

export default class ModalNewRecipe extends Component {
        constructor(props) {
            super(props);
            this.state = {
                showModal: false
            };
            this.open = this.open.bind(this);
            this.close = this.close.bind(this);
        }
        close() {
            this.setState({
                showModal: false
            });
        }

        open() {
            this.setState({
                showModal: true
            });
        }

        render() {

    const modalComponent = (
        <div>
            <Button bsStyle="primary" bsSize="small" onClick={this.open}>הזן מתכון חדש</Button>

            <Modal show={this.state.showModal} onHide={this.close}>
                <Modal.Header closeButton>
                    <Modal.Title>הזן מתכון חדש</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/*fill up the new recipe data from RecipeData component.*/}
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.close}>שלח</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
    return(modalComponent);
        }
}
