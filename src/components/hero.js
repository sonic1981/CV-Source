import React from "react";
import Azure from '../images/Azure.png';
import Terraform from '../images/Terraform.png';
import ReactImg from '../images/React.svg';
import Angular from '../images/angular.svg';
import C from '../images/csharp.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding} from '@fortawesome/free-solid-svg-icons';

const iconRender = (data) => {

  switch(data.name) {
    case 'React':
      return <img src={ReactImg} alt={data.name} className="icon" />
      break;
    case 'Angular':
      return <img src={Angular} alt={data.name} className="icon" />
      break;
    case 'Azure':
      return <img src={Azure} alt={data.name} className="icon" />
      break;
    case 'Terraform':
      return <img src={Terraform} alt={data.name} className="icon" />
      break;
    case 'C#':
      return <img src={C} alt={data.name} className="icon" />
      break;
    case "Architecture":
      return <FontAwesomeIcon icon={faBuilding} />
  }

}

const HeroPage = (props) => {


    return <div className="hero m-2 d-flex">
      {iconRender(props.data)}
      <h2>{props.data.name}</h2>
      <p>{props.data.leader}</p>
    </div>;
  
  
};

export default HeroPage;