import React from 'react'
import {Row, Col} from 'reactstrap'
import MemberCard from "./member-card"

const MemberDescription = () => {
    return (
        <div style={{width:"90vw"}}>

            <h4 style={{marginBottom:"5vh", marginTop:"5vh"}}>專任研究助理＆博士後研究員</h4>
            <Row lg="5" md="4" sm="3" xs="2">

                <Col>
                    <MemberCard imgSrc="../images/members/joy.png" name="江琼玉｜專任研究助理" 
                    text="計算語言學、語料庫語言學、文本分析、資料科學與量化分析" mail="mailto:sonnejoy@gmail.com" />          
                </Col>
                <Col >
                    <MemberCard imgSrc="../images/members/yu-shiang.png" name="曾昱翔｜博士後研究員" 
                    text="心理學、文本分析、計算語言學、計算語意學、心理語言學" mail="mailto:seantyh@gmail.com"/>
                </Col>

            </Row>

            <h4 style={{marginBottom:"5vh",marginTop:"5vh"}}>博士生</h4>
            <Row lg="5" md="4" sm="3" xs="2">

                <Col>
                    <MemberCard imgSrc="../images/members/chiyao.png" name="李智堯｜博三" 
                    text="計算語言學、語料庫語言學、前端工程" mail="mailto:imgyao@gmail.com" link="http://gyao.tw/"/>          
                </Col>
                <Col >
                    <MemberCard imgSrc="../images/members/amber.png" name="王伯雅｜博二" 
                    text="計算語言學、語料庫語言學、詞彙語意學、心理語言學、社會語言學、歷史語言學"
                    mail="mailto:diff@cmgsh.tp.edu.tw" link="https://www.instagram.com/differe94nt/"/>
                </Col>
                <Col >
                    <MemberCard imgSrc="../images/members/bk.png" name="古貿昌｜博二" 
                    text="計算語言學、詞彙語意學、句法學" mail="mailto:d08142002@ntu.edu.tw" />
                </Col>

            </Row>

            <h4 style={{marginBottom:"5vh", marginTop:"5vh"}}>碩士生</h4>
            <Row lg="5" md="4" sm="3" xs="2" style={{marginBottom:"5vh"}}>
                <Col >
                    <MemberCard imgSrc="../images/members/jessy.png" name="陳蓓怡｜碩四" text="計算語言學、語料庫語言學、詞彙語意學、語言習得"
                    mail = "mailto:r06142003@ntu.edu.tw"/>
                </Col>
                <Col>
                    <MemberCard imgSrc="../images/members/ben.png" name="許家誠｜碩三" text="計算語言學、南島語語言學、語料庫語言學、聲韻學"
                    mail = "mailto:r07142006@ntu.edu.tw"/>
                </Col>
                <Col>
                    <MemberCard imgSrc="../images/members/don.png" name="洪漢唐｜碩三" text="計算語言學、社會語言學、歷史語言學"
                    mail = "mailto:r07142007@ntu.edu.tw"/>
                </Col>
                <Col>
                    <MemberCard imgSrc="../images/members/debby.png" name="Debby Chang｜碩三" text="計算語言、詞彙語意學、符號學"
                    mail = "mailto:r07142005@ntu.edu.tw" />          
                </Col>
                <Col >
                    <MemberCard imgSrc="../images/members/yongfu.jpg" name="廖永賦｜碩二" text="計算語言學、心理語言學、語言演化"
                    mail = "mailto:r08142002@ntu.edu.tw"/>
                </Col>
                <Col>
                    <MemberCard imgSrc="../images/members/andrea.png" name="石晴方｜碩三" text="計算語言學、語料庫語言學、句法學、聲韻學、心理語言學"
                    mail = "mailto:r08142004@ntu.edu.tw"/>
                </Col>
                <Col>
                    <MemberCard imgSrc="../images/members/feiyang.png" name="張飛揚｜碩三" text="計算語言學、構詞學"
                    mail = "mailto:r08142009@ntu.edu.tw"/>
                </Col>
                <Col>
                    <MemberCard imgSrc="../images/members/derek.png" name="廖聿鋆｜碩二" text="計算語言學、計算語意學、文本分析、資料科學"
                    mail = "mailto:r09142002@ntu.edu.tw"/>
                </Col>
                
            </Row>

            <h4 style={{marginBottom:"5vh", marginTop:"5vh"}}>研究助理</h4>
            <Row lg="5" md="4" sm="3" xs="2" style={{marginBottom:"5vh"}}>
                <Col>
                    <MemberCard imgSrc="../images/members/nana.png" name="Nana" text="計算語言學、語料庫語言學、資料探勘"
                    mail = "mailto:b06102020@ntu.edu.tw"/>
                </Col>
                <Col>
                    <MemberCard imgSrc="../images/members/yulin.png" name="張鈺琳" text="計算語言學、句法學"/>
                </Col>
                <Col>
                    <MemberCard imgSrc="../images/members/pin-er.jpg" name="陳品而" text="計算語意學、認知語意學"
                    mail = "mailto:cckk2913@gmail.com"/>
                </Col>
                <Col>
                    <MemberCard imgSrc="../images/members/hsinyu.jpeg" name="周昕妤" text="計算語言學、語意學、語料庫語言學"
                    mail = "mailto:b06102087@ntu.edu.tw"/>
                </Col>
            </Row>


        </div>
    )
}

export default MemberDescription
