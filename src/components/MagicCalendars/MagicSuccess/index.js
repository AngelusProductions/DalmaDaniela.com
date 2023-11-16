import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { paths } from "../../../constants/paths"
import { clearMagicValues } from "../../../actions/magicCalendars"
import { createMagicCalendar } from "../../../api/magicCalendars"
import countryCodes from "../../../constants/data/countryCodes.js";
import magicCheckoutText from "../MagicCheckout/text.js";

import "./styles/index.scss";

const t = {
  processing: "Processing...",
  success: "Success!",
  thankYou: 'Thank you for your purchase! You will receive an email in 24 hours with your calendar.'
}

const MagicSuccess = (props) => {
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    let brandColors = [props.brandColor1, props.brandColor2, props.brandColor3, props.brandColor4, props.brandColor5]
    let brandEmojis = [props.brandEmoji1, props.brandEmoji2, props.brandEmoji3, props.brandEmoji4, props.brandEmoji5]

    let calendar = {
      brandName: props.brandName,
      website: props.website,
      socialMedia1: props.socialMedia1,
      socialMedia2: props.socialMedia2.length === 0 ? null : props.socialMedia2,
      description: props.description,
      objective: props.objective,
      brandColors: brandColors.filter((color) => color !== null).join(","),
      brandEmojis: brandEmojis.filter((emoji) => emoji !== null).map(e => e.emoji).join(","),
      specificTopics: props.specificTopics,
      useHolidays: props.useHolidays,
      country: countryCodes[props.country],
      createFromScratch: props.createFromScratch,
      graphics: props.graphics.map((graphic) => graphic.fileUrl),
      style: magicCheckoutText.questions.ten.options.find(option => option.id === props.styleId).name,
      email: props.email,
      magicLength: props.magicLength,
    };
    setIsProcessing(true);
    createMagicCalendar({ calendar }).then(res => {
      // debugger
      // if (res.isSuccess) {
      //   props.clearMagicValues();
      //   setIsProcessing(false);
      //   window.location.href = `${window.location.origin}${paths.magicCalendars.success}`;
      // } else {
      //   setIsProcessing(false);
      //   alert("Something went wrong. Please try again.");
      // }
      setIsProcessing(false);
    })
  }, []);

  return (
    <main id="magicSuccessPage">
      <h1>{isProcessing ? t.processing : t.success}</h1>
      {!isProcessing && <p>{t.thankYou}</p>}
    </main>
  );
};

const mapState = (state) => {
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
    brandEmoji1: state.magicCalendars.brandEmoji1,
    brandEmoji2: state.magicCalendars.brandEmoji2,
    brandEmoji3: state.magicCalendars.brandEmoji3,
    brandEmoji4: state.magicCalendars.brandEmoji4,
    brandEmoji5: state.magicCalendars.brandEmoji5,
    specificTopics: state.magicCalendars.specificTopics,
    useHolidays: state.magicCalendars.useHolidays,
    country: state.magicCalendars.country,
    createFromScratch: state.magicCalendars.createFromScratch,
    graphics: state.magicCalendars.graphics,
    styleId: state.magicCalendars.styleId,
    email: state.magicCalendars.email,
    magicLength: state.magicCalendars.magicLength,
  };
};

const mapDispatch = (dispatch) => ({
  clearMagicValues: async () => {
    dispatch(clearMagicValues());
  }
});

export default connect(mapState, mapDispatch)(MagicSuccess);
