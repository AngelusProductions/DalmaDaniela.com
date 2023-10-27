import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Chrome } from '@uiw/react-color'

import { paths } from '../../../constants/paths'
import { setMagicValues } from '../../../actions/magicCalendars'
import { i } from '../../../constants/data/assets'

import t from './text'
import './styles/index.scss'

const ProgressProvider = ({ valueStart, valueEnd, children }) => {
  const [value, setValue] = useState(valueStart);
  useEffect(() => {
    setValue(valueEnd);
  }, [valueEnd]);

  return children(value);
};

const MagicForm = ({ 
  brandName,
  website,
  socialMedia1,
  socialMedia2,
  description,
  objective,
  brandColor1,
  brandColor2,
  brandColor3,
  brandColor4,
  brandColor5,
  setMagicValues
}) => {
  const navigate = useNavigate()
  const { question } = useParams()
  const [questionNumber, setQuestionNumber] = useState(parseInt(question))

  useEffect(() => {
    setQuestionNumber(parseInt(question))
  }, [question])

  return (
    <main id='magicFormContainer'>
      <div id='magicFormTitleContainer'>
        <h1>{t.title}</h1>
        <img id='magicFormTitleWand' src={i.stock.wand} />
        <img id='magicFormTitleWandMagic' src={i.stars.starTwinklesLarge} />
      </div>
      {questionNumber === 1 && (
        <div className='magicQuestion one'>
          <div className='magicQuestionFormContainer one'>
            <h2>{t.questions.one.intro}</h2>
            <h3>{t.questions.one.question}</h3>
            <input 
              className='magicFormInput' 
              value={brandName} 
              onChange={e => setMagicValues({ brandName:  e.target.value })} 
              />
            </div>
            <img className='magicQuestionImage' src={i.magicCalendars.questions.question1} />
        </div>
      )}
      {questionNumber === 2 && (
        <div className='magicQuestion two'>
          <div className='magicQuestionFormContainer two'>
            <h2>{t.questions.two.question1}</h2>
            <h3>{t.questions.two.question2}</h3>
            <input 
              className='magicFormInput' 
              value={website} 
              onChange={e => setMagicValues({ website:  e.target.value })} 
              />
            </div>
            <img className='magicQuestionImage' src={i.magicCalendars.questions.question2} />
        </div>
      )}
      {questionNumber === 3 && (
        <div className='magicQuestion three'>
          <div className='magicQuestionFormContainer three'>
            <h2>{t.questions.three.question}</h2>
            <input 
              className='magicFormInput' 
              value={socialMedia1} 
              onChange={e => setMagicValues({ socialMedia1:  e.target.value })} 
              />
            <input 
              className='magicFormInput' 
              value={socialMedia2} 
              onChange={e => setMagicValues({ socialMedia2:  e.target.value })} 
              />
            </div>
            <img className='magicQuestionImage' src={i.magicCalendars.questions.question3} />
        </div>
      )}
      {questionNumber === 4 && (
        <div className='magicQuestion four'>
          <div className='magicQuestionFormContainer four'>
            <h2>{t.questions.four.question1}</h2>
            <h2>{t.questions.four.question2}</h2>
            <h3>{t.questions.four.question3}</h3>
            <textarea 
              className='magicFormTextarea' 
              value={description} 
              onChange={e => setMagicValues({ description:  e.target.value })} 
              />
            </div>
            <img className='magicQuestionImage' src={i.magicCalendars.questions.question4} />
        </div>
      )}
      {questionNumber === 5 && (
        <div className='magicQuestion five'>
          <div className='magicQuestionFormContainer five'>
            <h2>{t.questions.five.question}</h2>
            <textarea 
              className='magicFormTextarea' 
              value={objective} 
              onChange={e => setMagicValues({ objective:  e.target.value })} 
              />
            </div>
            <img className='magicQuestionImage' src={i.magicCalendars.questions.question5} />
        </div>
      )}
      {questionNumber === 6 && (
        <div className='magicQuestion six'>
          <h2>{t.questions.six.question}</h2>
          
          <div id='magicCheckoutColorPickersContainer'>
            <Chrome color={brandColor1} onChange={brandColor => setMagicValues({ brandColor1: brandColor.hex })} />
            <Chrome color={brandColor2} onChange={brandColor => setMagicValues({ brandColor2: brandColor.hex })} />
            <Chrome color={brandColor3} onChange={brandColor => setMagicValues({ brandColor3: brandColor.hex })} />
            <Chrome color={brandColor4} onChange={brandColor => setMagicValues({ brandColor4: brandColor.hex })} />
            <Chrome color={brandColor5} onChange={brandColor => setMagicValues({ brandColor5: brandColor.hex })} />
          </div>
        </div>
      )}

        <div id='magicFormProgressBarContainer'>
          <ProgressProvider id='magicFormProgressBarContainer' valueStart={0} valueEnd={(questionNumber / 10) * 100}>
            {value => (
              <CircularProgressbar
                id='magicFormProgressBar'
                value={value} 
                text={`${value}%`}
              />
            )}
          </ProgressProvider>
        </div>

      {questionNumber !== 1 && (
        <button 
          id='magicFormBackButton' className='magicButton clickable' 
          onClick={() => {
            setQuestionNumber(questionNumber - 1)
            navigate(`${paths.magicCalendars.page}/form/${questionNumber - 1 }`)
          }}
        >Take Me Back</button>
      )}
      {questionNumber !== 10 && (
        <button 
          id='magicFormNextButton' className='magicButton clickable' 
          onClick={() => {
            setQuestionNumber(questionNumber + 1)
            navigate(`${paths.magicCalendars.page}/form/${questionNumber + 1 }`)
          }}
        >Next Question</button>
      )}
      {questionNumber === 10 && (
        <button id='magicFormCheckoutButton' className='clickable' 
        ><Link to={paths.magicCalendars.checkout}>Review in Magic Checkout</Link></button>
      )}
    </main>
  )
}

const mapState = state => {
  return {
    brandName: state.magicCalendars.brandName,
    website: state.magicCalendars.website,
    socialMedia1: state.magicCalendars.socialMedia1,
    socialMedia2: state.magicCalendars.socialMedia2,
    description: state.magicCalendars.description,
    objective: state.magicCalendars.objective,
    brandColor1: state.magicCalendars.brandColor1,
    brandColor2: state.magicCalendars.brandColor2,
    brandColor3: state.magicCalendars.brandColor3,
    brandColor4: state.magicCalendars.brandColor4,
    brandColor5: state.magicCalendars.brandColor5,
  }
}

const mapDispatch = dispatch => ({
  setMagicValues: async valuePairs => {
    dispatch(setMagicValues(valuePairs))
  }
})

export default connect(mapState, mapDispatch)(MagicForm)
