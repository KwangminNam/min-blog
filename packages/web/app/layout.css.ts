import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'block',
  containerType: 'inline-size', // 컨테이너 쿼리를 사용할 수 있도록 설정
  maxWidth: 1200,
  margin: '0 auto',
  padding: 12,
  border: '1px solid #ddd',
  minHeight: '100dvh',
});

