import React, { useState, useEffect } from "react";
import { HomepageContainer } from "./homepage.styles";
import WidgetCluster from "../../components/info-widget/widget-cluster/widget-cluster.component";
import Widget from "../../components/info-widget/widget/widget.component";
import PhoneNumber from "../../components/misc-components/phone-number/phone-number-component";
import CustomButton from "../../components/custom-button/custom-button.component";
import WidgetText from "../../components/info-widget/widget-text/widget-text.component";
import Banner from "../../components/banner/banner-component";
import WidgetParagraph from "../../components/info-widget/widget-paragraph/widget-paragraph.component";
import Logo from "../../components/misc-components/logo/logo.component";
import QuickLinks from "../../components/quicklinks/quicklinks.component";
import CardsContainerWidget from "../../components/cards/cards-widget/cards-widget.component";
import Card from "../../components/cards/card-container/card.container.component";
import CardHeader from "../../components/cards/card-header/card-header.component";
import CardText from "../../components/cards/card-text/card-text.component";
import CardIcon from "../../components/cards/card-icon/card-icon.component";
import {
    faCheck,
    faOilCan,
    faClipboardList,
    faPlus,
} from "@fortawesome/free-solid-svg-icons";
import Carousel from "../../components/carousel/carousel.component";
import {AppearHOC} from "../../components/appear-hoc/appear-hoc.component";
import BookNowButton from "../../components/book-now-hovering-button/book-now.component";
import VerticleBanner from "../../components/verticle-banner/verticle-banner.component";
import { VerticleBannerHeading, VerticleBannerSlidingText } from "../../components/verticle-banner/verticle-banner.styles";
import ImageCardContentBox from "../../components/cards/image-card-content-box/image-card-box.component";
import ImageCarousel from "../../components/image-carousel/image-carousel.component";
import { ImageCarouselSlide, CarouselTitle, CarouselSubtitle } from "../../components/image-carousel/image-carousel.styles";


