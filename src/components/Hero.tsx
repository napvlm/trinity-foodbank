import { Box, Heading } from '@chakra-ui/react'

export const Hero = ({ title }: { title: string }) => (
  <Box
    bgGradient="linear(to-l, heroGradientStart, heroGradientEnd)"
    bgClip="text"
    pt="5rem"
  >
    <Heading fontSize="6vw">{title}</Heading>
  </Box>
)

Hero.defaultProps = {
  title: 'Trinity Food Bank',
}
