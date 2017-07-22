import Page from '../components/Page';

const Content = (props) => (
	<div>
		<h1>{props.url.query.title}</h1>
		<p>This is static Content.</p>
	</div>
);

export default (props) => (

	<Page>
		<Content url={props.url} />
	</Page>
);