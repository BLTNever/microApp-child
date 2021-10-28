import React from 'react';
import styled from 'styled-components'
import { Input, Image } from 'antd'
import style from './styles.module.less'

export const ImageItemDiv = styled.div`
  & + & {
    padding-top: 19px;
  }
`
export const DescriptionsImageTitle = styled.h2`
  height: 22px;
  padding-left: 10px;
  margin: 12px;
  font-size: 28px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.85);
  line-height: 22px;
  color: red;
`
