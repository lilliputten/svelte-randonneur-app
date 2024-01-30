import cssVariables from '@/src/core/assets/scss/variables.module.scss';

const defaultInputHeight = parseInt(cssVariables.defaultInputHeightPx);

const transitionTimeMs = parseInt(cssVariables.transitionTimeMs);
const animationTimeMs = parseInt(cssVariables.animationTimeMs);
const disappearTimeMs = parseInt(cssVariables.disappearTimeMs);

const {
  primaryColor,
  secondaryColor,

  errorColor,
  dangerColor,
  warnColor,
  successColor,
  infoColor,
} = cssVariables;

export {
  // Dimensions...
  defaultInputHeight,

  // Timeouts...
  transitionTimeMs,
  animationTimeMs,
  disappearTimeMs,

  // Colors...
  primaryColor,
  secondaryColor,
  errorColor,
  dangerColor,
  warnColor,
  successColor,
  infoColor,

  // TODO: Export other essential variables?
};
