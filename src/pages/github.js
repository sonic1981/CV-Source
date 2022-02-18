import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


class GitHubPage extends React.Component {

  constructor(params) {
    super(params);

    this.state = {
      hide: false
    };

  }

  buttonClick = () => {
    this.setState({hide: true});
  };

  render() {

    return (  
      <div className={this.state.hide || this.props.printMode ? "d-none" : "github-popup"}>
        <FontAwesomeIcon icon={faGithub}/>
        <p>View the source code for this page here</p>
        <FontAwesomeIcon icon={faTimes} onClick={this.buttonClick}/>
      </div>

    );
  }
}

export default GitHubPage;