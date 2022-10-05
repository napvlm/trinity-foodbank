import {
  Text,
  AspectRatio
} from '@chakra-ui/react'
import { Hero } from '../components/Hero'
import { Container } from '../components/Container'
import { Main } from '../components/Main'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import { Footer } from '../components/Footer'
import { LanguageSwitch } from '../components/LanguageSwitch'
import { PromoText } from '../components/PromoText'
import { InlineWidget } from 'react-calendly'

const Index = () => (
  <Container>
    <Hero />
    <Main>
      <LanguageSwitch />
      <PromoText />
      <InlineWidget url="https://calendly.com/ruslan-anisimov/5min"
        styles={{
          height: '1030px',
          minWidth: '320px',
          width: '100%'
        }}
      />
      <Text fontSize='4xl'>Find us here:</Text>
      <AspectRatio ratio={16 / 9} maxWidth='700px' minWidth='100%'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11552.59837565429!2d-79.573419!3d43.6242453!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x172826777ce80be7!2sThe%20Mississauga%20Food%20Bank!5e0!3m2!1sen!2sca!4v1664841696224!5m2!1sen!2sca'
        />
      </AspectRatio>
    </Main>

    <DarkModeSwitch />
    <Footer>
      <Text>Made with ❤️ for all people</Text>
    </Footer>
  </Container>
)

export default Index
