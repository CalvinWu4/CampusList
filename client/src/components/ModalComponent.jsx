import React from 'react';
import style from '../styles/css/styles.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    render() {
        return (
            <div style={{display:this.props.state['display']? this.props.state['display']: 'block'}}>
                <Button disabled={this.props.state['disabled']? this.props.state['disabled']: false} color={this.props.state['buttonColor']} style={this.props.state['buttonStyle']} onClick={this.toggle}>{this.props.state['title']}</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>{this.props.state['title']}</ModalHeader>
                    <ModalBody>
                        {this.props.state['body']}
                       </ModalBody>
                    <ModalFooter>
                        <Button color={this.props.state['buttonColor']} href={this.props.state['href']}>{this.props.state['title']}</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default ModalComponent;