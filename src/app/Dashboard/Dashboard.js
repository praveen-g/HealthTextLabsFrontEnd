/*
 * Created by Praveen Gupta
 */

import React, {Component} from 'react';
import AnDocument from './AnDocument';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     value: 3,
        // };
    }

    render() {
    	var docuStyle={
            width:"40%"
        }

        return (
        	<div>
	            <div style={docuStyle}>
	                <AnDocument/>
	            </div>
	        </div>
        );
    }


}
export default Dashboard;


