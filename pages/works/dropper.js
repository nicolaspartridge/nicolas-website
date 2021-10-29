import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Inkdrop">
      <Container>
        <Title>
          Inkdrop <Badge>2016</Badge>
        </Title>
        <P>
          An app-store explorer, where users can view all the verified apps in the Solana ecosystem.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            N/A
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Web</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>ReactJS</span>
          </ListItem>
        </List>

        <WorkImage src="/images/works/dropper_eyecatch.png" alt="Dropper" />
        <WorkImage src="/images/works/dropper_eyecatch2.png" alt="Dropper" />
      </Container>
    </Layout>
  )
}

export default Work
