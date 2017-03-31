/*
 * Created by Praveen Gupta
 */

import React, {Component} from 'react';
import {
  Step,
  Stepper,
  StepLabel,
  StepContent,
} from 'material-ui/Stepper';
import FontIcon from 'material-ui/FontIcon';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import {
  blue400,
} from 'material-ui/styles/colors';

class VerticalTimeLine extends React.Component {

  state = {
    stepIndex: 0,
  };

  handleNext = () => {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
    });
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  renderStepActions(step) {
    const {stepIndex} = this.state;

    return (
      <div style={{margin: '12px 0'}}>
        <RaisedButton
          label={stepIndex === 2 ? 'Finish' : 'Next'}
          disableTouchRipple={true}
          disableFocusRipple={true}
          primary={true}
          onTouchTap={this.handleNext}
          style={{marginRight: 12}}
        />
        {step > 0 && (
          <FlatButton
            label="Back"
            disabled={stepIndex === 0}
            disableTouchRipple={true}
            disableFocusRipple={true}
            onTouchTap={this.handlePrev}
          />
        )}
      </div>
    );
  }

  displayIcon(icon){
      return (
          <FontIcon color={blue400} className={icon}></FontIcon> 
          );
  };

  render() {
    const {stepIndex} = this.state;

    return (
      <div style={{maxWidth: 380, margin: 'auto'}}>
        <Stepper activeStep={stepIndex} orientation="vertical">
          <Step>
            <StepLabel icon={this.displayIcon("fa fa-user-circle")}></StepLabel>
          </Step>
          <Step>
            <StepLabel icon={this.displayIcon("fa fa-heart")}></StepLabel>
          </Step>
          <Step>
            <StepLabel icon={this.displayIcon("fa fa-medkit")}></StepLabel>
          </Step>
          <Step>
            <StepLabel icon={this.displayIcon("fa fa-square")}></StepLabel>
          </Step>
          <Step>
            <StepLabel icon={this.displayIcon("fa fa-stethoscope")}></StepLabel>
          </Step>
        </Stepper>
      </div>
    );
  }
}

// class VerticalTimeLine extends Component {

//     render() {
//         return (
//             <div id="timeline">Loading...</div>
//         );
//     }

//     componentDidMount(){
//         var element = document.getElementById("timeline");
//         element.innerHTML = '<object type="text/html" data="VerticalTimeline/index.html" ></object>';
//     }
 
// }





export default VerticalTimeLine;
