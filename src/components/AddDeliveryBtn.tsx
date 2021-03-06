import * as React from 'react'
import styled from '@emotion/styled'
import { DELIVERY_INIT } from '../constants'
import { IDeliveryParams } from '../di/dto/DeliveryDTO'

const S_AddBtnArea = styled.section`
  padding: 0 20px 40px;
`

const S_AddBtn = styled.button`
  display: inline-block;
  width: 80px;
  font-size: 14px;
  line-height: 36px;
  color: #fff;
  background: #00dc9b;
  border: 1px solid #05c38b;
  cursor: pointer;
  text-shadow: 0px 0px 2px #05c38b;
  letter-spacing: 1px;
  font-weight: 600;
`

interface IPorps {
  deliveryList: Array<IDeliveryParams>
  setDeliveryList(delivery: Array<IDeliveryParams>): void
  autoSave(delivery: Array<IDeliveryParams>): void
}

const AddDeliveryBtn: React.FC<IPorps> = ({ deliveryList, setDeliveryList, autoSave }) => {

  const handleClickAddDelivery = () => {
    const newDelivery: IDeliveryParams = DELIVERY_INIT
    const newDeliveryList = [...deliveryList, newDelivery]
    setDeliveryList(newDeliveryList)
    autoSave(newDeliveryList)
  }

  return (
    <S_AddBtnArea>
      <S_AddBtn onClick={handleClickAddDelivery}>추가</S_AddBtn>
    </S_AddBtnArea>
  )
};

export default AddDeliveryBtn