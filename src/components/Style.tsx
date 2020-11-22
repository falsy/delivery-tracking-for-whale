import * as React from 'react'
import { Global, css } from '@emotion/react'

const Style: React.FC = () => {
  return (
    <Global styles={css`
      ::placeholder {color: #bbb;}

      * {
        box-sizing: border-box;
        user-select: none;
      }
      
      body {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 40px;
        margin: 0;
        background: #f7f7f7;
        font-size: 14px;
      }
      
      #wrap {
        position: relative;
        width: 100%;
        height: 100%;
        overflow: auto;
      }

      a {
        text-decoration: none;
        color: inherit;
        letter-spacing: -0.3px;
        transition: all 0.3s;
      }
      
      a:hover {
        text-decoration: underline;
      }

      button {
        cursor: pointer;
        outline: none;
      }
      
      table {
        table-layout: fixed;
        width: 100%;
        text-align: center;
        border-right: 1px solid #ddd;
        border-bottom: 1px solid #ddd;
        border-spacing: 0;
        font-size: 13px;
      }
      
      th, td {
        border-left: 1px solid #ddd;
        border-top: 1px solid #ddd;
      }
      
      th {
        background: #f5f5f5;
        line-height: 34px;
      }
      
      td {
        line-height: 20px;
        padding: 5px;
      }
    `} />
  )
}

export default Style