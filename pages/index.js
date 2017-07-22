import Link from 'next/link'
import Page from '../components/Page'

const PostLink = (props) => (
  <li>
    <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

export default () => (
  <Page>
    <h1>Welcome To My Blog</h1>
    <PostLink id="hello-first-post" title="Hello first Post"/>
    <PostLink id="hello-second-post" title="Hello Second Post"/>
    <PostLink id="omg-the-third" title="OMG THE THIRD"/>
    <PostLink id="the-last...?" title="The last...?"/>

  </Page>
);
