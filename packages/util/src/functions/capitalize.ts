/**
 * @param {String} text
 * @return {String} 받은 param 을 소문자로 변경한뒤 첫글자를 대문자로 변경하여 반환합니다.
 */

export default function capitalize(text: string) {
  const [first, ...rest] = text.toLowerCase();
  return first.toUpperCase() + rest.join('');
}