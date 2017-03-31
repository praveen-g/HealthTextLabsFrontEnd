/**
 * Created by sasinda on 3/30/17.
 */
import React, {Component} from 'react';
import PatientInfo from './../Dashboard/PatientInfo'
import InsuranceInfo from './../Dashboard/InsuranceInfo'
import DiagnosisInfo from './../Dashboard/DiagnosisInfo'
import ProcedureInfo from './../Dashboard/ProcedureInfo'
import OtherInfo from './../Dashboard/OtherInfo'

import Paper from 'material-ui/Paper';
import './../../www/patient_timeline.css';

var vis=require('vis')

class PatientTimeline extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        return (
            <div id='patient_time_line'></div>
        );
    }

    componentDidMount() {
        var container_id='patient_time_line'
        var timeline=this.drawTimeline(container_id)
        document.getElementById(
            'timeline'
        ).onclick = function (event) {
            var props = timeline.getEventProperties(event)
            console.log(props);
        }


    }


    drawTimeline(container_id) {

        var groups = new vis.DataSet([
            {
                id: 1,
                content: 'Problem',
                style: "text-transform:uppercase; color: #758D96; display: flex; font-family: 'Titillium Web, Black', black; background-color:#FFFFFF;"
            },
            {id: 2, content: 'BodyParts', style: "text-transform:uppercase;color:  #758D96; background-color:#FFFFFF;"},
            {id: 3, content: 'Severity', style: "text-transform:uppercase;color:  #758D96; background-color:#FFFFFF;"},
            {id: 4, content: 'Procedure', style: "text-transform:uppercase;color:  #758D96; background-color:#FFFFFF"},
            {
                id: 5,
                content: 'Medical Tests',
                style: "text-transform:uppercase;color:  #758D96; background-color:#FFFFFF;"
            },
            {
                id: 6,
                content: 'Medication',
                style: "text-transform:uppercase;color:  #758D96; background-color: #FFFFFF;"
            },
            {id: 7, content: 'Negation', style: "text-transform:uppercase;color: #758D96; background-color: #FFFFFF;"}


        ]);


        // Create a DataSet (allows two way data-binding)
        var items = new vis.DataSet([
///  Problem
            {
                id: 1,
                content: 'item 1',
                start: '2013-04-14',
                content: 'SAH',
                title: 'Problem',
                group: 1,
                'className': 'color_problem'
            },
            {
                id: 2,
                content: 'item 2',
                start: '2013-04-14',
                content: 'IPH',
                title: 'Problem',
                group: 1,
                'className': 'color_problem'
            },
            {
                id: 3,
                content: 'item 3',
                start: '2013-04-14',
                content: 'worsening',
                title: 'Severity',
                group: 3,
                'className': 'color_severity'
            },
            {
                id: 4,
                content: 'item 3',
                start: '2013-04-14',
                content: 'altered mental status',
                title: 'Severity',
                group: 1,
                'className': 'color_problem'
            },
            {
                id: 5,
                content: 'item 5',
                start: '2013-04-14',
                content: 'tachypnea',
                title: 'Problem',
                group: 1,
                'className': 'color_problem'
            },
            {
                id: 6,
                content: 'item 6',
                start: '2013-04-14',
                content: 'fevers',
                title: 'Problem',
                group: 1,
                'className': 'color_problem'
            },


            {
                id: 7,
                content: 'item 7',
                start: '2013-04-15',
                content: 'intoxicated',
                title: 'Problem',
                group: 1,
                'className': 'color_problem'
            },
            {
                id: 8,
                content: 'item 8',
                start: '2013-04-15',
                content: 'Intraparenchymal hemorraghe',
                title: 'Problem',
                group: 1,
                'className': 'color_problem'
            },
            {
                id: 9,
                content: 'item 9',
                start: '2013-04-15',
                content: 'SAH',
                title: 'Problem',
                group: 1,
                'className': 'color_problem'
            },

            {
                id: 10,
                content: 'item 10',
                start: '2013-04-15',
                content: 'phenytoin',
                title: 'Medication',
                group: 6,
                'className': 'color_medication'
            },

            {
                id: 11,
                content: 'item 11',
                start: '2013-04-15',
                content: 'fever',
                title: 'Problem',
                group: 1,
                'className': 'color_problem'
            },
            {
                id: 12,
                content: 'item 12',
                start: '2013-04-15',
                content: 'not required CIWA',
                title: 'Negation',
                group: 7,
                'className': 'color_negation'
            },

////

            {
                id: 13,
                content: 'item 13',
                start: '2013-04-19',
                content: 'tachypneic',
                title: 'Problem',
                group: 1,
                'className': 'color_problem'
            },
            {
                id: 14,
                content: 'item 14',
                start: '2013-04-19',
                content: 'unresponsive',
                title: 'Problem',
                group: 1,
                'className': 'color_problem'
            },

////

            {
                id: 16,
                content: 'item 16',
                start: '2013-04-20',
                content: 'head CT',
                title: 'Tests',
                group: 5,
                'className': 'color_tests'
            },
            {
                id: 17,
                content: 'item 17',
                start: '2013-04-20',
                content: 'stable bleed',
                title: 'Problem',
                group: 1,
                'className': 'color_problem'
            },

///
            {
                id: 18,
                content: 'item 18',
                start: '2013-04-20',
                content: 'R bronchus',
                title: 'BodyParts',
                group: 2,
                'className': 'color_bodyparts'
            },
            {
                id: 19,
                content: 'item 19',
                start: '2013-04-20',
                content: 'chest CT',
                title: 'Tests',
                group: 5,
                'className': 'color_tests'
            },
            {
                id: 20,
                content: 'item 20',
                start: '2013-04-20',
                content: 'negative PE',
                title: 'Negation',
                group: 7,
                'className': 'color_negation'
            },
            {
                id: 21,
                content: 'item 21',
                start: '2013-04-20',
                content: 'likely',
                title: 'Severity',
                group: 3,
                'className': 'color_severity'
            },
            {
                id: 22,
                content: 'item 22',
                start: '2013-04-20',
                content: 'aspirated material',
                title: 'Problem',
                group: 1,
                'className': 'color_problem'
            },

//
            {
                id: 23,
                content: 'item 23',
                start: '2013-04-21',
                content: 'O2 Sat',
                title: 'BodyParts',
                group: 2,
                'className': 'color_bodyparts'
            },
            {
                id: 24,
                content: 'item 24',
                start: '2013-04-21',
                content: 'stable',
                title: 'Severity',
                group: 3,
                'className': 'color_severity'
            },
            {
                id: 25,
                content: 'item 25',
                start: '2013-04-21',
                content: 'NC Oxygen',
                title: 'Procedure',
                group: 4,
                'className': 'color_procedure'
            },

///
            {
                id: 26,
                content: 'item 26',
                start: '2013-04-21',
                content: 'tachypnea',
                title: 'Problem',
                group: 1,
                'className': 'color_problem'
            },
            {
                id: 27,
                content: 'item 27',
                start: '2013-04-21',
                content: 'hypoxia',
                title: 'Problem',
                group: 1,
                'className': 'color_problem'
            },
            {
                id: 28,
                content: 'item 28',
                start: '2013-04-21',
                content: 'improved',
                title: 'Problem',
                group: 3,
                'className': 'color_severity'
            },

///

            {
                id: 29,
                content: 'item 29',
                start: '2013-04-22',
                content: 'fever',
                title: 'Problem',
                group: 1,
                'className': 'color_problem'
            },
            {
                id: 30,
                content: 'item 30',
                start: '2013-04-22',
                content: 'head CT',
                title: 'Problem',
                group: 5,
                'className': 'color_tests'
            },
            {
                id: 31,
                content: 'item 31',
                start: '2013-04-22',
                content: 'no change',
                title: 'Severity',
                group: 3,
                'className': 'color_severity'
            },
            {
                id: 32,
                content: 'item 32',
                start: '2013-04-22',
                content: 'bleed',
                title: 'Problem',
                group: 1,
                'className': 'color_problem'
            },

            {
                id: 33,
                content: 'item 33',
                start: '2013-04-22',
                content: 'prednisone',
                title: 'Medication',
                group: 6,
                'className': 'color_medication'
            },
            {
                id: 34,
                content: 'item 34',
                start: '2013-04-22',
                content: 'levetiractam',
                title: 'Medication',
                group: 6,
                'className': 'color_medication'
            },

            {
                id: 35,
                content: 'item 35',
                start: '2013-04-23',
                content: 'LP',
                title: 'Procedure',
                group: 4,
                'className': 'color_procedure'
            },
            {
                id: 36,
                content: 'item 36',
                start: '2013-04-23',
                content: 'blood infection',
                title: 'Problem',
                group: 1,
                'className': 'color_problem'
            },
            {
                id: 37,
                content: 'item 37',
                start: '2013-04-23',
                content: 'remind',
                title: 'Severity',
                group: 3,
                'className': 'color_severity'
            },
            {
                id: 38,
                content: 'item 38',
                start: '2013-04-23',
                content: 'febrile',
                title: 'Problem',
                group: 1,
                'className': 'color_problem'
            },

            //  {id: 39, content: 'item 39', start: '2013-04-23',   content: 'LP',title: 'Procedure', group: 4,'className':'color_procedure'},
            //  {id: 40, content: 'item 40', start: '2013-04-23',   content: 'blood infection',title: 'Problem', group: 1,'className':'color_problem'},
            //  {id: 41, content: 'item 41', start: '2013-04-23',   content: 'remind',title: 'Severity', group: 3,'className':'color_Severity'},
            //  {id: 42, content: 'item 42', start: '2013-04-23',   content: 'febrile',title: 'Problem', group: 1,'className':'color_problem'},

            {
                id: 43,
                content: 'item 43',
                start: '2013-04-24',
                content: 'vanc/ceftriaxone',
                title: 'Medication',
                group: 6,
                'className': 'color_medication'
            },
            {
                id: 44,
                content: 'item 44',
                start: '2013-04-24',
                content: 'meningitis dose ceftriaxone',
                title: 'Medication',
                group: 6,
                'className': 'color_medication'
            },
            {
                id: 45,
                content: 'item 45',
                start: '2013-04-24',
                content: 'acyclovir',
                title: 'Medication',
                group: 6,
                'className': 'color_medication'
            },

            {
                id: 46,
                content: 'item 46',
                start: '2013-04-24',
                content: 'imporved',
                title: 'Severity',
                group: 3,
                'className': 'color_severity'
            },
            {
                id: 47,
                content: 'item 47',
                start: '2013-04-24',
                content: 'mental health',
                title: 'Problem',
                group: 1,
                'className': 'color_problem'
            },


            {
                id: 48,
                content: 'item 48',
                start: '2013-04-25',
                content: 'extremely',
                title: 'Severity',
                group: 3,
                'className': 'color_severity'
            },
            {
                id: 49,
                content: 'item 49',
                start: '2013-04-25',
                content: 'drowsy',
                title: 'Problem',
                group: 1,
                'className': 'color_problem'
            },


            {
                id: 50,
                content: 'item 50',
                start: '2013-04-26',
                content: 'difficult',
                title: 'Severity',
                group: 3,
                'className': 'color_severity'
            },
            {
                id: 51,
                content: 'item 51',
                start: '2013-04-26',
                content: 'arouse',
                title: 'Problem',
                group: 1,
                'className': 'color_problem'
            },

            {
                id: 52,
                content: 'item 52',
                start: '2013-04-27',
                content: 'CTA',
                title: 'Procedure',
                group: 4,
                'className': 'color_procedure'
            },
            {
                id: 53,
                content: 'item 53',
                start: '2013-04-27',
                content: 'venous sinus thrombosis',
                title: 'Problem',
                group: 1,
                'className': 'color_problem'
            },
            {
                id: 54,
                content: 'item 54',
                start: '2013-04-27',
                content: 'intubated',
                title: 'Procedure',
                group: 4,
                'className': 'color_procedure'
            },
            {
                id: 55,
                content: 'item 55',
                start: '2013-04-27',
                content: 'etomidate',
                title: 'Medication',
                group: 6,
                'className': 'color_medication'
            },
            {
                id: 56,
                content: 'item 56',
                start: '2013-04-27',
                content: 'succinylcholine',
                title: 'Medication',
                group: 6,
                'className': 'color_medication'
            },

            {
                id: 57,
                content: 'item 57',
                start: '2013-04-28',
                content: 'acyclovir',
                title: 'Medication',
                group: 6,
                'className': 'color_medication'
            },

            {
                id: 58,
                content: 'item 58',
                start: '2013-04-28',
                content: 'Fiberoptic broncoscopy',
                title: 'Procedure',
                group: 4,
                'className': 'color_procedure'
            },

            {
                id: 59,
                content: 'item 59',
                start: '2013-04-28',
                content: 'Defibrillator pads',
                title: 'Procedure',
                group: 4,
                'className': 'color_procedure'
            },

            {
                id: 60,
                content: 'item 60',
                start: '2013-04-28',
                content: 'Synchronized cardioversion',
                title: 'Procedure',
                group: 4,
                'className': 'color_procedure'
            },

            {
                id: 61,
                content: 'item 61',
                start: '2013-04-28',
                content: 'peripheral neosynephrine',
                title: 'Procedure',
                group: 4,
                'className': 'color_procedure'
            },

            {
                id: 62,
                content: 'item 62',
                start: '2013-04-28',
                content: 'left subclavian line',
                title: 'Procedure',
                group: 4,
                'className': 'color_procedure'
            },

            {
                id: 63,
                content: 'item 63',
                start: '2013-04-28',
                content: 'multiple fluid boulses',
                title: 'Procedure',
                group: 4,
                'className': 'color_procedure'
            },

        ]);

        // Configuration for the Timeline
        var options = {

            horizontalScroll: true,
            autoResize: true,
            clickToUse: true,
            width: '100%',
            height: '800px',
            moveable: true,
            multiselect: true,
            orientation: 'bottom',
            zoomable: true,
            min: new Date(2013, 2, 14),                // lower limit of visible range
            max: new Date(2013, 6, 16),
            margin: {item: 10},


            onUpdate: function (item, callback) {
                item.content = prompt('Edit items text:', item.content);
                if (item.content != null) {
                    callback(item); // send back adjusted item
                }
                else {
                    callback(null); // cancel updating the item
                }
            }


        };
        var container = document.getElementById(container_id);
        var timeline = new vis.Timeline(container, items, options, groups);
        return timeline;
    }


}
export default PatientTimeline;





