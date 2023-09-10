"use  client";

import React from 'react'

const Timeline = () => {
    return (
        <>
            
            <section id="our-timeline" className="bg-white dark:bg-gray-900">
                <section className="dark:bg-gray-800 dark:text-gray-100">
                    <div className="container max-w-5xl px-4 py-12 mx-auto">
                        <div className="grid gap-4 mx-4 sm:grid-cols-12">
                            <div className="col-span-12 sm:col-span-3">
                                <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-violet-400">
                                    <h3 className="text-3xl font-semibold">Timeline</h3>
                                    <span className="text-sm font-bold tracki uppercase dark:text-gray-400">Our Project Progress</span>
                                </div>
                            </div>
                            <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                                <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
                                    <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                                        <h3 className="text-xl font-semibold tracki">Week 1: Starting with the idea </h3>
                                        <time className="text-xs tracki uppercase dark:text-gray-400">August 2023</time>
                                        <p className="mt-3">We found out that there is no smooth application for the ones to communicate in sign languages so we started our journey</p>
                                    </div>
                                    <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                                        <h3 className="text-xl font-semibold tracki">Week 2: Created a Basic Prototype</h3>
                                        <time className="text-xs tracki uppercase dark:text-gray-400">3rd Week of Buildspace</time>
                                        <p className="mt-3">We created the banners and exhibited our work and progress across various social media platforms.</p>
                                    </div>
                                    <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                                        <h3 className="text-xl font-semibold tracki">Week 3: Created our website and showed across the platforms</h3>
                                        <time className="text-xs tracki uppercase dark:text-gray-400">4th Week of Buildspace</time>
                                        <p className="mt-3">Created a first version of our toy which exhibited and presented across twitter and LinkedIn.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}

export default Timeline
