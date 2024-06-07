import Image from "next/image"

export default function Footer() {
    return (
        <footer className="p-4 bg-gray-100 md:p-8 lg:p-10 dark:bg-gray-900">
            <div className="mx-auto max-w-screen-xl text-center">
                <a href="" className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white">
                    <Image className="mr-2 h-8" alt="" src="/img/hassy.png" width={32} height={32}/>
                    Hassy Team™
                </a>
                <p className="my-6 text-gray-500 dark:text-gray-400">i guess i could write something here, wait. THIS COULD BE A MOTD</p>
                <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 ">some shit</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">some shit</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 ">some shit</a>
                    </li>
                </ul>
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">Made with ❤️ by Hassunaama & xilliam</span>
            </div>
        </footer>
    )
}