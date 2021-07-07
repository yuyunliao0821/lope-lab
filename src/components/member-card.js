import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Button, 
} from 'reactstrap';

const MemberCard = (props) => {
  return (
    <div>
      <Card style={{height:'64vh',width:"auto",overflowY:"scroll", marginBottom:"10px"}} className="member-card">
        <CardImg top src={props.imgSrc} alt="LOPE-resource" 
            style={{height:"auto", width:"100%"}} />
        <CardBody>
            <CardTitle tag="h5">{props.name}</CardTitle>
            <CardText>研究興趣：{props.text}</CardText>

            <div style={{display:"flex", justifyContent:"space-evenly"}}>

                <Button style={{backgroundColor:"coral", border:"none", height:"30px", 
                  display:"flex", justifyContent:"center", alignItems:"center", borderRadius:"50px"}}>
                    <a href={props.mail}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-envelope" viewBox="0 0 16 16">
                          <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
                      </svg>
                    </a>
                </Button>
                <Button style={{backgroundColor:"cornflowerblue", border:"none", height:"30px", 
                  display:"flex", justifyContent:"center", alignItems:"center", borderRadius:"50px"}}>
                    <a href={props.link} >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-link-45deg" viewBox="0 0 16 16">
                          <path d="M4.715 6.542L3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.001 1.001 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
                          <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 0 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 0 0-4.243-4.243L6.586 4.672z"/>
                      </svg>
                    </a>
                </Button>
            </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default MemberCard;