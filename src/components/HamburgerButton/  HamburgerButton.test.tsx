import React from 'react';
import "@testing-library/jest-dom";
import {render, fireEvent, screen} from "@testing-library/react";
import HamburgerButton from "./HamburgerButton";

test('onClick works when button was clicked', () => {
    const fn = jest.fn();
    const element = render(<HamburgerButton />);
    fireEvent.click(screen.getByTestId("hamburgerBox"));
    console.log(element)
});