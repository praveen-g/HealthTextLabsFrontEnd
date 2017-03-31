/*
 * Created by Praveen Gupta
 */

import React, {Component} from 'react';
import AnDocument from './AnDocument';
import InfoBoxes from './InfoBoxes'

class Dashboard extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     value: 3,
        // };
    }

    render() {
    	var half_box_style={
            width:"50%",
            float:'left'
        }
        var full_box_style={
            width:"100%",
            float:'left'
        }

        return (
        	<div>
	            <div style={half_box_style}>
	                <AnDocument/>
	            </div>
                <div style={half_box_style}>
                    <InfoBoxes/>
                </div>

	        </div>
        );
    }


}
export default Dashboard;


