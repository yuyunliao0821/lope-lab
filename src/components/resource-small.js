import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const ResourceCardsm = (props) => {
  return (
    <div>
      <Card style={{height:'25vh',overflowY:"scroll", marginBottom:"10px"}}>
        <CardBody>
          <CardTitle tag="h5">{props.title}</CardTitle>
          <CardText>{props.text}</CardText>
          <Button className="button">
            <a href={props.href} style={{textDecoration:"none", color:"black"}}>
              查看更多
            </a>
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default ResourceCardsm;