import {
  Text,
  AspectRatio,
  HStack,
  Box,
  VStack,
  OrderedList,
  ListItem,
  Flex
} from '@chakra-ui/react'
import { Hero } from '../components/Hero'
import { Container } from '../components/Container'
import { Main } from '../components/Main'
import { Footer } from '../components/Footer'
import { InlineWidget } from 'react-calendly'
import { useRouter } from "next/router"
import Link from "next/link"

interface promoTextContentData {
  "en": {
    title: string,
    disclaimer: string,
    appointmentText: string,
    listHeading: string,
    step1: string,
    step2: string,
    step3: string,
    step4: string,
    afterListText: string,
    map: string,
    footer: string,
  },
  "ua": {
    title: string,
    disclaimer: string,
    appointmentText: string,
    listHeading: string,
    step1: string,
    step2: string,
    step3: string,
    step4: string,
    afterListText: string,
    map: string,
    footer: string,
  },
  "pt": {
    title: string,
    disclaimer: string,
    appointmentText: string,
    listHeading: string,
    step1: string,
    step2: string,
    step3: string,
    step4: string,
    afterListText: string,
    map: string,
    footer: string,
  }
}

const promoTextContent: promoTextContentData = {
  "en": {
    title: 'Trinity Foodbank',
    disclaimer: "The food bank works by appointment ",
    appointmentText: "To make an appointment, use the form below, choose your time, enter your name, email address and please let us know how many people you need food for (adults and children are filled out separately)",
    listHeading: "How to fill out the form:",
    step1: "Select an available date in the calendar",
    step2: "Choose the time you need and press the 'Confirm' button",
    step3: "Enter the answers to the questions and click the 'Schedule event' button",
    step4: "Click the 'Confirm' button",
    afterListText: "Come at your chosen time at 2050 Dundas St E, Mississauga, ON L4X 1L9",
    map: "Find us here:",
    footer: "Made with ❤️ for all people",
  },
  "ua": {
    title: 'Фудбанк "Трініті"',
    disclaimer: "Фудбанк працює за попереднім записом",
    appointmentText: "Щоб зробити запис, скористайтеся формою нижче, оберіть свій час, введіть своє ім’я, електронну адресу та повідомте нам, будь ласка, на яку кількість людей вам потрібна їжа (дорослі та діти заповнюються окремо)",
    listHeading: "Як заповнити форму:",
    step1: "Оберіть доступну дату в календарі",
    step2: "Оберіть потрібний Вам час та натисніть кнопку 'Confirm'",
    step3: "Введіть відповіді на питання на натисніть кнопку 'Schedule event'",
    step4: "Натисніть кнопку 'Confirm'",
    afterListText: "Приходьте на обраний час за адресою 2050 Dundas St E, Mississauga, ON L4X 1L9",
    map: "Ми знаходимось тут:",
    footer: "Зроблено з ❤️ для всіх людей",
  },
  "pt": {
    title: 'Trinity Foodbank',
    disclaimer: "O banco de alimentos funciona com hora marcada",
    appointmentText: "Use o formulário abaixo, escolha seu horário, insira seu nome, endereço de e-mail e informe para quantas pessoas você precisa de alimentos (adultos e crianças são preenchidos separadamente)",
    listHeading: "Como preencher o formulário:",
    step1: "Selecione uma data disponível no calendário",
    step2: "Escolha o tempo que você precisa e pressione o botão 'Confirmar'",
    step3: "Digite as respostas para as perguntas e clique no botão 'Agendar evento'",
    step4: "Clique no botão 'Confirmar'",
    afterListText: "Venha no horário escolhido em 2050 Dundas St E, Mississauga, ON L4X 1L9",
    map: "Encontre-nos aqui:",
    footer: "Feito com ❤️ para todas as pessoas",
  },
};

const Index = () => {
  const { locale, asPath } = useRouter();
  const { title, disclaimer, appointmentText, listHeading, step1, step2, step3, step4, afterListText, map, footer } = promoTextContent[locale];

  return(
    <Container padding={4}>
      <Hero title={title} />
      <Main>
        <Flex flexWrap="wrap" alignItems="center">
          <Link
              href={asPath}
              locale="en"
            >
              <Box
                cursor='pointer'
                borderWidth='3px'
                borderRadius='35px'
                _checked={{
                  borderColor: 'blue.600',
                }}
                boxShadow={ locale === 'en' ? 'outline' : 'none' }
                mb={2}
                mr={3}
                px={3}
                py={1}
              >
                🇨🇦 English
              </Box>
            </Link>

            <Link
              href={asPath}
              locale="ua"
            >
              <Box
                cursor='pointer'
                borderWidth='3px'
                borderRadius='35px'
                _checked={{
                  borderColor: 'blue.600',
                }}
                boxShadow={ locale === 'ua' ? 'outline' : 'none' }
                mb={2}
                mr={3}
                px={3}
                py={1}
              >
                🇺🇦 Українська
              </Box>
            </Link>
            <Link
              href={asPath}
              locale="pt"
            >
              <Box
                cursor='pointer'
                borderWidth='3px'
                borderRadius='35px'
                _checked={{
                  borderColor: 'blue.600',
                }}
                boxShadow={ locale === 'pt' ? 'outline' : 'none' }
                mb={2}
                mr={3}
                px={3}
                py={1}
              >
                🇵🇹 Português
              </Box>
            </Link>
        </Flex>
        <VStack alignItems="start" spacing={4} mt={6}>
          <Text fontSize="lg" fontWeight={600}>
            {disclaimer}
          </Text> 
          <Text fontSize="md">
            {appointmentText}
          </Text>
          <Text fontSize="lg" fontWeight={600}>
            {listHeading}
          </Text>
          <OrderedList>
            <ListItem>{step1}</ListItem>
            <ListItem>{step2}</ListItem>
            <ListItem>{step3}</ListItem>
            <ListItem>{step4}</ListItem>
          </OrderedList>
          <Text fontSize="md">
            {afterListText}
          </Text>
        </VStack>
        <InlineWidget url="https://calendly.com/foodbanktrinity/appointment"
          styles={{
            height: '1030px',
            minWidth: '320px',
            width: '100%'
          }}
          pageSettings={{
            hideGdprBanner: true
          }}
        />
        <Text fontSize='4xl'>{map}</Text>
        <AspectRatio ratio={16 / 9} maxWidth='700px' minWidth='100%'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11552.59837565429!2d-79.573419!3d43.6242453!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x172826777ce80be7!2sThe%20Mississauga%20Food%20Bank!5e0!3m2!1sen!2sca!4v1664841696224!5m2!1sen!2sca'
          />
        </AspectRatio>
      </Main>

      <Footer>
        <Text>{footer}</Text>
      </Footer>
    </Container>
  )
}

export default Index
