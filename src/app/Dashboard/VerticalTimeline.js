/*
 * Created by Praveen Gupta
 */

import React, {Component} from 'react';

class VerticalTimeLine extends Component {

    render() {
        return (
            <div id="timeline">Loading...</div>
        );
    }

    componentDidMount(){
        var element = document.getElementById("timeline");
        element.innerHTML = '<object type="text/html" data="VerticalTimeline/index.html" ></object>';
    }
 
}
export default VerticalTimeLine;
