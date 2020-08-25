import React from "react";
import { connect } from "react-redux";

// COMPONENTS
import WidgetCluster from "../../components/info-widget/widget-cluster/widget-cluster.component";
import Widget from "../../components/info-widget/widget/widget.component";
import PhoneNumber from "../../components/misc-components/phone-number/phone-number-component";
import CustomButton from "../../components/custom-button/custom-button.component";
import WidgetText from "../../components/info-widget/widget-text/widget-text.component";
import Banner from "../../components/banner/banner-component";
import QuickLinks from "../../components/quicklinks/quicklinks-container/quicklinks.component";
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
    faListAlt, 
    faSnowflake, 
    faDotCircle, 
    faCogs, 
    faBolt 
} from "@fortawesome/free-solid-svg-icons";
import Carousel from "../../components/carousel/carousel.component";
import {AppearHOC} from "../../components/appear-hoc/appear-hoc.component";
import HoveringBookNowButton from "../../components/book-now-hovering-button/book-now.component";
import VerticleBanner from "../../components/verticle-banner/verticle-banner.component";
import { VerticleBannerHeading, VerticleBannerSlidingText } from "../../components/verticle-banner/verticle-banner.styles";
import ImageCarousel from "../../components/image-carousel/image-carousel.component";
import { ImageCarouselSlide, CarouselTitle, CarouselSubtitle } from "../../components/image-carousel/image-carousel.styles";
import CardSection from "../../components/cards/card-section/card-section.component";
import Page from "../page/page.component";
import { foxGarageTopServices, foxGarageServices, LatestNews } from "../../data/data";
import QuickLinksButton from "../../components/quicklinks/quicklinks-button/quicklinks-button.component";
import Image from "../../components/image/image.component";
import NewsCards from "../../components/news-cards/news-cards.component";



