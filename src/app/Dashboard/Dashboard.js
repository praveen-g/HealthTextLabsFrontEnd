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
            width:"40%",
            float:'left',
            paddingLeft:'3.75%',
            paddingRight:'3.75%'
        }
        var full_box_style={
            width:"100%",
            float:'left'
    	}

        var timelineStyle={
            paddingTop:"5%",
            float:"left",
        }

        return (
        	<div>
	            <div style={half_box_style}>
	                <AnDocument/>
	            </div>

                <div style={timelineStyle}>
                    <VerticalTimeLine />
                </div>

                <div style={half_box_style}>
                    <InfoBoxes/>
                </div>

                
	        </div>
        );
    }


}
export default Dashboard;


