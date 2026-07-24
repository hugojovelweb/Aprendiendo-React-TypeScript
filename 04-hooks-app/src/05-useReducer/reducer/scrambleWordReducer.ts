

export interface ScrambleWordsState {
    currentWord: string;
    errorCounter: number;
    guess: string;
    isGameOver: boolean;
    maxAllowErrors: number;
    maxSkips: number;
    points: number;
    scrambledWord: string;
    skipCounter: number;
    words: string[];
    totalWords: number;
};

// export type ScrambleWordsAction =
//     | { type: 'SET_CURRENT_WORD'; payload: string }
//     | { type: 'SET_ERROR_COUNTER'; payload: number }
//     | { type: 'SET_GUESS'; payload: string }
//     | { type: 'SET_IS_GAME_OVER'; payload: boolean }
//     | { type: 'SET_MAX_ALLOW_ERRORS'; payload: number }
//     | { type: 'SET_MAX_SKIPS'; payload: number }
//     | { type: 'SET_POINTS'; payload: number }
//     | { type: 'SET_SCRAMBLED_WORD'; payload: string }
//     | { type: 'SET_SKIP_COUNTER'; payload: number }
//     | { type: 'SET_WORDS'; payload: string[] };



const GAME_WORDS = [
    'REACT',
    'JAVASCRIPT',
    'TYPESCRIPT',
    'HTML',
    'ANGULAR',
    'SOLID',
    'NODE',
    'VUEJS',
    'SVELTE',
    'EXPRESS',
    'MONGODB',
    'POSTGRES',
    'DOCKER',
    'KUBERNETES',
    'WEBPACK',
    'VITE',
    'TAILWIND',
];

// Esta función mezcla el arreglo para que siempre sea aleatorio
const shuffleArray = (array: string[]) => {
    return array.sort(() => Math.random() - 0.5);
};

// Esta función mezcla las letras de la palabra
const scrambleWord = (word: string = '') => {
    return word
        .split('')
        .sort(() => Math.random() - 0.5)
        .join('');
};


export const getInitialState = (): ScrambleWordsState => {
    const shuffledWords = shuffleArray([...GAME_WORDS]);
    return {
        currentWord: shuffledWords[0],
        errorCounter: 0,
        guess: '',
        isGameOver: false,
        maxAllowErrors: 3,
        maxSkips: 3,
        points: 0,
        scrambledWord: scrambleWord(shuffledWords[0]),
        skipCounter: 0,
        words: shuffledWords,
        totalWords: shuffledWords.length,
    };
};

export type ScrambleWordsAction =
| { type: 'SET_GUESS'; payload: string }
| { type: 'CHECK_ANSWER' }
| { type: 'SKIP_WORD' }


    | { type: 'SET_CURRENT_WORD'; payload: string }
    | { type: 'SET_ERROR_COUNTER'; payload: number }
    | { type: 'SET_IS_GAME_OVER'; payload: boolean }
    | { type: 'SET_MAX_ALLOW_ERRORS'; payload: number }
    | { type: 'SET_MAX_SKIPS'; payload: number }
    | { type: 'SET_POINTS'; payload: number }
    | { type: 'SET_SCRAMBLED_WORD'; payload: string }
    //| { type: 'SET_SKIP_COUNTER'; payload: number }
    | { type: 'SET_WORDS'; payload: string[] };

export const scrambleWordsReducer = (
    state: ScrambleWordsState,
    action: ScrambleWordsAction): ScrambleWordsState => {
    switch (action.type) {

        case 'SET_GUESS':
            return { ...state, guess: action.payload };

        case 'CHECK_ANSWER':
            if (state.guess === state.currentWord) {
                const newWords = state.words.slice(1);

                return {
                    ...state,
                    words: newWords,
                    currentWord: newWords[0],
                    scrambledWord: scrambleWord(newWords[0]),
                    points: state.points + 1,
                    guess: '',
                };
            } else {
                return {
                    ...state,
                    guess: '',
                    errorCounter: state.errorCounter + 1,
                    isGameOver: state.errorCounter + 1 >= state.maxAllowErrors,
                };
            }
            






        case 'SET_CURRENT_WORD':
            return { ...state, currentWord: action.payload };

        case 'SET_ERROR_COUNTER':
            return { ...state, errorCounter: action.payload };


        case 'SET_IS_GAME_OVER':
            return { ...state, isGameOver: action.payload };

        case 'SET_MAX_ALLOW_ERRORS':
            return { ...state, maxAllowErrors: action.payload };

        case 'SET_MAX_SKIPS':
            return { ...state, maxSkips: action.payload };

        case 'SET_POINTS':
            return { ...state, points: action.payload };

        case 'SET_SCRAMBLED_WORD':
            return { ...state, scrambledWord: action.payload };

        // case 'SET_SKIP_COUNTER':
        //     return { ...state, skipCounter: action.payload };

        case 'SET_WORDS':
            return { ...state, words: action.payload };

        
    };
};