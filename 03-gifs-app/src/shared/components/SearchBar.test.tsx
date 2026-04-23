import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import SearchBar from "./SearchBar";

describe("SearchBar", () => {
  test("should render the SearchBar component", () => {
    const { container } = render(<SearchBar onQuery={() => {}} />);

    expect(container).toMatchSnapshot();
    expect(screen.getByRole("textbox")).toBeDefined();
    expect(screen.getByRole("button")).toBeDefined();
  });

  test("should call the onQuery with the correct value after 700ms", async () => {
    const onQuery = vi.fn();
    render(<SearchBar onQuery={onQuery} />);

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "test" } });

    //await new Promise((resolve) => setTimeout(resolve, 701));
    await waitFor(() => {
      expect(onQuery).toHaveBeenCalled();
      expect(onQuery).toHaveBeenCalledWith("test");
    });
  });

  test('should call only once with the last value (debounce)', async () => {
    const onQuery = vi.fn();
    render(<SearchBar onQuery={onQuery} />);

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "T" } });
    fireEvent.change(input, { target: { value: "Te" } });
    fireEvent.change(input, { target: { value: "Tes" } });
    fireEvent.change(input, { target: { value: "Test" } });

    await waitFor(() => {
      expect(onQuery).toHaveBeenCalledTimes(1);
      expect(onQuery).toHaveBeenCalledWith("Test");
    });
  });

  test('should call onQuery when the button is clicked with the input value', () => {

    const onQuery = vi.fn();
    render(<SearchBar onQuery={onQuery} />);

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "test" } });

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(onQuery).toHaveBeenCalledTimes(1);
    expect(onQuery).toHaveBeenCalledWith("test");
  });

  test('should the input has the correct placeholder', () => {
    const value = "Buscar gif";
    
    render(<SearchBar onQuery={vi.fn()} placeholder={value}  />);

    screen.debug();


  });
});
