import styled from 'styled-components';

export const BreadcrumbContainer = styled.ol`
  display: flex;
  list-style-type: none;
  padding-left: 0px;

  li{
    color: black;
    margin-right: 5px;

    &:after{
      content: '>';
      margin-left: 5px;
    }
  }

  li a{
    color: black;

    &:hover{
      color: blue;
      text-decoration: none;
    }
  }

  li:last-child{
    
    &:after{
      content: '';
    }
  }
`;