import './App.css';
import Example from './components/navbar';
import {Row, Col} from 'reactstrap'
import News from './components/news'
import Description from './components/description'
import ResourceCard from "./components/resource"
import ResourceCardsm from "./components/resource-small"
import AdvisorDescription from "./components/advisor-description"
import MemberDescription from "./components/member-description"
import Publications from './components/publications';
import newsInfo from "./texts/news-info"
import FormerMembers from "./components/former-members"

function App() {
  return (
    <body className="main">
      

      <Example/>
    
      <div className="title-container">
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
        <div className="title">
          <h1 class="animate__animated animate__fadeInDown">
            臺大語言所｜知識本體、語言處理與人文計算實驗室
          </h1>
          <h1 class="animate__animated animate__fadeInDown" style={{fontSize:"30px"}}>
            <span style={{color:'#eb596e'}}>L</span>ab of 
            <span style={{color:'#eb596e'}}> O</span>ntologies, Language 
            <span style={{color:'#eb596e'}}> P</span>rocessing and 
            <span style={{color:'#eb596e'}}> E</span>-humanities
          </h1>
        </div>
      </div>

      <div className="news-container">

        <div id="latest-news"><h1 style={{letterSpacing:"3px", marginTop:"10vh", marginBottom:"5vh"}}>最新消息</h1></div>

        <div style={{width:"85vw", height:"60vh", border:"2px solid #d3e0dc" 
          ,overflowX:"hidden", borderRadius:"10px", padding:"10px"}}>
          <Row md='3' xs="1">
            <Col>
              <News date= {newsInfo[0]['date']}  title= {newsInfo[0]['title']} content= {newsInfo[0]['content']}/>
            </Col>
            <Col>
              <News date= {newsInfo[1]['date']}  title= {newsInfo[1]['title']} content= {newsInfo[1]['content']} 
              link = {newsInfo[1]['link']} linkName = {newsInfo[1]['linkName']}/>
            </Col>
            <Col>
              <News date= {newsInfo[2]['date']}  title= {newsInfo[2]['title']} content= {newsInfo[2]['content']} />
            </Col>
          </Row>

          <Row md='3' xs="1">
            <Col>
              <News date= {newsInfo[3]['date']}  title= {newsInfo[3]['title']} content= {newsInfo[3]['content']}
              link = {newsInfo[3]['link']} linkName = {newsInfo[3]['linkName']}/>
            </Col>
            <Col>
              <News date= {newsInfo[4]['date']}  title= {newsInfo[4]['title']} content= {newsInfo[4]['content']} />
            </Col>
          </Row>


        </div>

      </div>

      <div className="about-container">
        <div id="about"><h1 style={{letterSpacing:"3px", marginTop:"10vh", marginBottom:"5vh"}}>關於LOPE</h1></div>
        <p style={{width:"80vw", fontSize:"18px", marginBottom:"5vh"}}>LOPE (Lab of Ontologies, Language Processing, and e-Humanities) 實驗室是由謝舒凱老師在 2007 年起創立的研究團隊，
          期待以其中世紀原意「大步慢走」('walk with a long bounding stride') 的團隊精神，對於語言研究的基礎建設、自然語言處理與理解、
          與人文社會計算應用領域有所貢獻。實驗室的信念是，希望人文與知識的價值，在計算數位時代被尊重、發揮與創化。本著實證方法、人文關懷與哲學思辨，
          我們已經在語料庫與計算語言學領域發表了超過百餘篇研究，包括 4 本博士論文、20多本碩士論文，
          以及一件產學技術轉移。我們也竭誠歡迎大學部同學與有志一同的社群夥伴加入我們的研發行列。
        </p>


        <div class="about-description" style={{width:"80vw", marginBottom:"10vh"}}>

          <Row md="2" xs="1" >
            <Col>
              <Description imgSrc="../images/gears.png" Name="語言資源建置" 
              Content="建構詞彙網、語料庫等各式語言資源供大眾使用。" />
            </Col>

            <Col>
              <Description imgSrc="../images/brain.png" Name="語言認知及計算" 
              Content="從認知及功能語言學觀點進行自然語言分析和處理" />
            </Col>

          </Row>

          <Row md="2" xs="1" >

            <Col>
              <Description imgSrc="../images/nlp.png" Name="自然語言處理" 
              Content="對話系統、資訊檢索、知識圖譜建立及社群媒體分析、語言及性別、社會等等量化分析" />
            </Col>

            <Col>
              <Description imgSrc="../public/images/text_analytics.png" Name="資料科學與文本分析" Content="利用機器學習、深度學習進行文本分析和語言的多模態觀察" />
            </Col>
          </Row>

        </div>

      </div>

      <div className="language-resource-container">
        <div id="resources" style={{marginBottom:"5vh"}}><h1>實驗室資源與工具</h1></div>

        <div style={{width:"85vw", minHeight:"70vh", padding:"10px", borderRadius:"10px"}}>
          <Row md="3" xs="1">
            <Col>
              <ResourceCard title="Chinese Wordnet (CWN)" imgSrc= "../images/cwn.png" href="https://lopentu.github.io/CwnWeb/#home"
              text="以中文為核心的巨量開放詞庫，放棄原子論式的詞彙觀點，讓我們把它開發成為詞彙相關研究的基礎建設。"/>
            </Col>
            <Col>
              <ResourceCard title="PTT 語料庫" imgSrc="../images/ptt_corp.png" href="http://140.112.147.132:9898/"
              text="作為一個台灣特有的 BBS 系統，PTT 記錄了珍貴而有趣的社會語言文化現象。提供了語言接觸與演化和「精簡語言學」重要的經驗訊息。"/>
            </Col>
            <Col>
              <ResourceCard title="Chinese variation" imgSrc="../images/chi-var.png" href="https://lopen.linguistics.ntu.edu.tw/chivar/"
              text="台灣國語和大陸國語的平行語料庫。"/>
            </Col>
          </Row>

          <Row md="3" xs="1">
            <Col>
              <ResourceCard title="Lopatator" imgSrc="../images/lopotator.png" href="https://lopen.linguistics.ntu.edu.tw/lope.anno/"
              text="Lopen 語料標記系統"/>
            </Col>
            <Col >
              <ResourceCard title="Chinese Word Map (CWM)" imgSrc="../images/cwm.png" href="http://lope.linguistics.ntu.edu.tw/cwm/"
              text="中文詞彙地圖是一個以華語文教學爲目的的詞彙知識素描混搭系統。"/>
            </Col>
          </Row>
        </div>

        <div style={{marginTop:"10vh", marginBottom:"5vh"}}><h3>學習共筆與開放課程、工作坊</h3></div>

        <div style={{width:"65vw"}}>
          <Row md='2' xs='1' style={{marginBottom:"5vh"}}>
            <Col>
              <ResourceCardsm title="協作閣" href="https://collabin.netlify.app/"
              text="LOPE實驗室成員的學習筆記部落格。" />
            </Col>
            <Col >
              <ResourceCardsm title="LOPE Github" href="https://github.com/lopentu"
              text="LOPE Github包含LOPE所開設過之開放課程、語料庫工作坊、電子書等資源"/>
            </Col>
          </Row>
        </div>

      </div>

      <div className="member-container">


        <div id = "members" style={{marginTop:"5vh", marginBottom:"5vh"}}><h1>成員</h1></div>

        <AdvisorDescription/>
        <MemberDescription/>
        <FormerMembers/>


      </div>

      <div className="publications-container">
        <div id="publications" style={{marginTop:"5vh", marginBottom:"3vh"}}><h1>研究成果</h1></div>
        <Publications/>

      </div>

      <div className="footer">
        <div id = "contact-us" style={{marginTop:"5vh", marginBottom:"2vh"}}><h3>聯絡我們</h3></div>
        <p>謝舒凱老師 email : shukai@gmail.com</p>
        <p>臺大語言所 | 知識本體、語言處理與人文計算實驗室</p>
        <p>LOPE lab @ National Taiwan University, Graduate Institute of Linguistics</p>
      </div>

    </body>
  );
}

export default App;
