/**
 * Created by sasinda on 5/5/17.
 */
import React, {Component} from 'react';

class PatientTimelineSummery extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {};
    }


    render()
    {
        return (
            <section className="cd-horizontal-timeline">
                <div className="timeline">
                    <div className="events-wrapper">
                        <div className="events">
                            <ol>
                                <li><a href="#0" data-date="16/01/2014" className="selected">16 Jan</a></li>
                                <li><a href="#0" data-date="28/02/2014">28 Feb</a></li>
                                <li><a href="#0" data-date="20/04/2014">20 Mar</a></li>
                                <li><a href="#0" data-date="20/05/2014">20 May</a></li>
                                <li><a href="#0" data-date="09/07/2014">09 Jul</a></li>
                                <li><a href="#0" data-date="30/08/2014">30 Aug</a></li>
                                <li><a href="#0" data-date="15/09/2014">15 Sep</a></li>
                                <li><a href="#0" data-date="01/11/2014">01 Nov</a></li>
                                <li><a href="#0" data-date="10/12/2014">10 Dec</a></li>
                                <li><a href="#0" data-date="19/01/2015">29 Jan</a></li>
                                <li><a href="#0" data-date="03/03/2015">3 Mar</a></li>
                            </ol>

                            <span className="filling-line" aria-hidden="true"></span>
                        </div>
                    </div>

                    <ul className="cd-timeline-navigation">
                        <li><a href="#0" className="prev inactive">Prev</a></li>
                        <li><a href="#0" className="next">Next</a></li>
                    </ul>
                </div>

                <div className="events-content">
                    <ol>
                        <li className="selected" data-date="16/01/2014">
                            <h2 style={{"color": "#383838"}} > John Smith</h2>
                            <em>January 16th, 2014</em>

                            <p><font size="6"><span style={{"color": "#7b9d6f"}}>Symptom :</span> stiffness,distress,headache</font></p>
                            <p><font size="6"><span style={{"color": "#7b9d6f"}}>Problems :</span> ulcerative colitis,aphasia</font></p>
                            <p><font size="6"><span style={{"color": "#7b9d6f"}}>BodyParts :</span> </font></p>
                            <p><font size="6"><span style={{"color": "#7b9d6f"}}>Severity :</span> </font></p>
                            <p><font size="6"><span style={{"color": "#7b9d6f"}}>Procedure :</span> </font></p>
                            <p><font size="6"><span style={{"color": "#7b9d6f"}}>MedicalTests :</span> </font></p>
                            <p><font size="6"><span style={{"color": "#7b9d6f"}}>Medication :</span> 6-mercaptopurine,prednisone</font></p>
                            <p><font size="6"><span style={{"color": "#7b9d6f"}}>Negation :</span> </font></p>


                        </li>

                        <li data-date="28/02/2014">
                            <h2 style={{"color":"#383838"}}>John Smith</h2>
                            <em>February 28th, 2014</em>

                            <p><font size="6"><span style={{"color": "#7b9d6f"}}>Problems :</span> </font></p>
                            <p><font size="6"><span style={{"color": "#7b9d6f"}}>BodyParts :</span></font></p>
                            <p><font size="6"><span style={{"color": "#7b9d6f"}}>Severity :</span> </font></p>
                            <p><font size="6"><span style={{"color": "#7b9d6f"}}>Procedure :</span> LP</font></p>
                            <p><font size="6"><span style={{"color": "#7b9d6f"}}>MedicalTests :</span> Head CT </font></p>
                            <p><font size="6"><span style={{"color": "#7b9d6f"}}>Medication :</span> Ceftriaxone,Acyclovir,Ambesone,Ampicillin,Morphine,Tylenol,Decadron</font></p>
                            <p><font size="6"><span style={{"color": "#7b9d6f"}}>Negation :</span> </font></p>


                        </li>

                        <li data-date="20/04/2014">
                            <h2 style={{"color":"#383838"}} >John Smith</h2>
                            <em>March 20th, 2014</em>


                            <p><font size="6"><span style={{"color": "#7b9d6f"}}>Problems :</span> dilated</font> </p>
                            <p><font size="6"><span style={{"color": "#7b9d6f"}}>BodyParts :</span>left atrium </font></p>
                            <p><font size="6"><span style={{"color": "#7b9d6f"}}>Severity :</span>  mildly</font></p>
                            <p><font size="6"><span style={{"color": "#7b9d6f"}}>Procedure :</span> </font></p>
                            <p><font size="6"><span style={{"color": "#7b9d6f"}}>MedicalTests :</span> </font></p>
                            <p><font size="6"><span style={{"color": "#7b9d6f"}}>Medication :</span> </font></p>
                            <p><font size="6"><span style={{"color": "#7b9d6f"}}>Negation :</span> </font></p>


                        </li>

                        <li data-date="20/05/2014">
                            <h2 style={{"color":"#383838"}} >John Smith</h2>
                            <em>May 20th, 2014</em>

                            <p><font size="6"><span style={{"color": "#7b9d6f"}}>Problems :</span> </font></p>
                            <p><font size="6"><span style={{"color": "#7b9d6f"}}>BodyParts :</span></font></p>
                            <p><font size="6"><span style={{"color": "#7b9d6f"}}>Severity :</span> </font></p>
                            <p><font size="6"><span style={{"color": "#7b9d6f"}}>Procedure :</span></font></p>
                            <p><font size="6"><span style={{"color": "#7b9d6f"}}>MedicalTests :</span></font></p>
                            <p><font size="6"><span style={{"color": "#7b9d6f"}}>Medication :</span> </font></p>
                            <p><font size="6"><span style={{"color": "#7b9d6f"}}>Negation :</span> </font></p>

                        </li>

                        <li data-date="09/07/2014">
                            <h2 style={{"color" :"#383838"}}>John Smith</h2>
                            <em>July 9th, 2014</em>
                            <p><font size="6"><span style={{"color": "#7b9d6f"}}>Problems :</span> </font></p>
                            <p><font size="6"><span style={{"color": "#7b9d6f"}}>BodyParts :</span></font></p>
                            <p><font size="6"><span style={{"color": "#7b9d6f"}}>Severity :</span> </font></p>
                            <p><font size="6"><span style={{"color": "#7b9d6f"}}>Procedure :</span></font></p>
                            <p><font size="6"><span style={{"color": "#7b9d6f"}}>MedicalTests :</span></font></p>
                            <p><font size="6"><span style={{"color": "#7b9d6f"}}>Medication :</span> </font></p>
                            <p><font size="6"><span style={{"color": "#7b9d6f"}}>Negation :</span> </font></p>

                        </li>

                        <li data-date="30/08/2014">
                            <h2>John Smith</h2>
                            <em>August 30th, 2014</em>
                            <p>

                            </p>
                        </li>

                        <li data-date="15/09/2014">
                            <h2>John Smith</h2>
                            <em>September 15th, 2014</em>
                            <p>

                            </p>
                        </li>

                        <li data-date="01/11/2014">
                            <h2>John Smith</h2>
                            <em>November 1st, 2014</em>
                            <p>

                            </p>
                        </li>

                        <li data-date="10/12/2014">
                            <h2>John Smith</h2>
                            <em>December 10th, 2014</em>
                            <p>

                            </p>
                        </li>

                        <li data-date="19/01/2015">
                            <h2>John Smith</h2>
                            <em>January 19th, 2015</em>
                            <p>

                            </p>
                        </li>

                        <li data-date="03/03/2015">
                            <h2>John Smith</h2>
                            <em>March 3rd, 2015</em>
                            <p>

                            </p>
                        </li>
                    </ol>
                </div>
            </section>
        );
    }

}
export default PatientTimelineSummery;