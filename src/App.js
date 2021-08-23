import logo from './logo.svg';
import './App.css';
import antd, { Col, Row, Icons } from 'antd';
import ClubCard from './ClubCard';
import {InstagramOutlined} from '@ant-design/icons';
function App() {
  const imgUrl="https://images.adsttc.com/media/images/5645/3cda/e58e/cee8/fb00/0202/newsletter/portada_Virmueller_Ahmedabad_©_andre_j_fanthome_9th_April_2014_0102.jpg?1447378116";
  const data = [
    {
      club: 'Dance Club',
      handle: 'ahduni_designclub',
    },
    {
      club: 'Design Club',
      handle: 'ahduni_danceclub',
    },
    {
      club: 'Entrepreneurs\' Club',
      handle: 'ahduni_entrepreneurs_club',
    },
    {
      club: 'Environment Club',
      handle: 'ahduni_environmentclub',
    },
    {
      club: 'Film Appreciation Club',
      handle: 'ahduni_fac',
    },
    {
      club: 'Fitness Club',
      handle: 'ahduni_fitnessclub',
    },
    {
      club: 'Food Club',
      handle: 'ahduni_foodclub',
    },
    {
      club: 'Fine Arts Club',
      handle: 'ahduni_fineartsclub',
    },
    {
      club: 'Heritage Club',
      handle: 'chm_ahmedabad',
    },
    {
      club: 'Literary Club',
      handle: 'ahduni_literaryclub',
    },
    {
      club: 'Music Club',
      handle: 'ahduni_musicclub',
    },
    {
      club: 'Programming Club',
      handle: 'ahduni_programmingclub',
    },
    {
      club: 'Photography Club',
      handle: 'ahduni_photographyclub',
    },
    {
      club: 'Quiz Club',
      handle: 'ahduni_quizclub',
    },
    {
      club: 'Sports Club',
      handle: 'ahduni_sportsclub',
    },
    {
      club: 'Social Service Forum',
      handle: 'ahduni_socialserviceforum',
    },
    {
      club: 'Students\' Magazine Club',
      handle: 'ahduni_magazineclub',
    },
    {
      club: 'StepWell Radio',
      handle: 'thestepwellradio',
    },
    {
      club: 'The Management Club',
      handle: 'ahduni_tmc',
    },
    {
      club: 'Theatre Club',
      handle: 'ahduni_theatreclub',
    },
    {
      club: 'Women Empowerment Forum',
      handle: 'au_wef',
    }
  ]
  return (
    <Row style={{padding: '0px 20px', display: 'flex', justifyContent:'center', backgroundImage: `url(${imgUrl})`}}>
      <Col span={24}
        style={{
          padding: '20px',
          fontSize: '40px',
          display: 'flex',
          flexDirection: window.innerWidth < 500 ? 'column' : 'row',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center'
        }}
      >
          <InstagramOutlined style={{marginRight: '10px',}}/>
          Club Instagram handles
      </Col>
      {
        data.map((item) => {
          return (
          <Col
            xs={12}
            md={6}
            xl={4}
            style={{
              display: 'flex',
              justifyContent:'center',
              marginBottom: '20px'
            }}
          >
            <ClubCard 
                club={item.club}
                insta={item.handle}
            />
          </Col>
          )
        })
      }
    </Row>
  );
}

export default App;
