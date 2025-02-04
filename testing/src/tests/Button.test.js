import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../components/Button";

test("renders button with correct label", () => {
  render(<Button label="Test Button" />);
  expect(screen.getByText("Test Button")).toBeInTheDocument();
});

test("calls onClick when button is clicked", () => {
  const mockHandler = jest.fn();
  render(<Button label="Click Me" onClick={mockHandler} />);
  fireEvent.click(screen.getByText("Click Me"));
  expect(mockHandler).toHaveBeenCalledTimes(1);
});
