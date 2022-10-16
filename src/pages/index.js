import NextLink from "next/link"
import { Container, Box, Heading, Image, useColorModeValue, Link, Button, ListItem, List, Icon} from "@chakra-ui/react"
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import { ChevronRightIcon } from "@chakra-ui/icons"
import {BioSection, BioYear} from "../components/bio"
import {IoLogoGithub, IoLogoInstagram, IoLogoDiscord, IoLogoLinkedin} from "react-icons/io5"


const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500','whiteAlpha.200')} p={3} mb={6} align="center">
                Hello, I'm a full stack developer based in India!
            </Box>

            <Box display={{md: 'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Rishabh Sinha
                    </Heading>
                    <p>Digital creaftman (Artist / Developer / Designer)</p>
                </Box>
                <Box flexShrink={0} mt={{base:4, md: 0}} ml={{md: 6}} align='center'>
                    <Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxwidth="100px" display="inline-block" borderRadius="full" src="/Rishabh.png"></Image>
                </Box>
            </Box>
            
        <Section delay={0.5}>
            <Heading as="h3" variant="section-title">
                Work
            </Heading>
            <Paragraph>
                Rishabh is a full-stack developer based in India with a passion for building digital services and learn new things as they come. He has a knack of all things
                launching products, from planning and desigining all the way to solving real-life problems with code. When not online, he loves hangging out with his guitar. Currently
                he is working as a software developer at Amazon Alexa. Follow his work on <Link href="https://github.com/RishabhSinha07/"  target="_blank">GitHub</Link> and feel free to reach out to him on <Link href="https://www.linkedin.com/in/rishabh-sinha-99a706164/"  target="_blank">Linkedin</Link>.
            </Paragraph>
            <Box align="center" my={4}>
                <NextLink href="/works">
                    <Button rightIcon={<ChevronRightIcon/>} colorScheme="teal">My portfolio</Button>
                </NextLink>
            </Box>
        </Section>
        <Section delay={0.2}>
            <Heading as="h3" variant="section-title">
                Bio
            </Heading>
            <BioSection>
                <BioYear>1998</BioYear>
                Born in Sasaram (सासाराम), India.
            </BioSection>
            <BioSection>
                <BioYear>2020</BioYear>
                Completed BTECH in Mechatronics Engineering from MIT Manipal.
            </BioSection>
            <BioSection>
                <BioYear>2020</BioYear>
                Joined Amazon Alexa team as a process specialist.
            </BioSection>
            <BioSection>
                <BioYear>2021</BioYear>
                Got promoted to process specialist II.
            </BioSection>
            <BioSection>
                <BioYear>2022</BioYear>
                Started working as a software developer @Amazon Alexa.
            </BioSection>
        </Section>
        <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
                I ♥
        </Heading>
        <Paragraph>
            Music,
            Playing Guitar,
            Art,
            Gaming,
            Learning new skills,
            Capture the flag (CTF),
            Ethical hacking
        </Paragraph>
        </Section>
        <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
            On the web
        </Heading>
        <List>
            <ListItem>
                <Link href="https://github.com/RishabhSinha07/" target="_blank">
                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoGithub}/>}>@github</Button>
                </Link>
            </ListItem>
            <ListItem>
                <Link href="https://www.linkedin.com/in/rishabh-sinha-99a706164/" target="_blank">
                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoLinkedin}/>}>@linkedin</Button>
                </Link>
            </ListItem>
            <ListItem>
                <Link href="https://www.instagram.com/rishabh_s1nha/" target="_blank">
                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoInstagram}/>}>@Instagram</Button>
                </Link>
            </ListItem>
            <ListItem>
                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoDiscord}/>}>@Discord: Hiccup#8665</Button>
            </ListItem>
        </List>
        </Section>
        </Container>
    )
}

export default Page