import styled, { css } from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { colors } from "assets/styles/colors";

export const Nav = styled.nav`
  ${({theme}) => css`
  background-color: ${theme.colors.baseBg2};
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  z-index: 10;
 `}
`;

export const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
  &:hover {
    ${({theme}) => css`
    transition: all 0.2s ease-in-out;
    color: ${theme.colors.primaryColor};
    text-transform: uppercase;
  `}
}
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  width: 100%;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  text-align: center;
  width: 60px;
  border-radius: 4px;
  padding: 5px; 
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    ${({theme}) => css`
    transition: all 0.2s ease-in-out;
    color: ${theme.colors.primaryColor};
    text-transform: uppercase;
    
  `}
  }
`;

export const NavDetails = styled.div`
	${({ theme }) => css`
  display: flex;
		margin-left: 20rem;
		align-items: center;
		gap: 20px;
		${theme.mixins.input()};
		padding-top: 0;
		padding-bottom: 0;
		padding-right: 0;
		input {
			background: transparent;
			border: none;
			height: 100%;
			color: ${theme.colors.textColor};
		}
	`}
`;

export const Search = styled.div`
	${({ theme }) => css`
		display: flex;
		align-items: center;
		gap: 10px;
		${theme.mixins.input()};
		padding-top: 0;
		padding-bottom: 0;
		padding-right: 0;
		input {
			background: transparent;
			border: none;
			height: 100%;
			color: ${theme.colors.textColor};
		}
	`}
`;
