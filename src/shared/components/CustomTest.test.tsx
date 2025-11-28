import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { CustomHeader } from "./CustomHeader";

describe('CustomHeader', () => {

    test('should render title correctly', () => {
        const title = "Test Title";

        render(<CustomHeader title={title} />);
        expect(screen.getByText(title)).toBeTruthy();
    });

    test('should render description when provided', () => {
        const description = "Test Description";

        render(<CustomHeader title="Test Title" description={description} />);

        expect(screen.getByText(description)).toBeTruthy();
        expect(screen.getByText(description)).toBeDefined();
        expect(screen.getByRole("paragraph")).toBeDefined();
        expect(screen.getByRole("paragraph").innerHTML).toBe(description);
    });

    test('should not render description when not provided', () => {
        const expectedTitle = "Test Title";
        const { container } = render(<CustomHeader title={expectedTitle} />);
        const element = container.querySelector(".content-center");
        const title = element?.querySelector("h1")?.innerHTML;

        expect(title).toBe(expectedTitle);

        const description = element?.querySelector("p")?.innerHTML;
        
        expect(description).toBeUndefined();
    })
})