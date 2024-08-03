import { link } from "fs";
import Link from "next/link";
import { UrlObject } from "url";

export default function Projects() {
    return (
        <section>
            <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
                <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                    Our projects
                </h2>
                <p className="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">
                    Certified HassyTeam quality
                </p>
                </div>

                <div className="grid grid-cols-1 mt-12 text-center sm:mt-16 gap-x-20 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                        {
                            type: "Demo",
                            title: "Paneeli",
                            description: "Axsoterin paneeli on erittäin tehokas ja helppokäyttöinen. Paneeli näyttää reaaliajassa tietoja palvelimen resurssien kulutuksesta.",
                            link: "https://example.com",
                            linklabel: "Text"
                        },
                        {
                            type: "Demo",
                            title: "Paneeli",
                            description: "Axsoterin paneeli on erittäin tehokas ja helppokäyttöinen. Paneeli näyttää reaaliajassa tietoja palvelimen resurssien kulutuksesta.",
                            link: "https://example.com",
                            linklabel: "Text"
                        }
                    ].map((feature, index) => (
                        <div className="bg-assy23 rounded-xl bg-center bg-no-repeat">
                            
                            <div className="space-y-4 glass p-4 transition duration-500 hover:scale-110 h-full">
                                <span
                                className="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                                    {feature.type}
                                </span>
                                <h3 className="text-2xl font-bold leading-tight text-white">
                                    {feature.title}
                                </h3>
                                <p className="text-lg font-normal text-gray-400">
                                    {feature.description}
                                </p>
                                <Link href={feature.link} title=""
                                className="text-white bg-primary-700 justify-center hover:bg-primary-800 inline-flex items-center font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700"
                                role="button">
                                    {feature.linklabel}
                                    <svg aria-hidden="true" className="w-5 h-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                        fill="currentColor">
                                        <path fill-rule="evenodd"
                                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                        clip-rule="evenodd" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}