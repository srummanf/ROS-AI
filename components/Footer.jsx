import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
        <>
            <section class="bg-white dark:bg-gray-900">
                <div class="w-full mx-auto max-w-screen-xl p-2 md:p-4 md:flex md:items-center md:justify-between">
                    <span class="text-xs md:text-sm text-center text-gray-500 dark:text-gray-400">
                        © 2023 <a href="/" class="hover:underline">RosAI</a>. All Rights Reserved.
                    </span>
                    <ul
                        class="flex flex-wrap items-center mt-2 md:mt-0 gap-4 md:gap-10 text-xs md:text-sm font-medium text-gray-500 dark:text-gray-400">
                        <li>
                            <a href="https://in.linkedin.com/company/rosaitech">
                                <FontAwesomeIcon icon={faTwitter} size="2x" /> {/* Adjust the size as needed */}
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/ROStech_ai">
                                <FontAwesomeIcon icon={faLinkedin} size="2x" /> {/* Adjust the size as needed */}
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/ROStech_ai" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                                    <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd" />
                                </svg>
                                <span class="sr-only">Twitter page</span>
                            </a>
                        </li>
                        <li><a href="https://in.linkedin.com/company/rosaitech" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-4 h-4" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg>
                            <span class="sr-only">LinkedIn account</span>
                        </a></li>
                    </ul>
                </div>

            </section>
        </>
    )
}

export default Footer
