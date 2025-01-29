interface CoverArtProps {
  cover: string;
}

export default function CoverArt({ cover }: CoverArtProps) {
  return (
    <div className="flex justify-center">
      <img 
        src={cover}
        alt="Cover Art"
        className="w-[400px] h-[400px] object-cover rounded-md border border-gray-300" 
      />
    </div>
  );
}