const Homepage = ({isMobile, history}) => {
    return (
        
        <Page>

            <HoveringBookNowButton/>

            <ImageCarousel>
                <ImageCarouselSlide>
                    <Image 
                        $image='https://printrat.sirv.com/fox/homepagecarousel/photo-1486673748761-a8d18475c757.jpeg'
                        $preLoadImage='https://printrat.sirv.com/fox/homepagecarousel/photo-1486673748761-a8d18475c757.jpeg?profile=blurred%20preload&w=200&h=200&blur=20'
                        $alt='Picture of country road'
                    />
                <CarouselTitle color='rgb(49,255, 150)' >
                        This is a good deal or something!
                    </CarouselTitle>
                    <CarouselSubtitle color='white'>
                        I swear the deal is great - only £££
                    </CarouselSubtitle>
                </ImageCarouselSlide>
                <ImageCarouselSlide >
                    <Image 
                        $image='https://printrat.sirv.com/fox/homepagecarousel/photo-1457269449834-928af64c684d.jpeg'
                        $preLoadImage='https://printrat.sirv.com/fox/homepagecarousel/photo-1457269449834-928af64c684d.jpeg?profile=blurred%20preload&blur=20'
                        $alt='snowflake background'
                    />
                    <CarouselTitle color='rgb(49,255, 150)' alignment='left'>
                        DEALS ON THE LEFT
                    </CarouselTitle>
                    <CarouselSubtitle color='white' alignment='left'>
                        This deal will save you mucho pezos
                    </CarouselSubtitle>
                </ImageCarouselSlide>
                <ImageCarouselSlide >
                    <Image
                        $image='https://printrat.sirv.com/fox/homepagecarousel/photo-1489824904134-891ab64532f1.jpeg?w=1000&h=1000'
                        $preLoadImage='https://printrat.sirv.com/fox/homepagecarousel/photo-1489824904134-891ab64532f1.jpeg?profile=blurred%20preload'
                        $alt='Brightly coloured vehicle'
                    />
                <CarouselTitle color='DODGERBLUE'>
                        COLORFUL 
                    </CarouselTitle>
                    <CarouselSubtitle color='white'>
                        I swear the deal is great - only £££
                    </CarouselSubtitle>
                </ImageCarouselSlide>
                <ImageCarouselSlide >
                    <Image 
                        $image='https://printrat.sirv.com/fox/homepagecarousel/photo-1486262715619-67b85e0b08d3.jpeg'
                        $preLoadImage='https://printrat.sirv.com/fox/homepagecarousel/photo-1486262715619-67b85e0b08d3.jpeg?profile=blurred%20preload'
                        $alt='Background image of an engine
                        '
                    />
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
                        <span style={{color: 'DODGERBLUE'}}>BOSCH</span> ACCREDITED AND <span style={{color: 'orange'}}>RAC</span> APPROVED SERVICING
                    </WidgetText>
                </Widget>
                <Widget backgroundcolor="white">
                    <WidgetText $color="#666666" $textSize="heading">
                        Call Us To Book
                    </WidgetText>
                    <PhoneNumber>01276 704600</PhoneNumber>
                    <CustomButton $fontsize="2vw" $function={() => history.push('/prices')}> Book Now</CustomButton>
                </Widget>
                <Widget large warning>
                    <WidgetText $textSize="heading">
                        COVID-19 - WE'RE OPEN
                    </WidgetText>
                    <WidgetText $textSize="subtext">
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
                    <QuickLinks>
                        <QuickLinksButton title='MOT' icon={faListAlt} $function={() => history.push('/mot')}/>
                        <QuickLinksButton title='SERVICE' icon={faOilCan} $function={() => history.push('/completeservice')}/>
                        <QuickLinksButton title='AIRCON' icon={faSnowflake} $function={() => history.push('/aircon')}/>
                        <QuickLinksButton title='TYRE FITTING' icon={faDotCircle} $function={() => history.push('/tyrefitting')}/>
                        <QuickLinksButton title='CAMBELTS' icon={faCogs} $function={() => history.push('/cambelts')}/>
                        <QuickLinksButton title='EV' icon={faBolt} $function={() => history.push('/hybridandev')}/>

                    </QuickLinks>
                </Widget>
            </WidgetCluster>

            <Banner  />

            {isMobile ? (
                <AppearHOC isMobile={isMobile}>
                
                <WidgetCluster width="80vw">
                    <Widget>
                        <WidgetText $textSize="heading" $color="DODGERBLUE">
                            Thank You For Visiting Fox Garage Camberley
                        </WidgetText>
                        <WidgetText $textSize="subtext" $color="white">
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
                        <WidgetText $textSize="heading" $color="DODGERBLUE">
                            Thank You For Visiting Fox Garage Camberley
                        </WidgetText>
                        <WidgetText $textSize="subtext" $color="white">
                            At Fox Garage in Camberley we are Bosch and RAC
                            accredited and we have also been inspected by Motor
                            Codes, Trading Standards, the AA and Farnborough
                            Technology College.
                        </WidgetText>
                        <Carousel $items={foxGarageServices}></Carousel>
                    </Widget>
                </WidgetCluster>
            )}

            {isMobile ? (
            
                <AppearHOC>
                <VerticleBanner 
                    $image='https://printrat.sirv.com/fox/homepagecarousel/photo-1530484567812-2d5a2d82268c.jpeg'
                    $preLoadImage='https://printrat.sirv.com/fox/homepagecarousel/photo-1530484567812-2d5a2d82268c.jpeg?profile=blurred%20preload'
                    $alt='car bonnet'
                    >
                    <VerticleBannerHeading>
                        12,000 Mile Service Guarantee
                    </VerticleBannerHeading>
                    <VerticleBannerSlidingText>
                        Here at fox we commit to 12,000 blah blah blah blah
                    </VerticleBannerSlidingText>
                </VerticleBanner>
                <WidgetCluster width="60vw">
                    <Widget>
                        <WidgetText $textSize="heading" $color="DODGERBLUE">
                            Our Top Services
                        </WidgetText>
                        <WidgetText $textSize="subtext" $color="white">
                            Regular servicing helps to increase the life span of
                            your vehicle and reduce the risk of breakdowns.
                            Servicing is often based on the age or mileage of a
                            vehicle, however, our service staff will work with
                            you to find out what your vehicle needs.
                        </WidgetText>
                    </Widget>
                    <CardsContainerWidget>
                        <Card>
                            <CardSection row>
                                <CardIcon icon={faOilCan} />
                                <CardIcon icon={faPlus} />
                            </CardSection>
                            <CardSection>
                                <CardHeader color="white" >
                                    Complete Service
                                </CardHeader>
                                <CardHeader color="rgb(50, 255, 150)" >
                                    £129
                                </CardHeader>
                                <CardText >2.0 Litre or Less</CardText>
                            </CardSection>
                            <CardSection>
                                <CustomButton $fontsize="1.5vw">
                                    Book Now
                                </CustomButton>
                            </CardSection>
                        </Card>

                        <Card>
                            <CardSection>
                                <CardIcon icon={faOilCan} />
                            </CardSection>
                            <CardSection>
                                <CardHeader color="white">
                                    Standard Service
                                </CardHeader>
                                <CardHeader color="rgb(50, 255, 150)">
                                    £59
                                </CardHeader>
                                <CardText>2.0 Litre or Less</CardText>
                            </CardSection>
                            <CardSection>
                                <CustomButton $fontsize="1.5vw">
                                    Book Now
                                </CustomButton>
                            </CardSection>
                        </Card>

                        <Card>
                            <CardSection>
                                <CardIcon icon={faClipboardList} />
                            </CardSection>
                            <CardSection>
                                <CardHeader color="white">M.O.T Test</CardHeader>
                                <CardHeader color="rgb(50, 255, 150)">
                                    FREE
                                </CardHeader>
                                <CardText>2.0 Litre or Less</CardText>
                            </CardSection>
                            <CardSection>
                                <CustomButton $fontsize="1.5vw">
                                    Book Now
                                </CustomButton>
                            </CardSection>
                        </Card>
                    </CardsContainerWidget>
                </WidgetCluster>
                <VerticleBanner 
                    $image='https://printrat.sirv.com/fox/homepagecarousel/photo-1502190643063-5e2579fa0317.jpeg'
                    $preLoadImage='https://printrat.sirv.com/fox/homepagecarousel/photo-1502190643063-5e2579fa0317.jpeg?profile=blurred%20preload'
                    $alt='car interior'
                />

                </AppearHOC>
                
                
            ) : (
                <WidgetCluster width="wide">
                    <Widget>
                        <WidgetText $textSize="heading" $color="DODGERBLUE">
                            Thank You For Visiting Fox Garage Camberley
                        </WidgetText>
                        <WidgetText $textSize="subtext" $color="white">
                            At Fox Garage in Camberley we are Bosch and RAC
                            accredited and we have also been inspected by Motor
                            Codes, Trading Standards, the AA and Farnborough
                            Technology College.
                        </WidgetText>
                        <Carousel $items={foxGarageTopServices}></Carousel>
                    </Widget>
                </WidgetCluster>
            )}

                <AppearHOC isMobile={isMobile}>
                
                <WidgetCluster width="80vw">
                    <Widget>
                        <WidgetText $textSize="heading" $color="DODGERBLUE">
                            Services at Fox Garage Camberley
                        </WidgetText>
                        <WidgetText $textSize="subtext" $color="white">
                            Here are some of the services we offer at Fox Garage Camberley. 
                            Your local service and repair centre for all major vehicle makes and models. 
                            Our fully trained technicians are on hand to answer any questions and we will never carry out unnecessary work.


                        </WidgetText>
                    </Widget>
                    <CardsContainerWidget $mini>
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
                
                <NewsCards $items={LatestNews}/>

                </AppearHOC>

        </Page>
    );
};

const mapState = (state) => ({
    isMobile: state.screenSize.isMobile
})
export default connect(mapState)(Homepage) ;
