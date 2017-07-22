import Link from 'next/link'

const style = {
	marginRight: 15
}

const Header = () => (

	<header>
		<Link href="/">
			<a style={style}>Home</a>
		</Link>

		<Link href="/about">
			<a style={style}>About</a>
		</Link>
	</header>

)

export default Header