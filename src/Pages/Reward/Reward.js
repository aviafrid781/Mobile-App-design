import React, { useState } from 'react';

import awordLogo from '../../Images/prize_hires 1.png'
import line from '../../Images/Rectangle 3981.png'

import rewardIcon1 from '../../Images/Reward Icon.png';
import rewardIcon2 from '../../Images/Reward Icon (1).png';
import rewardIcon3 from '../../Images/Group 9585.png';
import arrowicon from '../../Images/Vector (6).png';
import modal from '../../Images/Group 9580.png';

import { AiOutlineWifi } from "react-icons/ai";
import { GiNetworkBars } from "react-icons/gi";
import { BsBatteryFull } from "react-icons/bs";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiFillQuestionCircle } from "react-icons/ai";
import { AiOutlineFileText } from "react-icons/ai";
import { FaGreaterThan } from "react-icons/fa";
import { Button, Card, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Reward.css'
import Modal from 'react-bootstrap/Modal';
const Reward = () => {

    let iconStyles = { color: " #C8B6E2", fontSize: "1.5em", margin: "10px" };

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [smShow, setSmShow] = useState(false);
    const [lgShow, setLgShow] = useState(false);


    return (
        <div className='reward-container'>

            <div className='reword-icon-contrainer'>

                <div  >
                    <p>9.41</p>
                </div>

                <div  >
                    <GiNetworkBars />
                    <AiOutlineWifi />
                    <BsBatteryFull />
                </div>
            </div>

            <div className='point-reward'>

                < Nav.Link as={Link} to="/">
                    <h1> <AiOutlineArrowLeft /> পয়েন্ট রিওয়ার্ড</h1>
                </Nav.Link>


            </div>



            <div className='reward-card-fix'>

                <div className='reword-cart-txt-fix'>

                    <div>
                        <h1>ইশতিয়াক আহমেদ</h1>
                    </div>

                    <div>
                        <h1> <img src={awordLogo} alt="" />  ১২০০ পয়েন্ট</h1>
                    </div>

                </div>

                <h1>Warrior</h1>
                <img src={line} alt="" />

                <p>পয়েন্ট ব্যবহার করলে লেভেলের অগ্রগতির উপর কোন প্রভাব পড়বে না</p>

                <div>


                </div>


            </div>

            <div style={{ position: 'absolute', top: '300px', width: '380px' }}  >

                <div className='contrainer-bottom-name'>

                    <div>
                        <h1>পয়েন্ট রিওয়ার্ড</h1>
                    </div>
                    <div>
                        <h1> সব দেখুন</h1>
                    </div>

                </div>

            </div>


            <div style={{ position: 'absolute', top: '390px', width: '380px' }}>

                <div className='list-container'>
                    <div>

                        <img src={rewardIcon1} alt="" />

                    </div>
                    <div>
                        <h1>মোবাইল রিচার্জ ২০ টাকা </h1>
                        <p>১০০০ পয়েন্ট</p>
                    </div>
                    <div>
                        <Button>সংগ্রহ করুন </Button>{' '}
                    </div>

                </div>



                <div className='list-container'>
                    <div>

                        <img src={rewardIcon2} alt="" />

                    </div>
                    <div>
                        <h1>মোবাইল রিচার্জ ৫০ টাকা  </h1>
                        <p>১৫০০ পয়েন্ট</p>
                    </div>
                    <div>

                        {/* onClick={handleShow} */}

                        <Button onClick={() => setSmShow(true)}>সংগ্রহ করুন </Button>{' '}


                    </div>

                </div>






                <div className='list-container'>
                    <div>

                        <img src={rewardIcon3} alt="" />

                    </div>
                    <div>
                        <h1>যেভাবে কাজ করে </h1>
                        <p>বিস্তারিত দেখতে ক্লিক করুন</p>
                    </div>
                    <div>
                        <Button>ভিডিও দেখুন </Button>{' '}
                    </div>

                </div>



            </div>


            <div>

                <div style={{ position: 'absolute', top: '700px', height: '70px', marginLeft: '13px', width: '350px', backgroundColor: 'white' }}>

                    <p style={{ fontSize: '13px', margin: '20px' }}> <img src={arrowicon} style={iconStyles} alt="" />নিয়মিত কুইজার্স গেম খেলে পয়েন্ট অর্জন করুন</p>

                </div>

                <div style={{ position: 'absolute', top: '771px', height: '70px', marginLeft: '13px', width: '350px', backgroundColor: 'white' }}>

                    <p style={{ fontSize: '13px', margin: '20px' }}> <img src={arrowicon} style={iconStyles} alt="" />নিয়মিত কুইজার্স গেম খেলে পয়েন্ট অর্জন করুন</p>

                </div>

                <div style={{ position: 'absolute', top: '842px', height: '70px', marginLeft: '13px', width: '350px', backgroundColor: 'white' }}>

                    <p style={{ fontSize: '13px', margin: '20px' }}> <img src={arrowicon} style={iconStyles} alt="" />নিয়মিত কুইজার্স গেম খেলে পয়েন্ট অর্জন করুন</p>

                </div>

                <div style={{ position: 'absolute', top: '913px', height: '70px', marginLeft: '13px', width: '350px', backgroundColor: 'white' }}>

                    <p style={{ fontSize: '13px', margin: '20px', fontWeight: '500' }}> <img src={arrowicon} style={iconStyles} alt="" />নিয়মিত কুইজার্স গেম খেলে পয়েন্ট অর্জন করুন</p>

                </div>


            </div>


            <div>
                <div style={{ position: 'absolute', top: '1000px', height: '70px', marginLeft: '13px', width: '350px', backgroundColor: 'white' }}>

                    <div className='footer-list'>
                        <div>
                            <p style={{ fontSize: '13px', margin: '20px' }}> <AiFillQuestionCircle style={iconStyles} />সচরাচর জিজ্ঞাসা  </p>
                        </div>

                        <div>
                            <FaGreaterThan style={iconStyles} />
                        </div>
                    </div>



                </div>

                <div style={{ position: 'absolute', top: '1072px', height: '70px', marginLeft: '13px', width: '350px', backgroundColor: 'white' }}>
                    <div className='footer-list'>
                        <div>
                            <p style={{ fontSize: '13px', margin: '20px', fontWeight: '500' }}> <AiOutlineFileText style={iconStyles} />শর্তাবলী </p>
                        </div>
                        <div>
                            <FaGreaterThan style={iconStyles} />
                        </div>
                    </div>


                </div>

            </div>

            {/* modal */}
            <div style={{ height: '70px', width: '300px' }}>


                <Modal show={show} onHide={handleClose} animation={false} 
               
                    size="sm"
                    show ={smShow}
                    onHide={() => setSmShow(false)}
                    >

                    <Modal.Header closeButton>

                        <Modal.Title style={{ marginLeft:'20px',  textAlign: 'center' }} > পর্যাপ্ত পয়েন্ট নেই </Modal.Title>

                    </Modal.Header>

                    <Modal.Body>  <img style={{marginLeft:'45px'  }} src={modal} alt="" /> </Modal.Body>
                    <Modal.Body style={{ margin: '10px', textAlign: 'center',fontSize: '14px' }}>রিয়ার্ড সংগ্রহ করার জন্য আপনার পয়েন্ট নেই।  নিয়মিত কুইজাস গেম খেলে পয়েন্ট অর্জন করুন </Modal.Body>


                </Modal>

            </div>








        </div>
    );
};

export default Reward;