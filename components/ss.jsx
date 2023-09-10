<div>
    <section id="our-product" className="bg-white dark:bg-gray-900">
        <section className="px-4 md:px-6 lg:px-8">
            <div className="flex justify-center mt-7">
                <h1 className="mb-4 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
                    Our Product
                </h1>
            </div>
            /                     <div className="flex flex-col mt-10 md:mx-20 lg:mx-40 xl:mx-80">
                <label htmlFor="wordInput" className="block mb-2 text-center text-sm font-medium dark:text-gray-400">
                    Type the text you wish to see the ASL
                </label>
                <input
                    type="text"
                    id="wordInput"
                    className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
                    placeholder="Input"
                    value={word}
                    onChange={handleWordInputChange}
                />

                

                <div className="text-white my-5">
                    <div id="aslSignsContainer" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 my-6">
                        {word.split('').map((char, index) => (
                            <img
                                key={index}
                                src={alphabetImageMapping[char] || 'not-found.png'}
                                alt={char}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>

        <div className="flex flex-col justify-center items-center px-4 md:px-6 lg:px-8 pb-4 md:pb-10">
            <label
                className="inline-flex justify-center items-center py-2 md:py-3 px-4 md:px-5 text-2xl md:text-4xl font-medium text-center text-gray-900 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:focus:ring-gray-800"
                htmlFor="speedControl">
                Speed
            </label>
            <input type="range" id="speedControl" min="0.1" max="10" step="0.1" value="1" />
            <canvas className="rounded-lg" id="canvas"></canvas>
        </div>
    </section>
</div>




<div className="flex flex-col justify-center items-center px-4 md:px-6 lg:px-8 pb-4 md:pb-10">
                    <label
                        className="inline-flex justify-center items-center py-2 md:py-3 px-4 md:px-5 text-2xl md:text-4xl font-medium text-center text-gray-900 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:focus:ring-gray-800"
                        htmlFor="speedControl">
                        Speed
                    </label>
                    <input type="range" id="speedControl" min="0.1" max="10" step="0.1" value="1" />
                    <canvas className="rounded-lg" id="canvas"></canvas>
                </div>


-------------------------


<div className="flex justify-center my-6">
                    <button
                        onChange={handleWordInputChange}
                        onClick={displayASLSigns}
                        className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                        Submit
                    </button>
                </div>




<div>
            <h1>Alphabet Images</h1>
            <label htmlFor="wordInput">Enter a word:</label>
            <input
                type="text"
                id="wordInput"
                onChange={handleWordInputChange}
                value={word}
            />
            <div>
                {word.split('').map((char, index) => (
                    <img
                        key={index}
                        src={alphabetImageMapping[char] || 'not-found.png'}
                        alt={char}
                    />
                ))}
            </div>
        </div>