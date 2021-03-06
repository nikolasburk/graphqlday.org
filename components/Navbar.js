import Navbar from 'components/Navbar'
import { eventbriteLink } from '../utils/config'

export default () => (
  <Navbar
    title="GraphQL Day Toronto"
    renderNormalLinks={renderNormalLinks}
    renderAnchorLinks={renderAnchorLinks}
  />
)

// Nav Links
const renderAnchorLinks = NavItem => [
  <NavItem key="1" href="#speakers" isAnchor={true}>
    Speakers
  </NavItem>,
  <NavItem key="2" href="#schedule" isAnchor={true}>
    Schedule
  </NavItem>,
  <NavItem key="3" href="#training" isAnchor={true}>
    Training
  </NavItem>,
  <NavItem key="4" href="#venue" isAnchor={true}>
    Venue
  </NavItem>,
  <NavItem key="5" href={eventbriteLink} isButtonStyle={true}>
    Tickets
  </NavItem>,
]

const renderNormalLinks = NavItem => [
  <NavItem key="1" href="#speakers">
    Speakers
  </NavItem>,
  <NavItem key="2" href="#schedule">
    Schedule
  </NavItem>,
  <NavItem key="3" href="#training" isAnchor={true}>
    Training
  </NavItem>,
  <NavItem key="4" href="#venue">
    Venue
  </NavItem>,
  <NavItem key="5" href={eventbriteLink} isButtonStyle={true}>
    Tickets
  </NavItem>,
]
