import renderer from 'react-test-renderer';
import Historial from './Historial';

describe('Pruebas unitarias del componente Historial', () => {
    it('deberia renderizar el componente sin error', () => {
        const tree = renderer.create(<Historial />);
        expect(tree).toBeTruthy();
    })

}); // prueba pasada