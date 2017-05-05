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
                        <TableHeaderColumn colSpan="2" tooltip="Patient Info" style={{textTransform: 'uppercase'}}>
                            Insurance Information
                        </TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={false}>
                    <TableRow>
                        <TableRowColumn>Patient Number:</TableRowColumn>
                        <TableRowColumn>p0000001</TableRowColumn>

                    </TableRow>
                    <TableRow>
                        <TableRowColumn>Place of Service:</TableRowColumn>
                        <TableRowColumn>Doctor's Office</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>WC Insurance Plan:</TableRowColumn>
                        <TableRowColumn>Industrial Indemnity Co.</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>Patient SSN:</TableRowColumn>
                        <TableRowColumn>xxx-xx-0121</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>WC Claim#:</TableRowColumn>
                        <TableRowColumn>123898</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>WC Policy Holder:</TableRowColumn>
                        <TableRowColumn>UC Painters Inc</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>Address:</TableRowColumn>
                        <TableRowColumn>101 Circle Rd, Austin Texas</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>Employer Telephone:</TableRowColumn>
                        <TableRowColumn>(101) 315 0937</TableRowColumn>
                    </TableRow>
                </TableBody>
            </Table>

        );
    }

}
export default InsuranceInfo;


