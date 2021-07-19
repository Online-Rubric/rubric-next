import Link from 'next/link'
export default function Nav() {

    return (
        <>
            <header className="flex items-center w-full h-24 p-6 border-t justify-left">
                <h1 className="text-2xl font-semibold">Whiteboard Rubric</h1>
                <nav>
                    <Link href="/">
                        <a class="mr-4">Admin View</a>
                    </Link>
                    <Link href="/overview">
                        <a>Overview</a>
                    </Link>
                </nav>
            </header>
        </>
    )

}