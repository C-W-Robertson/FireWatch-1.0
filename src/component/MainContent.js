import React from "react";
import { Link } from "react-router-dom";

// Component 'MainContent' includes the main title for the primary content.
// Fire incident JSON data is stored in 'data'. In a fully deployed app, this data would be received from
// the Cal Fire site, accessible at 'https://www.fire.ca.gov/umbraco/api/IncidentApi/List?inactive=false'
// This data would be looped around, and output as a Bootstrap card, per incident.

const MainContent = () => {

  const data = {
        id: 1,
        name: "Alpine Fire",
        final: "false",
        updated: "2022-03-04T19:38:28Z",
        started: "2022-03-01T17:15:00Z",
        adminunit: "CAL FIRE Sonoma Lake Napa Unit ",
        adminuniturl: null,
        county: "Sonoma",
        location: "Near Monte Rio",
        acresburned: 21.0,
        percentcontained: 65.0,
        controlstatement: null,
        agencynames: "",
        longitude: -123.015106,
        latitude: 38.46234,
        type: "Wildfire",
        uniqueid: "ee27ed9e-44fb-4133-a2c9-f16a90fbeb46",
        url: "https://www.fire.ca.gov/incidents/2022/3/1/alpine-fire/",
        extinguisheddate: "",
        extinguisheddateonly: "",
        starteddateonly: "2022-03-01",
        isactive: true,
        calfireincident: false,
        notificationdesired: false
      }
      
  return (
    <div className = "firedata">
      <FireData data = {data}/>
    </div>
  )
};


const FireData = (props) => {

  return(

   <article className = "container">

       <h2 className = "text-danger">California Wildfire Incidents</h2>

      <div class = "card">
        <div class = "card-header">
          Incident Name: "{props.data.name}" | County: {props.data.county}
        </div>
        
        <ul class = "list-group list-group-flush">
          <li class = "list-group-item">Location: {props.data.location}</li>
          <li class = "list-group-item">Percent Contained: {props.data.percentcontained}% | Acres Burned: {props.data.acresburned}</li>
          <li class = "list-group-item">Date Fire Began: {props.data.starteddateonly}</li>
          <li class = "list-group-item">Coordinates: Latitude: {props.data.latitude} | Longitude: {props.data.longitude}</li>
          <br />
          <br />  
          <li class = "list-group-item">Last Updated: {props.data.updated}</li>
        </ul>

        <div class = "card-footer">
          Incident ID#: {props.data.uniqueid}
        </div>
        
      </div>
    </article>

)}; 



export default MainContent;