import {
  Text,
  AspectRatio,
  Box,
  VStack,
  OrderedList,
  ListItem,
  Flex
} from '@chakra-ui/react'
import { Hero } from '../components/Hero'
import { Container } from '../components/Container'
import { Main } from '../components/Main'
import { InlineWidget } from 'react-calendly'
import { useRouter } from "next/router"
import Link from "next/link"

type textObj = {
    title: string,
    preTitle: string,
    disclaimer: string,
    appointmentText: string,
    twiceMonth: string,
    twoAppointmentNotice: string,
    noLongerOnWeekly: string,
    youCanOnly: string,
    furtherAssistance: string,
    forInformation: string,
    listHeading: string,
    formSteps1: string,
    formSteps2: string,
    formSteps3: string,
    formSteps4: string,
    afterListText: string,
    afterListText2: string,
    documentNotice: string,
    thingsToRemember1: string,
    thingsToRemember2: string,
    thingsToRemember3: string,
    thingsToRemember4: string,
    thingsToRemember5: string,
    thingsToRemember6: string,
    map: string,
}

interface promoTextContentData {
  "en": textObj,
  "ua": textObj,
  "pt": textObj,
  "sp": textObj,
}

const promoTextContent: promoTextContentData = {
  "en": {
    title: 'Trinity Food Bank',
    preTitle: 'Operates by appointment only.',
    disclaimer: "NOTICE",
    appointmentText: "To better serve our community, the following will be effective as of FEBRUARY 2023.",
    twiceMonth: "Clients can book an appointment TWICE A MONTH only.",
    twoAppointmentNotice: "If you book more than two appointments in one month, you will not be served at Trinity Food Bank.",
    noLongerOnWeekly: "We will no longer service clients on a weekly basis.",
    youCanOnly: "You can only visit Trinity Food Bank two times per month.",
    furtherAssistance: "If you require further food assistance throughout the month you may visit your local Neighborhood Food Bank for additional food assistance.",
    forInformation: "For information on your Neighborhood Food Bank please contact The Mississauga Food Bank at (905)270-5589",
    listHeading: "How to fill out the form:",
    formSteps1: "Select an available date in the calendar",
    formSteps2: "Choose the time you need and press the 'Confirm' button",
    formSteps3: "Enter the answers to the questions and click the 'Schedule event' button",
    formSteps4: "Click the 'Confirm' button",
    afterListText: "Come at your chosen time at 2050 Dundas St E, Mississauga, ON L4X 1L9",
    afterListText2: "If it will be your first time visiting our food bank, please bring (1) form of identification to complete your registration.",
    documentNotice: "Important Things to Remember:",
    thingsToRemember1: "You can only visit our food bank twice monthly and appointments are to be booked ONE PER HOUSEHOLD",
    thingsToRemember2: "Please  make sure that you arrive on time and only at the time of your appointment.",
    thingsToRemember3: "If you miss your appointment time, you will be asked to wait until the next available time slot, if there are any available on that day.",
    thingsToRemember4: "Time slots are limited and are first come, first serve. You will only be allowed to book an appointment 6 days in advance. New appointments are released every Thursday eveningfor the upcoming week. If you access the link and there are no appointments available, please try again at a later time.",
    thingsToRemember5: "Please remember to cancel your appointment through the confirmation email you received if you can no longer visit us at that time",
    thingsToRemember6: "Most importantly, please remember to be respectful of everyone who visits Trinity Food Bank. Supplies are limited and we ask that you take only what you need for a seven-day supply",
    map: "Find us here:",
  },
  "ua": {
    title: "Trinity Food Bank",
     preTitle: "Працює лише за попереднім записом.",
     disclaimer: "УВАГА",
     appointmentText: "Для кращого обслуговування нашої спільноти наступне набуде чинності з ЛЮТОГО 2023 РОКУ",
     twiceMonth: "Клієнти можуть записатися на прийом лише ДВІЧІ НА МІСЯЦЬ.",
     twoAppointmentNotice: "Якщо ви бронюєте більше двох зустрічей протягом одного місяця, вас не обслуговуватимуть у Trinity Food Bank.",
     noLongerOnWeekly: "Ми більше не обслуговуватимемо клієнтів щотижня.",
     youCanOnly: "Ви можете відвідувати Trinity Food Bank лише два рази на місяць.",
     furtherAssistance: "Якщо вам потрібна додаткова продовольча допомога протягом місяця, ви можете відвідати місцевий районний продовольчий банк для отримання додаткової продовольчої допомоги.",
     forInformation: "Для отримання інформації про ваш Neighborhood Food Bank, будь ласка, зверніться до The Mississauga Food Bank за номером (905)270-5589",
     listHeading: "Як заповнити форму:",
     formSteps1: "Виберіть вільну дату в календарі",
     formSteps2: 'Виберіть потрібний час і натисніть кнопку "Підтвердити"',
     formSteps3: "Введіть відповіді на запитання та натисніть кнопку 'Запланувати подію'",
     formSteps4: 'Натисніть кнопку "Підтвердити"',
     afterListText: "Приходьте у вибраний час за адресою 2050 Dundas St E, Mississauga, ON L4X 1L9",
     afterListText2: "Якщо ви вперше відвідуєте наш банк їжі, будь ласка, принесіть (1) форму ідентифікації, щоб завершити реєстрацію.",
     documentNotice: "Важливі речі, які слід пам'ятати:",
     thingsToRemember1: "Ви можете відвідувати наш банк харчування лише двічі на місяць, і зустрічі потрібно записувати ОДНУ НА ДОМАГОДАРСТВО",
     thingsToRemember2: "Будь ласка, переконайтеся, що ви прибули вчасно і лише в призначений час.",
     thingsToRemember3: "Якщо ви пропустите призначений час, вам буде запропоновано зачекати до наступного вільного часу, якщо він буде вільний у цей день.",
     thingsToRemember4: "Часові інтервали обмежені та приймаються першим. Вам буде дозволено забронювати зустріч лише за 6 днів. Нові зустрічі публікуються щочетверга ввечері для наступного тижня. Якщо ви перейдете за посиланням, а зустрічі немає доступний, спробуйте пізніше.",
     thingsToRemember5: "Будь ласка, не забудьте скасувати свою зустріч через електронний лист із підтвердженням, який ви отримали, якщо ви більше не можете відвідати нас у цей час",
     thingsToRemember6: "Найголовніше, будь ласка, не забувайте поважати кожного, хто відвідує Trinity Food Bank. Запаси обмежені, і ми просимо вас брати лише те, що вам потрібно для семиденного запасу",
     map: "Знайти нас тут:",
  },
  "pt": {
    title: 'Trinity Food Bank',
    preTitle: 'Opera apenas com hora marcada.',
    disclaimer: "AVISO",
    appointmentText: "Para melhor atender nossa comunidade, o seguinte entrará em vigor a partir de FEVEREIRO de 2023.",
    twiceMonth: "Clientes podem agendar apenas DUAS VEZES POR MÊS.",
    twoAppointmentNotice: "Se você marcar mais de duas consultas em um mês, não será atendido no Trinity Food Bank.",
    noLongerOnWeekly: "Não atenderemos mais clientes semanalmente.",
    youCanOnly: "Você só pode visitar o Trinity Food Bank duas vezes por mês.",
    furtherAssistance: "Se necessitar de mais assistência alimentar ao longo do mês, pode visitar o Banco Alimentar do seu Bairro para obter assistência alimentar adicional.",
    forInformation: "Para obter informações sobre o seu Neighborhood Food Bank, entre em contato com o The Mississauga Food Bank em (905) 270-5589",
    listHeading: "Como preencher o formulário:",
    formSteps1: "Selecione uma data disponível no calendário",
    formSteps2: "Escolha o tempo que você precisa e pressione o botão 'Confirmar'",
    formSteps3: "Digite as respostas das perguntas e clique no botão 'Agendar evento'",
    formSteps4: "Clique no botão 'Confirmar'",
    afterListText: "Venha no horário escolhido em 2050 Dundas St E, Mississauga, ON L4X 1L9",
    afterListText2: "Caso seja a primeira vez que visita o nosso banco alimentar, por favor traga (1) documento de identificação para completar o seu registo.",
    documentNotice: "Coisas importantes a serem lembradas:",
    thingsToRemember1: "Você só pode visitar nosso banco de alimentos duas vezes por mês e as consultas devem ser marcadas UMA POR AGREGADO",
    thingsToRemember2: "Por favor, certifique-se de chegar na hora e somente na hora marcada.",
    thingsToRemember3: "Se você perder o horário marcado, será solicitado que você aguarde até o próximo horário disponível, se houver algum disponível naquele dia.",
    thingsToRemember4: "Os horários são limitados e são por ordem de chegada. Você só poderá marcar um horário com 6 dias de antecedência. Novos agendamentos serão liberados todas as quintas-feiras à noite para a próxima semana. Se você acessar o link e não houver agendamentos disponível, tente novamente mais tarde.",
    thingsToRemember5: "Por favor, lembre-se de cancelar seu compromisso através do e-mail de confirmação que você recebeu se não puder mais nos visitar naquele momento",
    thingsToRemember6: "Mais importante, lembre-se de respeitar todos os que visitam o Trinity Food Bank. Os suprimentos são limitados e pedimos que você leve apenas o necessário para um suprimento de sete dias",
    map: "Encontre-nos aqui:",
  },
  "sp": {
    title: 'Trinity Food Bank',
    preTitle: 'Opera solo con cita previa',
    disclaimer: "AVISO",
    appointmentText: "Para servir mejor a nuestra comunidad, lo siguiente entrará en vigencia a partir de FEBRERO DE 2023",
    twiceMonth: "Los clientes pueden reservar una cita solo DOS VECES AL MES.",
    twoAppointmentNotice: "Si reserva más de dos citas en un mes, no se le atenderá en Trinity Food Bank",
    noLongerOnWeekly: "Ya no atenderemos a los clientes semanalmente.",
    youCanOnly: "Solo puedes visitar Trinity Food Bank dos veces al mes.",
    furtherAssistance: "Si necesita más asistencia alimentaria durante el mes, puede visitar el Banco de Alimentos de su vecindario local para obtener asistencia alimentaria adicional",
    forInformation: "Para obtener información sobre el banco de alimentos de su vecindario, comuníquese con el banco de alimentos de Mississauga al (905) 270-5589",
    listHeading: "Cómo llenar el formulario:",
    formSteps1: "Seleccione una fecha disponible en el calendario",
    formSteps2: "Elija la hora que necesita y presione el botón 'Confirmar'",
    formSteps3: "Ingrese las respuestas a las preguntas y haga clic en el botón 'Programar evento'",
    formSteps4: "Haga clic en el botón 'Confirmar'",
    afterListText: "Ven a la hora que elijas en 2050 Dundas St E, Mississauga, ON L4X 1L9",
    afterListText2: "Si es la primera vez que visita nuestro banco de alimentos, traiga (1) forma de identificación para completar su registro",
    documentNotice: "Cosas importantes para recordar:",
    thingsToRemember1: "Solo puede visitar nuestro banco de alimentos dos veces al mes y las citas deben reservarse UNA POR HOGAR",
    thingsToRemember2: "Asegúrese de llegar a tiempo y solo a la hora de su cita.",
    thingsToRemember3: "Si pierde la hora de su cita, se le pedirá que espere hasta el próximo horario disponible, si hay alguno disponible ese día",
    thingsToRemember4: "Los espacios de tiempo son limitados y se asignan por orden de llegada. Solo se le permitirá reservar una cita con 6 días de anticipación. Se publican nuevas citas todos los jueves por la noche para la próxima semana. Si accede al enlace y no hay citas disponible, inténtalo de nuevo más tarde.",
    thingsToRemember5: "Recuerde cancelar su cita a través del correo electrónico de confirmación que recibió si ya no puede visitarnos en ese momento",
    thingsToRemember6: "Lo más importante es que recuerde ser respetuoso con todos los que visiten Trinity Food Bank. Los suministros son limitados y le pedimos que lleve solo lo que necesita para un suministro de siete días",
    map: "Encuéntranos aquí:",
  },
};

