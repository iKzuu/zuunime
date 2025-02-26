import { getAnimeResponse, getNestedAnimeResponse } from "@/service/api-libs";
import VideoPlayer from "@/components/Utilities/VideoPlayer";
import Image from "next/image";
import Synopsis from "@/components/Utilities/AnimeComponents/Synopsis";
import StatsBoard from "@/components/Utilities/AnimeComponents/StatsBoard";
import CharacterList from "@/components/Utilities/AnimeComponents/AnimeChar";

const Page = async ({ params: { id } }) => {

    const anime = await getAnimeResponse(`anime/${id}`);
    const animeChar = await getNestedAnimeResponse(`anime/${id}/characters`, ["character", "role", "voice_actors"])
    .then(data => data?.slice(0, 25));

    return (
        <>
            <div className="pt-5 px-5 flex flex-col gap-5 space-y-0 mb-5">

                <div className="flex flex-col sm:flex-nowrap flex-wrap md:gap-5 gap-2 text-color-primary justify-center">

                    <div className="">
                        <h3 className="md:text-2xl text-lg text-color-blueform">{anime.data?.title}</h3>
                    </div>

                    <div className="flex flex-row md:gap-5 gap-5">
                        <Image
                            src={anime.data?.images.webp.large_image_url}
                            alt={anime.data?.images.jpg.large_image_url}
                            width={250}
                            height={250}
                            className="w-fit rounded-lg object-cover md:max-h-80 max-h-52"
                        />

                        {/* Stats Board */}
                        <StatsBoard score={anime.data?.score} users={anime.data?.scored_by} ranked={anime.data?.rank} popularity={anime.data?.popularity} members={anime.data?.members} release={anime.data?.year} season={anime.data?.season} types={anime.data?.type} studio={anime.data?.studios[0]?.name} episode={anime.data?.episodes} producer={anime.data?.producers[0]?.name} />
                    </div>

                    {/* component synopsis */}
                    <div className="text-wrap flex flex-col gap-3">
                        <h3 className="text-color-primary ">Synopsis</h3>
                        <Synopsis text={anime.data?.synopsis} />
                    </div>
                </div>

                {/* List Character and Seiyu(Voice Actors) */}
                <div className="flex flex-col gap-3 text-color-primary">
                    <h3>Character & Seiyu</h3>
                    <CharacterList apiChar={animeChar} />
                </div>
            </div>

            {/* <div>
                <VideoPlayer youtubeId={anime.data?.trailer.youtube_id} />
            </div> */}
        </>
    )
}

export default Page;