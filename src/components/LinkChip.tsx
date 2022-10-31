import { Box } from '@chakra-ui/react'

export const LinkChip = ({text, locale}) => {
  return(
    <Box
      cursor='pointer'
      borderWidth='3px'
      borderRadius='35px'
      _checked={{
        borderColor: 'blue.600',
      }}
      boxShadow={ locale === 'ua' ? 'outline' : 'none' }
      mb={2}
      px={3}
      py={1}
    >
      {text}
    </Box>
  )
}
