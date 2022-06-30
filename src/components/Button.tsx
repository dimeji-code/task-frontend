import { Color } from 'chart.js';
import React from 'react'
import styled from 'styled-components'

var green = '#61882ae6'
var brown = '#7e421f'
const Button = (props:any) => {
    
    // var col = props.color == 'green'? green:brown
    var col = green;
    const Filled  = styled.button`
     color: #fbfcfae8; 
    border: 1px solid ${col};
    background-color: ${col};
    border-radius: 8px;
    height: 40px;
    padding: 10px;
        :hover{
            background-color: #fff;
            color: ${col};
            animation: button-empty 0.6s linear;
            cursor: pointer;
            box-shadow: 1px 1px 1.8px 1.2px rgba(115, 195, 109, 0.067),
            1px 1px 2px 1px rgba(91, 66, 44, 0.089);
        }
        @keyframes button-empty {
        from {

            color:#fff; 
            background-color: ${col};
        }
        to {
            color: ${col};  
            background-color: #fff;
        }
        }


`

    const Outlined = styled.button`
    color: ${col}; 
    border: 1px solid ${col};
    background-color: #fbfcfae8;
    border-radius: 8px;
    height: 40px;
    padding: 10px;
        :hover{
            background-color: ${col};
            color: #fff;
            animation: button-change 0.6s linear;
            cursor: pointer;
            box-shadow: 1px 1px 1.8px 1.2px rgba(115, 195, 109, 0.067),
            1px 1px 2px 1px rgba(91, 66, 44, 0.089);
        }
        @keyframes button-change {
        from {

            color:${col}; 
            background-color: #fff;
        }
        to {
            color: #fff;  
            background-color: ${col};
        }
        }

    `
  
  return (
    <div style={{color:'transparent'}}>
        {props.type == 'solid' &&
        <Filled  onClick={props.onPress}>
            {props.title}
        </Filled>
        }
        {props.type == 'outline' &&  
            <Outlined  onClick={props.onPress}>
               {props.title}
            </Outlined>
        }
    </div>
  )
}

export default Button


