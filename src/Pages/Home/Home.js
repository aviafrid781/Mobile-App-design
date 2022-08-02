import React from 'react';
import './Home.css';
import { Button, Carousel, CardGroup, Card, Nav } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import logo from '../../Images/Person.png';
import log2 from '../../Images/Vector (3).png';
import slide from '../../Images/Group 9614.png';
import medel from '../../Images/Medal 1.png';
import book from '../../Images/Books and Apple 1.png';
import gogle from '../../Images/Atom Bulb 1.png';
import globe from '../../Images/Globe 1.png';
import bd from '../../Images/bangladesh 1.png';
import voltage from '../../Images/High Voltage 1.png';
import footer from '../../Images/Nav.png';



import { AiOutlineTrophy } from 'react-icons/ai';
const Home = () => {



    return (
        <div  className='main-contrainer'>

            
            <section className='container'>

                <div className='sub-contrainer'>

                    <div className='header-fixed'>

                        <div className='header-img'>

                            <img src={logo} alt="" />

                        </div>

                        <div className='header-text'>
                            <h1>ইশতিয়াক</h1>
                            <p>Level-Warrior</p>
                        </div>

                    </div>


                    <div>
                    < Nav.Link as={Link} to="reward">
                            <Button variant="hsla(223, 66%, 87%, 1)"> <AiOutlineTrophy />রিওয়ার্ড</Button>{' '}
                        </Nav.Link>

                    </div>


                </div>

            </section>



            <div className='caontainer-point'>

                <div className='text-point'>
                    <p>আপনার লেভেল : Warrior</p>
                    <h1>রিওয়ার্ড পয়েন্ট ঃ ১৫০০</h1>
                </div>

                <div className='logo-point'>
                    <img src={log2} alt="" />
                </div>

            </div>


            <div className='slider'>
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={slide}
                            alt="First slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={slide}
                            alt="Second slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={slide}
                            alt="Third slide"
                        />


                    </Carousel.Item>
                </Carousel>
            </div>

            <h1 className='card-header'>কুইজ ক্যাটাগরি পছন্দ করুন</h1>

            <div className='card-container'>

                <div>
                    <CardGroup>
                        <Card className='card'>
                            <Card.Img variant="top" src={medel} />
                            <Card.Body>
                                <p>খেলাধুলা</p>

                            </Card.Body>

                        </Card>
                        <Card>
                            <Card.Img variant="top" src={book} />
                            <Card.Body>
                                <p>তথ্যমূলক</p>

                            </Card.Body>

                        </Card>
                        <Card>
                            <Card.Img variant="top" src={gogle} />
                            <Card.Body>
                                <p>গুগলি</p>

                            </Card.Body>

                        </Card>

                    </CardGroup>

                </div>
                <div>
                    <CardGroup>
                        <Card className='card'>
                            <Card.Img variant="top" src={globe} />
                            <Card.Body>
                                <p>আন্তর্জাতিক</p>

                            </Card.Body>

                        </Card>
                        <Card>
                            <Card.Img variant="top" src={bd} />
                            <Card.Body>
                                <p> বাংলাদেশ</p>

                            </Card.Body>

                        </Card>
                        <Card>
                            <Card.Img variant="top" src={voltage} />
                            <Card.Body>
                                <p>এন্টারটেইন</p>

                            </Card.Body>

                        </Card>

                    </CardGroup>



                </div>




            </div>
            <div className='footer-contrainer'>
                <div className='footer'>
                    <img src={footer} alt="" />
                </div>
            </div>

        </div >

    );
};
export default Home;