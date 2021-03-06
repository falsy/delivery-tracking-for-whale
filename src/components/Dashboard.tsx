import * as React from 'react'
import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import Footer from './Footer'
import TipMessage from './TipMessage'
import Delivery from './Delivery'

import ctrl from '../di'

const S_Title = styled.h1`
  font-size: 18px;
  font-weight: normal;
  background: #fff;
  margin: 0;
  padding: 0 20px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
  color: #000;
  line-height: 49px;
`

const Dashboard: React.FC = () => {
  
  const [deliveryList, setDeliveryList] = useState([])

  useEffect(() => {
    setDeliveryList(ctrl.getDelivery())
  }, [])

  return (
    <>
      <S_Title>택배 배송 조회</S_Title>
      <Delivery deliveryList={deliveryList} setDeliveryList={setDeliveryList} />
      <TipMessage setDeliveryList={setDeliveryList} />
      <Footer />
    </>
  )
}

export default Dashboard