import { Box, HStack, useRadio, useRadioGroup } from "@chakra-ui/react"

function RadioCard(props) {
  const { getInputProps, getCheckboxProps } = useRadio(props)

  const input = getInputProps()
  const checkbox = getCheckboxProps()

  return (
    <Box as='label'>
      <input {...input} />
      <Box
        {...checkbox}
        cursor='pointer'
        borderWidth='3px'
        borderRadius='35px'
        _checked={{
          borderColor: 'blue.600',
        }}
        _focus={{
          // boxShadow: 'outline',
        }}
        mb={1}
        px={3}
        py={1}
      >
        {props.children}
      </Box>
    </Box>
  )
}


export const LanguageSwitch = () => {
  const options = ['🇨🇦 English', '🇵🇹 Português', '🇺🇦 Українська']

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'language',
    defaultValue: '🇨🇦 English',
    onChange: console.log,
  })

  const group = getRootProps()

  return (
    <HStack {...group} flexWrap='wrap'>
      {options.map((value) => {
        const radio = getRadioProps({ value })
        return (
          <RadioCard key={value} {...radio}>
            {value}
          </RadioCard>
        )
      })}
    </HStack>
  )
}
