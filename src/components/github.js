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
      <div className={this.state.hide ? "d-none" : "github-popup"}>
        <FontAwesomeIcon icon={faGithub}/>
        <p>View the <a href="https://github.com/sonic1981/CV-Source">source code for this page here</a></p>
        <FontAwesomeIcon icon={faTimes} onClick={this.buttonClick}/>
      </div>

    );
  }
}

export default GitHubPage;