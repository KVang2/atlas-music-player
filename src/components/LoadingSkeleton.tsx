export default function CurrentlyPlayingSkeleton() {
    return (
    <div className="flex flex-col justify-between p-8 bg-primary text-text rounded-lg border border-black dark:bg-darkBackground dark:text-darkText w-full h-full">
        // Cover Art
        <div className="w-[450px] h-[450px] object-cover rounded-md border border-gray-300"></div>

        // Song title skeleton
        <div className="flex flex-col text-start p-4 dark"></div>

        // Volume control Skeleton
        <div className="h-4 w-full bg-gray-300 dark:bg-gray-700"></div>
    </div>
    );
}
