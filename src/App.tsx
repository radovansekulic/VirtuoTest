import { useState } from 'react';
import Questions from "./Questions.tsx";

function App() {
    const [isHidden, setHidden] = useState(false);

    const startTesting = () => {
        setHidden(!isHidden);
    };

    return (
        <>
            <div className={isHidden ? 'hidden' : 'block'}>
                <div
                    className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
                    <div
                        className="absolute inset-0 bg-[url(https://play.tailwindcss.com/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
                    <div
                        className="relative bg-white px-6 pt-16 pb-8 mt-[-200px] shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
                        <div className="mx-auto max-w-md">
                            <h1 className="text-4xl font-extrabold leading-none tracking-tight text-indigo-500">&gt;_
                                VIRTUO TEST</h1>
                            <div className="divide-y divide-gray-300/50">
                                <div className="space-y-6 py-8 text-base leading-7 text-gray-600">
                                    <p>Web-aplikacija je nastala po uzoru na simulacije za polaganje vozačkog ispita.
                                        Ovakav vid učenja ima značajne prednosti i pri velikom broju pitanja ostvaruje
                                        najbolje rezultate.</p>
                                    <button onClick={startTesting}
                                            className="bg-blue-50 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-blue-50 text-blue-700 font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center">Pokreni
                                        Simulaciju
                                        <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true"
                                             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                                  strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {isHidden && <Questions/>}
        </>
    );
}

export default App;
