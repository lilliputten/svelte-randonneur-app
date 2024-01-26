import cssVariables from '@/src/core/assets/scss/variables.module.scss';

const defaultInputHeightPx = parseInt(cssVariables.defaultInputHeight);

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
  defaultInputHeightPx,

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
