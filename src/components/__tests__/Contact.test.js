import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test('should load contact components', () => { 
    render(<Contact />);

    const heading = screen.getByRole("heading");

    // Assertion
    expect(heading).toBeInTheDocument();
});

test('should load input name placeholder', () => { 
    render(<Contact />);

    const inputname = screen.getByPlaceholderText("name");

    // Assertion
    expect(inputname).toBeInTheDocument();
});