import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  justify-content: center;
  background-color: #f3f8fa;
  color: #274060;
  width: 229px;
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 700;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  line-clamp: 1;
  overflow: hidden;
`;

export const ConfirmButtonDisplay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;
