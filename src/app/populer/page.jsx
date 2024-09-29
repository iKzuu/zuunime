"use client"

import AnimeList from "@/components/AnimeList";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/Pagination";
import { useEffect, useState } from "react";
import { getAnimeResponse } from "../service/api-libs";

const Page = () => {
    const [page, setPage] = useState(1);
    const [topAnime, setTopAnime] = useState([]);

    const dataFetch = async() => {
        const animePopuler = await getAnimeResponse("top/anime", `page=${page}`)
        setTopAnime(animePopuler);
    }

    useEffect(() => {
        dataFetch();
    }, [page])

    return (
        <>
            <HeaderMenu title={`Anime Populer #${page}`}/>
            <AnimeList api={topAnime}/>
            <Pagination
                page={page}
                lastPage={topAnime.pagination?.last_visible_page}
                setPage={setPage}
            />
        </>
    );
}

export default Page;