import { Box, Heading, Text } from '@chakra-ui/react'

export const Hero = ({ title, preTitle }: { title: string, preTitle: string }) => (
  <Box pt="5rem" textAlign="center">
    <Heading fontSize="6vw" pt="5rem">{title}</Heading>
    <Text fontSize="3xl" pt="1rem">{preTitle}</Text>
  </Box>
)

Hero.defaultProps = {
  title: 'Trinity Food Bank',
}
