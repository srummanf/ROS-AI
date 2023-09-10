"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const Product = () => {
    // State variable to store the word input
    const [word, setWord] = useState('');

    // Mapping of alphabet images
    const alphabetImageMapping = {
        'a': 'a.png',
        'b': 'b.png',
        'c': 'c.png',
        'd': 'd.png',
        'e': 'e.png',
        'f': 'f.png',
        'g': 'g.png',
        'h': 'h.png',
        'i': 'i.png',
        'j': 'j.png',
        'k': 'k.png',
        'l': 'l.png',
        'm': 'm.png',
        'n': 'n.png',
        'o': 'o.png',
        'p': 'p.png',
        'q': 'q.png',
        'r': 'r.png',
        's': 's.png',
        't': 't.png',
        'u': 'u.png',
        'v': 'v.png',
        'w': 'w.png',
        'x': 'x.png',
        'y': 'y.png',
        'z': 'z.png',

        // Add more alphabet mappings as needed
    };

    // Function to handle word input change
    const handleWordInputChange = (e) => {
        const inputWord = e.target.value.toLowerCase(); // Convert to lowercase
        setWord(inputWord);
    };

    return (
        <>
            <section id="our-product" className="bg-white dark:bg-gray-900">
                <section className="px-4 md:px-6 lg:px-8">
                    <div className="flex justify-center mt-7">
                        <h1 className="my-4 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
                            Our Product
                        </h1>
                    </div>
                    <div className="flex flex-col mt-10 md:mx-20 lg:mx-40 xl:mx-80">
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
                            <div id="aslSignsContainer" className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 my-6">
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


            </section>
        </>
    );
};

export default Product;

