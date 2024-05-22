import React, { useState } from 'react';

const Item = () => {
    const [selectedAnswer, setSelectedAnswer] = useState({});

    const riddles = [
        {
            id: 1,
            description: "В каком мультфильмы были миньены?",
            option1: "Гадкий я",
            option2: "История игрушек",
            option3: "вафли",
            correct: 1
        },
        {
            id: 2,
            description: "В каком мультфильме оживали игрушки?",
            option1: "История Игрушек",
            option2: "Панда кунг фу",
            option3: "Гадкий я",
            option4: "Саня",
            correct: 1
        },
        {
            id: 3,
            description: "В каком мультфильме рассказывалось о приключениях медведя и свиньи?",
            option1: "Леон киллер",
            option2: "Не помню",
            option3: "Винни Пух",
            option4: "Осадки в виде фрикаделек",
            correct: 3
        }
    ];

    const handleAnswerClick = (riddleId, selectedOption) => {
        setSelectedAnswer({ ...selectedAnswer, [riddleId]: selectedOption });
    };

    const checkAnswer = (riddleId, selectedOption) => {
        return selectedAnswer[riddleId] === selectedOption;
    };

    return (
        <div style={{ 
            fontFamily: 'Arial, sans-serif',
            background: 'url("https://catherineasquithgallery.com/uploads/posts/2021-03/1614789186_11-p-fon-dlya-avatarki-14.jpg")',
            backgroundSize: 'cover',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            padding: '20px'
        }}>
            {riddles.map(riddle => (
                <div key={riddle.id} style={{ 
                    borderRadius: '10px',
                    padding: '20px',
                    marginBottom: '20px',
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    width: '50%'
                }}>
                    <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>{riddle.description}</p>
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '5px', cursor: 'pointer', border: '1px solid black', borderRadius: '5px', padding: '5px', backgroundColor: selectedAnswer[riddle.id] === 1 ? '#f0f0f0' : 'inherit' }} onClick={() => handleAnswerClick(riddle.id, 1)}>{riddle.option1}</li>
                        <li style={{ marginBottom: '5px', cursor: 'pointer', border: '1px solid black', borderRadius: '5px', padding: '5px', backgroundColor: selectedAnswer[riddle.id] === 2 ? '#f0f0f0' : 'inherit' }} onClick={() => handleAnswerClick(riddle.id, 2)}>{riddle.option2}</li>
                        <li style={{ marginBottom: '5px', cursor: 'pointer', border: '1px solid black', borderRadius: '5px', padding: '5px', backgroundColor: selectedAnswer[riddle.id] === 3 ? '#f0f0f0' : 'inherit' }} onClick={() => handleAnswerClick(riddle.id, 3)}>{riddle.option3}</li>
                        {riddle.option4 && <li style={{ marginBottom: '5px', cursor: 'pointer', border: '1px solid black', borderRadius: '5px', padding: '5px', backgroundColor: selectedAnswer[riddle.id] === 4 ? '#f0f0f0' : 'inherit' }} onClick={() => handleAnswerClick(riddle.id, 4)}>{riddle.option4}</li>}
                    </ul>
                    {selectedAnswer[riddle.id] && (
                        <p style={{ color: checkAnswer(riddle.id, riddle.correct) ? 'green' : 'red' }}>
                            {checkAnswer(riddle.id, riddle.correct) ? 'Правильно!' : 'Неправильно!'}
                        </p>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Item;
