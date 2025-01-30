import { render, screen, fireEvent } from "@testing-library/react";
import VolumeControl from "../components/VolumeControls";
import { describe, test, expect, vi } from "vitest";

describe('VolumeControl Component', () => {

    // test rendering
    test('Renders volume slider', () => {
        render(<VolumeControl volume={50} onVolumeChange={() => {}} />);

        const slider = screen.getByRole('slider');
        expect(slider).toBeInTheDocument();
        expect(slider).toHaveValue('50');
    });

    test('min and max values', () => {
        render(<VolumeControl volume={50} onVolumeChange={() => {}} />);
    
        const slider = screen.getByRole('slider');
        expect(slider).toHaveAttribute('min', '0');
        expect(slider).toHaveAttribute('max', '100');
    });

    // Test volume values
    test("onVolumeChange when volume get adjusted", () => {
        const onVolumeChange = vi.fn();
        render(<VolumeControl volume={50} onVolumeChange={onVolumeChange} />);

            const slider = screen.getByRole("slider");

            fireEvent.change(slider, { target: { value: "25" } });
    
            expect(onVolumeChange).toHaveBeenCalledTimes(1);
            expect(onVolumeChange).toHaveBeenCalledWith(25);
    });
});

describe("VolumeControl Snapshot", () => {
    test("renders correctly", () => {
            const { container } = render(<VolumeControl volume={50} onVolumeChange={() => {}} />);
            expect(container).toMatchSnapshot();
        });
    });