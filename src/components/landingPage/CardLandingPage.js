import React from 'react';
import InfoArea from "../InfoArea/InfoArea";

const  CardLandingPage = props => {
    return (
        <InfoArea
            title={props.title}
            description={props.description}
            icon={props.img}
            iconColor="info"
            vertical
        />
    );
};

export default  CardLandingPage;