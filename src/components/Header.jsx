import PropTypes from 'prop-types'
import { IconButton, Typography, Navbar } from '@material-tailwind/react'
import { Bars3Icon } from '@heroicons/react/24/solid'

import { SITE } from '../consts'

import '../styles/components/header.css'

const Header = ({ toggleDrawer }) => (
	<header className='header-container'>
		<Navbar className='navbar-custom'>
			<div className='navbar-items'>
				<IconButton
					variant='text'
					className='icon-button'
					ripple={false}
					size='lg'
					onClick={toggleDrawer}
				>
					<Bars3Icon className='size-6 stroke-2' />
					<span className='sr-only'>Mostrar Sidebar</span>
				</IconButton>
				<Typography
					as='a'
					href='/'
					variant='h6'
					className='title-link'
				>
					{SITE.title}
				</Typography>
			</div>
		</Navbar>
	</header>
)

Header.propTypes = {
	toggleDrawer: PropTypes.func.isRequired,
}

export default Header
