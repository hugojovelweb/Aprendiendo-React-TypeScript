import { describe, expect, test } from "vitest";
import { MyAwesomeApp } from "./MyAwesomeApp";
import {render, screen} from '@testing-library/react';

describe('MyAwesomeApp', () =>{
    test('should render firstName and lastName', () =>{

        const { container} = render(<MyAwesomeApp/>);
        
        // screen.debug(); 
        // console.log(container.innerHTML);

        const h1 = container.querySelector('h1');
        const h3 = container.querySelector('h3');
        
        expect(h1?.innerHTML).toContain('Hugo');
        expect(h3?.innerHTML).toContain('Jovel');

    });
});

    test('should render firstName and lastName - screen', () =>{
        render(<MyAwesomeApp/>);        
        screen.debug(); 
        // console.log(container.innerHTML);

        // const h1 = screen.getByRole('heading', {
        //     level: 1
        // });

        const h1 = screen.getByTestId('first-name-title');
        // console.log(h1.innerHTML);
        expect(h1.innerHTML).toContain('Hugo');  
    });

    test('should match snapshot', () => {

        const{container} = render(<MyAwesomeApp></MyAwesomeApp>);
        expect(container).toMatchSnapshot();

    });