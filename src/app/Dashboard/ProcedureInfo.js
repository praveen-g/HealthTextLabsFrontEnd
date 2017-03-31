/**
 * Created by sasinda on 3/30/17.
 */
import React, {Component} from 'react';

import TextField from 'material-ui/TextField';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

class ProcedureInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        return (
            <Table>
                <TableHeader displaySelectAll={false}>
                    <TableRow>
                        <TableHeaderColumn colSpan="6" tooltip="Patient Info"
                                           style={{textTransform: 'uppercase', textAlign:'center'}}>
                            Procedure Information
                        </TableHeaderColumn>
                    </TableRow>
                    <TableRow>
                        <TableHeaderColumn tooltip="Diagnosis">Procedure</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Date Performed/Recommended">Date</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Charged Amount USD">Charge</TableHeaderColumn>
                        <TableHeaderColumn tooltip="ICD10 Code">ICD10</TableHeaderColumn>
                        <TableHeaderColumn tooltip="SNOMED Code">SNOMED</TableHeaderColumn>
                        <TableHeaderColumn tooltip="SNOMED Description">Clinical Description</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={false}>
                    <TableRow>
                        <TableRowColumn>MRI</TableRowColumn>
                        <TableRowColumn>01/02/2017</TableRowColumn>
                        <TableRowColumn>450USD</TableRowColumn>
                        <TableRowColumn>BW30ZZZ</TableRowColumn>
                        <TableRowColumn>113091000</TableRowColumn>
                        <TableRowColumn>Abdomen: Magnetic Resonance Imaging (MRI)</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>MRI</TableRowColumn>
                        <TableRowColumn>10/02/2017</TableRowColumn>
                        <TableRowColumn>300USD</TableRowColumn>
                        <TableRowColumn>B93JZZZ</TableRowColumn>
                        <TableRowColumn>241601008</TableRowColumn>
                        <TableRowColumn>Larynx: Magnetic Resonance Imaging (MRI) of Larynx</TableRowColumn>
                    </TableRow>

                </TableBody>
            </Table>
        );
    }
}
export default ProcedureInfo;


