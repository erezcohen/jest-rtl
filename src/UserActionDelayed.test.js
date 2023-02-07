import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import UserAction from "./UserAction";

describe("UserAction", () => {
  afterEach(() => cleanup());

  it("changes the value on user click", async () => {
    const user = userEvent.setup();
    render(<UserAction />);

    user.click(screen.getByRole("button"));
    expect(await screen.findByText("New Sub title")).toBeInTheDocument();

    // The following won't work here since getByText will be performed before
    // the promise resolves (the command is added to the Queue)
    // await user.click(screen.getByRole("button"));
    // expect(screen.getByText("Another Sub title")).toBeInTheDocument();
  });
});
