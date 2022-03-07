import styled from "styled-components";

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const ProductTitle = styled.div`
  margin-left: 30px;
  margin-top: 76px;
  font-family: "Heavitas [RUS by Daymarius]";
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 70px;
  color: #272624;
`;

export const ProductFilter = styled.div`
  display: flex;
  flex-direction: row;
  gap: 56px;
  justify-content: right;

  margin-right: 92px;
  margin-top: 96px;

  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #000000;
`;

export const ProductFilterSearch = styled.div``;

export const ProductFilterSerchText = styled.span`
  margin-left: 9px;
`;

export const ProductFilterSort = styled.select`
  border: none;
  :active {
    border: none;
  }
  :hover {
    border: none;
  }
`;

export const ProductLine = styled.hr`
  width: 99%;
  margin-top: 24px;
`;

export const ProductContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 100px;

  margin-top: 22px;
`;

export const ProductContentFilter = styled.div`
  flex: 1;
  margin-left: 32px;
`;

export const FilterList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const FilterTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const FilterHr = styled.hr`
  margin-top: 24px;
  margin-bottom: 24px;
`;

export const FilterTitleText = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  font-size: 21px;
  line-height: 24px;
`;

export const FilterTitleIcon = styled.div`
  padding-top: 5px;
  cursor: pointer;
`;

export const FilterContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const FilterItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-left: -3px;
`;

export const FilterItemCheck = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

export const FilterItmeCheckInput = styled.input.attrs({ type: "checkbox" })`
  width: 16px;
  height: 16px;
`;

export const FilterItemCheckText = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
`;

export const FilterItemNum = styled.div`
  display: flex;
  align-items: center;
`;

export const ProductContentList = styled.div`
  /* border: 1px solid black; */

  flex: 3;
`;

export const ProductCardGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 26px;
`;

export const ProductContentPage = styled.div`
  height: 40px;

  float: right;
  margin-top: 40px;
  margin-right: 40px;

  display: flex;
  flex-direction: row;
  gap: 5px;
`;

interface PageItemProps {
  active?: Boolean;
}

export const PageItem = styled.div<PageItemProps>`
  width: 40px;
  height: 40px;
  background-color: ${(props: PageItemProps) => (props.active ? "red" : "")};

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #000000;
`;

export const PageItemIcon = styled.div`
  transform: rotate(90deg);
`;

export const ProductModel = styled.div`
  position: absolute;
  /* top: -100px; */
  /* left: -100px; */
  width: 100vw;
  height: 100vh;
  background: rgba(39, 38, 36, 0.8);
`;
