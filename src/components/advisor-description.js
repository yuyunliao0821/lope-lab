import React from 'react';
import { Media, Button} from 'reactstrap';

const AdvisorDescription = props => {
  return (
    <Media style={{marginBottom:"30px"}} className="advisor-description">

        <Media left href="#">
          <Media object src= "../images/members/shukai.png" alt="advisor" 
            style={{height:"235px", marginRight:"5vw", borderRadius:"50px"}} />
        </Media>

        <Media body style={{fontSize:"25px"}}>
          <h2>指導老師</h2>
          <hr></hr>
          <Media heading style={{fontSize:"50px", color:"midnightblue"}}>
            謝舒凱 教授
          </Media>
          <p>德國杜賓根大學計算語言學博士</p>
          <p style={{fontSize:"20px"}}>研究領域：語料庫及計算語言學 / 詞彙語意學 / 構詞學 / 語言哲學與語用學 / 語言與認知</p>
          <div style={{display:"flex"}}>

                <Button style={{backgroundColor:"coral", border:"none", height:"30px", 
                  display:"flex", justifyContent:"center", alignItems:"center", borderRadius:"50px"}}>
                    <a href="mailto:shukai@gmail.com">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-envelope" viewBox="0 0 16 16">
                          <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
                      </svg>
                    </a>
                </Button>
                <Button style={{backgroundColor:"cornflowerblue", border:"none", height:"30px", 
                  display:"flex", justifyContent:"center", alignItems:"center", borderRadius:"50px", marginLeft:"30px"}}>
                    <a href="https://iakuhs.netlify.app/">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-link-45deg" viewBox="0 0 16 16">
                          <path d="M4.715 6.542L3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.001 1.001 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
                          <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 0 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 0 0-4.243-4.243L6.586 4.672z"/>
                      </svg>
                    </a>
                </Button>
            </div>
        </Media>
    </Media>
  );
};

export default AdvisorDescription;