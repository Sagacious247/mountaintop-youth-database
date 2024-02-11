import React, { useEffect, useState } from 'react'
import sliderData from './slider-data'
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai'
import './Slider.css'
import { Link } from 'react-router-dom'

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const slideLength = sliderData.length;

    const autoScroll = true;
    let slideInterval;
    let intervalTime = 5000

    const nextSlide = () => {
       setCurrentSlide(currentSlide === slideLength - 1 
        ? 0
        : currentSlide + 1)
    }
    const prevSlide = () => {
       setCurrentSlide(currentSlide === 0
        ? slideLength - 1
        : currentSlide - 1)
    }

    useEffect(() => {

    })

    useEffect(() => {
      setCurrentSlide(0)
    }, [])

    useEffect(() => {
        if(autoScroll) {
            const auto = () => {
                slideInterval = setInterval(nextSlide, intervalTime)
            }
            auto()
        }
        return () => clearInterval(slideInterval)
    }, [currentSlide, autoScroll, slideInterval])

  return (
    <div className='slider'> 
    <div className="slider-content">
   
    <AiOutlineArrowLeft 
    className="arrow prev" 
    onClick={prevSlide} 
    />
    <AiOutlineArrowRight
     className='arrow next' 
     onClick={nextSlide}
    />
    
     {sliderData.map((slider, index) => {
        const {name, image, job, position} = slider
        return (
            <div key={index} className={index === currentSlide 
                ? "slide current" : "slide"}>
               {index === currentSlide && (
                <>
                 <img src={image} alt={name} />
                 <div className='content'>
                    <h4>Name: <p>{name}</p></h4>
                    <h4>Job: <p>{job}</p></h4>
                    <h4>Position: <p>{position}</p></h4>
                 </div>
                </>
               )}
            </div>
        )
     })}
      </div>
  </div>
  )
}

export default Slider