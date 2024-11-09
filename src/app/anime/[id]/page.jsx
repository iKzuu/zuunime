import { getAnimeResponse, getNestedAnimeResponse } from "@/service/api-libs";
import VideoPlayer from "@/components/Utilities/VideoPlayer";
import Image from "next/image";
import Synopsis from "@/components/Utilities/AnimeComponents/Synopsis";
import StatsBoard from "@/components/Utilities/AnimeComponents/StatsBoard";

const Page = async ({ params: { id } }) => {

    const anime = await getAnimeResponse(`anime/${id}`);
    const studios = anime.data.studios;

    return (
        <>
            <div className="pt-5 xl:mx-52 px-5 flex flex-col sm:flex-nowrap flex-wrap md:gap-5 gap-2 text-color-primary justify-center">

                <div className="">
                    <h3 className="md:text-2xl text-lg text-color-blueform">{anime.data?.title}</h3>
                </div>

                <div className="flex flex-row md:gap-5 gap-10">
                    <Image
                        src={anime.data.images.webp.large_image_url}
                        alt={anime.data.images.jpg.large_image_url}
                        width={250}
                        height={250}
                        className="w-fit rounded-lg object-cover md:max-h-80 max-h-52"
                    />

                    {/* Stats Board */}
                    <StatsBoard score={anime.data?.score} users={anime.data?.scored_by} ranked={anime.data?.rank} popularity={anime.data?.popularity} members={anime.data?.members} release={anime.data?.year} season={anime.data?.season} types={anime.data?.type} studio={anime.data?.studios[0]?.name} episode={anime.data?.episodes} producer={anime.data?.producers[0]?.name} />
                </div>

                {/* <div className="flex flex-col">

                    <div className="flex md:justify-normal md:items-start items-center justify-center gap-2 text-color-primary overflow-x-auto">
                        <div className="md:w-36 w-28 flex flex-col justify-center items-center rounded-lg border border-color-blueform p-3">
                            <h3>Release</h3>
                            <p className="md:text-xl text-sm">{anime.data.year}</p>
                        </div>

                        <div className="md:w-36 w-28 flex flex-col justify-center items-center rounded-lg border border-color-blueform p-3">
                            <h3>Season</h3>
                            <p className="md:text-xl text-sm">{anime.data.season}</p>
                        </div>

                        <div className="md:w-36 w-28 flex flex-col justify-center items-center rounded-lg border border-color-blueform p-3">
                            <h3>Episode</h3>
                            <p className="md:text-xl text-sm">{anime.data.episodes}</p>
                        </div>
                    </div>
                </div> */}

                {/* component synopsis */}
                <div className="text-wrap flex flex-col gap-3">
                    <h3 className="text-color-primary ">Synopsis</h3>
                    <Synopsis text={anime.data.synopsis} />
                </div>

            </div>

            <div>
                <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
            </div>
        </>
    )
}

export default Page;