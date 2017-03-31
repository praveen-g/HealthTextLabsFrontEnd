/**
 * Created by sasinda on 3/30/17.
 */
import React, {Component} from 'react';

import TextField from 'material-ui/TextField';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

class InsuranceInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Table>
                <TableHeader displaySelectAll={false}>
                    <TableRow>
                        <TableHeaderColumn colSpan="4" tooltip="Patient Info"
                                           style={{textTransform: 'uppercase', textAlign:'left'}}>
                            Special Notes
                        </TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={false}>
                    <TableRow>
                        <TableRowColumn><TextField
                            hintText="Special Notes"
                            floatingLabelText="Special Notes"
                            multiLine={true}
                            fullWidth={true}
                            rows={5}
                            defaultValue="Industrial Indemnity Co. 10 Policy St, Austin Tx, 12345. Return to work 8/3/2017"
                            /></TableRowColumn>
                    </TableRow>


                </TableBody>
            </Table>

        );
    }

}
export default InsuranceInfo;


