import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "../components/Counter";

test("Counter increments on button click", () => {
  render(<Counter />);
  const button = screen.getByText("Increment");
  fireEvent.click(button);
  expect(screen.getByText("Counter: 1")).toBeInTheDocument();
});