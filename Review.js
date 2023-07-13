import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
    const [index, setIndex] = useState(0);
    const {name, job, image, text} = people[index];

    const checkNumber = (number) => {
        if(number > people.length -1){
            return 0;
        }
        if(number < 0){
            return people.length -1;
        }
        return number;
    }

    const prevPerson = () => {
        setIndex((index)=>{
            let random = index - 1;
            return checkNumber(random);
        })
    }

    const nextPerson = () => {
        setIndex((index)=>{
          let random = index + 1;
          return checkNumber(random);
        })
    }

    const randomPerson = () => {
        let randomP = Math.floor(Math.random() * people.length);
        // console.log(randomP);
        // to make sure a random no. should be same we can use if statement.
        if(randomP === index){
            randomP = index + 1;
        }
        setIndex(checkNumber(randomP));
    }

    return(
        <article className='review'>
                <div className='img-container'>
                    <img src={image} alt={name} className="person-img"/>
                    <span className='quote-icon'>
                        <FaQuoteRight/>
                    </span>
                </div>
                <h3 className='author-name'>{name}</h3>
                <p className='job'>{job}</p>
                <p className='text'>{text}</p>
                <div className='button-container'>
                    <button className='prev-btn' onClick={prevPerson}>
                        <FaChevronLeft/>
                    </button>
                    <button className='next-btn' onClick={nextPerson}>
                        <FaChevronRight/>
                    </button>
                </div>
                    <button className='random-btn' onClick={randomPerson}>
                        Random Review
                    </button>
        </article>
    )
}

export default Review;