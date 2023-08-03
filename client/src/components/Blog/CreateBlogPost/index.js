import React, { useState } from 'react'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import getYouTubeID from 'get-youtube-id'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'
import FileUpload from 'react-material-file-upload'
import { Storage } from '@google-cloud/storage'
import path from 'path'

import HomeIcon from '../../UI/HomeIcon'
import TipTap from '../../UI/tiptap/TipTap'

import { i } from '../../../constants/data/assets'

import './index.scss'

const t = {
  title: 'Create a Blog Post',
  create: 'Create',
  intro: 'Intro',
  body: 'Body',
  conclusion: 'Conclusion',
  youtubeLink: 'Insert YouTube Link',
  remove: 'Remove',
  submit: 'Submit',
  validationError: 'Check yourself, dummy.',
  youtubeRegex: /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/
}

const tipTapProps = {
  withToolbar: true,
  withTaskListExtension: true,
  withLinkExtension: true,
  withEmojisReplacer: true,
  withPopover: true,
  withTypographyExtension: true,
  withHexColorsDecorator: true,
  withMentionSuggestion: true,
  withEmojiSuggestion: true,
  withCodeBlockLowlightExtension: true,
  withPlaceholderExtension: true,
  spellcheck: true,
}

export const CreateBlogPost = props => {
  const [introEditor, setIntroEditor] = useState({})
  const [bodyEditor, setBodyEditor] = useState({})
  const [conclusionEditor, setConclusionEditor] = useState({})
  const [youtubeLink, setYoutubeLink] = useState(null)
  const [isYoutubeLinkSubmitted, setIsYoutubeLinkSubmitted] = useState(false)
  const [isValidationError, setIsValidationError] = useState(false)
  const [files, setFiles] = useState([])
  
  const storage = new Storage({
    keyfileName: path.join(__dirname, '../../../dalmadaniela-6225b44c6f08.json'),
    prjectId: 'dalmadaniela'
  });

  const test = storage.getItem('dalmadaniela.com')
  debugger
  const onCreate = () => {
    if(!(introEditor && bodyEditor && conclusionEditor))
      setIsValidationError(true)
    else if (introEditor.getHTML().length === 0 
    || bodyEditor.getHTML().length === 0 
    || conclusionEditor.getHTML().length === 0
    || !youtubeLink.match(t.youtubeRegex)) {
      setIsValidationError(true)
    } else {
      setIsValidationError(false)
    }
  }

  const onIntroChange = editor => setIntroEditor(editor)
  const onBodyChange = editor => setBodyEditor(editor)
  const onConclusionChange = editor => setConclusionEditor(editor)

  return (
    <div id="createBlogPostContainer">
      <HomeIcon />
      <div id='createBlogPostTitleContainer'>
        <h1>{t.title}</h1>
        <img src={i.icons.document} />
      </div>

      <div id='createBlogPostTipTapContainer'>
        <div className='tipTapEditorContainer'>
          <h2 className='tipTabEditorLabel'>{t.intro}</h2>
          <TipTap
            onChange={onIntroChange}
            {...tipTapProps}
          />
        </div> 

        <h2 id='youtubeLinkTitle'>{t.youtubeLink}</h2> 
        {isYoutubeLinkSubmitted ? (
          <LiteYouTubeEmbed 
            id={getYouTubeID(youtubeLink)} 
          />
        ) : (
          <input onChange={e => setYoutubeLink(e.target.value)} />
        )}
        <button 
          id='youtubeLinkSubmitButton'
          className='clickable'
          onClick={() => {
            setIsYoutubeLinkSubmitted(!isYoutubeLinkSubmitted)
            if (isYoutubeLinkSubmitted)
              setYoutubeLink('')
          }}
        >
          {isYoutubeLinkSubmitted ? t.remove : t.submit}
        </button>

        <div className='tipTapEditorContainer'>
          <h2 className='tipTabEditorLabel'>{t.body}</h2>
          <TipTap
            onChange={onBodyChange}
            {...tipTapProps}
          />
        </div> 

        <FileUpload value={files} onChange={setFiles} />

        <div className='tipTapEditorContainer'>
          <h2 className='tipTabEditorLabel'>{t.conclusion}</h2>
          <TipTap
            onChange={onConclusionChange}
            {...tipTapProps}
          />
        </div> 

        {isValidationError && (
          <span id='validationError'>
            {t.validationError}
          </span>
        )}
        <button 
          id='createBlogPostSubmitButton' 
          className='clickable'
          onClick={onCreate}
        >
          {t.create}
        </button>
      </div>
  </div>
)}

export default CreateBlogPost