import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';

const Publications = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
    <div style={{width:"90vw"}}>
      <Nav tabs>
        <NavItem className="pub_tabs">
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            2019
          </NavLink>
        </NavItem>
        <NavItem className="pub_tabs">
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            2018
          </NavLink>
        </NavItem>

        <NavItem className="pub_tabs">
          <NavLink
            className={classnames({ active: activeTab === '3' })}
            onClick={() => { toggle('3'); }}
          >
            2017
          </NavLink>
        </NavItem>

        <NavItem className="pub_tabs">
          <NavLink
            className={classnames({ active: activeTab === '4' })}
            onClick={() => { toggle('4'); }}
          >
            2016
          </NavLink>
        </NavItem><NavItem className="pub_tabs">
          <NavLink
            className={classnames({ active: activeTab === '5' })}
            onClick={() => { toggle('5'); }}
          >
            2015
          </NavLink>
        </NavItem><NavItem className="pub_tabs">
          <NavLink
            className={classnames({ active: activeTab === '6' })}
            onClick={() => { toggle('6'); }}
          >
            2014
          </NavLink>
        </NavItem><NavItem className="pub_tabs">
          <NavLink
            className={classnames({ active: activeTab === '7' })}
            onClick={() => { toggle('7'); }}
          >
            2013
          </NavLink>
        </NavItem><NavItem className="pub_tabs">
          <NavLink
            className={classnames({ active: activeTab === '8' })}
            onClick={() => { toggle('8'); }}
          >
            2012
        </NavLink>
        </NavItem><NavItem className="pub_tabs">
          <NavLink
            className={classnames({ active: activeTab === '9' })}
            onClick={() => { toggle('9'); }}
          >
            2011
        </NavLink>
        </NavItem><NavItem className="pub_tabs">
          <NavLink
            className={classnames({ active: activeTab === '10' })}
            onClick={() => { toggle('10'); }}
          >
            2010
          </NavLink>
        </NavItem>
        <NavItem className="pub_tabs">
          <NavLink
            className={classnames({ active: activeTab === '11' })}
            onClick={() => { toggle('11'); }}
          >
            2009
          </NavLink>
        </NavItem>
        <NavItem className="pub_tabs">
          <NavLink
            className={classnames({ active: activeTab === '12' })}
            onClick={() => { toggle('12'); }}
          >
            2008
          </NavLink>
        </NavItem>
        
        
      </Nav>

      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <div class="content" style={{display: "block"}}> 
            <ul class="icon-list">  
              <li class="publi">
                <strong>謝舒凱（譯註）</strong>，⽣成詞彙理論：邁向計算語意的新視野。聯經出版社。        
              </li>
              <li class="publi">
                <strong>謝舒凱</strong>，<strong>曾昱翔</strong>。深度詞庫：邁向知識導向的⼈⼯智慧基礎。中華⼼理學刊 61卷 3
                  期。       
              </li>
              <li class="publi">
                <strong>Tseng, Yu-Hiang</strong> and <strong>Shu-Kai Hsieh</strong>. Eigencharacter: An Embedding of Chinese Character Orthography. The First Workshop Beyond Vision and Language: Integrating Real-world Knowledge. EMNLP-IJCNLP workshop. Hong Kong.     
              </li>
              <li class="publi">
                <strong>Chen, Ying-Yu</strong> and <strong>Shu-Kai Hsieh</strong>. Extracting Semantic Representation of Sexual Biases from Word Vectors. The 31th Annual Conference of Computational Linguistics and Speech Processing in Taiwan (best poster award).
              </li>
              <li class="publi">
                <strong>Hsieh, Shu-Kai</strong>, <strong>Yu-Hsiang Tseng</strong>, and <strong>Chiung-Yu Chiang</strong>. Modeling the Idiomaticity of Chinese Quadra-syllabic Idiomatic Expressions. The 33th Pacific Asia Conference on Language, Information and Computation. Japan.
              </li>
              <li class="publi">
                <strong>Yu-Hsiang Tseng</strong> and <strong>Shu-Kai Hsieh</strong>. Augmenting Chinese Wordnet Semantic Relations with Contextualized Embeddings. The 10th Global WordNet Conference. Poland.
              </li>
              <li class="publi">
                <strong>Yi-Ju Lin</strong> and <strong>Shu-Kai Hsieh</strong>. The Secret to Popular Chinese Web Novels: A Corpus-driven Study. The 2nd Language, Data and Knowledge (LDK) conference. Leipzig.
              </li>        
            </ul> 
          </div>
        </TabPane>
        <TabPane tabId="2">
          <div class="content" style={{display: "block"}}>
            <ul class="icon-list">
                <li class="publi">
                    <strong>Shu-Kai Hsieh</strong> and <strong>Chih-Yao Lee</strong>. A diachronic analysis of synaesthesia in Chinese: (2018) Extraction and computation of vocabularies over time. 9th Chinese Lexical Semantics Workshop.
                </li>
                <li class="publi">
                    <strong>Shu-Kai Hsieh</strong>, <strong>Yu-Hsiang Tseng</strong>, <strong>Chih-Yao Lee</strong> and <strong>Chiung-Yu Chiang</strong>. Fluid Annotation: A Granularity-aware Annotation Tool for Chinese Word Fluidity. 11th Language Resources and Evaluation Conference Miyazaki, Japan.
                </li>
                <li class="publi">
                    <strong>Chih-Yao Lee</strong> and <strong>Shu-Kai Hsieh</strong>. Sinitic Wordnet: Laying the Groundwork with Chinese Varieties Written in Traditional Characters. 9th Global WordNet Conference Singapore.
                </li>
                <li class="publi">
                    <strong>Hsieh, Shu-Kai</strong> et al. Entrenchment and Creativity in Chinese Quadrasyllabic Idiomatic Expressions. Lecture Notes in Computer Science series. Volume 10709, Springer.
                </li>
                <li class="publi">
                    Chang, Yu-Yun and <strong>Shu-Kai Hsieh</strong>. Filtered Collocations as Features in Verbal Polysemy Disambiguation: A case study of Chinese baking verb. Language and Linguistics 19:1.
                </li>
                <li class="publi">
                    Chen, Po-Heng, Chih-Yeh, Chiarung Lu, <strong>Shu-Kai Hsieh</strong>, Tai-Li Chou, I- Wen Su, Chia-Lin Lee. Multiple scaffolding mechanisms for L2 syntactic processing - An Event- Related Potential study. 華語文教學研究「認知神經科學 與華語學習」特刊.
                </li>
            </ul>
          </div>
        </TabPane>
        <TabPane tabId="3">
          <div class="content" style={{display:"block"}}>
            <ul class="icon-list">
                <li class="publi">
                    <strong>Lee, Chi-Yao</strong>, <strong>Shu-Kai Hsieh</strong>. Chinese Wordnet as Linked Data: From oneway Synset Mapping to Collaborative Interlingual Indexing. Linguistic Issues in Language Technology. Vol. 10, Issue. 4.
                </li>
                <li class="publi">
                    <strong>Wu, Hsiao-Han</strong>, and <strong>Shu-Kai Hsieh</strong>. “Exploring Lavender Tongue from Social Media Texts.” Proceedings of the 29th Conference on Computational Linguistics and Speech Processing. Taipei, Taiwan.
                </li>
                <li class="publi">
                    Huang, Chu-Ren, <strong>Shu-Kai Hsieh</strong>, and Keh-Jiann Chen. (eds). Mandarin Chinese Words and Parts of Speech: A corpus-based study. Routledge.
                </li>
                <li class="publi">
                    Chang, Miao-Hsia and <strong>Shu-Kai Hsieh</strong>. A corpus-based study of the recurrent lexical bundle ka li kong ‘let (me) tell you’ in Taiwanese Southern Min conversations. Chinese Language and Discourse. Vol.8:2. Pp174-211.
                </li>
                <li class="publi">
                    Huang, Chu-Ren, <strong>Shu-Kai Hsieh</strong>, Laurent Prévot, Pei-Yi Hsiao, and Henry Y. Chang. Linking Basic Lexicon to Shared Ontology for Endangered Languages: A linked data approach toward Formosan languages. Journal of Chinese Linguistics. Pre-print 10:1353.
                </li>
                <li class="publi">
                    <strong>謝舒凱</strong>. 語料庫建置工具的介紹。鄭錦全主編：華語文語料庫專書.
                </li>
                <li class="publi">
                    <strong>謝舒凱</strong>. 中文語料與詞彙知識地圖。鄭錦全主編：華語文語料庫專書.
                </li>
                <li class="publi">
                    <strong>Hsieh, Shu-Kai</strong>, Tai-Li Chou, <strong>Yu-Hsiang Tseng</strong>, <strong>Chiung-Yu Chiang</strong>, Chia-Lin Lee, Te-Hsin Liu, Chia-Rung Lu, I- Ni Tsai, I-Wen Su. Entrenchment in Chinese quadra- syllabic idiomatic expressions: A fMRI study. In: Proceedings of the Nineth Annual Society for the Neurobiology of Language Conference. USA.
                </li>
                <li class="publi">
                    江琼玉, 謝舒凱, 曾昱翔, 王伯雅, 李佳霖, 周泰立. 中文四字表達之牢固深 化與創造性研究. 第 18 屆漢語詞彙語意學國際研討會 (CLSW2017)。
                </li>
                <li class="publi">
                    謝舒凱 et al. 漢語四字格表達中的漢字語意角色. 第二屆漢字文化圈華語教學 專題研討會. 國立清華大學. 台灣新竹.
                </li>
                <li class="publi">
                    Peinelt, Nicole, Maria Liakata and <strong>Shu-Kai Hsieh</strong>. A Context-based Classifier Prediction System for Chinese Language Learners. IJCNLP.
                </li>
            </ul>
          </div>
        </TabPane>
        <TabPane tabId="4">
          <div class="content" style={{display: "block"}}>
            <ul class="icon-list">
              <li class="publi">
                  <strong>Hsieh, Shu-Kai</strong>. Chinese Semantics. In: Sin-Wai Chan (ed). The Routledge Encyclopedia of the Chinese Language.
              </li>
              <li class="publi">
                  <strong>Meng-Hsien Shih</strong> and <strong>Shu-Kai Hsieh</strong>. Yet Another Resource to Sketch Word Behavior in Chinese Variation. In: Dong M., Lin J., Tang X. (eds) Chinese Lexical Semantics. Lecture Notes in Computer Science, vol 10085. Springer.</li>
              <li class="publi">
                  Chu-Ren Huang, <strong>Shu-Kai Hsieh</strong> and Ruying Chang. (2016). From Classical Poetry to Modern Ontology: Bridging the knowledge divide with a linked data approach. In: C.R. Huang (ed). Digital Humanities: Bridging the Divide. The Humanities in Asia Book Series. Springer.</li>
              <li class="publi">
                  Chen, Minhsin and <strong>Shu-Kai Hsieh</strong>. (2016). Degree Modification in Mandarin: A Case Study of Creative Degree Modifier 各種 [Gezhong]. In: Chinese Lexical Semantics, Volume 9332 of the series Lecture Notes in Computer Science. pp 255-261.</li>
              <li class="publi">
                  <strong>Meng-Hsien Shih</strong> and <strong>Shu-Kai Hsieh</strong>. Word Dependency Sketch for Chinese Language Learning. Concentric: Studies in Linguistics 42.1: 45-72.
              </li>
              <li class="publi">Lin, Shih-Kai and <strong>Shu-Kai Hsieh</strong>. Sarcasm Detection in Chinese Using a Crowdsourced Corpus. In: Proceedings of ROCLING XXIII: Conference on Computational Linguistics and Speech Processing.</li>
              <li class="publi">
                  Lin, Shih-Kai and <strong>Shu-Kai Hsieh</strong>. Sarcasm Detection in Chinese Using a Crowdsourced Corpus. In: Proceedings of ROCLING XXIII: Conference on Computational Linguistics and Speech Processing.</li>
              <li class="publi">
                  Chia-Chen Lee and <strong>Shu-Kai Hsieh</strong>. Evaluative Pattern Extraction for Automated Text Extraction. In: Proceedings of the 9th International Natural Language Generation Conference. Edinburgh, Scotland.</li>
              <li class="publi">
                  Huang, Tzu-Yun, H.C.Wu, C.C. Lee, S.M. Lee, G.W. Lee and <strong>Shu-Kai Hsieh</strong> Crowdsourcing Experiment Designs for Chinese Word Sense Annotation. In: Proceedings of ROCLING XXIII: Conference on Computational Linguistics and Speech Processing.</li>
              <li class="publi">
                  Liu, Yuwen and <strong>Shu-Kai Hsieh</strong>. (2016). An Alternative Approach to Word Sense Disambiguation: Revisiting Sense Prototypicality in the Chinese Wordnet from Perspectives of Natural Language Acquisition. The 15th International Symposium on Chinese Languages and Linguistics (IsCLL-15).</li>
              <li class="publi">
                  Wang, Bo-Ya and <strong>Shu-Kai Hsieh</strong>. Modeling Lexicalization in Chinese: Quantitative Profiling and Qualitative Analysis. In: Proceedings of The 8th Conference on Language, Discourse and Cognition. Taipei.</li>
              <li class="publi">
                  Chen, Po-Heng, Min-Hsin Chen, Chiarung Lu, <strong>Shu-Kai Hsieh</strong>, Tai-Li Chou, Lily I- wen Su, Chia-Lin Lee. Hemispheric differences in processing syntactic category information in second language. Cognitive Neuro-Science Society (CNS) Annual meeting. New York.</li>
            </ul>
          </div>
        </TabPane>
        <TabPane tabId="5">
          <div class="content" style={{display: "block"}}>
                <ul class="icon-list">
                    <li class="publi">
                        <strong>Chih-Yao Lee</strong> and <strong>Shu-Kai Hsieh</strong>. Linguistic Linked Data in Chinese: The Case of Chinese Wordnet. 4th Workshop on Linked Data in Linguistics: Resources and Applications Beijing, China
                    </li>
                    <li class="publi">
                        Huang, C-R. and <strong>Shu-Kai Hsieh</strong>. Chinese Lexical Semantics. In: William S-Y Wang and Chaofen Sun (eds). The Oxford Handbook of Chinese Linguistics. ISBN: 978-0-19-985633-6. Oxford University Press.
                    </li>
                    <li class="publi">
                        Magistry, Pierre, <strong>Shu-Kai Hsieh</strong> and <strong>Yu-Yun Chang</strong>. Sentiment detection in micro-blogs using unsupervised chunk extraction. Lingua Sinica, 2(1), 1-10.
                    </li>
                    <li class="publi">
                        Gaume, B., Duvignau, K. Navarro, E. and Desalle, Y. and Cheung, H. and <strong>Hsieh, S.K.</strong> and Magistry, P. and Prévot, L. (2015). Skillex: a graph-based lexical score for measuring the semantic efficiency of used verbs by human subjects describing actions. Traitement Automatique des Langues. 55:3.</li>
                    <li class="publi">
                        <strong>Hsieh, Shu-Kai</strong>. Evaluating Chinese Web-as-Corpus. In: B. Tsou and O. Kwong (eds). Linguistic Corpus and Corpus Linguistics in the Chinese Context. Journal of Chinese Linguistics monograph No. 25.</li>
                    <li class="publi">
                        Hsu, C.-C. and <strong>Shu-Kai Hsieh</strong>. Mismatches in verb complements: A corpus-based study of the complement coercion operation in Chinese. In: Journal of Corpus Linguistics and Linguistic Theory. De Gruyter.</li>
                    <li class="publi">
                        Chuang, Juhan and <strong>Shu-Kai Hsieh</strong>. An Arguing Lexicon for Stance Classification on Short Text PTT Comments in Chinese. In: Proceedings of The 29th Pacific Asia Conference on Language, Information and Computation. (PACLIC). Shanghai.
                    </li>
                </ul>
          </div>
        </TabPane>
        <TabPane tabId="6">
          <div class="content" style={{display: "block"}}>
            <ul class="icon-list">
                <li class="publi">
                    A Multilingual Lexico-Semantic Database and Ontology. In: P. Buitelaar and P. Cimiano (eds). Toward the Multilingual Semantic Web: Principles, Methods and Applications (co-author with Francis Bond, Christiane Fellbaum, Chu-Ren Huang, Adam Pease and Piek Vossen). Springer Verlag. ISBN 978-3-662-43584-7.
                </li>
                <li class="publi">
                    Wu, Y-A. and <strong>Shu-Kai Hsieh</strong>. Public Opinion Toward CSSTA: A Text Mining Approach. International Journal of Computational Linguistics &amp; Chinese Language Processing. Vol. 19, No. 4.
                </li>
                <li class="publi">
                    <strong>Hsieh, Shu-Kai</strong> and <strong>Yu-Yun Chang</strong>. Leveraging Morpho-semantics for the Discovery of Relations in Chinese Wordnet. In: Proceedings of the 7th International Global WordNet Conference. Tartu, Estonia.</li>
                <li class="publi">Desalle, Yann, B. Gaume, P. Magistry, K. Duvignau, H. Cheung, and <strong>Shu-Kai Hsieh</strong>. Skillex: An Action Labelling Efficiency Score: The Case for French and Mandarin. In: Proceedings of CogSci2014 (The Annual Meeting of the Cognitive Science Society). Quebec City, Canada.</li>
                <li class="publi"><strong>Hsieh, Shu-Kai</strong>. Why Chinese Web-as-Corpus is Wacky? Or: How Big Data is Killing Chinese Corpus Linguistics? In: Proceedings of the 9th Edition of the Language Resources and Evaluation. Reykjavik, Iceland.</li>
                <li class="publi">Lin, Yi-Hsin and <strong>Shu-Kai Hsieh</strong>. "Latent Semantic Distance" between Chinese Basic Words and Non-basic Words. In: Proceedings of The 15th Chinese Lexical Semantics Workshop(CLSW2014. University of Macau.</li>
                <li class="publi"><strong>Shih Meng-Hsien</strong> and <strong>Shu-kai Hsieh</strong>. Sketching the Dependency Relations of Words in Chinese. In: Proceedings of the 26th on Computational Linguistics and Speech Processing. Jhongli, Taiwan.</li>
            </ul>
          </div>
        </TabPane>

        <TabPane tabId="7">
          <div class="content" style={{display: "block"}}>
            <ul class="icon-list">
              <li class="publi"><strong>Pei-Yu Lu</strong>, <strong>Yu-Yun Chang</strong>, <strong>Shu-Kai Hsieh</strong>. Causing Emotion in Collocation: An Exploratory Data Analysis. The 25th Conference on Computational Linguistics and Speech Processing. National Sun Yat-sen University, Kaohsiung, Taiwan.</li>
              <li class="publi"><strong>Po-Ya Angela Wang</strong>. What does “YOU” Possess? —The Grammaticalization of Mandarin “YOU”(有). The 14th Chinese Lexical Semantic Workshop. Zhengzhou University, China.</li>
              <li class="publi"><strong>Yu-Yun Chang</strong> and <strong>Shu-Kai Hsieh</strong>. Features of Verb Complements in Co-composition: A case study of Chinese baking verb using Weibo corpus. The 6th International Conference on Generative Approaches to the Lexicon. Pisa, Italy</li>
              <li class="publi"><strong>Chan-Chia Hsu</strong> and <strong>Shu-Kai Hsieh</strong>. Back to the Basic: Exploring Base Concepts from the Wordnet Glosses. International Journal of Computational Linguistics and Chinese Language Processing 18(2): 57-84. <a href="https://lope.linguistics.ntu.edu.tw/att/Back%20to%20the%20Basic%20-%20Exploring%20Base%20Concepts%20from%20the%20Wordnet%20Glosses.pdf"><img src="Publications%20|%20LOPE_files/pdf.gif" alt="pdf"/></a></li>
              <li class="publi"><strong>Chan-Chia Hsu</strong> and <strong>Shu-Kai Hsieh</strong>. To Coerce or Not to Coerce: A Corpus-based Exploration of Some Complement Coercion Verbs in Chinese. The 6th International Conference on Generative Approaches to the Lexicon. Pisa, Italy.</li>
              <li class="publi"><strong>Yu-Yun Chang</strong> and <strong>Shu-Kai Hsieh</strong>. Features of Verb Complements in Co-composition: A Case Study of Chinese Verb 'bake' using Weibo Corpus. The 6th International Conference on Generative Approaches to the Lexicon. Pisa, Italy.</li>
              <li class="publi"><strong>Shu-Kai Hsieh</strong> and <strong>Giulia Di Pietro</strong>. Regular Polysemy of Derivational Semantics: A Distributional Approach to Chinese 重 and Italian ri. The 21st annual conference of the International Association of Chinese Linguistics (IACL). Taipei, Taiwan<strong>.</strong></li>
              <li class="publi">Ling-Chen Chou and <strong>Shu-Kai Hsieh</strong>. Qualia Modification in Mandarin Neologism: A Case Study on Prefix "wei". In: Proceedings of The 14th Chinese Semantics Workshop. Cheng-Chou, China.</li>
              <li class="publi"><strong>Chih-Yao Lee</strong>, <strong>Yu-Yun Chang</strong>, <strong>Shu-Kai Hsieh</strong>, Jia-Fei Hong and Chu-Ren Huang. CWIKIN: A Wiki that Helps Quicken the Development of Chinese Wordnet. ASIALEX 8th International Conference. Bali, Indonesia.</li>
              <li class="publi">
                  LMF and its implementation in some Asian languages (co-author). In: Gil Francopoulo (ed). LMF: Lexical Markup Framework, theory and practice. Hermes / ISTE / Wiley. ISBN: 9781848214309. "http://www.iste.co.uk/index.php?f=a&amp;ACTION=View&amp;id =566"
              </li>
              <li class="publi"><strong>謝舒凱</strong>。漢語詞彙語意關係 : 分類、邏輯檢證與知識本體評測方法初探 (Lexical Semantic Relations in Chinese: A Preliminary Study on the Classification, Logical Validation and Evaluation Method). 當代語言學 2013 第二期。</li>
              <li class="publi">
                <strong>Liu, Tsun-Jui</strong>, <strong>Shu-Kai Hsieh</strong>, Laurent PREVOT. Observing Features of PTT Neologisms: A Corpus-driven Study with N-gram Model. In: Proceedings of the 25th on Computational Linguistics and Speech Processing. Kaohsiung.
              </li>
            </ul>
          </div>
        </TabPane>

        <TabPane tabId="8">
        <div class="content" style={{display: "block"}}>
                <ul class="icon-list">
                    &nbsp;
                    <li class="publi"><strong>Shu-Kai Hsieh</strong>, <strong>Yu-Yun Chang</strong> and <strong>Meng-Xian Shih</strong>. Chinese Sentiments on the Clouds: A Preliminary Experiment on Corpus Processing and Exploration on Cloud Service. The 26th Pacific Asia Conference on Language Information and Computing (PACLIC 26), Bali, Indonesia.
                        <a href="https://lope.linguistics.ntu.edu.tw/att/paclic26_submission_96.pdf"> <img src="Publications%20|%20LOPE_files/pdf.gif" alt="pdf"/></a></li>
                    <li class="publi"><strong> Hsin-Ni Lin</strong> and <strong>Shu-Kai Hsieh</strong>. Measuring Individual Differences in Word Recognition: The Role of Individual Lexical Behaviors. The 24th Conference on Computational Linguistics and Speech Processing (ROCLING 2012), Taiwan.</li>
                    <li class="publi">Sheng-Fu Wang, Jing-Chen Yang, <strong>Yu-Yun Chang</strong>, <strong>Yu-Wen Liu</strong>, and <strong>Shu-Kai Hsieh</strong>. Frequency, Collocation, and Statistical Modeling of Lexical Items: A Case Study of Temporal Expressions in Two Conversational Corpora. International Journal of Computational Linguistics and Chinese Language Processing 17(2): 37-54.<a href="https://lope.linguistics.ntu.edu.tw/att/2012_IJCLCLP_v17n2a3.pdf"> <img src="Publications%20|%20LOPE_files/pdf.gif" alt="pdf"/></a></li>
                    <li class="publi">
                        Tang, Kuo-Ming and <strong>Shu-Kai Hsieh</strong>. Toward an Integrated Framework of Lexicalized Ontology for Buddhist Digital Archives. International Journal of Computer Processing of Languages. Volume 24, Issue 01.
                    </li>
                </ul>
          </div>
        </TabPane>

        

        
        <TabPane tabId="9">
        <div class="content" style={{display: "block"}}>
                <ul class="icon-list">
                    &nbsp;
                    <li class="publi">Wang, Sheng-Fu, Jing-Chen Yang, <strong>Yu-Yun Chang</strong>, <strong>Yu-Wen Liu</strong> and <strong>Shu-Kai Hsieh</strong>. Frequency, Collocation, and Statistical Modeling of Lexical Items: A Case Study of Temporal Expressions in an Elderly Speaker Corpus. The 23rd Conference on Computational Linguistics and Speech Processing. National Taipei University of Technology. <a href="https://lope.linguistics.ntu.edu.tw/att/ROCLING_2011.pdf"><img src="Publications%20|%20LOPE_files/pdf.gif" alt="pdf"/></a></li>
                    <li class="publi"><strong>Hsieh, Shu-Kai</strong>. Complementing Chinese Corpus with the Web? Some Methodological Considerations. Roundtable Conference of Linguistic Corpus and Corpus Linguistics in the Chinese Context. The Hong Kong Institute of Education.</li>
                    <li class="publi">Hsieh, Chester C.Y. and <strong>Shu-Kai Hsieh</strong>. The Causal Relation and Causative-Inchoative Alternation Verbs in Chinese Wordnet. In: Proceedings of The 12th Chinese Semantics Workshop. Taipei, Taiwan.</li>
                    <li class="publi">唐國銘(釋法源)、<strong>謝舒凱</strong>. Buddhist Ontological Wordnet 之建構方式研究. In: Proceedings of The 12th Chinese Semantics Workshop. Taipei, Taiwan.</li>
                    <li class="publi"><strong>Zhang, Qian-Rong</strong>, <strong>Mei-Yu Chen</strong>, <strong>Li-Chuan Ku</strong>, Jiafei Hong, <strong>Jessie Lo</strong> and <strong>Shu-Kai Hsieh</strong>. Detecting Sub-events in Environmental Disaster using Plurks. The 2nd KYOTO Workshop: Advanced Information Systems for sharing information and Knowledge about the Environment. Gifu, Japan.</li>
                    <li class="publi">
                        Representing Sense Structure in Cube: Lexical semantic representation in Chinese Wordnet. International Journal of Computer Processing of Languages (IJCPOL). Volume 23, Issue 03.
                    </li>
                </ul>
            </div>

          
        </TabPane>
        <TabPane tabId="10">
        <div class="content" style={{display: "block"}}>
                <ul class="icon-list">
                    &nbsp;
                    <li class="publi"><strong>Meng-Hsien Shih</strong>. HR-WSD: System Description for All-words Word Sense Disambiguation on a Specific Domain at SemEval-2010. The 5th International Workshop on Semantic Evaluation. Association for Computational Linguistics, Stroudsburg, PA, USA.
                    </li>
                    <li class="publi"><strong>Chih-Yao Lee</strong>, Chia-Hao Chang, Wei-Chieh Hsu and <strong>Shu-Kai Hsieh</strong>. <span class="style30">Qualia Modification in Noun-Noun Compounds: A Cross-Language Survey. <em>The 22nd Conference on Computational Linguistics and Speech Processing</em>. Chi-Nan University, Taiwan.</span></li>
                    <li class="publi"> <strong>Mei-Yu Chen</strong>, <strong>Hsin-Ni Lin</strong>, Chang-An Shih, Yen-Ching Hsu, Pei-Yu Hsu and <strong>Shu-Kai Hsieh</strong>. <span class="style30">Classifying Mood in Plurks. <em>The 22nd Conference on Computational Linguistics and Speech Processing</em>.  Chi-Nan University, Taiwan.</span></li>
                    <li class="publi"><strong>Wu, Yueh-Cheng</strong> and <strong>Shu-Kai Hsieh</strong>. <span class="style30">PyCWN: a Python Module for Chinese Wordnet. <em>COLING 2010</em>. <em>demo session</em>. Beijing. </span></li>
                    <li class="publi"><strong>Pan, Debby</strong> and <strong>Shu-Kai Hsieh</strong>. <span class="style30">Word Space Modelling for Measuring Semantic Specifity in Chinese. <em>COLING 2010</em>. Beijing. </span></li>
                    <li class="publi">Prévot, Laurent,<strong> Pierre Magistry</strong> and <strong>Shu-Kai Hsieh</strong>. <span class="style30">Classifier-Noun composition in Mandarin: A test case for Distributional Semantic Models. <em>ESSLLI 2010 Workshop on Compositionality and Distributional Semantic Models</em>.</span></li>
                    <li class="publi">Prévot, Laurent and <strong>Shu-Kai Hsieh</strong>. <span class="style30">Coercion and Anaphoric Use of Mandarin Classifiers. <em>Journées Sémantique et Modélisation</em>. Nancy, France.</span></li>
                    <li class="publi">陳韻竹, 賴怡頻, <strong>謝舒凱</strong>, 黃居仁。<span class="style30">同義關係的詞彙語意探究與表達：以中文詞彙網路為例 。<em>第十一屆漢語詞彙語意學研討會。（CLSW2010）</em>。蘇州大學，中國。</span></li>
                    <li class="publi">Aitor Soroa, E. Agirre, O. Lopez de Lacalle, M. Monachini, J. Lo, <strong>Shu-Kai Hsieh</strong>, Wauter Bosma, Piek Vossen. <span class="style30">Kyoto: An Integrated System for Speciﬁc Domain WSD. <em>SemEval 2010</em>. ACL SigLex, Uppsala.</span></li>
                    <li class="publi">
                        Vossen P., E. Agirre, F. Bond, W. Bosma, C. Fellbaum, A. Hicks, <strong>S.K. Hsieh</strong>, H. Isahara, Ch. Huang, K. Kanzaki, A. Marchetti, G. Rigau, F. Ronzano, R. Segers, M. Tesconi. 2009. “KYOTO: a Wiki for Establishing Semantic Interoperability for Knowledge Sharing across Languages and Cultures", in: Handbook of Research on Culturally-Aware Information Technology: Perspectives and Models. E. Blanchard (Mc Gill University (Canada)) and Dr. D. Allard (eds)., USA.
                    </li>
                    <li class="publi">
                        Chu-Ren Huang, <strong>Shu-Kai Hsieh</strong>, Jia-Fei Hong, Yun-Zhu Chen, I-Li Su, Yong- Xiang Chen, and Shen-Wei Huang. Constructing Chinese Wordnet: Design Principles and Implementation. (in Chinese). Zhong-Guo-Yu-Wen, 24(2), 169-186.
                    </li>
                    <li class="publi">
                        Desalle,Yann, Shu-Kai Hsieh, Bruno Gaume and Hintat Cheung. (Nov. 4- 7, 2010). Towards an Automatic Measurement of Verbal Lexicon Acquisition: The Case for a Young Children-versus-Adults Classification in French and Mandarin. In: Proceedings of The 24th Pacific Asia Conference on Language, Information and Computation. Sendai, Japan.</li>
                    <li class="publi">
                        Gaillard, Benoît, Yannick Chudy, Pierre Magistry, Shu-Kai Hsieh and Emmanuel Navarro. (Nov. 4-7, 2010). Graph Representation of Synonymy and Translation Resources for Crosslinguistic Modelisation of Meaning. In: Proceedings of The 24th Pacific Asia Conference on Language, Information and Computation. Sendai, Japan.</li>
                    <li class="publi">
                        Shu-Kai Hsieh. Constructing Cross-language Ontological and Lexical Resources. Pacific Neighborhood Consortium (PNC) 2010 Annual Conference. City University of Hong Kong.</li>
                </ul>
            </div>
          
        </TabPane>

        <TabPane tabId="11">
          <div class="content" style={{display: "block"}}>
                <ul class="icon-list">
                    &nbsp;
                    <li class="publi"><strong>Shu-Kai Hsieh,</strong> Chun-Han Chang, Ivy Kuo, Hintat Cheung, Bruno Gaume. (2009). <span class="style30">Bridging the Gap between Graph Modeling and Developmental Psycholinguistics: An Experiment on Measuring Lexical Proximity in Chinese Semantic Space. <em>The 23rd Pacific Asia Conference on Language, Information and Computation</em>. </span></li>
                    <li class="publi"><strong>Lin, Shu-Yen</strong>, <strong>Shu-Kai Hsieh</strong> and Yann-Jong Huang. <span class="style30">Exploring Chinese Type Coercion: A Web-as-Corpus Study. <em>5th International Conference on Generative Approaches to the Lexicon</em>. Italy:Pisa.</span><a href="https://lope.linguistics.ntu.edu.tw/att/ExploringChineseTypeCoercion_slides.pdf"> <img src="Publications%20|%20LOPE_files/pdf.gif" alt="pdf"/></a></li>
                    <li class="publi">Navarro, Emmanuel, Franck Sajous, Bruno Gaume, Laurent Prevot, <strong>Shu-Kai Hsieh</strong>, Ivy Kuo, Pierre Magistry and Chu-Ren Huang. <span class="style30">Wiktionary and NLP: Improving Synonymy Networks. <em>The 47th ACL Workshop on Collaboratively Constructed Semantic Resource</em>. Singapore. </span></li>
                    <li class="publi">Lee, Lung-Hao, <strong>Shu-Kai Hsieh</strong> and Chu-Ren Huang. <span class="style30">CWN-LMF: Chinese Wordnet in the Lexical Markup Framework. <em>The 47th ACL-IJCNLP Workshop: the 7th Workshop on Asian Language Resources</em>. Singapore. </span></li>
                    <li class="publi">Takenobu, Tokunaga, Dain Kaplan, Nicoletta Calzolari, Monica Monachini, Claudia Soria, Virach Sornlertlamvanich, Thatsanee Charoenporn, Yingju Xia, Chu-Ren Huang, <strong>Shu-Kai Hsieh</strong> and Shirai Kiyoaki. <span class="style30">Query Expansion using LMF-compliant Lexical Resouces. <em>The 47th ACL-IJCNLP Workshop</em>.</span></li>
                    <li class="publi">Yo,Yu-Ting, Lung-Hao Lee, <strong>Shu-Kai Hsieh</strong> and Chu-Ren Huang. <span class="style30">Chinese Word Sense Distinction in the Lexical Markup Framework: A Study in Environmental Domain. <em>10th Chinese Lexical Semantic Workshop</em>. Lu-Dong University, China.</span></li>
                    <li class="publi"><strong>Debby Ching-fen Pan</strong>, Terry Ting-Wu Li, <strong>Shu-Kai Hsieh</strong>. <span class="style30">Measuring the Semantic Specificity in Mandarin Verbs: A Corpus-based Quantitative Survey. <em>The 17th annual conference of the International Association of Chinese Linguistics (IACL-17)</em>. Paris.</span></li>
                    <li class="publi">
                        Shu-Yen Lin, Chen-Chao Su, Yu-Da Lai, Li-Chin Yang, <strong>Shu-Kai Hsieh</strong>. Assessing Text Readability using Hierarchical Lexical Relations retrieved from WordNet. International Journal of Computational Linguistics and Chinese Language Processing. Vol 14, No. 1, 45-84.</li>
                    <li class="publi">
                        Francesca Bertagna, Nicoletta Calzolari, Monica Monachini, Claudia Soria, <strong>Shu- Kai Hsieh</strong>, Chu-Ren Huang, Andrea Marchetti and Maurizio Tesconi. Exploring interoperability of Language Resources: the Case of Cross-lingual Semi-automatic Enrichment of Wordnets. Gilles Serasset (ed). Journal of Language Resource and Evaluation. Vol. 43. No.1, Issue1. p87-96. Springer Verlag.
                    </li>
                </ul>
          </div>
        </TabPane>

        <TabPane tabId = "12">
          <div class="content" style={{display: "block"}}>
            <ul class="icon-list">
              <li class="publi"><strong>Shu-Yen Lin</strong>, Cheng-Chao Su, Yu-Da Lai, Li-Chin Yang, and <strong>Shu-Kai Hsieh</strong>. <span class="style30">Measuring Text Readability by Lexical Relations Retrieved from WordNet. <em>The 20th Conference on Computational Linguistics and Speech Processing</em>. Taipei. </span><a href="https://lope.linguistics.ntu.edu.tw/att/MeasuringTextReadabilitybyLexicalRel.pdf"><img src="Publications%20|%20LOPE_files/pdf.gif" alt="pdf"/></a></li>
              <li class="publi"><strong>Chiao-Shan Lo</strong>, Yi-Rung Chen, Chih-Yu Lin, and <strong>Shu-Kai Hsieh</strong>. <span class="style30">Automatic Labeling of Troponymy for Chinese Verbs. <em>The 20th Conference on Computational Linguistics and Speech Processing</em>. Taipei.</span></li>
              <li class="publi">Chu-Ren Huang, Ting-Shuo Yo, Petr Simon, and <strong>Shu-Kai Hsieh</strong>. <span class="style30">A Realistic and Robust Model for Chinese Word Segmentation. <em>The 20th Conference on Computational Linguistics and Speech Processing</em>. Taipei. </span><a href="https://lope.linguistics.ntu.edu.tw/att/segmentation08_rocling_final.pdf"><img src="Publications%20|%20LOPE_files/pdf.gif" alt="pdf"/></a></li>
              <li class="publi">黃居仁、<strong>謝舒凱</strong>、洪嘉馡、陳韻竹、蘇依莉、陳永祥、黃勝偉。<span class="style30">中文詞彙網路：跨語言知識處理基礎架構的設計理念與實踐。<em>第九屆漢語辭彙語義學研討會</em>，新加坡。</span><a href="https://lope.linguistics.ntu.edu.tw/att/fullpaper---CWN-Huangetal..pdf"><img src="Publications%20|%20LOPE_files/pdf.gif" alt="pdf"/></a></li>
              <li class="publi">Vossen, Piek Eneko Agirre, Nicoletta Calzolari, Christiane Fellbaum, <strong>Shu-Kai Hsieh</strong>, Chu-Ren Huang, Hitoshi Isahara, Kyoko Kanzaki, Andrea Monachini, Federico Neri, Remo Raffaelli, German Rigau, Maurizio Tescon, Joop VanGent and Andrea Marchetti. <span class="style30">KYOTO: A System for Mining, Structuring, and Distributing Knowledge Across Languages and Cultures. Poster paper. <em>The 6th International Conference on Language Resources and Evaluation</em>. Marrakech: Morocco. </span><a href="https://lope.linguistics.ntu.edu.tw/att/KYOTOLREC2008_v6.doc"><img src="Publications%20|%20LOPE_files/doc.gif" alt="doc"/></a></li>
              <li class="publi">Takenobu Tokunaga, Virach Sornlertlamvanich, Thatsanee Charoenporn, Nicoletta Calzolari, Monica Monachini, Claudia Soria, Chu-Ren Huang, <strong>Shu-Kai Hsieh</strong>, Kiyoaki Shirai and YingJu Xia. <span class="style30">Adapting International Standard for Asian Language Technology. Poster paper. <em>The 6th International Conference on Language Resources and Evaluation</em>. Marrakech: Morocco. </span><a href="https://lope.linguistics.ntu.edu.tw/att/422_paper.pdf"><img src="Publications%20|%20LOPE_files/pdf.gif" alt="pdf"/></a></li>
              <li class="publi">Gaume, Bruno, Laurent Prévot, Chu-Ren Haung, <strong>Shu-Kai Hsieh</strong> and Chao-Jan Chen. <span class="style30">Building and Aligning Chinese and French Paradigmatic Graphs. <em>CIL18</em>. Seoul: Korea. </span><a href="https://lope.linguistics.ntu.edu.tw/att/slides-cil.pdf"><img src="Publications%20|%20LOPE_files/pdf.gif" alt="pdf"/></a></li>
              <li class="publi">Huang, Chu-Ren, Sheng-Yi Chen, <strong>Shu-Kai Hsieh</strong>, Ya-Min Chou and Tzu-Yi Kuo. <span class="style30">Linguistically Conventioanlized Ontology of Four Artifact Domains: A Study based on Chinese Radicals. <em>CIL18 workshop: Linguistic Studies of Ontology: From Lexical Semantics to Formal Ontologies and Back</em>. Seoul: Korea. </span><a href="https://lope.linguistics.ntu.edu.tw/att/slides-cil.pdf"><img src="Publications%20|%20LOPE_files/pdf.gif" alt="pdf"/></a></li>
              <li class="publi">Xu, Ming-Wei, Jia-Fei Hong, <strong>Shu-Kai Hsieh</strong> and Chu-Ren Huang. <span class="style30">CWN-Viz: Semantic Relation Visualization in Chinese WordNet. Proceedings of <em>the Fourth Global WordNet Conference</em>.  ISBN: 978-963-482-854-9. University of Szeged, Hungary. </span><a href="https://lope.linguistics.ntu.edu.tw/att/GWC08-CWNViz.pdf"><img src="Publications%20|%20LOPE_files/pdf.gif" alt="pdf"/></a></li>
              <li class="publi">Hotani,Chiyo, Chu-Ren Huang and <strong>Shu-Kai Hsieh</strong>. <span class="style30">Crossing of two Linguistic Ontologies: Wordnet-anchored Comparison of Chinese-Japanese Kanji Words. Proceedings of <em>the Fourth Global WordNet Conference</em>.  ISBN: 978-963-482-854-9. University of Szeged, Hungary. </span><a href="https://lope.linguistics.ntu.edu.tw/att/GWA08-kanji.pdf"><img src="Publications%20|%20LOPE_files/pdf.gif" alt="pdf"/></a></li>
              <li class="publi">Vossen, Piek, Eneko Agirre, Nicoletta Calzolari, Christiane Fellbaum, <strong>Shu-Kai Hsieh</strong>, Chu-Ren Huang, Hitoshi Isahara, Kyoko Kanzaki, Andrea Marchetti, Monica Monachini, Federico Neri, Remo Raffaelli, German Rigau, Maurizio Tesconi, Joop VanGent. <span class="style30">KYOTO: A System for Mining, Structuring, and Distributing Knowledge Across Languages and Cultures. Proceedings of <em>the Fourth Global WordNet Conference</em>.  ISBN: 978-963-482-854-9. University of Szeged, Hungary. </span><a href="https://lope.linguistics.ntu.edu.tw/att/kyoto.gwa.version12.pdf"><img src="Publications%20|%20LOPE_files/pdf.gif" alt="pdf"/></a></li>
              <li class="publi">Huang, Chu-Ren, I-Li Su, Tzu-Yi Kuo and <strong>Shu-Kai Hsieh</strong>. <span class="style30">From Basic Lexicon to Shared Ontology: Two Issues in Linguistic. <em>CIL18 workshop Linguistic Studies of Ontology: From Lexical Semantics to Formal Ontologies and Back</em>. Seoul: Korea.</span></li>
              <li class="publi">Sur-Jin Ker, Chu-Ren Huang, Jia-Fei Hong, Shi-Yin Liu, Hui-Ling Jian, I-Li Su and <strong>Shu-Kai Hsieh</strong>. <span class="style30">Design and Prototype of a Large-scale and Fully Sense-tagged Corpus. <em>The 3rd International Conference on Large-scale Knowledge Resources</em>. Tokyo. </span><a href="https://lope.linguistics.ntu.edu.tw/att/LKR2008No.40Camera-ready.pdf"><img src="Publications%20|%20LOPE_files/pdf.gif" alt="pdf"/></a></li>
              <li class="publi">Shirai, Kiyoaki, Takenobu Tokunaga, Chu-Ren Huang, <strong>Shu-Kai  Hsieh</strong>, Ivy Kuo, Virach Sornlertlamvanich and Thatsanee Charoenporn. <span class="style30">Constructing Ontology of Numerative Classifiers for Asian Languages. <em>The Third International Joint Conference on Natural Language Processing</em>. Hyderabad: India. </span><a href="https://lope.linguistics.ntu.edu.tw/att/paper_cameraready.pdf"><img src="Publications%20|%20LOPE_files/pdf.gif" alt="pdf"/></a></li>
              <li class="publi">
                  Hsieh, Shu-Kai. Formal Description of Lexical Semantic Relations. Concentric,Vol:35.1, 87-109. Taipei, Taiwan.
              </li>
              <li class="publi">
                  Šimon,Petr, Chu-Ren Huang, Shu-Kai Hsieh and Jia-Fei Hong. Transliterated Named Entity Recognition Based on Chinese Word Sketch. International Journal of Computer Processing of Oriental Languages. Vol. 21, No.1. 19-30. Available online. http://www.worldscinet.com/ijcpol/21/2101/S17938406082101.html
              </li>
            </ul>
          </div>
        </TabPane>

      </TabContent>
    </div>
  );
}


export default Publications;
