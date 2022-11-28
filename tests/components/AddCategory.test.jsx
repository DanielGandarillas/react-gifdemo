import { fireEvent, getByRole, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('Prueba en <AddCategory/>', () => {
    test('debe de cambiar el valor de la caja de texto', () => {
        render(<AddCategory onNewCategory={() => { }} />)
        const input = screen.getByRole('textbox');
        fireEvent.input(input, { target: { value: 'saitama' } })
        expect(input.value).toBe('saitama')
    })

    test('debe de llamar onNewCategory si el  input tiene un valor', () => {
        const inputValue = 'Saitama';
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory} />)
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue } })
        fireEvent.submit(form);

        expect(input.value).toBe('');
        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    })

    test('no debe de llamar onNewCategory si el input esta vacio', () => {
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={onNewCategory} />)

        const form = screen.getByRole('form');
        fireEvent.submit(form);

        //opcion 1
        expect(onNewCategory).toBeCalledTimes(0);
        //opcion 2
        expect(onNewCategory).not.toHaveBeenCalled();
    })
})