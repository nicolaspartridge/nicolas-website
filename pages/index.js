import NextLink from 'next/link'
import { Button, Container, Box, Heading, Image, Icon, useColorModeValue, List, ListItem, Link } from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import {
  IoLogoTwitter,
  IoLogoGithub
} from 'react-icons/io5'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'

const Page = () => {
  return (
    <Layout>
    <Container>
      <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
        Hello, I&apos;m a full-stack developer based in Canada!
      </Box>
      
      <Box display={{md:'flex'}}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Nicolas Partridge
          </Heading>
          <p>Digital Craftsman ( Artist / Developer / Designer )</p>
        </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center" 
            >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/takuya.jpg"
              alt="Profile Image"
            />

          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>Nicolas is a freelance developer based in Vancouver with a passion
            for building digital services/stuff he wants. He has a knack for all things launching products,
            from planning and designing all the way to solving real-life problems with code.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>
        
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>Born</BioYear>
            Vancouver, Canada.
          </BioSection>
          <BioSection>
            <BioYear>2013</BioYear>
            First started programming ( Python )
          </BioSection>
          <BioSection>
            <BioYear>2015</BioYear>
            Started doing web-development
          </BioSection>
          <BioSection>
            <BioYear>2017</BioYear>
            Started working with react.js
          </BioSection>
          <BioSection>
            <BioYear>2019</BioYear>
            Began working as a freelancer
          </BioSection>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Im interested in
          </Heading>
          <Paragraph>
            Mathematics, Economics, Philosophy, Blockchain + Crypto Development
          </Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/nicolaspartridge" target="_blank">
                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoGithub} />}>@nicolaspartridge</Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/nicolaspartridge" target="_blank">
                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoTwitter} />}>@titanhash</Button>
              </Link>
            </ListItem>
          </List>
        </Section>
    </Container>
    </Layout>
  )
}

export default Page
