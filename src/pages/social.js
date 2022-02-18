import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faStackOverflow, faGithub } from '@fortawesome/free-brands-svg-icons';

class SocialPage extends React.Component {

  render() {

    return (
      <div className="row text-center social">
          <div className="col">
              <p><FontAwesomeIcon icon={faLinkedin}/><br/><a href="https://www.linkedin.com/in/liam-hughes-69b9432a/">https://www.linkedin.com/in/liam-hughes-69b9432a/</a></p> 
          </div>
          <div className="col">
              <p><FontAwesomeIcon icon={faStackOverflow}/><br/><a href="https://stackoverflow.com/users/542251/liam">https://stackoverflow.com/users/542251/liam</a></p>
          </div>
          <div className="col">
              <p><FontAwesomeIcon icon={faGithub}/><br/><a href="https://github.com/sonic1981">https://github.com/sonic1981</a></p>
          </div>
      </div>
    );

    

  }
}

export default SocialPage;