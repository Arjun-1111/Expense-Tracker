import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 35.2%;
  padding: 5px;
  transform: translateX(-62px);
  margin-top: 15px;

  @media screen and (max-width: 768px) {
    transform: translateX(0px);
    width: 100%;
  }
`;

export const Heading = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 10px;

  h3 {
    font-size: 1.25rem;
    font-weight: bold;
}
  }
  :after {
      position: absolute;
      bottom: -8px;
      content: "";
      height: 2px;
      width: 100%;
      
      background: rgba(0, 0, 0, 0.2);
    
`;

export const HistoryTab = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  background: #fff;
  color: #000;
  padding: 7px;
  box-shadow: -1px 0 5px rgba(0, 0, 0, 0.45);
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
  position: relative;
  transition: all 0.4s ease-in-out;

  .descp {
    font-size: 0.9rem;
    font-weight: bold;
    text-transform: capitalize;
    margin-right: 4px;
    color: #000;
    background: #fff;
  }

  .money {
    font-size: 0.9rem;
    font-weight: bold;
    text-transform: capitalize;
    margin-left: 8px;
    color: #000;
    background: #fff;
  }

  input {
    display: inline;
    position: absolute;
    top: 3.7px;
    left: -24px;
    background: #ff0000;
    color: #eee;
    padding: 2px 7px;
    border: none;
    outline: none;
    font-size: 1rem;
    border-radius: 2px;
    opacity: 0;
    transition: all 0.45s ease-in-out;

    @media screen and (max-width: 768px) {
      opacity: 1;
    }
  }

  :hover {
    input {
      opacity: 1;
    }

    @media screen and (max-width: 768px) {
      opacity: 1;
    }
  }
`;
