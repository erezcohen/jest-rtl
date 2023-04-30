import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import UserAction from "./UserAction";

describe("UserAction", () => {
  // afterEach(() => cleanup());

  it("changes the value on user click", async () => {
    const user = userEvent.setup();
    render(<UserAction />);

    // This works (the onClick is added to the Stack)
    await user.click(screen.getByRole("button"));
    expect(screen.getByText("New Sub title")).toBeInTheDocument();
    // or: user.click(screen.getByText("Get Subtitle", { selector: "button" }));

    // or:
    // user.click(screen.getByRole("button"));
    // expect(await screen.findByText("New Sub title")).toBeInTheDocument();
  });
});
