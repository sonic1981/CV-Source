import React from "react";
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchLocation, faAt, faMobileAlt, faCalendar } from '@fortawesome/free-solid-svg-icons';
import Me from '../images/Me.jpg';
import content from "../content";
import OnlineHeader from "./onlineheader";
import SocialPage from './social';
import GitHubPage from './github';


class IndexPage extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      printMode: false
    };
  }

 

  renderAsP(array) {

    return array.map(val => <p>{val}</p>);
  }

  buttonClick = () => {
    this.setState({printMode: true});
  };

  embedFooter() {
    if (this.state.printMode) {

      return <SocialPage />;

    }
  }

  externalFooter() {
    if (this.state.printMode === false) {

      return <div className="online"><SocialPage /></div>;
      
    }
  }

  render() {
    return (<React.Fragment>
      <OnlineHeader buttonClick={this.buttonClick} printMode={this.state.printMode}/>
      <div className={this.state.printMode ? "container-fluid main-content" : "container-fluid main-content online"}>
          
          <div className="row">
              <div className="col pl-4 pr-4">
                  <div className="row header">
                      <div className="col d-flex">
                          <img src={Me} className="me"/>
                          <h1 className="align-self-center">Liam Hughes</h1>
                          
                      </div>
                      <div className="col pt-3">
                          <p className="text-center"><FontAwesomeIcon icon={faSearchLocation}/> <a href={content.information.address.link} target="_new">{content.information.address.text}</a></p>
                          <p className="text-center"><FontAwesomeIcon icon={faAt}/> <a href={content.information.email.link} >{content.information.email.text}</a></p>
                          <p className="text-center"><FontAwesomeIcon icon={faMobileAlt}/> <a href={content.information.phone.link}>{content.information.phone.text}</a></p>
                      </div>
                  </div>
                  
                  {/*  */}
              </div>
          </div>
          <hr className="mt-1"/>
          <div className="row">
              <div className="col">
                  <p>{content.header}</p>
              </div>
              
          </div>
          <div className="row">
              <div className="col work">
                  <h2>Work Experience</h2>
                  <div className="row">
                      <div className="col-5">
                          <h3>Ivanti</h3>
                      </div>
                      <div className="col-4">
                          <h4>Staff Software Engineer (Team Lead)</h4>
                      </div>
                      <div className="col-3">
                          <p><FontAwesomeIcon icon={faCalendar}/> Mar 2019 - Present</p>
                      </div>
                  </div>
              </div>
          </div>
          <div className="row">
              <div className="col">
                {this.renderAsP(content.ivanti)}

              </div>
          </div>
          <div className="row">
              <div className="col work">
                  <div className="row">
                      <div className="col-5">
                          <h3>Nice-pak International</h3>
                      </div>
                      <div className="col-4">
                          <h4>Lead Developer</h4>
                      </div>
                      <div className="col-3">
                          <p><FontAwesomeIcon icon={faCalendar}/> Jan 2017 - Mar 2019</p>
                      </div>
                  </div>
              </div>
          </div>
          <div className="row">
              <div className="col">
                {this.renderAsP(content.nicepak)}
              </div>
          </div>

          <div className="row">
              <div className="col work">
                  <div className="row">
                      <div className="col-5">
                          <h3>Redrow Plc.</h3>
                      </div>
                      <div className="col-4">
                          <h4>Senior Developer</h4>
                      </div>
                      <div className="col-3">
                          <p><FontAwesomeIcon icon={faCalendar}/> Jul 2015 - Dec 2016</p>
                      </div>
                  </div>
              </div>
          </div>
          <div className="row">
              <div className="col">
                {this.renderAsP(content.redrow)}
              </div>
          </div>



          <div className="pagebreak"></div>


          <div className="row">
              <div className="col work no-line">
                  <div className="row">
                      <div className="col-5">
                          <h3>Stella Travel Services</h3>
                      </div>
                      <div className="col-4">
                          <h4>Senior Developer</h4>
                      </div>
                      <div className="col-3">
                          <p><FontAwesomeIcon icon={faCalendar}/> Jun 2011 - Jul 2015</p>
                      </div>
                  </div>
              </div>
          </div>
          <div className="row">
              <div className="col">
                {this.renderAsP(content.sts)}
              </div>
          </div>
          
          
          
          <div className="row">
              <div className="col work noline">
                  <div className="row">
                      <div className="col-5">
                          <h3>Exchange Media</h3>
                      </div>
                      <div className="col-4">
                          <h4>Web Developer</h4>
                      </div>
                      <div className="col-3">
                          <p><FontAwesomeIcon icon={faCalendar}/> Aug 2010 - Jun 2011</p>
                      </div>
                  </div>
              </div>
          </div>
          <div className="row">
              <div className="col">
                {this.renderAsP(content.em)}
              </div>
          </div>

          

          <div className="row">
              <div className="col work">
                  <div className="row">
                      <div className="col-5">
                          <h3>Datel Computing</h3>
                      </div>
                      <div className="col-4">
                          <h4>Developer</h4>
                      </div>
                      <div className="col-3">
                          <p><FontAwesomeIcon icon={faCalendar}/> Jan 2007 – Sept 2010</p>
                      </div>
                  </div>
              </div>
          </div>
          <div className="row">
              <div className="col">
                {this.renderAsP(content.datel)}
              </div>
          </div>
          <div className="row">
              <div className="col work">
                  <div className="row">
                      <div className="col-5">
                          <h3>LJMU Business Development Centre</h3>
                      </div>
                      <div className="col-4">
                          <h4>Developer</h4>
                      </div>
                      <div className="col-3">
                          <p><FontAwesomeIcon icon={faCalendar}/>Sept 2002 – Jan 2007</p>
                      </div>
                  </div>
              </div>
          </div>
          <div className="row">
              <div className="col">
                {this.renderAsP(content.ljmu)}
              </div>
          </div>
          <div className="row">
              <div className="col work">
                  <div className="row">
                      <div className="col-5">
                          <h3>The Archdiocese of Liverpool</h3>
                      </div>
                      <div className="col-4">
                          <h4>IT Assistant/Web Developer</h4>
                      </div>
                      <div className="col-3">
                          <p><FontAwesomeIcon icon={faCalendar}/>Sept 2002 – Sept 2003</p>
                      </div>
                  </div>
              </div>
          </div>
          <div className="row">
              <div className="col">
                {this.renderAsP(content.arch)}
              </div>
          </div>

          
          <div className="row additional">
              <h2 className="mt-3 coloured">Additional Portfolio</h2>
              <div className="col-5">
                  <a href="https://tygwynreflex.co.uk/" target="_new">https://tygwynreflex.co.uk/</a>
              </div>
              <div className="col">
                  <p>My wife's business. This web page is written in React, Gatsby and utilising Bootstrap. </p>
              </div>
          </div>
          <div className="row education">
              <h2 className="mt-3 coloured">Eduction</h2>
              <div className="col col-5">
                  <p className="m-0">Liverpool John Moores University</p>
                  <p className="m-0">Prestatyn High School</p>
                  <p className="m-0">Prestatyn High School</p>
              </div>
              <div className="col">
                  <p className="m-0">BSc (Hons.) Software Engineering</p>
                  <p className="m-0">A Level Computing, Chemistry and Biology</p>
                  <p className="m-0">10 GCSE's A-C including Maths, English and Science.</p>
              </div>
          </div>
          <div className="row">
              <h2 className="coloured mt-3">Volunteering</h2>
              <div className="col work no-line">
                  <div className="row">
                      <div className="col-5">
                          <h3>Sychdyn Playgroup</h3>
                      </div>
                      <div className="col-4">
                          <h4>Treasurer</h4>
                      </div>
                      <div className="col-3">
                          <p><FontAwesomeIcon icon={faCalendar}/>Feb 2020 – Present</p>
                      </div>
                  </div>
              </div>
          </div>
          <div className="row">
              <div className="col">
                  <p>Helping to maintain accounts for this local charity. Generating invoices, purchase orders, etc. Helping to generate end of year accounts.</p>
              </div>
          </div>
          <div className="row">
              <div className="col work">
                  <div className="row">
                      <div className="col-5">
                          <h3>Clwyd Mountaineering Club</h3>
                      </div>
                      <div className="col-4">
                          <h4>Vice President</h4>
                      </div>
                      <div className="col-3">
                          <p><FontAwesomeIcon icon={faCalendar}/>Sept 2016 – Present</p>
                      </div>
                  </div>
              </div>
          </div>
          <div className="row">
              <div className="col">
                  <p>Maintaining my local club's Facebook account and contacting and providing information to new members.</p>
              </div>
          </div>
          {this.embedFooter()}
      </div>
      <div className="container-fluid">
        {this.externalFooter()}
      </div>

      <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-header">
          <strong class="me-auto">Bootstrap</strong>
          <small>11 mins ago</small>
          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body">
          Hello, world! This is a toast message.
        </div>
      </div>
      <GitHubPage printMode={this.state.printMode} />
      </React.Fragment>
      
    )
  };
}

export default IndexPage
