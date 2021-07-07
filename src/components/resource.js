import React, {useState} from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Button
} from 'reactstrap';


const ResourceCard = (props) => {
  
  const [appear, setAppear] = useState(false);


  return (
    <div >
      <Card style={{height:'42vh',overflowY:"scroll", marginBottom:"10px"}} >
        <div style={{display:"flex", justifyContent:"center"}} 
          onMouseEnter={() => setAppear(true)} 
          onMouseLeave={() => setAppear(false)}>
          <CardImg top width="100%" src={props.imgSrc} alt="LOPE-resource" 
            style={{maxWidth:"85%", height:"auto", marginBottom:"3vh"}}/>
          {appear && (
            <div style={{width:"100%", height:"35%", 
              display:"flex", justifyContent:"center", alignItems:"center", position:"absolute",
              backgroundColor:"rgb(255,129,120, 0.35)"}} className="resource-background">
              <Button
                style={{
                  backgroundColor:"#ffc480",
                  position:"absolute",
                  border:"none",
                  borderRadius:"30px",
                  opacity:"100%",
                  width:"75px",
                }} 
                className="resource-btn"
                >
                  <a href={props.href} style={{textDecoration:"none",color:"black",}}>前往</a>
                
              </Button>
            </div>
          )}
        </div>
        <CardBody>
          <CardTitle tag="h5">{props.title}</CardTitle>
          <CardText>{props.text}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default ResourceCard;