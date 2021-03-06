import { Component } from 'react'
import { Subscribe } from 'unstated'
import styled from 'styled-components'

import { eventbriteLink } from '../utils/config'
// import { muteText } from 'utils/colors'
import ModalContainer from '../containers/ModalContainer'
import Container from 'components/Container'
import SectionContent from 'components/SectionContent'
import SectionSubtitleDesc from 'components/SectionSubtitleDesc'
import Ticket from 'components/Ticket'
import TicketsRow from 'components/TicketsRow'
// import BigSwitch from 'components/BigSwitch'

const onlyTicketData = [
  {
    price: '$100',
    name: 'Conference Admission',
    // desc: 'Access to the conference?',
    disabled: false,
    href: eventbriteLink,
  },
  {
    price: 'Starts at $495',
    name: 'Conference Training + Admission',
    // desc: 'Access to the conference?',
    disabled: false,
    href: eventbriteLink,
  },
]

class GetYourTicket extends Component {
  state = {
    selectedOption: 'only',
  }

  render() {
    const ticketData =
      this.state.selectedOption === 'only' ? onlyTicketData : withConfTicketData
    return (
      <Wrapper id="get-your-ticket">
        <Container>
          <SectionContent>
            <Subscribe to={[ModalContainer]}>
              {modal => (
                <TicketsRow.Row>
                  {ticketData.map((ticket, i) => {
                    return (
                      <TicketsRow.Item key={i}>
                        <Ticket
                          omniStyle={true}
                          price={ticket.price}
                          name={ticket.name}
                          desc={ticket.desc}
                          href={ticket.href}
                          onSelect={() => ticket.disabled || modal.show()}
                          disabled={ticket.disabled}
                        />
                      </TicketsRow.Item>
                    )
                  })}
                </TicketsRow.Row>
              )}
            </Subscribe>
            <Headings style={{ marginTop: 24 }}>
              <SectionSubtitleDesc>
                Tickets for GraphQL Day Toronto include entry to the conference,
                delicious eats, and reception.
              </SectionSubtitleDesc>
            </Headings>
          </SectionContent>
        </Container>
      </Wrapper>
    )
  }
}

export default GetYourTicket

const Wrapper = styled.section``

const Headings = styled.div`
  text-align: center;
`

// const SwitchWrapper = styled.div`
//   margin: 35px 0;
//   display: flex;
//   justify-content: center;
// `

// const SideNote = styled.p`
//   padding: 0;
//   margin: 50px auto 0 auto;
//   text-align: center;
//   line-height: 1.6;
//   max-width: 850px;
//   color: ${muteText};
// `
