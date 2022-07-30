import renderer from 'react-test-renderer';
import MenuBar from './MenuBar';

describe('Pruebas unitarias del componente MenuBar', () => {
    it('deberia renderizar el componente sin error', () => {
        const tree = renderer.create(<MenuBar />);
        expect(tree).toBeTruthy();
    })
}); // este componente al darle renderizado da este error The above error occurred in the <Link> component: