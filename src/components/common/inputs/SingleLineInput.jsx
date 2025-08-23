import styled from "styled-components";



const StyledInput = styled.input`
  display: block;
  width: 100%; 
  padding: 16px;
  font-size: 15px;
  border-radius: 8px;
  border: 1px solid #D9D9D9;
  background: #FFF;
  box-shadow: 0 2px 4px 0 rgba(136, 189, 255, 0.25);
   &:focus {
    outline: none;       /* ✅ 기본 까만 테두리 제거 */
    border-color: #2665fe; /* 선택 시 테두리 색만 변경 (옵션) */
    box-shadow: 0 0 0 3px rgba(38, 101, 254, 0.2); /* 살짝 강조 효과 (옵션) */
  }
`;

export function SingleLineInput({ value, onChange, placeholder }) {
  return (
    <StyledInput
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}

export default SingleLineInput;

