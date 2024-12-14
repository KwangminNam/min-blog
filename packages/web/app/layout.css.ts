import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'block',
  containerType: 'inline-size', // 컨테이너 쿼리를 사용할 수 있도록 설정
  maxWidth: 1380,
  margin: '0 auto',
  padding: 12,
  minHeight: '100dvh',
});

