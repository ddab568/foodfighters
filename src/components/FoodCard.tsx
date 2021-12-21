import React from "react";
import { Card, Typography } from "antd";

type foodCardProps = {
    cardTitle: string,
    expiryDate: string,
    brandName: string,
    foodImage: string,
}

const FoodCard = ({cardTitle, expiryDate, brandName, foodImage}: foodCardProps): JSX.Element => {
  const {Title, Text} = Typography;

  const textBlue = '#002766';

  const foodCardContentStyle = {
    display: 'flex', 
    flexDirection: 'row' as 'row', 
    justifyContent: 'flex-start', 
    alignItems: 'center', 
    maxWidth: '100%',
    padding: '5px',
  }

  const foodCardImageContainerStyle = {
    padding: 0, 
    margin: 0,
    maxWidth: '50%',

  }

  const foodCardInfoStyle = {
    display: "flex",
    flexDirection: "column" as "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginLeft: "15px",
    maxWidth: '50%',
  }

const foodCardInfoGroupStyle = {
    display: "flex",
    flexDirection: "column" as "column",
    justifyContent: "center",
    alignItems: "flex-start",
}

  return (
    <>
      <Card
        size="small"
        style={{ maxWidth: "500px", margin: "10px auto", backgroundColor: '#E6F7FF', border: "1px solid black"}}
      >
        <div style={foodCardContentStyle}>
            <div style={foodCardImageContainerStyle}>
              <img src={foodImage} alt={`${cardTitle}`} style={{maxHeight: '150px'}} />
              </div>
            <div style={foodCardInfoStyle}>
                  <Title level={4} style={{color: textBlue}}>{cardTitle}</Title>
                <div style={foodCardInfoGroupStyle}>
                  <Text type="secondary">Expiry Date:</Text>
                  <Text strong style={{color: textBlue}}>{expiryDate}</Text>
                </div>
                <div style={foodCardInfoGroupStyle}>
                  <Text type="secondary">Brand:</Text>
                  <Text strong style={{color: textBlue}}>{brandName}</Text>
                </div>
            </div>
        </div>
      </Card>
    </>
  );
};

export default FoodCard;