'use client';

import styled from '@emotion/styled';

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* font-weight: bold; */
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 50px;

  .home {
    margin-left: 30px;
  }

  .menu {
    list-style: none;
    display: flex;
    align-items: center;
  }
  .menu li {
    margin-right: 30px;
  }
  a {
    text-decoration: none;
    color: white;
  }
  .nav-user-profile {
    width: 50px;
    margin-right: 30px;
  }
  .nav-user-profile-dropbtn {
    margin-right: 30px;
  }
  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    right: 5px;
    z-index: 1; /*다른 요소들보다 앞에 배치*/
    font-size: 15px;
  }

  .dropdown-content a {
    display: block;
    text-decoration: none;
    color: white;
    font-size: 15px;
    padding: 5px;
  }
  .dropdown-content a:hover {
    color: #3f4499;
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }
`;
