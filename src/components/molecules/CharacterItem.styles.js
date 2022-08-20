import styled from 'styled-components';

export const CardInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;
  width: 100%;
  height: 100%;
`;

export const Card = styled.div`
  position: relative;
  margin-top: 5em;
  cursor: pointer;
  height: 500px;
  width: 400px;

  &:last-child {
    margin-bottom: 5em;
  }

  h1 {
    font-size: ${({ theme }) => theme.fontSize.xl};
    padding-bottom: 10px;
    overflow: hidden;
    text-align: center;
  }
  h1:before,
  h1:after {
    background-color: ${({ theme }) => theme.colors.white};
    content: '';
    display: inline-block;
    height: 1px;
    position: relative;
    vertical-align: middle;
    width: 50%;
  }
  h1:before {
    right: 0.5em;
    margin-left: -50%;
  }
  h1:after {
    left: 0.5em;
    margin-right: -50%;
  }

  ul li {
    list-style: none;
    padding-bottom: 10px;
    margin-right: 2.3em;
    &:first-child {
      margin-top: 17em;
    }
  }
`;

export const CardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 1.5em;
    overflow: hidden;
  }
`;
export const CardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  text-align: center;
  background: linear-gradient(transparent, ${({ theme }) => theme.colors.black});
  transition: all 1.2s;
  border-radius: 1.5em;
  color: ${({ theme }) => theme.colors.white};
  opacity: 0;
  &:hover {
    opacity: 1;
  }
  li {
    text-align: center;
  }
`;
