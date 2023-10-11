import styled from "styled-components"
import { BsCupHot } from "react-icons/bs"
import { GiFrozenOrb } from "react-icons/gi"
import ImageDisplay from "./ImageDisplay"

interface ProductCardProps {
  id: string
  name: string
  price: number
  description: string
  temperature: string
  size: number
}

const GetIcon = (temperature: string) => {
  if (temperature.toLowerCase() === "hot") {
    return (
      <IconBox style={{ background: "pink" }}>
        <BsCupHot style={{ color: "darkred" }} />
      </IconBox>
    )
  } else if (temperature.toLowerCase() === "cold") {
    return (
      <IconBox style={{ background: "deepskyblue" }}>
        {" "}
        <GiFrozenOrb style={{ color: "aliceblue" }} />{" "}
      </IconBox>
    )
  }
}

export default function ProductCard(props: ProductCardProps) {
  return (
    <ProductCardDiv>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <ProductCardName>{props.name}</ProductCardName>
        <ProductCardTemperature>
          {GetIcon(props.temperature)}
        </ProductCardTemperature>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div>
          <ProductCardPrice>
            ¥{props.price} - {props.size}ml
          </ProductCardPrice>
          <ProductCardDescription>{props.description}</ProductCardDescription>
        </div>
        <ImageDisplay id={props.id} />
      </div>
    </ProductCardDiv>
  )
}

const ProductCardDiv = styled.div`
  background: #f5f5f5;
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
`

const ProductCardName = styled.h1`
  font-weight: bold;
  margin: 10px;
`

const ProductCardPrice = styled.h3`
  color: #000000;
  font-size: 20px;
  font-weight: bold;
  margin: 10px;
  text-align: left;
`

const ProductCardDescription = styled.p`
  color: #000000;
  margin: 10px;
  text-align: left;
`

const ProductCardTemperature = styled.h1`
  font-weight: bold;
  margin: 10px;
`

const ProductImage = styled.img`
  margin: 10px;
`

const IconBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px;
  border-radius: 5px;
`
