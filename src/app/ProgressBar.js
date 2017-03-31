import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

const ProgressBar = () => (
    <div style={{display: 'flex', justifyContent: 'center', marginTop: '150px'}}>
        <CircularProgress size={80} thickness={5} />
    </div>
);

export default ProgressBar;