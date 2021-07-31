import { useEffect, useState } from 'react';
import {useHistory} from 'react-router-dom'



const Header = ({ title, description, image }) => {
    const history = useHistory();
    const [navigationTitle,setNavigationTitle] = useState("Next");

    const handleNavigation = () =>{
        if(navigationTitle === "Next")history.push("/second-page")
        if(navigationTitle === "Go Back")history.push("/")
    }
    useEffect(()=>{
        window.location.pathname === "/"? setNavigationTitle("Next"):setNavigationTitle("Go Back")
    },[])
  return (
    <>
      <div className="row">
        <div className="col-6 ">
          <div className="navigation-title" onClick={()=>handleNavigation()}>{navigationTitle}</div>
          <div className="header-content">
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
        </div>
        <div className="col-6 header-img">
          <img src={image} alt={image} />
        </div>
      </div>
    </>
  );
};

export default Header;
