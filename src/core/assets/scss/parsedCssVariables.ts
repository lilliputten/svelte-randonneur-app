import cssVariables from '@/src/core/assets/scss/variables.module.scss';

const defaultInputHeight = parseInt(cssVariables.defaultInputHeightPx);

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
