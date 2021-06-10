import React from 'react';
import styled from 'styled-components';

const NavigationBar = styled.header`
	ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
		background-color: red;
	}

	li {
		float: left;
	}

	li a {
		display: block;
		color: white;
		text-align: center;
		padding: 14px 16px;
		text-decoration: none;
	}

	li a:hover {
		background-color: #111;
	}
`;

const Layout = () => {
	return (
		<div>
			<NavigationBar>
				<ul>
					<li>
						<a href='default.asp'>Home</a>
					</li>
					<li>
						<a href='news.asp'>News</a>
					</li>
					<li>
						<a href='contact.asp'>Contact</a>
					</li>
					<li>
						<a href='about.asp'>About</a>
					</li>
				</ul>
			</NavigationBar>
		</div>
	);
};

// <div>
//     <Navbar
//       className="navbar navbar-expand-lg navbar-dark bg-dark"
//       bg="light"
//       expand="lg"
//       varriant="dark"
//       style={{ top: '0', zIndex: '1000', position: 'sticky', width: '100%' }}>
//       <LinkContainer to="/">
//         <Navbar.Brand>League Champs</Navbar.Brand>
//       </LinkContainer>
//       <Navbar.Toggle aria-controls="basic-navbar-nav" />
//       <Navbar.Collapse id="basic-navbar-nav">
//         <Nav className="mr-auto">
//           <LinkContainer to="/">
//             <Nav.Link>Home</Nav.Link>
//           </LinkContainer>
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//     {children}
//     <Footer />
//   </div>

export default Layout;
