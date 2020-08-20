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



const Carousel = ({$items}) => {
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
            setActiveCard($items.length);
        } else if ((activeCard === $items.length) & (direction === right)) {
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
            {$items.map((el) => (
                <CarouselCard key={el.id}>
                    <CSSTransition
                        in={activeCard === el.id ? true : false}
                        timeout={400}
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
