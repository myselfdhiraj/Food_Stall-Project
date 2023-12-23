import styled from "styled-components";
import { Buttons, SERVER_URL } from "../App";

function FoodListing({ img, name, text, price }) {
  return (
    <FoodCard>
      <div className="food_img">
        <img src={SERVER_URL + img} alt="" />
      </div>
      <div className="food_text">
        <div>
          <h3>{name}</h3>
          <p>{text}</p>
        </div>
        <div>
          <Buttons>${price}</Buttons>
        </div>
      </div>
    </FoodCard>
  );
}

export default FoodListing;

const FoodCard = styled.div`
  width: 340px;
  height: 167px;
  border-radius: 20px;
  border: 0.659px solid #98f9ff;
  background: lightgray 0% 0% / 50.8334219455719px 50.8334219455719px repeat,
    radial-gradient(
      151.92% 127.02% at 15.32% 21.04%,
      rgba(165, 239, 255, 0.2) 0%,
      rgba(110, 191, 244, 0.04) 77.08%,
      rgba(70, 144, 212, 0) 100%
    );
  background-blend-mode: overlay, normal;
  backdrop-filter: blur(13.184196472167969px);
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  position: relative;
  .food_img img {
    width: 130px;
  }
  .food_text {
    display: flex;
    flex-direction: column;
    align-items:flex-end;
    gap: 30px;
    h3 {
      padding-bottom: 8px;
      font-size: 16px;
      font-weight: bold;
    }
    p {
      font-size: 14px;
    }
  }
`;
