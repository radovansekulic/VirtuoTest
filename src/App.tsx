import { useState } from 'react';

function App() {
    const [isHidden, setHidden] = useState(false);

    const startTesting = () => {
        setHidden(!isHidden);
    };

    return (
        <>
            <div className={isHidden ? 'hidden' : 'block'}>
                <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
                    <div className="absolute inset-0 bg-[url(https://play.tailwindcss.com/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
                    <div className="relative bg-white px-6 pt-16 pb-8 mt-[-200px] shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
                        <div className="mx-auto max-w-md">
                            <h1 className="text-4xl font-extrabold leading-none tracking-tight text-gray-900">&gt;_ VIRTUO TEST</h1>
                            <div className="divide-y divide-gray-300/50">
                                <div className="space-y-6 py-8 text-base leading-7 text-gray-600">
                                    <p>The goal of this application is to prepare the student for the final exam at the end of high school</p>
                                    <button onClick={startTesting} className="bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center">Start Simulation
                                        <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
