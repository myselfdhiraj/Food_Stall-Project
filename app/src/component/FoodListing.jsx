import styled from 'styled-components';

function FoodListing() {
  return (
    <FoodContainer>
        <FoodCard>

        </FoodCard>
    </FoodContainer>
  )
}

export default FoodListing

const FoodContainer  = styled.div`
background-image: url("./bg.png");
background-size: cover;
width: 100%;
height: calc(100vh - 160px);
`;
const FoodCard = styled.div`
width: 280px ;
`;