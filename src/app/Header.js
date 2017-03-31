/**
 * Created by sasinda on 3/30/17.
 */
import React, {Component} from 'react';
import Upload from './Upload.js'
import TextField from 'material-ui/TextField';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import Badge from 'material-ui/Badge';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 3,
        };
    }

    handleChange = (event, index, value) => this.setState({value});

    render() {
        var search_style={
            width:"50%"
        }
        return (
            <div className="App-header">
                <Toolbar>
                    <ToolbarTitle text="H T L." style={{color: '#1565C0'}}/>
                    <ToolbarGroup style={search_style}>
                        <TextField   fullWidth={true} hintText="Search"/>
                        <IconButton tooltip="search by case, patient etc">
                            <FontIcon className="fa fa-search"></FontIcon>
                        </IconButton>
                    </ToolbarGroup>


                    <ToolbarGroup>
                        <ToolbarSeparator />
                        <Upload label="New Case"/>
                        <IconMenu
                            iconButtonElement={
                                <IconButton touch={true}>
                                <NavigationExpandMoreIcon />
                              </IconButton>
                             }
                            >
                            <MenuItem primaryText="Download"/>
                            <MenuItem primaryText="More Info"/>
                        </IconMenu>
                        <div>
                            <Badge
                            badgeContent={8}
                            secondary={true}
                            badgeStyle={{top: 18, right: 8}}
                            >
                            <IconButton tooltip="Notifications">
                            <NotificationsIcon />
                            </IconButton>
                            </Badge>
                        </div>
                    </ToolbarGroup>
                </Toolbar>
                
            </div>

        );
    }
}
export default Header;


