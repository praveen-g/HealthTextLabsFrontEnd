/**
 * Created by sasinda on 3/30/17.
 */
import React, {Component} from 'react';

import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

class InsuranceInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Table className="infoBox">
                <TableHeader displaySelectAll={false}>
                    <TableRow>
                        <TableHeaderColumn colSpan="4" tooltip="Patient Info"
                                           style={{textTransform: 'uppercase', textAlign:'center'}}>
                            Diagnosis Information
                        </TableHeaderColumn>
                    </TableRow>
                    <TableRow>
                        <TableHeaderColumn tooltip="Diagnosis">Diagnosis</TableHeaderColumn>
                        <TableHeaderColumn tooltip="ICD10 Code">ICD10</TableHeaderColumn>
                        <TableHeaderColumn tooltip="SNOMED Code">SNOMED</TableHeaderColumn>
                        <TableHeaderColumn tooltip="SNOMED Description">Clinical Description</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={false}>
                    <TableRow>
                        <TableRowColumn>Ulcerative Colitis</TableRowColumn>
                        <TableRowColumn>K51.80</TableRowColumn>
                        <TableRowColumn>64766004</TableRowColumn>
                        <TableRowColumn>Other Ulcerative colitis without complications</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>Phonophobia</TableRowColumn>
                        <TableRowColumn>G43.109</TableRowColumn>
                        <TableRowColumn> 313387002</TableRowColumn>
                        <TableRowColumn>A subtype of migraine disorder, characterized by recurrent attacks of reversible neurological symptoms (aura) that precede or accompany the headache. Aura may include a combination of sensory disturbances, such as blurred vision; hallucinations; vertigo; numbness; and difficulty </TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>Aphasia</TableRowColumn>
                        <TableRowColumn>R47.01</TableRowColumn>
                        <TableRowColumn>87486003</TableRowColumn>
                        <TableRowColumn>Loss of power of expression or comprehension. Aphasic disturbance.</TableRowColumn>
                    </TableRow>

                </TableBody>
            </Table>

        );
    }

}
export default InsuranceInfo;


