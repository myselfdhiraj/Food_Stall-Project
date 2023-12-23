import styled from "styled-components";

function App() {
  return (
    <>
      <MainContainer>
        <NavContainer>
          <div className="navbar">
            <div className="logo">Food Stall</div>
            <div className="search">
              <input type="text" name="search" placeholder="Search Food...." />
            </div>
          </div>
          <div className="navbtn">
            <Buttons>All</Buttons>
            <Buttons>Breakfast</Buttons>
            <Buttons>Lunch</Buttons>
            <Buttons>Dinner</Buttons>
          </div>
        </NavContainer>
      </MainContainer>
    </>
  );
}

export default App;

const MainContainer = styled.div`
  width: 100%;
  min-height: 100vh;
`;
const NavContainer = styled.section`
  width: 100%;
  padding: 20px;
  height: 80px;
  gap: 50px;
  .navbar {
    margin: 10px auto;
    width: 85%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 24px;
    @media (0 < width < 600px) {
      flex-direction: column;
    }
  }

  .logo {
    width: auto;
    text-align: center;
    font-size: 35px;
    font-weight: 700;
  }
  .search {
    width: auto;
    input {
      all: unset;
      width: 100%;
      height: 100%;
      font-size: 16px;
      padding: 8px 12px;
      outline: 1px solid #ff0909;
    }
  }
  .navbtn {
    width: 85%;
    margin: 20px auto;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 14px;
    padding: 20px;
  }
`;
export const Buttons = styled.button`
  all: unset;
  padding: 6px 12px;
  font-size: 16px;
  background-color: #ff4343;
  color: white;
  border-radius: 5px;
`;
