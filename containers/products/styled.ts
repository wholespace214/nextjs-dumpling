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

interface FilterContentProps {
  show?: Boolean;
}

export const FilterContent = styled.div`
  display: ${(props: FilterContentProps) => (props.show ? "flex" : "none")};
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
  cursor: pointer;
`;

export const PageItemIcon = styled.div`
  transform: rotate(90deg);
`;

interface ProductModelProps {
  show: Boolean;
}

export const ProductModel = styled.div`
  display: ${(props: ProductModelProps) => (props.show ? "black" : "none")};
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  background: rgba(39, 38, 36, 0.8);
`;

export const ModelContent = styled.div`
  height: 100vh;
  width: 377px;
  background-color: white;
  float: right;
`;

export const CloseButton = styled.div`
  margin-top: 20px;
  margin-left: 328px;
  cursor: pointer;
`;

export const ModelTitle = styled.div`
  margin-left: 32px;
  margin-top: 26px;

  font-family: "Heavitas";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 30px;
  color: #29282d;
`;

export const ModelCode = styled.div`
  display: flex;
  flex-direction: row;

  margin-left: 32px;
  margin-top: 8px;
`;

export const ModelCodeText = styled.div`
  display: flex;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 24px;
  color: #000000;
  opacity: 0.3;
`;

export const ModelCodeNum = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  color: #000000;

  margin-left: 8px;
  display: flex;
`;

export const ModelLine = styled.hr`
  width: 312px;
  margin-top: 16px;
  margin-bottom: 16px;
`;

export const ModelText = styled.div`
  margin-left: 32px;
  margin-right: 33px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
`;

export const ModelPrice = styled.div`
  font-family: Heavitas;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  color: #29282d;
  text-align: right;

  margin-right: 32px;
  margin-top: 16px;
`;

export const ModelItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 32px;
  margin-right: 33px;
  margin-top: 15px;
`;

export const ModelItemName = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  text-transform: capitalize;
  color: #000000;
  opacity: 0.3;
`;

export const ModelItemValue = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: #000000;
`;

export const ModelHelp = styled.div`
  border: 1px solid #efefef;
  box-sizing: border-box;
  margin-left: 32px;
  margin-right: 32px;
  /* margin-top: 120px; */
  margin-top: 30px;
`;

export const ModelHelpIcon = styled.div`
  margin-top: 16px;
  margin-left: 16px;
`;

export const ModelHelpText = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  opacity: 0.3;

  margin-top: 9px;
  margin-left: 16px;
  margin-right: 16px;
  margin-bottom: 16px;
`;

export const ModelButton = styled.div`
  border: 1px solid #272624;
  box-sizing: border-box;
  padding: 16px;

  font-family: Heavitas;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 14px;
  color: #272624;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;

  margin-left: 32px;
  margin-right: 32px;
  margin-top: 32px;
`;
