import React, { useRef } from 'react'
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

import HomeIcon from '../UI/HomeIcon'

import t from './text'
import ht from '../Home/text'
import { i } from '../../constants/data/assets'
import testimonials from '../../constants/data/testimonials'

import './styles/index.scss'

const SuperClass = () => {
  const checkoutRef = useRef()

  const scrollToCheckout = () => {
    checkoutRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' })
  }

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
      partialVisibilityGutter: 30
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      partialVisibilityGutter: 30
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 30
    }
  }

  return (
    <main id='superClassPage'>
      <HomeIcon />

      <h1>{t.title}</h1>
      <button id='superClassCta1' onClick={scrollToCheckout}>{t.cta1}</button>
      <ul id='superClassFeaturesList'>
        {t.superClassFeatureBullets.map(({ title, body }) => (
          <li key={title} className='superClassFeatureContainer'>
            <img src={i.icons.checkMark} />
            <b>{title}</b>
            <span>{body}</span>
          </li>
        ))}
      </ul>
      <button id='superClassCta2' onClick={scrollToCheckout}>{t.cta2}</button>
      <img id='superClassSatisfactionGuarentee' src={i.icons.satisfactionGuarentee} />
      <button id='superClassCta3' onClick={scrollToCheckout}>{t.withoutWasting}</button>
      <section id='superClassBrands'>
        <div id='brandsHelped' className='brandsSection'>
          <h3>{ht.brandsHelped}</h3>
          <div className='brandLogosContainer'>
            {Object.keys(i.logos.brandsHelped).map(key => (
              <img src={i.logos.brandsHelped[key]} className='brandHelped brandLogo' key={key} />
            ))}
          </div>
        </div>
        <div id='brandsCollaborated' className='brandsSection'>
          <h3>{ht.brandsCollaborated}</h3>
          <div className='brandLogosContainer'>
            {Object.keys(i.logos.brandsCollaborated).map(key => (
              <img src={i.logos.brandsCollaborated[key]} className='brandCollaborated brandLogo' key={key} />
            ))}
          </div>
        </div>
        <div id='brandsFeatured' className='brandsSection'>
          <h3>{ht.brandsFeatured}</h3>
          <div className='brandLogosContainer'>
            {Object.keys(i.logos.brandsFeatured).map(key => (
              <img src={i.logos.brandsFeatured[key]} className='brandFeatured brandLogo' key={key} />
            ))}
          </div>
          <h4>{ht.brandsFigures}</h4>
        </div>
      </section>

      <Carousel 
        responsive={responsive}
        swipeable
        draggable
        // showDots
        infinite
        // autoPlay
        autoPlaySpeed={3000}
        keyBoardControl
        customTransition="all .5"
        transitionDuration={1000}
        containerClass="carousel-container"
        // removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        centerMode
        // partialVisbile
      >
        {Object.keys(testimonials).map(key => {
          const { id, name, label1, label2, headshot, quote } = testimonials[key] 
          return (
            <div id={`superClassTestimonial.${id}`} className='superClassTestimonialContainer' key={id}>
              <img src={headshot} />
              <p>{quote}</p>
              <div>
                <h4>{name}</h4>
                <h5>{label1}</h5>
                <h6>{label2}</h6>
              </div>
            </div>
          ) 
        })}
      </Carousel>

      <div id='superClassPerfectForListContainer'>
        <h2>{t.superClassPerfectForTitle}</h2>
        <ul id='superClassPerfectForList'>
          {t.superClassPerfectForBullets.map(bullet => (
            <li key={bullet} className='superClassPerfectForContainer'>
              <img src={i.icons.checkMark} />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>

      <div id='superClassSamCartWrapper' ref={checkoutRef}>
        <sc-checkout product="test-product" subdomain="dalmadaniela"></sc-checkout>
      </div>
    </main>
  )
}

export default SuperClass;
