import renderer from 'react-test-renderer';
import Pokedex from './Pokedex';

describe('Pruebas unitarias del componente Pokedex', () => {
    it('deberia renderizar el componente sin error', () => {
        const tree = renderer.create(<Pokedex />);
        expect(tree).toBeTruthy();
    })
}); // prueba pasada