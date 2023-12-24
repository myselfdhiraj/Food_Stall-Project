import styled from "styled-components";
import FoodListing from "./component/FoodListing";
import { useEffect, useState } from "react";

export const SERVER_URL = "http://localhost:9000";
function App() {
  const [foodData, setFoodData] = useState(null);
  const [loder, setLoder] = useState(false);
  const [error, setError] = useState(null);
  const [filteredData, setfilteredData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(SERVER_URL);
      try {
        setLoder(true);
        const jsonData = await response.json();
        setfilteredData(jsonData);
        setFoodData(jsonData);
        setLoder(false);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);

  function filterData(e) {
    const searchValue = e.target.value;
    console.log(searchValue);
    if (searchValue === "") {
      setfilteredData(null);
    } else {
      const filter = foodData?.filter((food) =>
        food.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      setfilteredData(filter);
    }
  }

  function filterBtnData(text) {
    console.log(text);
    if (text.toLowerCase() === "all") {
      setfilteredData(foodData);
    } else {
      const filter = foodData?.filter((food) =>
        food.type.toLowerCase().includes(text.toLowerCase())
      );
      setfilteredData(filter);
    }
  }

  if (loder) return <div>"Loading..."</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <MainContainer>
        <NavContainer>
          <div className="navbar">
            <div className="logo">Food Stall</div>
            <div className="search">
              <input
                type="text"
                name="search"
                placeholder="Search Food...."
                onChange={filterData}
              />
            </div>
          </div>
          <div className="navbtn">
            {["All", "Breakfast", "Lunch", "Dinner"].map((value, index) => (
              <Buttons key={index} onClick={() => filterBtnData(value)}>
                {value}
              </Buttons>
            ))}
          </div>
        </NavContainer>

        <FoodContainer>
          <FoodListSection>
            {filteredData?.map((value) => (
              <FoodListing
                name={value.name}
                text={value.text}
                price={value.price}
                type={value.type}
                img={value.image}
                key={value}
              />
            ))}
          </FoodListSection>
        </FoodContainer>
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
  height: auto;
  gap: 50px;
  z-index: 3;
  background-color: #323334;
  .navbar {
    margin: 10px auto 0;
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
    margin: 20px auto 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 14px;
    padding: 10px 20px;
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

const FoodContainer = styled.div`
  background-image: url("./bg.png");
  background-size: cover;
  width: 100%;
  min-height: calc(100vh - 160px);
  padding: 30px;
`;
const FoodListSection = styled.section`
  width: 80%;
  margin: 30px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 20px;
  row-gap: 50px;
  flex-wrap: wrap;
`;
