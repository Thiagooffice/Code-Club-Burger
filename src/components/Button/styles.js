import styled from 'styled-components'

export const Button = styled.button`
    width: 342px;
    height: 68px;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 14px 0px;
    margin-bottom: 51px;
    background:${props => props.isBack ? "rgba(255, 255, 255, 0.14)" : " #D93856"};
    border: none;
    transition: all 0.1s;
    font-style: normal;
    font-weight: 900;
    font-size: 17px;
    line-height: 2px;
/* or 15% */

    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;

    color: #FFFFFF;


    &:hover{
        background: #E24E67;
    }
    &:active{
        background: #EE6B81;
    }
`