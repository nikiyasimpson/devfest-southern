import Section from "./elements/Section"
import AnchorButton from "./elements/AnchorButton"
import Lead from "./elements/Lead"
import GDGLogo from './icons/gdg_logo.svg'
import TwitterLogo from './icons/twitter.svg'
import LinkedInLogo from './icons/linkedin-in.svg'
import InstagramLogo from './icons/instagram.svg'
import FacebookLogo from './icons/facebook.svg'
import SlackLogo from './icons/slack.svg'
import Meetup from './icons/meetup.svg'
import {TwitterLink,LinkedInLink,InstagramLink, FacebookLink, SlackLink, MeetupLink} from "./SocialLink";


export default () => (
  <Section>
	  <div style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}}>
		<h1 style={{ fontSize: '2.5em' }}><GDGLogo alt="GDG" width="110px" style={{ position: 'relative', top: '11px' }} /> GDGHouston</h1>
		<p className="cta" style={{ display: 'flex', flexDirection: 'column' }}>
		<AnchorButton color="red" href="https://www.meetup.com/Google-Developer-Group-GDG-Houston/" target="_blank" rel="noopener noreferrer">Join us on Meetup</AnchorButton>
		<span>
		<FacebookLink link="https://www.facebook.com/HoustonGDG/" color="blue" />
		<InstagramLink link="https://www.instagram.com/gdghouston/" color="blue" />
		<LinkedInLink link="https://www.linkedin.com/company/gdg-houston/" color="blue" />
		<SlackLink link="https://gdg-houston.slack.com" color="blue" />
		<TwitterLink username="gdghouston" color="blue" />
		{/* <MeetupLink link="https://www.meetup.com/Google-Developer-Group-GDG-Houston/" color="blue" /> */}
		</span>
		<Lead>Website Credits: ❤️ GDG New Orleans!</Lead>
		</p>
	  </div>


  </Section>
)

