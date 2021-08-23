import React from 'react';
import { Card, Row, Col, message, Button, Divider, Typography } from 'antd';
import './card.css'
const {Meta} = Card;
const {Text} = Typography;
function ClubCard(props) {
    // const click = () => {
    //     message.success(`${props.club}\'s Instagram handle copied to the clipboard!`);
    //     navigator.clipboard.writeText(props.insta);
    // }
    return (
            <Col
                // onClick={click}
                className="clubcard"
                style={{
                    width: '95%',
                    cursor: 'pointer',
                    border: '2px solid #e5e5e5',
                    padding: '10px',
                    borderRadius: '8px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backdropFilter: 'blur(5px)',
                    height: '150px'
                }}
            >
                <a target="_blank" rel="noreferrer" href={`https://www.instagram.com/${props.insta}/`}> 

                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'  
                }}>
                    <Text style={{
                        textAlign: 'center' ,
                        height: 'fit-content',
                        display: 'flex',
                        alignItems: 'center',
                        fontSize: '18px',
                        fontWeight: '500'
                    }}>
                        {props.club}
                    </Text>
                    <Divider style={{ marginTop: '10px', marginBottom: '10px', borderColor: '#fff'}}/>
                    <Text style={{margin: ''}}>
                        @{props.insta}
                    </Text>
                    
                </div>
                </a>
            </Col>
        
    );
}

export default ClubCard;