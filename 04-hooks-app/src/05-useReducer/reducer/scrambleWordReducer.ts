

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