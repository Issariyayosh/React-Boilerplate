import React, { Component } from "react";
// @ts-ignore
import Swipe, { ReactEasySwipeProps } from 'react-easy-swipe';
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

// Data
import { CarouselData } from './data';

class Carousel extends Component {
    public state: any
    constructor(props: any) {
        super(props);
        this.state = {
            currentSlide: 0,
        };
    }

    componentDidMount() {
        setInterval(() => {
            if (this.state.paused === false) {
                let newSlide =
                    this.state.currentSlide === CarouselData.length - 1
                        ? 0
                        : this.state.currentSlide + 1;
                this.setState({ currentSlide: newSlide });
            }
        }, 3000);
    }

    nextSlide = (): any => {
        let newSlide =
            this.state.currentSlide === CarouselData.length - 1
                ? 0
                : this.state.currentSlide + 1;
        this.setState({ currentSlide: newSlide });
    };

    prevSlide = (): any => {
        let newSlide =
            this.state.currentSlide === 0
                ? CarouselData.length - 1
                : this.state.currentSlide - 1;
        this.setState({ currentSlide: newSlide });
    };

    setCurrentSlide = (index: any): any => {
        this.setState({ currentSlide: index });
    };

    render() {
        let swiperProps: ReactEasySwipeProps = {
        };
        swiperProps.onSwipeLeft = this.nextSlide;
        swiperProps.onSwipeRight = this.prevSlide;
        return (
            <div>
                <div className="w-full h-screen overflow-hidden relative">
                    <AiOutlineLeft
                        onClick={this.prevSlide}
                        className="absolute left-0 text-3xl inset-y-1/2 text-white cursor-pointer"
                    />

                    <Swipe {...swiperProps}>
                        {CarouselData.map((slide, index) => {
                            return (
                                <img
                                    src={slide.image}
                                    alt="This is a carousel slide"
                                    key={index}
                                    className={
                                        index === this.state.currentSlide
                                            ? "object-fill w-full h-screen"
                                            : "hidden"
                                    }
                                    onMouseEnter={() => {
                                        this.setState({ paused: true });
                                    }}
                                    onMouseLeave={() => {
                                        this.setState({ paused: false });
                                    }}
                                />
                            );
                        })}
                    </Swipe>
                    <div className="absolute w-full flex justify-center bottom-0">
                        {CarouselData.map((element, index) => {
                            return (
                                <div
                                    className={
                                        index === this.state.currentSlide
                                            ? "h-2 w-2 bg-blue-700 rounded-full mx-2 mb-2 cursor-pointer"
                                            : "h-2 w-2 bg-white rounded-full mx-2 mb-2 cursor-pointer"
                                    }
                                    key={index}
                                    onClick={() => {
                                        this.setCurrentSlide(index);
                                    }}
                                ></div>
                            );
                        })}
                    </div>
                    <AiOutlineRight
                        onClick={this.nextSlide}
                        className="absolute right-0 text-3xl inset-y-1/2 text-white cursor-pointer"
                    />
                </div>
            </div>
        );
    }
}

export default Carousel;