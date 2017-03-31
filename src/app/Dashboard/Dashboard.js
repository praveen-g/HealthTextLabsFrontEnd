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
            paddingTop:"1%",
            width:"45%",
            float:'left',
            paddingLeft:'1.25%',
            paddingRight:'1.25%'
        }
        var full_box_style={
            width:"100%",
            float:'left'
    	}

        var timelineStyle={
            paddingTop:"3%",
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


