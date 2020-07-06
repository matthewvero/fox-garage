import React, { useState } from "react";
import {
    CarouselContainer,
    CarouselCard,
    CarouselButtonLeft,
    CarouselButtonRight,
    CarouselCardSection,
} from "./carousel.styles";
import { CSSTransition } from "react-transition-group";
import {
    faChevronLeft,
    faChevronRight,
    faCheck,
} from "@fortawesome/free-solid-svg-icons";
import CardHeader from "../cards/card-header/card-header.component";
import CardIcon from "../cards/card-icon/card-icon.component";
import CardText from "../cards/card-text/card-text.component";

const items = [
    {
        id: 1,
        title: "HIGHLY TRAINED STAFF",
        text:
            "As the motor industry evolves, our technicians do too. Our car mechanics are highly skilled, with years of experience and industry-recognised training behind them.",
    },
    {
        id: 2,
        title: "PROFESSIONAL SERVICE",
        text:
            "As a family run business, nothing is more important to us than providing a professional service and a great experience - from our approachable sales team to our friendly receptionists.",
    },
    {
        id: 3,
        title: "GREAT VALUE",
        text:
            "Looking for a good price? Give us a call to get a quote for vehicle servicing, MOT testing, repairs, tyres, brakes and more. We're open and honest with our pricing, so you can be sure you're getting what you pay for.",
    },
    {
        id: 4,
        title: "PEACE OF MIND",
        text:
            "Our skilled technicians have many years of experience servicing vehicles in Camberley and surrounding regions. We're always here to offer you motoring advice, so pop in to see us today.",
    },
];

const Carousel = () => {
    const left = "+";
    const right = "-";
    const [activeCard, setActiveCard] = useState(1);
    const [outDirection, setOutDirection] = useState(left);
    const [inDirection, setInDirection] = useState(right);

    const handleClick = (direction) => {
        setInDirection(direction === left ? left : right);
        setOutDirection(direction === left ? right : left);
        // Sets the direction in which the current card will enter and exit.

        if (activeCard === 1 && direction === left) {
            setActiveCard(items.length);
        } else if ((activeCard === items.length) & (direction === right)) {
            setActiveCard(1);
        } else {
            setActiveCard(direction === left ? activeCard - 1 : activeCard + 1);
        }
        // Ensures the carousel loops through the items infinitely.
    };

    return (
        <CarouselContainer>
            <CarouselButtonLeft
                icon={faChevronLeft}
                onClick={() => handleClick(right)}
            />
            {items.map((el) => (
                <CarouselCard key={el.id}>
                    <CSSTransition
                        in={activeCard === el.id ? true : false}
                        timeout={1000}
                        classNames="carouselcard"
                        unmountOnExit
                    >
                        <CarouselCardSection
                            inDirection={inDirection}
                            outDirection={outDirection}
                        >
                            <CardHeader>{el.title}</CardHeader>
                            <CardIcon icon={faCheck} />
                            <CardText>{el.text}</CardText>
                        </CarouselCardSection>
                    </CSSTransition>
                </CarouselCard>
            ))}
            <CarouselButtonRight
                icon={faChevronRight}
                onClick={() => handleClick(left)}
            />
        </CarouselContainer>
    );
};

export default Carousel;
