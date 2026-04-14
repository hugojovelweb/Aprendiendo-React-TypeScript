import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, test, vi } from "vitest";
import { MyCounterApp } from "./MyCounterApp";
//import { useCounter } from "../hooks/useCounter";

const handelAddMock = vi.fn();
const handelSubtractMock = vi.fn();
const handelResetMock = vi.fn();

vi.mock("../hooks/useCounter", () => ({
    useCounter: () => ({
        counter: 40,
        handleAdd: handelAddMock,
        handleSubtract: handelSubtractMock,
        handleReset: handelResetMock,
    })
}));

describe("MyCounterApp", () => {
    it("should render the component", () => {
        render(<MyCounterApp />);

        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(
      'Counter: 40'    
    );

    expect(screen.getByRole("button", { name: '+1' })).toBeDefined();
    expect(screen.getByRole("button", { name: '-1' })).toBeDefined();
    expect(screen.getByRole("button", { name: 'Reset' })).toBeDefined();
  });


  test('should call handleAdd if +1 button is clicked', () => {
    
    render(<MyCounterApp />); 
    const button = screen.getByRole("button", { name: '+1' });
    fireEvent.click(button);

    expect(handelAddMock).toHaveBeenCalled();
    expect(handelSubtractMock).not.toHaveBeenCalled();
    expect(handelResetMock).not.toHaveBeenCalled();

});
});

