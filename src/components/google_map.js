import React from 'react';

export default class GoogleMap extends React.Component {
  componentDidMount(){
      
        new window.google.maps.Marker({
            position: new window.google.maps.LatLng(this.props.lat,this.props.lon),
            map: new window.google.maps.Map(document.getElementById("map"+((this.props.mapid).split(" ").join(""))),{
              zoom: 10,
              center: new window.google.maps.LatLng(this.props.lat,this.props.lon),
              mapTypeId: window.google.maps.MapTypeId.ROADMAP
            })
        });
  }
  render(){
    return (
        <div className="container-fluid text-center p-2">
          <div id={"map"+((this.props.mapid).split(" ").join(""))} key={((this.props.mapid).split(" ").join(""))}/>
        </div>
        );
  }
}
