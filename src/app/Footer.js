/**
 * Created by sasinda on 3/31/17.
 */
import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import Popover from 'material-ui/Popover';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';

const calendarIcon = <FontIcon className="fa fa-calendar"></FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
const nearbyIcon = <IconLocationOn />;

/**
 * A simple example of `BottomNavigation`, with three labels and icons
 * provided. The selected `BottomNavigationItem` is determined by application
 * state (for instance, by the URL).
 */
class Footer extends Component {
    state = {
        selectedIndex: 0,
        timeLine_open: false,
        anchorEl: null,
    };

    select = (index) => {
        this.setState({selectedIndex: index});
        if (index == 0) {
            this.setState({timeLine_open: !this.state.timeLine_open});
        }
    }

    handleTimeLineClose = () => {
        this.setState({
            timeLine_open: false,
        });
    };

    render() {
        var footer_style = {
            position: "absolute; bottom:0px"
        }

        var nav=<Paper zDepth={2} className='footer' >
            <BottomNavigation selectedIndex={this.state.selectedIndex} ref={(e) => { this.state.anchorEl = e; }}>
                <BottomNavigationItem
                    label="Timeline"
                    icon={calendarIcon}
                    onTouchTap={() => this.select(0)}
                    />

            </BottomNavigation>
        </Paper>

        return (
            <div>
                {nav}
                <Popover
                    className='bottom_pannel'
                    open={this.state.timeLine_open}
                    anchorEl={this.state.anchorEl}
                    anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                    targetOrigin={{horizontal: 'left', vertical: 'top'}}
                    onRequestClose={this.handleTimeLineClose}
                    >
                    <Paper zDepth={2}>

                    </Paper>
                </Popover>
           </div>

        );
    }

}

export default Footer;