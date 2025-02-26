"use client"

import { formatNumber } from "@/service/helpers";
import { Star } from "@phosphor-icons/react";

const StatsBoard = ({ score, users, ranked, popularity, members, release, season, types, studio, episode, producer }) => {
    return (
        <div className="flex md:flex-row flex-col gap-1 md:px-5 md:space-x-3 md:h-fit md:border-2 md:border-color-grey md:rounded-md md:p-4">

            {/* score */}
            <div className="flex md:flex-col flex-row gap-2 text-color-primary md:text-center items-center">
                <Star size={25} className="md:hidden block text-yellow-400"/>
                <p className="p-1 rounded-sm text-sm md:border-b-2 md:border-color-blueform md:block hidden">Score</p>
                <h1 className="font-bold md:text-2xl text-xl">{score}</h1>
                <p className="text-xs md:block hidden">{formatNumber(users)} users</p>
                <p className="text-xs md:hidden block">({formatNumber(users)} users)</p>
            </div>

            {/* line */}
            <div className="border-r-2 border-color-grey"></div>

            {/* other stats */}
            <div className="flex flex-col gap-5 justify-between">
                <div className="flex flex-row md:gap-3 gap-2 md:text-lg text-sm">
                    <h2>Rangked <b>#{ranked}</b></h2>
                    <h2 className="md:block hidden">Popularity <b>#{popularity}</b></h2>
                    <h2 className="md:block hidden">Members <b>{formatNumber(members)}</b></h2>
                </div>

                <div className="flex md:flex-row flex-col md:space-x-5 text-sm gap-1">
                    <p className="md:block hidden">{season} {release}</p>
                    
                    <div className="border-r-2 border-color-grey md:block hidden"></div>
                    <div className="flex flex-row gap-2">
                        <p>{types}</p>
                        <p className="md:hidden block">( {episode}eps )</p>
                    </div>
                    
                    <div className="border-r-2 border-color-grey md:block hidden"></div>
                    <p>{studio}</p>

                    <div className="border-r-2 border-color-grey md:block hidden"></div>
                    <p>{producer}</p>
                </div>
            </div>
        </div>
    );
}

export default StatsBoard;