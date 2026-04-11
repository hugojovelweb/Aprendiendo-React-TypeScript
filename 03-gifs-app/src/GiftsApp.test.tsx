import { describe, expect, test} from 'vitest';
import { render } from '@testing-library/react';
import GiftsApp from './GiftsApp';

describe('GiftsApp', () => {
  test('should render the component properly', () => {
    // Aquí puedes agregar pruebas para verificar que el componente se renderiza correctamente

    const{ container } = render(<GiftsApp />);

    expect (container).toMatchSnapshot();

  });
});