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
      <p><b>7707 Fannin St Ste. 200, Houston, TX 77054</b></p>
      <p>
      CUBiO is a healthcare incubator and innovative co-working space that not only provides healthcare innovators with office space but also with access to a wide range of diverse resources from human capital, business partners, to investors.
      </p>
      <h2>Travel &amp; Parking</h2>
      <p>Office is on the second floor. You'll see a long, glass window facing the elevators and the CUBIO logo.  Parking in the front is free, and there is additional free visitor parking at the back of the building.</p>
      <p>If the parking lot at the back of the building is full as well, you may also park on the small side street that leads to "Sun Behavior Houston" at the back of the building.</p>
      <img src="../static/CUBIOParking.JPG" alt="parking_image" width="80%" height="50%"></img>
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
