/*
 * Created by Praveen Gupta
 */

import React, {Component} from 'react';
import AnDocument from './AnDocument';
import InfoBoxes from './InfoBoxes'
import VerticalTimeLine from './VerticalTimeline'

class Dashboard extends Component {

    render() {
    	var half_box_style={
            width:"50%",
            float:'left'
        }
        var full_box_style={
            width:"100%",
            float:'left'
        }

        // var timelineStyle={
        //     width:"10%",
        //     float:"left",
        //     display:"inline"
        // }

        return (
        	<div>
	            <div style={half_box_style}>
	                <AnDocument/>
	            </div>
                <div style={half_box_style}>
                    <InfoBoxes/>
                </div>

                <div>
                    <VerticalTimeLine />
                </div>
	        </div>
        );
    }


}
export default Dashboard;


