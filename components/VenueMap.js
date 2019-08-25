import styled from 'styled-components'

const MapContainer = styled.div`
  height: 400px;
  margin: 30px 0;
  max-width: 600px;
  overflow: hidden;
  position: relative;
  width: 100%;

  iframe {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
`

export default () => (
  <MapContainer>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3466.0171988954858!2d-95.40461114602502!3d29.690281035050578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c0057cffffff%3A0x7566bf063c65497!2sCUBIO%20Innovation%20Center!5e0!3m2!1sen!2sus!4v1566659080847!5m2!1sen!2sus" width="600" height="450" frameborder="0" allowfullscreen=""></iframe>
  </MapContainer>
)
