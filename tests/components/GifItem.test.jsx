import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"



describe('Prueba de <GifItem />', () => {

    const title = "Soy un titulo";
    const url = "https://soyurl.test/";

    test('debe de validar el snapshot', () => {
        const { container } = render(<GifItem title={title} url={url} />);
        expect(container).toMatchSnapshot();
    })

    test('debe de mostrar la imagen con el URL y el ALT indicado', () => {
        render(<GifItem title={title} url={url} />);
        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    })

    test('debe de mostar el titulo del componente', () => {
        render(<GifItem title={title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy();
    })
})