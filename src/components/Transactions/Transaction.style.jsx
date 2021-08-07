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
    font-size: 1.05rem;
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

export const Holder = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  input {
    outline: none;
    border: 1px solid #000;
    padding: 4px;
    margin: 5px 0;
    margin-top: 7px;
    color: #000;
    background: #fff;
    font-size: 0.85rem;
    font-weight: bold;
    border-radius: 2px;
  }

  span {
    font-weight: bold;
    display: block;
    font-size: 0.95rem;
  }

  #btn {
    background: linear-gradient(
      286deg,
      rgba(8, 15, 23, 1) 0%,
      rgba(29, 15, 99, 1) 93%
    );
    color: #fff;
    padding: 5px 0;
    transition: all 0.3s ease-in-out;

    @media screen and (max-width: 768px) {
      transform: scaleX(1);
    }

    :hover {
      transform: scaleX(1.03);
      background: #fff;
      color: #000;

      @media screen and (max-width: 768px) {
        transform: scaleX(1);
        background: linear-gradient(
          286deg,
          rgba(8, 15, 23, 1) 0%,
          rgba(29, 15, 99, 1) 93%
        );
        color: #fff;
      }
    }
  }
`;
