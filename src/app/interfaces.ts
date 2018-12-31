import { Question } from './interfaces';

export interface Question {
    author: string;
    content: string;
}

export interface Answer {
    author: string;
    content: string;
    accepted?: boolean;
}

export interface QuestionAnswers {
    question: Question;
    answers: Array<Answer>;
}
