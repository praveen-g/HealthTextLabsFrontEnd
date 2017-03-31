/*
 * Created by Praveen Gupta
 */

import React, {Component} from 'react';
import AnDocument from './AnDocument';
import VerticalTimeLine from './VerticalTimeline'

class Dashboard extends Component {

    render() {
    	var docuStyle={
            //width:"45%",
            // float:"left",
            // display:"inline"
        }

        // var timelineStyle={
        //     width:"10%",
        //     float:"left",
        //     display:"inline"
        // }

        return (
        	<div>
	            <div style={docuStyle}>
	                <AnDocument/>
	            </div>
                <div>
                    <VerticalTimeLine />
                </div>
	        </div>
        );
    }


}
export default Dashboard;


