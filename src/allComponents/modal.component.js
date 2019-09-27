import React from "react";
import Modal from "react-responsive-modal";
import Login from './login.js'

import './nav.css'

export default class Modals extends React.Component {
  state = {
    open: false
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  display() {
    var type = this.props.title;
    if (type == 'signIn') {
      console.log(type);
      return (
        <Login/>
      )
    }
  }


  render() {
    const { open } = this.state;

    return (
    <div>
      <button className={this.props.class} onClick={this.onOpenModal}>{this.props.btn}</button>
      <Modal open={open} onClose={this.onCloseModal}>
      {this.display()}
      </Modal>
    </div>
  );
}
}
