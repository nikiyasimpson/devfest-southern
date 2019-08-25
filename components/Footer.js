import Section from "./elements/Section"
import AnchorButton from "./elements/AnchorButton"
import Lead from "./elements/Lead"
import GDGLogo from './icons/gdg_logo.svg'

export default () => (
  <Section>
    <Lead>DevFest Houston 2019 is organized by</Lead>
    <h1 style={{ fontSize: '2.5em' }}><GDGLogo alt="GDG" width="110px" style={{ position: 'relative', top: '11px' }} /> GDG Houston</h1>
    <p className="cta">
      <AnchorButton color="red" href="https://www.meetup.com/Google-Developer-Group-GDG-Houston/" target="_blank" rel="noopener noreferrer">Join us on Meetup</AnchorButton>
    </p>
  </Section>
)

