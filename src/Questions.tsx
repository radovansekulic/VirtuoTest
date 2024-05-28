import { useState, useEffect } from 'react';
import Button from "./components/Button.tsx";

const Questions = () => {
    const [questions, setQuestions] = useState([]);
    const [currentDiv, setCurrentDiv] = useState(1);

    const onNextClick = () => {
        setCurrentDiv(prev => Math.min(prev + 1, questions.length));
    }
    const onPrevClick = () => {
        setCurrentDiv(prev => Math.max(prev - 1, 1));
    }

    useEffect(() => {
        fetch('https://74522318813d71e4d4d7bb3e.mockapi.io/mockapi')
            .then(response => response.json())
            .then(data => setQuestions(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <>
            {questions.map((data, index) => (
                <div style={{display: currentDiv === index + 1 ? 'block' : 'none'}}
                     className="container mx-auto md:max-w-4xl px-2 mt-20">
                    <div className="flex justify-between items-center mb-10 px-3">
                        <h1 className="mt-8 text-3xl font-semibold contents text-indigo-500 dark:text-indigo-400">Рачунарски
                            Хардвер</h1>
                        <div className="flex text-4xl">
                            <p>{index + 1}</p>/<p>{questions.length}</p>
                        </div>
                    </div>

                    <div className="px-2">
                        <p className="mb-10 font-medium text-gray-900 md:text-2xl text-slate-900 font-semibold"><span
                            className="me-2">{data.id}.</span>{data.questions}</p>
                        {data.items.map(item => (
                            <div className="flex mb-4 items-center">
                                <div className="flex items-center h-5">
                                    <input type="checkbox"
                                           className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-600"/>
                                </div>
                                <div className="ms-2 text-sm">
                                    <span className="md:text-xl">{item}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-between mt-10">
                        <div className="flex justify-between gap-1 md:gap-5">
                            <a onClick={onPrevClick}>
                                <Button text="Nazad" bgColor="bg-blue-50" textColor="text-blue-700"/>
                            </a>
                            <a onClick={onNextClick}>
                                <Button text="Napred" bgColor="bg-blue-50" textColor="text-blue-700"/>
                            </a>
                        </div>
                        <Button text="Odgovor" bgColor="bg-green-50" textColor="text-green-700"/>
                        <Button text="Završi" bgColor="bg-red-50" textColor="text-red-700"/>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Questions