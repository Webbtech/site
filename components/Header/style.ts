import styled from 'styled-components'

// TODO: file and components not required

export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  height: 70px;
  padding: 7px 0;

  background-color: white;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  z-index: 100;
  // border-bottom: solid 1px #000000;
`

export const Logo = styled.div`
  margin-top: 7px;
  float: left;

  a {
    text-decoration: none;
    outline: none;
    border: none;
  }
`

export const Menu = styled.div`
  float: left;
  margin-left: 40px;
  margin-top: 20px;
  width: 500px;
`