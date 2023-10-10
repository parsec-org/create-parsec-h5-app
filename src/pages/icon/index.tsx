import React from 'react'
import {
  AddCircleOutline,
  AddressBookFill, AddSquareOutline,
  AlipayCircleFill, AlipaySquareFill,
  AntOutline,
  ArrowDownCircleOutline, CloseCircleOutline,
  FireFill, GiftOutline, HistogramOutline,
  KoubeiFill, SoundMuteFill
} from 'antd-mobile-icons'
import { Space } from 'antd-mobile'
import DemoBlock from "@/components/DemoBlock";

export default () => {
  return (
    <>
      <DemoBlock title='基础用法'>
        <Space wrap style={{ fontSize: 36 }}>
          <AntOutline />
          <ArrowDownCircleOutline />
        </Space>
      </DemoBlock>
      <DemoBlock title='大小'>
        <Space wrap align='center'>
          <AntOutline fontSize={12} />
          <AntOutline fontSize={24} />
          <AntOutline fontSize={36} />
          <AntOutline fontSize={48} />
        </Space>
      </DemoBlock>
      <DemoBlock title='颜色'>
        <Space wrap style={{ fontSize: 36 }}>
          <AntOutline color='#76c6b8' />
          <AntOutline color='var(--adm-color-primary)' />
          <AntOutline color='var(--adm-color-weak)' />
          <AntOutline color='var(--adm-color-danger)' />
        </Space>
      </DemoBlock>
      <DemoBlock title='实体风格'>
        <Space wrap style={{ fontSize: 36 }}>
          <AddressBookFill />
          <AlipaySquareFill />
          <AlipayCircleFill />
          <FireFill />
          <KoubeiFill />
          <SoundMuteFill />
        </Space>
      </DemoBlock>

      <DemoBlock title='线框风格'>
        <Space wrap style={{ fontSize: 36 }}>
          <AddCircleOutline />
          <AddSquareOutline />
          <AntOutline />
          <CloseCircleOutline />
          <GiftOutline />
          <HistogramOutline />
        </Space>
      </DemoBlock>
    </>
  )
}
