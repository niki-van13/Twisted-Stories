export interface StepGame { 
    id: number,
    question: string
    answers: {
        leftBtn: btnData | null 
        rightBtn: btnData | null 
    }
}

interface btnData { 
    answer: string
    path: number
}

