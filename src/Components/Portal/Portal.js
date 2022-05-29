import React from "react";
import  ReactDOM  from "react-dom";



class Portal extends React.Component {
    
    constructor(props) {
      super(props);
      this.modal = document.getElementById('modal');
    }

    render() {
        return ReactDOM.createPortal(
            this.props.children, this.modal
        )
      }
    }

export default class Parent extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
          open: false
      }
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            open: !this.state.open
        })
    }
  
    render() {
      return (
          <div>
              <button onClick={this.handleClick}>Open Modal</button>

              {this.state.open && 
                <div className="modal-w">
                    <Portal>
                        <div className="modal-wrapper" onClick={this.handleClick}></div>
                        <div className="modal">
                            Modal is opened!
                            <div className="modal-btn">
                                <button className="btn" onClick={this.handleClick}>Close</button>
                            </div>
                        </div>
                    </Portal>
              </div>}
          </div>
      )
    }
  }