import React from "react";

class OnlineHeader extends React.Component {


  render() {
    if (this.props.printMode == false)
    {
      return <div className="online-header text-center">
          <p className="text-center">This is an online version of my CV.  To a see a printer-friendly version please press the button below</p>
          <button type="button" class="btn btn-primary" onClick={this.props.buttonClick}>Activate printer-friendly mode</button>
        </div>;
    } else {

      return '';

    }
    
  }
}


export default OnlineHeader;