import renderer from 'react-test-renderer';
import Combate from './Combate';

describe('Pruebas unitarias del componente Combate', () => {
    it('deberia renderizar el componente sin error', () => {
        const tree = renderer.create(<Combate />);
        expect(tree).toBeTruthy();
    })

}); // prueba pasada