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
                            hover:text-color-orange
                            transition-all
                            relative
                            block
                            group
                            "
                    >
                        <div className="relative overflow-hidden rounded-md">
                            <Image
                                src={anime.images.webp.image_url}
                                alt="..."
                                width={350}
                                height={350}
                                className="w-full h-80 object-cover"
                            />
                            <div className="absolute flex items-end inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-75 pointer-events-none"
                            >
                                {/* title */}
                                <h3 className="font-bold md:text-xl text-md p-4 ">{anime.title}
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