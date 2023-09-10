import React from 'react'

const Footer = () => {
    return (
        <>
            <footer class="bg-white rounded-lg shadow m-2 md:m-4 dark:bg-gray-800">
                <div class="w-full mx-auto max-w-screen-xl p-2 md:p-4 md:flex md:items-center md:justify-between">
                    <span class="text-xs md:text-sm text-center text-gray-500 dark:text-gray-400">
                        © 2023 <a href="/" class="hover:underline">RosAI</a>. All Rights Reserved.
                    </span>
                    <ul
                        class="flex flex-wrap items-center mt-2 md:mt-0 gap-4 md:gap-10 text-xs md:text-sm font-medium text-gray-500 dark:text-gray-400">
                        <li>
                            <a href="https://in.linkedin.com/company/rosaitech"><i
                                class="text-lg md:text-xl fab fa-linkedin-in"></i></a>
                        </li>
                        <li>
                            <a href="https://twitter.com/ROStech_ai"><i class="text-lg md:text-xl fab fa-twitter"></i></a>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    )
}

export default Footer
