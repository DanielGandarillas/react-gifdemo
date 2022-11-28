import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {

    const category = 'One Punch';

    test('debe de mostrar loading inicialmente', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })

        render(<GifGrid category={category} />);
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
    })

    test('debe de mostrar items cuando se cargan las imagenes de useFetchGifs()', () => {
        const gifs = [
            {
                id: 'abc',
                title: 'titulo 1',
                url: 'http://localhost/uno.jpg'
            },
            {
                id: '123',
                title: 'titulo 2',
                url: 'http://localhost/dos.jpg'
            },
            {
                id: '125',
                title: 'titulo 3',
                url: 'http://localhost/tres.jpg'
            },
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false,
        });

        render(<GifGrid category={category} />);
        expect(screen.getAllByRole('img').length).toBeGreaterThan(0);
    })
});