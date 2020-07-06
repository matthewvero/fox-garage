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
            <WidgetCluster width="40vw">
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

            <WidgetCluster width="40vw">
                <Widget>
                    <Logo />
                    <WidgetParagraph textSize="subtext" color="white">
                        - Based in Camberley bordering Surrey, Hampshire and
                        Berkshire. <br />
                        - Bosch and RAC accreditation. <br />- Family run - We
                        provide a professional service, from your first call
                        through until your vehicles return. <br />
                        - We use quality parts and we deliver great customer
                        service at competitive rates. <br />
                        - Our twelve month or 12,000 mile guarantee ensures you
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

            <Banner />

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

                            <CardHeader color="white">
                                Complete Service
                            </CardHeader>
                            <CardHeader color="rgb(50, 255, 150)">
                                £129
                            </CardHeader>
                            <CardText>2.0 Litre or Less</CardText>
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
        </HomepageContainer>
    );
};
export default Homepage;
