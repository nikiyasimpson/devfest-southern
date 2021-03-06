import styled from 'styled-components'
import theme from './theme'
import Link from 'next/link'
import GDGLogo from './icons/gdg_logo.svg'
import AnchorButton from './elements/AnchorButton'
import MobileMenu from './MobileNav'

export const NAV_BREAKPOINT = '885px'

const StyledLink = styled.a`
	color: ${theme.colors.darkred};
	font-size: 1em;
	font-weight: 700;
	padding: 1em;
	text-decoration: none;
	&:hover {
		color: ${theme.colors.black};
	}
`

const Nav = styled.nav`
	background: rgba(255,255,255,0.97);
	position: fixed;
	top: 0;
	width: 100%;
	z-index: 5;
`

const NavDesktopContainer = styled.div`
	display: none;
	@media (min-width: ${NAV_BREAKPOINT}) {
		display: flex;
		justify-content: space-between;
		margin: 0 auto;
		max-width: 980px;
		padding: 15px;
	}
`

const NavLinks = styled.div`
	margin-top: 9px;
`

const StaticLogo = () => (
	<Link href="/">
		<a>
			<GDGLogo alt="GDG" width="70px" height="35px" />
		</a>
	</Link>
)

export const Navbar = () => {
	return (
		<Nav>
			<NavDesktopContainer>
				<StaticLogo />
				<NavLinks>
					{/* <Link passHref href="/"><StyledLink>Home</StyledLink></Link> */}
					{/* <Link passHref href="https://www.papercall.io/devfest-houston"><StyledLink>Call For Papers</StyledLink></Link> */}
					<Link passHref href="./#speakers"><StyledLink>Speakers</StyledLink></Link>
					<Link passHref href="./#schedule"><StyledLink>Schedule</StyledLink></Link>
					<Link passHref href="./#sponsors"><StyledLink>Sponsors</StyledLink></Link>
					{/* <Link passHref href="/location"><StyledLink>Location</StyledLink></Link> */}
					<Link passHref href="./conduct"><StyledLink>Code of Conduct</StyledLink></Link>
					{/* <Link passHref href="https://forms.gle/pdJkmWLtVZc9qA889"><StyledLink>Inclusivity</StyledLink></Link> */}
					{/* <Link passHref href="https://forms.gle/VDqt8hHJJwQYA9Wt7"><StyledLink>Volunteers</StyledLink></Link> */}
					<AnchorButton href="" medium="true" target="_blank" rel="noopener noreferrer">Register now</AnchorButton>
				</NavLinks>
			</NavDesktopContainer>
			<MobileMenu />
		</Nav>
	)
}
