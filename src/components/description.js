import React from 'react';
import { Media } from 'reactstrap';

const Description = props => {
  return (
    <Media style={{marginBottom:"30px"}}>
        <Media left href="#">
            <Media object src={props.imgSrc} alt={props.alt} style={{height:"70px"}} />
        </Media>
        <Media body>
            <Media heading>
                {props.Name}
            </Media>
            {props.Content}
        </Media>
    </Media>
  );
};

export default Description;