import React from 'react'

const Team = () => {
    return (
        <>
            <section id="our-team" class="bg-white dark:bg-gray-900">
                <section class="py-6 dark:bg-gray-800 dark:text-gray-100">
                    <div class="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
                        <h1 class="text-4xl font-bold leadi text-center sm:text-5xl">Our team</h1>
                        <p class="max-w-2xl text-center dark:text-gray-400">We the team of developers and a small tribute each of our contributions. </p>
                        <div class="flex flex-row flex-wrap justify-center">
                            <div class="flex flex-col justify-center m-8 text-center">
                                <img alt="" class="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="rumi.jpeg" />
                                    <p class="text-xl font-semibold leadi">Shaikh Rumman Fardeen</p>
                                    <p class="dark:text-gray-400">Designer and Developer</p>
                            </div>
                            <div class="flex flex-col justify-center m-8 text-center">
                                <img alt="" class="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="ojuu.jpeg" />
                                    <p class="text-xl font-semibold leadi">Ojas Aklecha</p>
                                    <p class="dark:text-gray-400">Designer and Developer</p>
                            </div>

                            <div class="flex flex-col justify-center m-8 text-center">
                                <img alt="" class="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="spandan.jpg" />
                                    <p class="text-xl font-semibold leadi">Spandan Mukherjee</p>
                                    <p class="dark:text-gray-400">Developer and Pitcher</p>
                            </div>


                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}

export default Team
