import { render } from "@testing-library/react";
import Loader from "../components/Loader";

test("Loader matches snapshot", () => {
  const { asFragment } = render(<Loader />);
  expect(asFragment()).toMatchSnapshot();
});
