 import PropTypes from 'prop-types'; 
 import React from 'react';
 import '../../../../assets/stylesheets/homepage.css';
 import '../../../../assets/stylesheets/Sidebar.css';
 import Sidebar from './Sidebar';

const HomePage = (props) => {
    //const parks = props.parks
    //const listParks = parks.map((park) =>
   // <li key = {park.toString()}>
    //    {park}
    //</li>); 
  return(
    //   <ul> listParks</ul>  
    <main> 
      <div className = "home" id = "outer-container">
        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
        <div id="page-wrap">
          <h1> 
            Welcome to NattyTracker!
              {/* This is the main page
              {arr.map((num) => {
                return <li>{num} </li> 
              })} */}
          </h1>
          <h2> 
            Please click the button in the top-left, and choose a National Park!
          </h2> 
        </div>
      </div> 
    </main> 
  );
};
HomePage.propTypes = {
}
export default HomePage; 


// <html> 
//   <head> 
//     <title> Natty Tracker!</title> 
//   </head>
//   <body> 
//     <div className = "header">
//       <h1>Natty Tracker</h1> 
//     </div> 
//     <div className = "parkNameAndImage"> 
//       <h2> {props.parks.name} </h2> 
//       <img src = {props.images.url} alt = {props.images.alt_text}> </img>
//     </div> 

//     <div className = "description"> 
//       <p> 
//         {props.parks.description}
//       </p>
//     </div>
//     <div className = "fees"> 
//       <h1>Entrance Fees</h1>
//       <p> 
//         <ul> {props.fees.title}: {props.fees.cost} </ul>         
//       </p>
//     </div>

//     <div className = "weather">
//       <h2> Weather Information: </h2> 
//       <p> 
//         {props.parks.weather}
//       </p>  
//     </div>

//     <div className = "directions">
//       <h2> 
//         Directions: 
//       </h2> 
//       <h3> 
//         Latitude: {props.parks.latitude}
//         Longitude: {props.parks.longitude}
//       </h3> 
      //  <a href= "{prop.parks.directions_url}" class = "btn btn-primary"> Get Directions </a>  <!--- href = prop.parks.directions_url ---> 
          // <input type="button" onclick="location.href='{prop.parks.directions_url}';" value="Get Directions" />
//     </div>

//     <div className = "">

//     </div>

//     <div className = "footer"> 
//       <h1> 
//         Contact Info
//       </h1> 
//       <p> 
//         <ul> </ul> 
//         <ul> </ul> 
//         <ul> </ul> 
//       </p> 
//     </div> 
//   </body> 
// </html> 

//HelloWorld.propTypes = {
  //name: PropTypes.string.isRequired, // this is passed from the Rails view
//};