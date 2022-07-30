import renderer from 'react-test-renderer';
import Pokemon from './Pokemon';

describe('Pruebas unitarias del componente Pokemon', () => {
    it('deberia renderizar el componente sin error', () => {
        const tree = renderer.create(<Pokemon />);
        expect(tree).toBeTruthy();
    })
}); // prueba pasada