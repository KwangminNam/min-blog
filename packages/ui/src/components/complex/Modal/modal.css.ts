import { themeColor, vars } from '@kwangmins-blog/ui';
import { style } from '@vanilla-extract/css';

export const modalWrapper = style({
  backgroundColor: themeColor.color.mainBackground,
  borderRadius: vars.size.radius[12],
  width: '90%',
  maxWidth: '520px',
  margin: vars.size.px[16],
  '@media': {
    'screen and (max-width: 768px)': {
      width: '95%',
      margin: vars.size.px[12],
      maxHeight: '90vh',
      overflow: 'auto'
    }
  }
});

export const modalHeader = style({
  display: 'flex',
  padding: vars.size.px[16],
  justifyContent: 'center',
  alignItems: 'center',
  borderBottom: `1px solid ${themeColor.color.borderColor}`,
  '@media': {
    'screen and (max-width: 768px)': {
      padding: vars.size.px[12]
    }
  }
});

export const modalFooter = style({
  display: 'flex',
  justifyContent: 'center',
  padding: vars.size.px[16],
  alignItems: 'center',
  borderTop: `1px solid ${themeColor.color.borderColor}`,
  '@media': {
    'screen and (max-width: 768px)': {
      padding: vars.size.px[12]
    }
  }
});