const Index = () => {
  const { locale, asPath } = useRouter();
  const { ...text } = promoTextContent[locale];

  return(
    <Container padding={10}>
      <Hero title={text.title} preTitle={text.preTitle}/>
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
          <Link
            href={asPath}
            locale="sp"
          >
            <Box
              cursor='pointer'
              borderWidth='3px'
              borderRadius='35px'
              _checked={{
                borderColor: 'blue.600',
              }}
              boxShadow={ locale === 'sp' ? 'outline' : 'none' }
              mb={2}
              mr={3}
              px={3}
              py={1}
            >
              🇪🇸 Español
            </Box>
          </Link>
        </Flex>
        <VStack alignItems="start" spacing={4} mt={6}>
          <Text fontSize="lg" fontWeight={600}>
            {text.disclaimer}
          </Text> 
          <Text fontSize="md">
            {text.appointmentText}
          </Text>
          <Text fontSize="lg" fontWeight={600}>
            {text.twiceMonth}
          </Text>
          <Text fontSize="md">
            {text.twoAppointmentNotice}
          </Text>
          <Text fontSize="lg" fontWeight={600}>
            {text.noLongerOnWeekly}
          </Text>
          <Text fontSize="md">{text.youCanOnly}</Text>
          <Text fontSize="md">{text.furtherAssistance}</Text>
          <Text fontSize="md">{text.forInformation}</Text>
          <Text fontSize="lg" fontWeight={600}>
            {text.listHeading}
          </Text>
          <OrderedList>
            <ListItem>{text.formSteps1}</ListItem>
            <ListItem>{text.formSteps2}</ListItem>
            <ListItem>{text.formSteps3}</ListItem>
            <ListItem>{text.formSteps4}</ListItem>
          </OrderedList>
          <Text fontSize="md">
            {text.afterListText}
          </Text>
          <Text fontSize="md">
            {text.afterListText2}
          </Text>
          <Text fontSize="lg" fontWeight={600}>
            {text.documentNotice}
          </Text>
          <OrderedList>
            <ListItem>{text.thingsToRemember1}</ListItem>
            <ListItem>{text.thingsToRemember2}</ListItem>
            <ListItem>{text.thingsToRemember3}</ListItem>
            <ListItem>{text.thingsToRemember4}</ListItem>
            <ListItem>{text.thingsToRemember5}</ListItem>
            <ListItem>{text.thingsToRemember6}</ListItem>
          </OrderedList>
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
        <Text fontSize='4xl'>{text.map}</Text>
        <AspectRatio ratio={16 / 9} maxWidth='700px' minWidth='100%'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.217108313032!2d-79.5678065!3d43.62284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b380691ba8a4b%3A0x99fd5808ec519501!2s2050%20Dundas%20St%20E%2C%20Mississauga%2C%20ON%20L4X%201L9!5e0!3m2!1sen!2sca!4v1675634181749!5m2!1sen!2sca'
          />
        </AspectRatio>
      </Main>
    </Container>
  )
}

export default Index
