import styled from 'styled-components'

export const Input = styled.input`
    background: rgba(255, 255, 255, 0.25);border-radius: 14px;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 18px 0px;
    width: 342px;
    height: 58px;
    border: none;
    outline: none;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;
    color: #FFFFFF;
    padding-left: 15px;
    margin-top: 0;
    margin-bottom:${props => props.haveSpace ? "70px" : "42px"} ;
`