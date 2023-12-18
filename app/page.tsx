import Link from "next/link";

export default function Home() {
    return (
        <main>
            <h1>Home</h1>
            <ul>
                <li>
                    <Link href="/page-1">Page 1</Link>
                </li>
                <li>
                    <Link href="/page-2">Page 2</Link>
                </li>
            </ul>
        </main>
    )
}
