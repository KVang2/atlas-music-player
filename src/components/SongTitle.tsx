interface SongTitleProps {
    title: string;
    artist: string;
}

export default function SongTitle({ title, artist }: SongTitleProps) {
    return (
        <div className="flex flex-col text-start p-4 dark:">
            <p className="font-bold text-text">{title}</p>
            <p className="font-light text-text">{artist}</p>
        </div>
    );
}