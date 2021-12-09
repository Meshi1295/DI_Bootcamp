import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
    static defaultProps = {
        center: {
            lat: 32.0853,
            lng: 34.7818
        },
        zoom: 15
    };
    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '80vh', width: '100%' }}>
                <h1>Google Map API with REACT JS</h1>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: `AIzaSyD7EZ6BX2LWbgi4tbQ5unO563cFAHEfGzs` }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <AnyReactComponent
                        lat={59.955413}
                        lng={30.337844}
                        text="Meshi "
                    />
                </GoogleMapReact>
            </div>
        );
    }
}
export default Map;