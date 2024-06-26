import React, { useState, useEffect } from 'react';
import Button from "./components/Button.tsx";

interface Questions {
    id: number;
    question: string;
    images: string;
    answers: string[];
}

const Questions = () => {
    const [questions, setQuestions] = useState([]);
    const [currentDiv, setCurrentDiv] = useState(1);

    useEffect(() => {
        const timeout = setTimeout(() => alert('Крај теста, време је истекло'), 90 * 60 * 1000);
        return () => clearTimeout(timeout);
    }, []);

    const onNextClick = () => {
        fontColorDefault();
        setCurrentDiv(prev => Math.min(prev + 1, questions.length));
    }
    const onPrevClick = () => {
        fontColorDefault();
        setCurrentDiv(prev => Math.max(prev - 1, 1));
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const div: number = parseInt(event.target.value);
        div && setCurrentDiv(div);
    };

    const fontColorDefault = () => {
        const itemElements = document.querySelectorAll('.item');

        itemElements.forEach(element => {
            if (element instanceof HTMLElement) {
                element.style.color = 'inherit';
            }
        });
    }

    useEffect(() => {
        fetch('../public/questions.json')
            .then(response => response.json())
            .then(data => setQuestions(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const getAnswers = (indexQuestion: number) => {
        const question = questions[indexQuestion - 1];
        const itemElements = document.querySelectorAll('.item');

        itemElements.forEach(element => {
            if (element instanceof HTMLElement) {
                element.style.color = 'red';
            }
        });

        for (let i = 0; i < question["correctAnswers"]["length"]; i++) {
            const answerIndex = question["correctAnswers"][i];
            const elements = document.querySelectorAll('[data-id="' + indexQuestion + answerIndex + '"]');

            elements.forEach(element => {
                if (element instanceof HTMLElement) {
                    element.style.color = "green";
                }
            });
        }
    }

    return (
        <>
            {questions.map((data: Questions, index) => {
                return (
                    <div style={{display: currentDiv === index + 1 ? 'block' : 'none'}}
                         className="container mx-auto md:max-w-4xl px-2 mt-20">
                        <div className="flex justify-between items-center mb-10 px-3">
                            <h1 className="mt-8 text-3xl font-semibold contents text-indigo-500 dark:text-indigo-400">
                                Рачунарски Хардвер
                            </h1>
                            <div className="flex text-4xl gap-2">
                                <input className="border flex p-1 w-10" onChange={handleChange} value={index + 1}/>/
                                <p className="p-1">{questions.length}</p>
                            </div>
                        </div>

                        <div className="px-2">
                            <p className="mb-10 font-medium text-gray-900 md:text-2xl text-slate-900 font-semibold"><span
                                className="me-2">{data["id"]}.</span>{data["question"]}</p>
                            {data["images"] && (
                                <div className="my-10">
                                    <img src={`../public/${data["images"]}.PNG`} alt="ART"/>
                                </div>
                            )}
                            {data["answers"].map((item: string, index: number) => (
                                <div className="flex mb-4 items-center">
                                    <div className="flex items-center h-5">
                                        <input type="checkbox" onClick={() => getAnswers(currentDiv)}
                                               className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-600"/>
                                    </div>
                                    <div className="ms-2 text-sm">
                                        <span data-id={data["id"] + (index + 1)}
                                              className="md:text-xl item">{item}</span>
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
                            <a onClick={() => getAnswers(currentDiv)}>
                                <Button text="Odgovor" bgColor="bg-green-50" textColor="text-green-700"/>
                            </a>
                            <a onClick={() => window.location.reload()}>
                                <Button text="Završi" bgColor="bg-red-50" textColor="text-red-700"/>
                            </a>
                        </div>
                    </div>
                );
            })}
        </>
    )
}

export default Questions