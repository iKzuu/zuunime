import AnimeList from "../components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse, getNestedAnimeResponse } from "../service/api-libs";
import { randomizeData } from "@/service/helpers";

const Page = async () => {

  const topAnime = await getAnimeResponse("top/anime", "limit=8");
  const recommAnime = await getNestedAnimeResponse("recommendations/anime", "entry");
  const recAnim = randomizeData(recommAnime, 8);

  return (
    <>
      {/* populer */}
      <section>
        <Header title={"Paling Populer"} linkTitle={"Lihat Semua"} linkHref={"/populer"} />
        <AnimeList api={topAnime} />
      </section>

      {/* recommend */}
      <section>
        <Header title={"Rekomendasi"}/>
        <AnimeList api={recAnim} />
      </section>
    </>
  );
}

export default Page;