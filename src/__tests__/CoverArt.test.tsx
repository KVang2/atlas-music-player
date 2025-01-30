import { render, screen } from "@testing-library/react";
import CoverArt from "../components/CoverArt";
import { describe, test, expect } from "vitest";

describe("CoverArt", () => {
    test("renders cover image correctly", () => {
        const testCover = "https://exmple.com/test-cover.jpg";
        const testSongId = "12345";

        render(<CoverArt cover={testCover} songId={testSongId} />);

        const image = screen.getByRole("img");
        expect(image).toBeInTheDocument();

        expect(image).toHaveAttribute("src", testCover);
        expect(image).toHaveAttribute("alt", "Cover Art");
    });

    test("matches snapshot", () => {
        const { container } = render(<CoverArt cover="https://example.com/test-cover.jpg" songId="12345" />);
        expect(container).toMatchSnapshot();
      });
    });