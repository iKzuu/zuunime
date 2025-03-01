import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ api }) => {
    return (
        <div className="grid xl:grid-cols-8 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
            {api.data?.map((anime, index) => {
                return (
                    <Link
                        href={`/anime/${anime.mal_id}`}
                        key={index}
                        className="
                            cursor-pointer
                            text-color-primary
                            transition-all
                            relative
                            block
                            group
                            "
                    >
                        <div className="relative overflow-hidden rounded-md w-full aspect-[2/3] max-w-xs mx-auto">
                            <Image
                                src={anime.images?.webp?.image_url}
                                alt={anime.title}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-md image-listanime"
                            />
                            <div className="absolute flex items-end inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-75 pointer-events-none"
                            >
                                {/* title */}
                                <h3 className="font-bold md:text-xl text-md p-4 truncate group-hover:overflow-visible group-hover:whitespace-normal transition-all duration-300">
                                    {anime.title}
                                </h3>
                            </div>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
}

export default AnimeList;