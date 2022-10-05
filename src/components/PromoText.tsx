import { Highlight, Text, VStack } from '@chakra-ui/react'

export const PromoText = () => {
  return (
    <VStack alignItems="start" spacing={4}>
      <Text fontSize="md">
        At Trinity House of Hope we are dedicated to embracing the need to help people in the area of food security.
        We are passionate about wellness in this area, and this is why we opened our food bank in 2020.
      </Text>
      <Text fontSize="md">
      <Highlight query='open to all' styles={{ px: '2', py: '1', bg: 'blue.100', rounded: 'full' }}>
        We are open to all who want to come and we welcome all people.
      </Highlight>
      </Text> 
      <Text fontSize="md">
        <Highlight query='by appointment' styles={{ px: '2', py: '1', bg: 'blue.100', rounded: 'full' }}>
          Trinity Food Bank is opened weekly by appointment providing a seven day supply of nutritious food on each visit.
          We are usually able to offer fresh vegetables and legumes, meat products, eggs, milk, bread products, canned and dried non-perishable foods. From time to time we also have household goods, personal care products, as well as baby supplies and products.
          Supplies and quantities vary from week-to-week based on the support and donations of our partners. We aim to offer choice and variety, however please keep in mind that your choice of food depends on what is available.
          We observe strict health protocols and will provide masks and gloves at the registration table to keep everyone safe.
        </Highlight>
      </Text>
      <Text fontSize="lg" fontWeight={600}>
        <Highlight query='use form below' styles={{ px: '2', py: '1', bg: 'blue.100', rounded: 'full' }}>
          To book appointment use form below, please provide you name, contact details, and food bank ID (if you have one)
        </Highlight>
      </Text>
    </VStack>
  )
}
