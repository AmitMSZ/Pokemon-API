import renderer from 'react-test-renderer';

describe('Pruebas unitarias del componente Index', () => {
    it('Al realizar renderizado deberia dar error', () => {
        const tree = renderer.create(<Index />);
        expect(tree).toBeTruthy();
    })
}); // Index deberia dar error ya que index no es un componente y no esta definido/exportado