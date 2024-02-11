import React from "react";
import "./MapPage.css";
 
function MapPage() {
    return (
        <div className="map-page">
            <iframe
                title="Embedded Resource Map" 
                src="https://www.google.com/maps/d/u/2/embed?mid=1fujTjPL1HbRLTPMnrpz09WdkxF9jFH4&ehbc=2E312F&noprof=1"
                allowFullScreen 
            ></iframe>

            <footer className="footer">
                <p className="text-footer">
                    Contact: blank@gmail.com
                </p>
            </footer>
        </div>
    );
}
 
export default MapPage;
