import { Component } from 'react'
import styled from 'styled-components'

import { eventbriteLink } from '../utils/config'
import { muteText } from 'utils/colors'
import Container from 'components/Container'
import SectionTitle from 'components/SectionTitle'
import SectionContent from 'components/SectionContent'
import SectionSubtitleDesc from 'components/SectionSubtitleDesc'
import Ticket from 'components/Ticket'
import TicketsRow from 'components/TicketsRow'
import BigSwitch from 'components/BigSwitch'

const onlyTicketData = [
  {
    price: '59€',
    name: 'Early Bird',
    desc: 'Sold out',
    disabled: true,
  },
  {
    price: '69€',
    name: 'Regular',
    desc: 'Until 28th of March',
    disabled: false,
  },
  {
    price: '89€',
    name: 'Late Bird',
    desc: 'Until the very last minute',
    disabled: true,
  },
]

const withConfTicketData = [
  {
    price: '258€',
    name: 'Early Bird',
    desc: 'Not available',
    disabled: true,
  },
  {
    price: '276€',
    name: 'Early Bird',
    desc: 'Save €92',
    disabled: false,
  },
  {
    price: '258€',
    name: 'Late Bird',
    desc: 'Save €122',
    disabled: true,
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
            <Headings>
              <SectionTitle>Get your tickets!</SectionTitle>
              <SectionSubtitleDesc>
                Tickets for GraphQL Day include entry to the conference, the
                workshop and some delicious eats! Tickets for GraphQL Day
                qualify you for a discount for GraphQL Europe!
              </SectionSubtitleDesc>
            </Headings>

            <SwitchWrapper>
              <BigSwitch
                name="ticket-type"
                onChange={e =>
                  this.setState({
                    selectedOption: e.target.value,
                  })
                }
                selected={this.state.selectedOption}
                items={[
                  {
                    value: 'only',
                    label: 'Only GraphQL Day',
                  },
                  {
                    value: 'with-conf',
                    label: 'GraphQL Day + The Conference',
                    wrapperProps: { style: { maxWidth: 180 } },
                  },
                ]}
              />
            </SwitchWrapper>

            <TicketsRow.Row>
              {ticketData.map((ticket, i) => {
                return (
                  <TicketsRow.Item key={i}>
                    <Ticket
                      omniStyle={true}
                      price={ticket.price}
                      name={ticket.name}
                      desc={ticket.desc}
                      href={eventbriteLink}
                      disabled={ticket.disabled}
                    />
                  </TicketsRow.Item>
                )
              })}
            </TicketsRow.Row>

            <SideNote>
              Are you a student - or do you want to attend but just don’t have
              the means? We have set aside a number of tickets to include the
              community.{' '}
              <a href="mailto:support@graphql-europe.org">Write to us</a> and
              let us know why you should come.
            </SideNote>
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

const SwitchWrapper = styled.div`
  margin: 35px 0;
  display: flex;
  justify-content: center;
`

const SideNote = styled.p`
  padding: 0;
  margin: 50px auto 0 auto;
  text-align: center;
  line-height: 1.6;
  max-width: 850px;
  color: ${muteText};
`
