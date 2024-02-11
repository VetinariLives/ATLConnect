import React from "react";
import "./App.css";
//import skyline from './ATLSkyline.jpg'; // Tell webpack this JS file uses this image

 
function Main() {
    return (
        <div>
            <section class="section">
                <div class="box-main">
                        <h1 class="text-big">
                            Mission Statement:
                        </h1>
                        <p class="text-small">
                            ATLConnect is ATL's hub for community resources, aggregating information about food, housing, restaraunts, education, events and more! Users can suggest new resources and events in the suggestions form.
                        </p>
                </div>
            </section>
            <footer className="footer">
                <p className="text-footer">
                    Contact: blank@gmail.com
                </p>
            </footer>
        </div>
    );
}
 
export default Main;
