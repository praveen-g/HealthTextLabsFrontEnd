/**
 * Created by sasinda on 3/30/17.
 */
import React, {Component} from 'react';
import PatientInfo from './PatientInfo'
import InsuranceInfo from './InsuranceInfo'
import DiagnosisInfo from './DiagnosisInfo'
import ProcedureInfo from './ProcedureInfo'
import OtherInfo from './OtherInfo'

import Paper from 'material-ui/Paper';

class InfoBoxes extends Component {
    constructor(props) {
        super(props);
        this.state = {};
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
                    <Paper zDepth={1}>
                        <PatientInfo/>
                    </Paper>
                </div>
                <div style={half_box_style}>
                    <Paper zDepth={1}>
                        <InsuranceInfo/>
                    </Paper>
                </div>
                <div style={full_box_style}>
                    <Paper zDepth={1}>
                        <DiagnosisInfo/>
                    </Paper>
                </div>
                <div style={full_box_style}>
                    <Paper zDepth={1}>
                        <ProcedureInfo/>
                    </Paper>
                </div>
                <div style={full_box_style}>
                    <Paper zDepth={1}>
                        <OtherInfo/>
                    </Paper>
                </div>
            </div>


        );
    }

}
export default InfoBoxes;


