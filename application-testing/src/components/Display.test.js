import React from "react";
import Display from "./Display";
import { render } from '@testing-library/react';


test('renders properly', ()=>{
    render (<Display/>)
})

test('shows ball count', ()=> {
    const { getByText } = render(<Display/>);

    getByText(/balls/i);
} )

test('shows strike count', ()=> {
    const { getByText } = render(<Display/>);

    getByText(/strikes/i);
} )