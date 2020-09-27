import styled from 'styled-components'
import Layout from "../components/Layout";
import PersonList from "../components/Person/PersonList";
import AnchorButton from "../components/elements/AnchorButton";
import OffsetHeading from "../components/elements/OffsetHeading";
import Section from "../components/elements/Section";
import SponsorList from "../components/SponsorList";
import DevFestLogo from '../components/icons/southerndev.svg';
import GDGLogo from '../components/icons/gdg_logo.svg';
import Footer from '../components/Footer';
import Anchor from '../components/elements/Anchor';
import Schedule from '../components/Schedule';
import Emcee from '../components/Emcee';
import Tito from '../components/Tito';
const speakers = require('../data/speakers.yml.json')
const schedule = require('../data/schedule.yml.json')
const sponsors = require('../data/sponsors.yml.json')
const partners = require('../data/partners.yml.json')
const organizers = require('../data/organizers.yml.json')

const Title = styled.h1`
  font-family: 'Product Sans', sans-serif;
  margin-left: 20px;
  text-align: center;
  &#title {
    display: none;
    overflow: hidden;
    @media (min-width: 768px) { 
      display: block;
      width: 100%;
      font-size: 3em;
    }
  }
  &#mobiletitle {
    display: none;
    overflow: hidden;
    @media (max-width: 767px) {
      display: block;
    }
    @media (min-width: 768px) {
      display: none;
    }
  }
`

export default () => (
  <Layout>
    <Section skyline>
      <Title id="title">
        <DevFestLogo alt=" Southern DevFest 2020" />
        <h1 style={{ fontSize: '34px', marginTop: '25px', textAlign: 'center'}}>Virtual, November 7, 2020</h1>
      </Title>
      <Title id="mobiletitle">
        <GDGLogo alt="GDG" width="70px" height="35px" /> <br/>
        <h1 style={{ fontSize: '34px', marginTop: '25px', textAlign: 'center'}}>Southern DevFest</h1>
        <h1 style={{ fontSize: '24px', marginTop: '25px', textAlign: 'center'}}>November 7, 2020</h1>
      </Title>
    </Section>

    <Section color="blue">
      <p>Southern DevFest is a single-day, single-track, inclusive conference for all developers. GDG Chapters and Women Techmakers from the Southern region of US invite you to join us on Saturday, November 7, 2020  virtually for for our first Southern DevFest!</p>
      {/* <p>We are pleased to offer a limited number of inclusivity scholarships to potential attendees. <Anchor href="https://forms.gle/pdJkmWLtVZc9qA889" target="_blank" rel="noopener noreferrer" color="white">Apply here</Anchor>.</p> */}
      {/* <Tito /> */}
      <p className="cta">
        <AnchorButton color='white/blue' href="" target="_blank" rel="noopener noreferrer">Register now</AnchorButton>
      </p>
    </Section>

    <Section>
      <OffsetHeading id="speakers">Speakers</OffsetHeading>
      <PersonList people={speakers} rainbow />
    </Section>

    {/* <Section>
      <OffsetHeading id="emcee">Master of Ceremonies</OffsetHeading>
      <Emcee {...emcee} />
    </Section > */}

    <Section color="blue">
      <OffsetHeading id="schedule">Schedule</OffsetHeading>
      <Schedule schedule={schedule} />
    </Section >

    <Section>
      <OffsetHeading id="sponsors">Sponsors</OffsetHeading>
      <SponsorList sponsors={sponsors} />
      <p>Sponsorship offers marketing exposure, hiring help, and adoration from our community, and can be in-kind (space, drinks, volunteers, swag, etc.) or monetary. Interested in becoming a sponsor? Contact us today:</p>
      <p className="cta">
        <AnchorButton href="https://forms.gle/C6ueQfWL47uTHxUs9" target="_blank" rel="noopener noreferrer">Become a sponsor</AnchorButton>
      </p>
    </Section>

    <Section>
      <OffsetHeading id="partner-organizations">Partner Organizations</OffsetHeading>
      <SponsorList sponsors={partners} />
    </Section>

    <Section color='red'>
      <OffsetHeading id="organizers">Organizers</OffsetHeading>
      <PersonList people={organizers} />
    </Section >

    <Footer />
  </Layout>
)
