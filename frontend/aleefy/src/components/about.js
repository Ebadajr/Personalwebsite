import React, { useState, useEffect } from 'react';
import '../style.scss'
import "bootstrap/dist/css/bootstrap.min.css";





var res= 0;
function About() {

  const divStyle = {
    maxWidth: '900px',
    padding: '3px'
  };
  const style2 = {
    height: '47px'
  };
  const style3 = {
    height : '45px',
    width : '45px',
  };
  const style4 = {
    height : '36px',
    width : '36px',
  };
  const style5 = {
    background: '#111111',
  };

   

  
  return (
    <div>
        
    <meta charset="utf-8"/>
    <title>Rafeeky</title>
    <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
    <meta content="Free HTML Templates" name="keywords"/>
    <meta content="Free HTML Templates" name="description"/>

   
    <link href="img/favicon.ico" rel="icon"/>

    
    <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans&family=Nunito:wght@600;700;800&display=swap" rel="stylesheet"/> 

   
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet"/>

    
    <link href="lib/flaticon/font/flaticon.css" rel="stylesheet"/>

   
    <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet"/>
    <link href="lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css" rel="stylesheet" />

   
    <link href="css/style.css" rel="stylesheet"/>


<body>
   
    <div class="container-fluid">
        <div class="row bg-secondary py-2 px-lg-5">
            <div class="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
                <div class="d-inline-flex align-items-center">
                    <a class="text-white pr-3" href="">FAQs</a>
                    <span class="text-white">|</span>
                    <a class="text-white px-3" href="">Help</a>
                    <span class="text-white">|</span>
                    <a class="text-white pl-3" href="">Support</a>
                </div>
            </div>
            <div class="col-lg-6 text-center text-lg-right">
                <div class="d-inline-flex align-items-center">
                    <a class="text-white px-3" href="">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    <a class="text-white px-3" href="">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a class="text-white px-3" href="">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                    <a class="text-white px-3" href="">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a class="text-white pl-3" href="">
                        <i class="fab fa-youtube"></i>
                    </a>
                </div>
            </div>
        </div>
        <div class="row py-3 px-lg-5">
            <div class="col-lg-4">
                <a href="" class="navbar-brand d-none d-lg-block">
                    <h1 class="m-0 display-5 text-capitalize"><span class="text-primary">Rafeeky</span></h1>
                </a>
            </div>
            <div class="col-lg-8 text-center text-lg-right">
                <div class="d-inline-flex align-items-center">
                    <div class="d-inline-flex flex-column text-center pr-3 border-right">
                        <h6>Opening Hours</h6>
                        <p class="m-0">8.00AM - 9.00PM</p>
                    </div>
                    <div class="d-inline-flex flex-column text-center px-3 border-right">
                        <h6>Email Us</h6>
                        <p class="m-0">info@example.com</p>
                    </div>
                    <div class="d-inline-flex flex-column text-center pl-3">
                        <h6>Call Us</h6>
                        <p class="m-0">+012 345 6789</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
    <div class="container-fluid p-0">
        <nav class="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-lg-5">
            <a href="" class="navbar-brand d-block d-lg-none">
                <h1 class="m-0 display-5 text-capitalize font-italic text-white"><span class="text-primary">Rafeeky</span></h1>
            </a>
            <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-between px-3" id="navbarCollapse">
                <div class="navbar-nav mr-auto py-0">
                <a href="/home" class="nav-item nav-link ">Home</a>
                <a href="/about" class="nav-item nav-link active">About</a>
                <a href="/service" class="nav-item nav-link">Service</a>
                <a href="/cart" class="nav-item nav-link">products</a>
                <a href="/clinic" class="nav-item nav-link">Clinics</a>
                <a href="/contact" class="nav-item nav-link  ">Contact</a>
                <a href="/adoption" class="nav-item nav-link  ">Adoption</a>
                <div class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">More</a>
                    <div class="dropdown-menu rounded-0 m-0">
                        <a href="/blog"  class="btn btn-lg btn-primary px-3 d-none d-lg-block">blogs</a>
                        <a href="/events" class="btn btn-lg btn-primary px-3 d-none d-lg-block" >Events</a>
                        <a href="/rescue" class="btn btn-lg btn-primary px-3 d-none d-lg-block">Rescue form</a>
                        <a href="/payment" class="btn btn-lg btn-primary px-3 d-none d-lg-block">Donation</a>
                        </div>
                    </div>
                </div>
                <a href="/profile" class="btn btn-lg btn-primary px-3 d-none d-lg-block">Profile</a>
            </div>
        </nav>
    </div>
    
    <div class="container py-5">
        <div class="row py-5">
            <div class="col-lg-7 pb-5 pb-lg-0 px-3 px-lg-5">
                <h4 class="text-secondary mb-3">About Us</h4>
                
                <h5 class="text-muted mb-3">At Aleefy, we're more than just a pet platform—we're a passionate community dedicated to 
                    serving the needs of Egypt's pet lovers and industry professionals. Founded with a vision to 
                    bridge gaps and enhance connections within the pet community, Aleefy is your trusted partner 
                    in all things pet-related.</h5>
                <ul class="list-inline">
                    <li><h5><i class="fa fa-check-double text-secondary mr-3"></i>Our Mission</h5></li>
                    <p class="mb-4">At the core of Aleefy's mission is a commitment to creating a vibrant and inclusive space where 
                    pets and their owners can thrive. We strive to provide a platform that fosters meaningful 
                    connections, promotes pet welfare, and empowers individuals to make informed decisions 
                    about their pet's care. </p>
                    <li><h5><i class="fa fa-check-double text-secondary mr-3"></i>Our vision</h5></li>
                    <p class="mb-4">Our vision is to become the leading destination for pet enthusiasts in Egypt, offering a 
                        comprehensive range of services, resources, and support to enrich the lives of pets and their 
                        owners. Through innovation, collaboration, and a deep understanding of the needs of the pet 
                        community, we aim to redefine the standards of pet care and advocacy in Egypt and beyond.</p>
                    <li><h5><i class="fa fa-check-double text-secondary mr-3"></i>What sets us a part</h5></li>
                    <p class="mb-4">Aleefy stands out from other platforms thanks to our unique blend of community engagement, 
                        convenience, and reliability. We're more than just a marketplace—we're a hub for pet lovers to 
                        connect, learn, and grow together. Whether you're seeking pet care services, product 
                        recommendations, or simply looking to connect with like-minded individuals, Aleefy has 
                        something for everyone.</p>
                </ul>
                <a href="" class="btn btn-lg btn-primary mt-3 px-4">Learn More</a>
            </div>
            <div class="col-lg-5">
                <div class="row px-3">
                    <div class="col-12 p-0">
                        <img class="img-fluid w-100" src="img/about-1.jpg" alt=""/>
                    </div>
                    <div class="col-6 p-0">
                        <img class="img-fluid w-100" src="img/about-2.jpg" alt=""/>
                    </div>
                    <div class="col-6 p-0">
                        <img class="img-fluid w-100" src="img/about-3.jpg" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
    <div class="container-fluid bg-light">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-5">
                    <img class="img-fluid w-100" src="img/feature.jpg" alt=""/>
                </div>
                <div class="col-lg-7 py-5 py-lg-0 px-3 px-lg-5">
                    <h4 class="text-secondary mb-3">Why Choose Us?</h4>
                    <h1 class="display-4 mb-4"><span class="text-primary">Special Care</span> On Pets</h1>
                    <div class="row py-2">
                        <div class="col-6">
                            <div class="d-flex align-items-center mb-4">
                                <h1 class="flaticon-cat font-weight-normal text-secondary m-0 mr-3"></h1>
                                <h5 class="text-truncate m-0">Best In Industry</h5>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="d-flex align-items-center mb-4">
                                <h1 class="flaticon-doctor font-weight-normal text-secondary m-0 mr-3"></h1>
                                <h5 class="text-truncate m-0">Emergency Services</h5>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="d-flex align-items-center">
                                <h1 class="flaticon-care font-weight-normal text-secondary m-0 mr-3"></h1>
                                <h5 class="text-truncate m-0">Special Care</h5>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="d-flex align-items-center">
                                <h1 class="flaticon-dog font-weight-normal text-secondary m-0 mr-3"></h1>
                                <h5 class="text-truncate m-0">Customer Support</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
    <div class="container-fluid bg-dark text-white mt-5 py-5 px-sm-3 px-md-5">
        <div class="row pt-5">
            <div class="col-lg-4 col-md-12 mb-5">
                <h1 class="mb-3 display-5 text-capitalize text-white"><span class="text-primary">Rafeeky</span></h1>
                <p class="m-0">Become a part of our growing community and experience the joy of connecting with fellow pet 
                    lovers from all walks of life. Together, let's create a safe, supportive, and inclusive environment 
                    where pets and their owners can thrive, flourish, and celebrate the unconditional love that 
                    binds us all.</p>
            </div>
            <div class="col-lg-8 col-md-12">
                <div class="row">
                    <div class="col-md-4 mb-5">
                        <h5 class="text-primary mb-4">Get In Touch</h5>
                        <p><i class="fa fa-phone-alt mr-2"></i>+012 345 67890</p>
                        <p><i class="fa fa-envelope mr-2"></i>info@example.com</p>
                        <div class="d-flex justify-content-start mt-4">
                            <a class="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={style4} href="#"><i class="fab fa-twitter"></i></a>
                            <a class="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={style4} href="#"><i class="fab fa-facebook-f"></i></a>
                            <a class="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={style4} href="#"><i class="fab fa-linkedin-in"></i></a>
                            <a class="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={style4} href="#"><i class="fab fa-instagram"></i></a>
                        </div>
                    </div>
                    <div class="col-md-4 mb-5">
                        <h5 class="text-primary mb-4">Popular Links</h5>
                        <div class="d-flex flex-column justify-content-start">
                            <a class="text-white mb-2" href="index.html"><i class="fa fa-angle-right mr-2"></i>Home</a>
                            <a class="text-white mb-2" href="about.html"><i class="fa fa-angle-right mr-2"></i>About Us</a>
                            <a class="text-white mb-2" href="service.html"><i class="fa fa-angle-right mr-2"></i>Services</a>
                            <a class="text-white mb-2" href="clinics.html"><i class="fa fa-angle-right mr-2"></i>Clinics</a>
                        </div>
                    </div>
                    <div class="col-md-4 mb-5">
                        <h5 class="text-primary mb-4">Newsletter</h5>
                        <form action="">
                            <div class="form-group">
                                <input type="text" class="form-control border-0" placeholder="Your Name" required="required" />
                            </div>
                            <div class="form-group">
                                <input type="email" class="form-control border-0" placeholder="Your Email" required="required" />
                            </div>
                            <div>
                                <button class="btn btn-lg btn-primary btn-block border-0" type="submit">Submit Now</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid text-white py-4 px-sm-3 px-md-5" style={style5}>
        <div class="row">
            <div class="col-md-6 text-center text-md-left mb-3 mb-md-0">
                <p class="m-0 text-white">
                    &copy; <a class="text-white font-weight-bold">Rafeeky</a>. All Rights Reserved. Designed by
                    <a class="text-white font-weight-bold">AAST</a>
                </p>
            </div>
            <div class="col-md-6 text-center text-md-right">
                <ul class="nav d-inline-flex">
                    <li class="nav-item">
                        <a class="nav-link text-white py-0" href="#">Privacy</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white py-0" href="#">Terms</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white py-0" href="#">FAQs</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white py-0" href="#">Help</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
   
    <a href="#" class="btn btn-lg btn-primary back-to-top"><i class="fa fa-angle-double-up"></i></a>


   
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></script>
    <script src="lib/easing/easing.min.js"></script>
    <script src="lib/owlcarousel/owl.carousel.min.js"></script>
    <script src="lib/tempusdominus/js/moment.min.js"></script>
    <script src="lib/tempusdominus/js/moment-timezone.min.js"></script>
    <script src="lib/tempusdominus/js/tempusdominus-bootstrap-4.min.js"></script>

   
    <script src="mail/jqBootstrapValidation.min.js"></script>
    <script src="mail/contact.js"></script>

   
    <script src="js/main.js"></script>
</body>

    </div>
  );
}

export default About;