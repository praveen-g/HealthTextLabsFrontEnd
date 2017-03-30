import displaCyENT from 'displacy-ent'

/*
 * Created by Praveen Gupta
 */

import React, {Component} from 'react';

class Document extends Component {
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
        const t2=""
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
