import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar'>
    <div  className='commit'  style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="black" backgroundColor="white">
	  <div className='hamburger'>
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className=" logo-responsive">
            Prescripson
          </a>
        </CDBSidebarHeader>
		</div>
	
		<a href='https://www.prescripson.com/' className='logo'>
           Prescripson
		</a>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="https://www.prescripson.com/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="https://www.prescripson.com/doctors" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="plus-square">Find Doctors</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="https://www.prescripson.com/institutions" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="hospital-alt">Find Clinics</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="https://www.prescripson.com/care" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="question">Help & Support</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="https://www.prescripson.com/company/terms-of-use" target="_blank" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="gavel">Terms Of Use</CDBSidebarMenuItem>
            </NavLink>

			<NavLink exact to="https://www.prescripson.com/company/policies" target="_blank" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="shield-alt">Privacy & Security</CDBSidebarMenuItem>
            </NavLink>

			<NavLink exact to="https://www.prescripson.com/company/about-us" target="_blank" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="search">About Us</CDBSidebarMenuItem>
            </NavLink>

			<NavLink exact to="https://www.prescripson.com/contact-us" target="_blank" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user-circle">Contact Us</CDBSidebarMenuItem>
            </NavLink>

			<NavLink exact to="/hero404" target="_blank" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="rupee-sign">Pricing</CDBSidebarMenuItem>
            </NavLink>


          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            // style={{
            //   padding: '20px 5px',
            // }}
        class='love'>
            Made with ❤️ for India
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
    </div>
  );
};

export default Sidebar;


