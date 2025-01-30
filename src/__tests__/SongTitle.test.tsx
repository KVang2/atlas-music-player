import SongTitle from "../components/SongTitle";
import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";

describe ("SongTitle", () => {
    const title = "Painted in Blue";
    const artist = "Soul Canvas";

    test("render correct title", () => {
        render(<SongTitle title={title} artist={artist} />);

        const titles = screen.getByText(title);
        expect(titles).toBeInTheDocument();
        expect(titles).toHaveTextContent(title);
    });

    test("renders correct artist name", () => {
        render(<SongTitle title={title} artist={artist} />);

        const artistElement = screen.getByText(new RegExp(artist, "i"));
        expect(artistElement).toBeInTheDocument();
        expect(artistElement).toHaveTextContent(artist);
    });

    test("matchs snapshot", () => {
        const { container } = render(<SongTitle title={title} artist={artist} />);
        expect(container).toMatchSnapshot();
    });
});