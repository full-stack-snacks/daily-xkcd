import Link from 'next/link'

export default props => (
    <div>
        <nav>
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/about">
                <a>About</a>
            </Link>
        </nav>
        {props.children}
    </div>
)
