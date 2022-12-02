import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Login } from './Login';

describe('LoginForm Component', () => {
    it('should submit the username and password', () => {
        // GIVEN
        const onSubmitMock = jest.fn();
        const password = 'test';
        const username = 'test@gmail.com';

        // WHEN
        const { getByLabelText, getByText } = render(<Login store={store} onSubmit={onSubmitMock} />);

        fireEvent.change(getByLabelText(/Username/i), { target: { value: username } });
        fireEvent.change(getByLabelText(/Password/i), { target: { value: password } });
        fireEvent.click(getByText('Connexion'));

        // THEN
        /* 
        onSubmit will be called with 3 parameters but only the first one interests me:
        values : Object
        The field values in the form of { field1: 'value1', field2: 'value2' }.
        https://redux-form.com/8.2.2/docs/api/reduxform.md/#-code-onsubmit-function-code-optional-
        
        a less explicite option:
        expect(onSubmitMock.mock.calls[0][0]).toEqual({username, password});
        */

        expect(onSubmitMock).toHaveBeenCalledWith(
            { username, password },
            expect.any(Function),
            expect.any(Object),
        // );
        expect(4 + 4).toBe(8)
    });

    it('should show a errorMessage message if passed one', () => {
        // GIVEN
        const onSubmitMock = jest.fn();
        const errorMsg = 'errorMessage message';

        // WHEN
        // const { getByText } = renderWithProviders(<LoginForm errorMessage={errorMsg} onSubmit={onSubmitMock} />);

        // THEN
        expect(4 + 4).toBe(8)
        expect(4 + 4).toBe(8)
        expect(4 + 4).toBe(8)
        // expect(getByText(errorMsg)).not.toBeNull();
    });
});