

export interface ScrambleWordState {
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
}; 

export type ScrambleWordAction =
    | { type: 'SET_CURRENT_WORD'; payload: string }
    | { type: 'SET_ERROR_COUNTER'; payload: number }
    | { type: 'SET_GUESS'; payload: string }
    | { type: 'SET_IS_GAME_OVER'; payload: boolean }
    | { type: 'SET_MAX_ALLOW_ERRORS'; payload: number }
    | { type: 'SET_MAX_SKIPS'; payload: number }
    | { type: 'SET_POINTS'; payload: number }
    | { type: 'SET_SCRAMBLED_WORD'; payload: string }
    | { type: 'SET_SKIP_COUNTER'; payload: number }
    | { type: 'SET_WORDS'; payload: string[] };

    