const Homepage = () => {
    const [isMobile, setIsMobile] = useState(
        window.innerWidth > 1150 ? true : false
    );

    useEffect(() => {
        const resizeListener = () => {
            setIsMobile(window.innerWidth > 1150 ? true : false);
        };
        window.addEventListener("resize", resizeListener);
        return () => {
            window.removeEventListener("resize", resizeListener);
        };
    }, [isMobile]);

    return (
        <HomepageContainer>

            <BookNowButton/>

            <ImageCarousel>
                <ImageCarouselSlide backgroundImage='https://images.unsplash.com/photo-1486673748761-a8d18475c757?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80'>
                    <CarouselTitle color='rgb(49,255, 150)' >
                        This is a good deal or something!
                    </CarouselTitle>
                    <CarouselSubtitle color='white'>
                        I swear the deal is great - only £££
                    </CarouselSubtitle>
                </ImageCarouselSlide>
                <ImageCarouselSlide backgroundImage='https://images.unsplash.com/photo-1457269449834-928af64c684d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2467&q=80'>
                    <CarouselTitle color='rgb(49,255, 150)' alignment='left'>
                        DEALS ON THE LEFT
                    </CarouselTitle>
                    <CarouselSubtitle color='white' alignment='left'>
                        This deal will save you mucho pezos
                    </CarouselSubtitle>
                </ImageCarouselSlide>
                <ImageCarouselSlide backgroundImage='https://images.unsplash.com/photo-1489824904134-891ab64532f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3589&q=80'>
                <CarouselTitle color='DODGERBLUE'>
                        COLORFUL 
                    </CarouselTitle>
                    <CarouselSubtitle color='white'>
                        I swear the deal is great - only £££
                    </CarouselSubtitle>
                </ImageCarouselSlide>
                <ImageCarouselSlide backgroundImage='https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3578&q=80'>
                <CarouselTitle color='rgb(49,255, 150)' alignment='right'>
                        Far right fox propaganda!
                    </CarouselTitle>
                    <CarouselSubtitle color='white' alignment='right'>
                        Fox is the BEST GARAGE
                    </CarouselSubtitle>
                </ImageCarouselSlide>
            </ImageCarousel>

            <WidgetCluster width="45vw">
                <Widget
                    backgroundcolor="#666666"
                    color="white"
                    otherStyles="
                                    text-align: left;     
                              "
                >
                    <WidgetText>
                        BOSCH ACCREDITED AND RAC APPROVED SERVICING
                    </WidgetText>
                </Widget>
                <Widget backgroundcolor="white">
                    <WidgetText color="#666666" textSize="heading">
                        Call Us To Book
                    </WidgetText>
                    <PhoneNumber />
                    <CustomButton fontsize="2vw"> Our Prices</CustomButton>
                </Widget>
                <Widget large warning>
                    <WidgetText textSize="heading">
                        COVID-19 - WE'RE OPEN
                    </WidgetText>
                    <WidgetText textSize="subtext">
                        During this difficult time Fox Garage Camberley is
                        committed to keeping our roads safe. So for a limited
                        time MOT's are FREE to all customers and our service
                        packages start from £59.00. We will also pickup and
                        return your vehicle with our no-contact service.
                    </WidgetText>
                </Widget>
            </WidgetCluster>

            <WidgetCluster width="45vw">
                <Widget>
                    <Logo />
                    <WidgetParagraph textSize="subtext" color="white">
                        - Located on the border of Surrey, Hampshire and
                        Berkshire. <br />
                        
                        - Bosch and RAC accreditation. <br />
                        - Family run, professional service, from your first call
                        through until your vehicles return. <br />
                        - We use quality parts at competitive rates. <br />
                        - Twelve month or 12,000 mile guarantee ensures you
                        have the cover and peace of mind that you need. <br />
                        -Our service team will be happy to provide quotes for
                        services or repairs and make a booking for you, by phone
                        on 01276 704600, or through the online booking facility.
                        <br />
                    </WidgetParagraph>
                </Widget>
                <Widget>
                    <QuickLinks></QuickLinks>
                </Widget>
            </WidgetCluster>

            <Banner  />

            {isMobile ? (
                <AppearHOC isMobile={isMobile}>
                
                <WidgetCluster width="80vw">
                    <Widget>
                        <WidgetText textSize="heading" color="DODGERBLUE">
                            Thank You For Visiting Fox Garage Camberley
                        </WidgetText>
                        <WidgetText textSize="subtext" color="white">
                            At Fox Garage in Camberley we are Bosch and RAC
                            accredited and we have also been inspected by Motor
                            Codes, Trading Standards, the AA and Farnborough
                            Technology College.
                        </WidgetText>
                    </Widget>
                    <CardsContainerWidget>
                        <Card>
                            <CardHeader>HIGHLY TRAINED STAFF</CardHeader>
                            <CardIcon icon={faCheck} />

                            <CardText>
                                As the motor industry evolves, our technicians
                                do too. Our car mechanics are highly skilled,
                                with years of experience and industry-recognised
                                training behind them.
                            </CardText>
                        </Card>
                        <Card>
                            <CardHeader>PROFESSIONAL SERVICE</CardHeader>
                            <CardIcon icon={faCheck} />

                            <CardText>
                                As a family run business, nothing is more
                                important to us than providing a professional
                                service and a great experience - from our
                                approachable sales team to our friendly
                                receptionists.
                            </CardText>
                        </Card>
                        <Card>
                            <CardHeader>GREAT VALUE</CardHeader>
                            <CardIcon icon={faCheck} />

                            <CardText>
                                Looking for a good price? Give us a call to get
                                a quote for vehicle servicing, MOT testing,
                                repairs, tyres, brakes and more. We're open and
                                honest with our pricing, so you can be sure
                                you're getting what you pay for.
                            </CardText>
                        </Card>
                        <Card>
                            <CardHeader>PEACE OF MIND</CardHeader>
                            <CardIcon icon={faCheck} />
                            <CardText>
                                Our skilled technicians have many years of
                                experience servicing vehicles in Camberley and
                                surrounding regions. We're always here to offer
                                you motoring advice, so pop in to see us today.
                            </CardText>
                        </Card>
                    </CardsContainerWidget>
                </WidgetCluster>
                </AppearHOC>
            ) : (
                <WidgetCluster width="wide">
                    <Widget>
                        <WidgetText textSize="heading" color="DODGERBLUE">
                            Thank You For Visiting Fox Garage Camberley
                        </WidgetText>
                        <WidgetText textSize="subtext" color="white">
                            At Fox Garage in Camberley we are Bosch and RAC
                            accredited and we have also been inspected by Motor
                            Codes, Trading Standards, the AA and Farnborough
                            Technology College.
                        </WidgetText>
                        <Carousel></Carousel>
                    </Widget>
                </WidgetCluster>
            )}

            {isMobile ? (
            
                <AppearHOC>
                <VerticleBanner 
                    backgroundImage='https://images.unsplash.com/photo-1530484567812-2d5a2d82268c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80'>
                    <VerticleBannerHeading>
                        12,000 Mile Service Guarantee
                    </VerticleBannerHeading>
                    <VerticleBannerSlidingText>
                        Here at fox we commit to 12,000 blah blah blah blah
                    </VerticleBannerSlidingText>
                </VerticleBanner>
                <WidgetCluster width="60vw">
                    <Widget>
                        <WidgetText textSize="heading" color="DODGERBLUE">
                            Our Top Services
                        </WidgetText>
                        <WidgetText textSize="subtext" color="white">
                            Regular servicing helps to increase the life span of
                            your vehicle and reduce the risk of breakdowns.
                            Servicing is often based on the age or mileage of a
                            vehicle, however, our service staff will work with
                            you to find out what your vehicle needs.
                        </WidgetText>
                    </Widget>
                    <CardsContainerWidget>
                        <Card>
                            <CardIcon icon={faOilCan} />
                            <CardIcon icon={faPlus} />

                            <CardHeader color="white" >
                                Complete Service
                            </CardHeader>
                            <CardHeader color="rgb(50, 255, 150)" >
                                £129
                            </CardHeader>
                            <CardText >2.0 Litre or Less</CardText>
                            <CustomButton fontsize="1.5vw">
                                Book Now
                            </CustomButton>
                        </Card>
                        <Card>
                            <CardIcon icon={faOilCan} />
                            <CardHeader color="white">
                                Standard Service
                            </CardHeader>
                            <CardHeader color="rgb(50, 255, 150)">
                                £59
                            </CardHeader>
                            <CardText>2.0 Litre or Less</CardText>
                            <CustomButton fontsize="1.5vw">
                                Book Now
                            </CustomButton>
                        </Card>
                        <Card>
                            <CardIcon icon={faClipboardList} />
                            <CardHeader color="white">M.O.T Test</CardHeader>
                            <CardHeader color="rgb(50, 255, 150)">
                                FREE
                            </CardHeader>
                            <CardText>2.0 Litre or Less</CardText>
                            <CustomButton fontsize="1.5vw">
                                Book Now
                            </CustomButton>
                        </Card>
                    </CardsContainerWidget>
                </WidgetCluster>
                <VerticleBanner backgroundImage='https://images.unsplash.com/photo-1502190643063-5e2579fa0317?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80'/>

                </AppearHOC>
                
                
            ) : (
                <WidgetCluster width="wide">
                    <Widget>
                        <WidgetText textSize="heading" color="DODGERBLUE">
                            Thank You For Visiting Fox Garage Camberley
                        </WidgetText>
                        <WidgetText textSize="subtext" color="white">
                            At Fox Garage in Camberley we are Bosch and RAC
                            accredited and we have also been inspected by Motor
                            Codes, Trading Standards, the AA and Farnborough
                            Technology College.
                        </WidgetText>
                        <Carousel></Carousel>
                    </Widget>
                </WidgetCluster>
            )}

                <AppearHOC isMobile={isMobile}>
                
                <WidgetCluster width="80vw">
                    <Widget>
                        <WidgetText textSize="heading" color="DODGERBLUE">
                            Services at Fox Garage Camberley
                        </WidgetText>
                        <WidgetText textSize="subtext" color="white">
                            Here are some of the services we offer at Fox Garage Camberley. 
                            Your local service and repair centre for all major vehicle makes and models. 
                            Our fully trained technicians are on hand to answer any questions and we will never carry out unnecessary work.


                        </WidgetText>
                    </Widget>
                    <CardsContainerWidget mini>
                        <Card >
                            <CardHeader>Vehicle Servicing</CardHeader>

                            <CardText>
                                Complete and standard service options from £59.00. 
                            </CardText>
                        </Card>
                        <Card >
                            <CardHeader>MOT Testing</CardHeader>

                            <CardText>
                                Make sure your vehicle is road legal FREE for a limited time.
                            </CardText>
                        </Card>
                        <Card >
                            <CardHeader>Aircon Recharge</CardHeader>
                            <CardText>
                                Get a full re-gas in time for Summer from £59.00. 
                            </CardText>
                        </Card>
                        <Card >
                            <CardHeader>Free Brake Checks</CardHeader>
                            <CardText>
                                Get a free brake check to ensure your safety.
                            </CardText>
                        </Card>
                        <Card >
                            <CardHeader>Cam Belts</CardHeader>
                            <CardText>
                                Don't get caught short with your cam belt.
                            </CardText>
                        </Card>
                        <Card >
                            <CardHeader>Tyre Fitting</CardHeader>
                            <CardText>
                                Call for tyre fitting quotes
                            </CardText>
                        </Card>
                        <Card >
                            <CardHeader>Vehicle Repairs</CardHeader>
                            <CardText>
                                We can tackle almost any repair for all major vehicles.
                            </CardText>
                        </Card>
                        <Card >
                            <CardHeader>Suspension</CardHeader>
                            <CardText>
                                Having suspension trouble? Give us a call for diagnostic.
                            </CardText>
                        </Card>
                    </CardsContainerWidget>
                </WidgetCluster>
                </AppearHOC>

                <AppearHOC isMobile={isMobile}>
                
                <WidgetCluster width="80vw">
                    <Widget>
                        <WidgetText textSize="heading" color="DODGERBLUE">

                            Latest News
                        </WidgetText>
                        
                    </Widget>
                    <CardsContainerWidget grid >
                        <Card 
                            backgroundImage='https://images.unsplash.com/photo-1544361263-b86bdea95bf3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80'
                        >
                            <ImageCardContentBox  topColor='rgb(50,200,150)'/>
                            
                            <CardHeader
                            color='rgb(50,200,150)'
                            >How To Guides</CardHeader>
                            
                            <CardText>
                                TOP 3 WINTER DRIVING TIPS
                            </CardText>
                        </Card>
                        <Card backgroundImage='https://images.unsplash.com/photo-1545100400-91bc4c592aa0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2467&q=80'>
                        <ImageCardContentBox  topColor='rgb(70,214,224)'/>
                        <CardHeader
                        color='rgb(70,214,224)'
                        >Car Maintenance</CardHeader>

                            <CardText>
                                3 SIGNS YOUR CAR BATTERY IS ABOUT TO DIE
                            </CardText>
                        </Card>
                        <Card 
                        backgroundImage='https://images.unsplash.com/photo-1551384051-7400776bbd49?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80'
                        >

                        <ImageCardContentBox  topColor='rgb(50,200,150)'/>

                            <CardHeader
                            color='rgb(50,200,150)'
                            >How To Guides</CardHeader>
                            <CardText>
                                HOW TO PREPARE YOUR CAR FOR THE COLDEST WINTER IN 5 YEARS
                            </CardText>
                        </Card>
                        <Card 
                        backgroundImage='https://images.unsplash.com/photo-1571775300511-ef41b23ce413?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80'>
                        <ImageCardContentBox  topColor='rgb(100,100,255)'/>

                            <CardHeader
                            color='rgb(100,100,255)'
                            >Motor Industry News</CardHeader>
                            <CardText>
                                WHAT IS THE FOXY LADY DRIVING CLUB
                            </CardText>
                        </Card>
                    </CardsContainerWidget>
                </WidgetCluster>
                </AppearHOC>




        </HomepageContainer>
    );
};
export default Homepage;
