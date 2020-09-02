import React, { useRef, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import {
    ComponentContainer,
    ComponentSlider,
    ComponentScrollHint,
} from "./appear-hoc.styles";
import { CSSTransition } from "react-transition-group";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export const AppearHOC = ({ children }) => {
    const [isVisible, setVisible] = useState(false);
    const [height, setHeight] = useState(400);
    const myRef = useRef();
    const childRef = useRef();
    const checkChildHeight = (ref) => {
        if (ref.current) {
            const childHeight = ref.current.firstChild.offsetHeight;
            setHeight(childHeight);
        }
    };

    const [ref, inView] = useInView({
        /* Optional options */
        threshold: 0.5,
        triggerOnce: true,
    });

    useEffect(() => {
        checkChildHeight(childRef);
        setVisible(inView);
    }, [inView]);

    useEffect(() => {
        checkChildHeight(childRef);
    });
    return (
        <ComponentContainer ref={ref} height={height}>
            <CSSTransition
                in={isVisible ? true : false}
                classNames={"appear"}
                timeout={1000}
                unmountOnExit
                ref={myRef}
            >
                <ComponentSlider ref={childRef}>{children}</ComponentSlider>
            </CSSTransition>
            <CSSTransition
                in={isVisible ? false : true}
                classNames={"appear"}
                timeout={1000}
                unmountOnExit
            >
                <ComponentScrollHint icon={faChevronDown} />
            </CSSTransition>
        </ComponentContainer>
    );
};
