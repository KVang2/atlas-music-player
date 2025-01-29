interface SongTitleProps {
    title: string;
    artist: string;
}

export default function SongTitle({ title, artist }: SongTitleProps) {
    return (
        <div className="flex flex-col text-start p-4">
            <p className="font-bold text-text">{title}</p>
            <p className="text-text">{artist}</p>
        </div>
    );
}