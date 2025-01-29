interface PlayListItemProps {
    title: string;
    artist: string;
    duration: number;
    isSelected: boolean;
    onClick: () => void;
}

export default function PlayListItem({ title, artist, duration, isSelected, onClick }: PlayListItemProps) {

    const formatTime = (seconds: number): string => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);

        if (hours > 0) {
            return `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
        }
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    return (
        <div className={`flex justify-between gap-5 p-4 ${
            isSelected ? "bg-secondary" : "hover:bg-hover"
        }`}
        onClick={onClick}>
            <div>
                <p className="font-bold">{title}</p>
                <p className="text-gray-400">{artist}</p>
            </div>
            <div className="p-2">
                <p className="text-gray-400">{formatTime(duration)}</p>
            </div>
        </div>
    );
}