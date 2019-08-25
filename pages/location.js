import VenueMap from "../components/VenueMap";
import Layout from "../components/Layout";
import PageTitle from "../components/elements/PageTitle";
import Section from "../components/elements/Section";
import Footer from "../components/Footer"
import AnchorButton from "../components/elements/AnchorButton";

export default () => (
  <Layout>
    <Section>
      <PageTitle>CUBiO Innovation Center</PageTitle>
      <p>
      CUBiO is a healthcare incubator and innovative co-working space that not only provides healthcare innovators with office space but also with access to a wide range of diverse resources from human capital, business partners, to investors.
      </p>
      {/* <h2>Travel &amp; Parking</h2>
      <p>Your best option for travel is by the St Charles streetcar route. The venue is only two blocks off of St. Charles Avenue.</p>
      <p>If you drive, you can find street parking on St. Charles Avenue and some of the neighborhood streets. Please note that many of the neighborhood streets restrict parking to less than 2 hours. Please obey all parking regulations.</p> */}
      <VenueMap />
    </Section>

    <Section color="blue">
      <h1>Welcome to Houston!</h1>
      <p>First time in Houston? Here are some recommendations from locals on restaurants, bars, music, and family-friendly things to do while you're here, we've created a curated a google map just for you!</p>
      <p className="cta"><AnchorButton color='white/blue' href="https://www.google.com/maps/d/viewer?mid=1cLWD_oEPW0BXhThUBINYCknNVZo&msa=0&ll=29.61219238035241%2C-95.51205349999998&z=9" target="_blank" rel="noopener noreferrer">Things to do</AnchorButton></p>
    </Section>

    <Footer />
  </Layout>
)
