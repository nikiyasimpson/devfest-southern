import styled from 'styled-components'
import GithubLogo from './icons/github.svg'
import TwitterLogo from './icons/twitter.svg'
import LinkedInLogo from './icons/linkedin-in.svg'
import WebsiteLogo from './icons/globe-africa.svg'
import BlogLogo from './icons/pen-nib.svg'
import InstagramLogo from './icons/instagram.svg'
import FacebookLogo from './icons/facebook.svg'
import SlackLogo from './icons/slack.svg'
import MeetupLogo from './icons/meetup.svg'

const StyledLink = styled.a`
  margin-right: 12px;
  svg {
    width: 24px;
  }
`

const SocialLink = ({href, children}) => (
  <StyledLink href={href} target="_blank" rel="noopener noreferrer" >
    {children}
  </StyledLink>
)

export const GithubLink = ({ username }) => (
  <SocialLink href={`https://github.com/${username}`}>
    <GithubLogo />
  </SocialLink>
)

export const TwitterLink = ({ username }) => (
  <SocialLink href={`https://twitter.com/${username}`}>
    <TwitterLogo />
  </SocialLink>
)

export const LinkedInLink = ({ link }) => (
  <SocialLink href={link}>
    <LinkedInLogo />
  </SocialLink>
)

export const WebsiteLink = ({ link }) => (
  <SocialLink href={link}>
    <WebsiteLogo />
  </SocialLink>
)

export const BlogLink = ({ link }) => (
  <SocialLink href={link}>
    <BlogLogo />
  </SocialLink>
)

export const InstagramLink = ({ link }) => (
  <SocialLink href={link}>
    <InstagramLogo />
  </SocialLink>
)
export const FacebookLink = ({ link }) => (
  <SocialLink href={link}>
    <FacebookLogo />
  </SocialLink>
)
export const SlackLink = ({ link }) => (
  <SocialLink href={link}>
    <SlackLogo />
  </SocialLink>
)
export const MeetupLink = ({ link }) => (
  <SocialLink href={link}>
    <MeetupLogo />
  </SocialLink>
)
