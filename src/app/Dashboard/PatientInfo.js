/**
 * Created by sasinda on 3/30/17.
 */
import React, {Component} from 'react';

import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

class PatientInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        return (
            <Table>
                <TableHeader displaySelectAll={false}>
                    <TableRow>
                        <TableHeaderColumn colSpan="2" tooltip="Patient Info" style={{textTransform: 'uppercase'}}>
                            Patient Information
                        </TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={false}>
                    <TableRow>
                        <TableRowColumn>Name:</TableRowColumn>
                        <TableRowColumn>John Smith</TableRowColumn>

                    </TableRow>
                    <TableRow>
                        <TableRowColumn>Address:</TableRowColumn>
                        <TableRowColumn>433 Applebossom St, Austin Texas, 343356</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>City:</TableRowColumn>
                        <TableRowColumn>Austin</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>Telephone:</TableRowColumn>
                        <TableRowColumn>(101) 314-1414</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>Gender:</TableRowColumn>
                        <TableRowColumn>Male</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>Date of Birth:</TableRowColumn>
                        <TableRowColumn>02-28-1955</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>Occupation:</TableRowColumn>
                        <TableRowColumn>Clerical Officer</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>Employer:</TableRowColumn>
                        <TableRowColumn>UC Painters Inc</TableRowColumn>
                    </TableRow>
                </TableBody>
            </Table>

        );
    }

}
export default PatientInfo;


