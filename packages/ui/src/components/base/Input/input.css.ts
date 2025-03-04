import { style } from '@vanilla-extract/css';
import { vars } from '../../../styles/global.css';
// commit test
export const input = style({
  padding: vars.size.px[8],
  backgroundColor: vars.color.white,
  borderRadius: vars.size.radius[4],
  color:'#333',
  border: `1px solid ${vars.color.secondary}`,
  fontSize: vars.size.px[16],
  width: '100%',
  transition: 'border-color 0.2s ease',
  ':focus': {
    outline: 'none',
    borderColor: vars.color.primary
  },
  ':hover': {
    borderColor: vars.color.primary
  },
  '::placeholder': {
    color: vars.color.secondary
  }
});

export const errorInput = style({
  borderColor: vars.color.error,
  ':focus': {
    borderColor: vars.color.error
  },
  ':hover': {
    borderColor: vars.color.error
  }
});
