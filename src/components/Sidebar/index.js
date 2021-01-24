import React from 'react';
import SignUp from '../SignUp/Signup';
import Login from '../Login/Login';
import { BrowserRouter, Switch, Router, Route } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import { Redirect } from 'react-router'
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap
} from './SidebarElements';

const routes = [
  {
    path: "/Login",
    sidebar: () => <div><Login/></div>,
  },
  {
    path: "/SignUp",
    sidebar: () => <div><SignUp/></div>,
  }
];

const Sidebar = ({ isOpen, toggle }) => {
  const history = useHistory();

  const handleClick = () => {
    return <Redirect to="/Login"/>
  } 
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarRoute href = "/Login">Login</SidebarRoute>
        <SidebarRoute to='/SignUp'>Sign up</SidebarRoute>
        <SidebarRoute to='/'>Mode of payment
<ul>
<li>UPI/Net-banking</li>
<li>Cash on delivery</li>
</ul>
        </SidebarRoute>
        <SidebarLink to='/'>Full Menu</SidebarLink>
        {/* <Switch>
            {routes.map((route, index) => (
              // You can render a <Route> in as many places
              // as you want in your app. It will render along
              // with any other <Route>s that also match the URL.
              // So, a sidebar or breadcrumbs or anything else
              // that requires you to render multiple things
              // in multiple places at the same URL is nothing
              // more than multiple <Route>s.
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
              >{route.sidebar}</Route>
            ))}
          </Switch> */}
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute to='/Login'>Order Now</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
    
  );
};

export default Sidebar;
