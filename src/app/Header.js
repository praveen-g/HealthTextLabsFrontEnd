/**
 * Created by sasinda on 3/30/17.
 */
import React, {Component} from 'react';

class Header extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            open: false,
        };
    }




    render() {

        return (
            <div id="displacy">HI</div>

        );
    }

    componentDidMount(){
        const displacy = new displaCyENT('http://localhost:8000', {
            container: '#displacy',
            defaultText: 'Upload Files',
            defaultEnts: []
        });
        const text = 'When Sebastian Thrun started working on self-driving cars at Google in 2007, few people outside of the company took him seriously.';
        const spans = [{end: 20, start: 5, type: "PERSON"}, {end: 67, start: 61, type: "ORG"}, {
            end: 75,
            start: 71,
            type: "DATE"
        }];
        const ents = ['person', 'org', 'gpe', 'loc', 'product'];
        displacy.render(text, spans, ents);
    }
}
export default Document;


<div className="App-header">
    <Toolbar>
        <ToolbarGroup firstChild={true}>
            <DropDownMenu value={this.state.value} onChange={this.handleChange}>
                <MenuItem value={1} primaryText="All Broadcasts"/>
                <MenuItem value={2} primaryText="All Voice"/>
                <MenuItem value={3} primaryText="All Text"/>
                <MenuItem value={4} primaryText="Complete Voice"/>
                <MenuItem value={5} primaryText="Complete Text"/>
                <MenuItem value={6} primaryText="Active Voice"/>
                <MenuItem value={7} primaryText="Active Text"/>
            </DropDownMenu>
        </ToolbarGroup>
        <ToolbarGroup>
            <ToolbarTitle text="Options"/>
            <FontIcon className="muidocs-icon-custom-sort"/>
            <ToolbarSeparator />
            <RaisedButton label="Create Broadcast" primary={true}/>
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
        </ToolbarGroup>
    </Toolbar>
</div>