import React from "react";
import {Helmet} from "react-helmet";
import './index.scss';
import './homePage.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faStackOverflow, faGithub } from '@fortawesome/free-brands-svg-icons';
import Me from '../images/Me.jpg';
import HeroPage from "../components/hero";
import { graphql } from "gatsby"

const heroOutput = (heroData) => {
  return heroData.map(m => <HeroPage data={m.node} />);
};


const IndexPage = ({data}) => {
    return (<React.Fragment>
        <Helmet htmlAttributes={{
          lang: 'en',
        }}>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta name="robots" content="noindex"></meta>
          <title>Liam Hughes :: Opinions of a Professional Software Engineer</title>
        </Helmet>
        <div className="container mt-5 main-theme">
          <div className="row">
              <div className="col pl-4 pr-4">
                  <div className="row header">
                      <div className="col d-flex">
                          <img src={Me} className="me"/>
                          <h1 className="align-self-center">Liam Hughes</h1>
                          
                      </div>
                      <div className="col d-flex justify-content-center flex-column">
                        <p className="text-center"><FontAwesomeIcon icon={faLinkedin}/> <a href="https://www.linkedin.com/in/liam-hughes-69b9432a/">https://www.linkedin.com/in/liam-hughes-69b9432a/</a></p> 
                        <p className="text-center"><FontAwesomeIcon icon={faStackOverflow}/> <a href="https://stackoverflow.com/users/542251/liam">https://stackoverflow.com/users/542251/liam</a></p>
                        <p className="text-center"><FontAwesomeIcon icon={faGithub}/> <a href="https://github.com/sonic1981">https://github.com/sonic1981</a></p>
                      </div>
                  </div>
              </div>
          </div>
          <p className="d-block text-center">I've written up some information on my experience in several technologies. Please have a read though this information to see what experience and ideas I have to offer.</p>

          <div className="d-flex flex-row justify-content-center flex-wrap">
            {heroOutput(data.allTechnologyJson.edges)}
          </div>
        </div>

      </React.Fragment>);
  }


export const query = graphql`
{
  allTechnologyJson {
    edges {
      node {
        name
        id
        leader
      }
    }
  }
}

`

export default IndexPage;