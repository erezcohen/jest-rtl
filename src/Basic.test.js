import Basic from "./Basic";
import { screen, render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Basic", () => {
  afterEach(() => cleanup());

  it("1", async () => {
    render(<Basic />);

    // Won't work since it'll be executed before the state flushes:
    // expect(screen.getByText("NEW")).toBeInTheDocument();

    expect(await screen.findByText("New Title")).toBeInTheDocument();
  });
});
