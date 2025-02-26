'use client';
import Image from "next/image";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import useGrabScroll from "@/hooks/useGrabScroll";
import { mergeRefs } from "react-merge-refs";
import useButtonScroll from "@/hooks/useButtonScroll";

const CharacterList = ({ apiChar }) => {

    const {
        itemsRef,
        handleMouseDown,
        handleMouseLeave,
        handleMouseUp,
        handleMouseMove
    } = useGrabScroll();

    const {
        containerRef,
        scrollLeft,
        scrollRight,
        currentScroll
    } = useButtonScroll();

    return (

        <div className="relative w-full flex items-center">

            {/* Left Button */}

            <button
                type="button"
                onClick={scrollLeft}
                className="absolute text-color-blueform h-20 md:block hidden rounded-md xl:-left-12 left-2 z-10 bg-color-primary/50 hover:bg-color-primary/75 p-2 shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={currentScroll === 0}
            >
                <CaretLeft size={35} />
            </button>

            <div
                ref={mergeRefs([containerRef, itemsRef])}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                className="flex flex-row overflow-x-auto scrollbar-hide scroll-smooth w-full"
            >
                {apiChar?.map((char, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 w-24 text-center"
                    >
                        <div className="flex flex-col text-color-primary space-y-0 items-center">
                            {/* menampilkan character anime */}
                            <div className="flex flex-col gap-2 overflow-hidden w-20 h-auto border border-b-0 p-1">
                                <Image
                                    src={char?.character?.images?.webp?.image_url}
                                    alt={char?.character?.images?.jpg?.image_url}
                                    width={255}
                                    height={255}
                                    className="w-20 h-20 object-cover"
                                />
                                <h2
                                    className="text-center text-xs truncate cursor-pointer" title={char.character?.name}
                                >
                                    {char.character?.name}
                                </h2>
                                <p className="text-center text-xs truncate">({char.role})</p>
                            </div>

                            {/* menampilkan voica actors dari character anime */}
                            <div className="border-t-0 w-20 flex items-center justify-center border p-1">
                                {char.voice_actors?.length > 0 ? (
                                    <ul className="truncate">
                                        {char.voice_actors?.map((voiceActor, idx) => (
                                            <li
                                                key={idx}
                                                className="flex flex-col gap-2"
                                            >
                                                <Image 
                                                    src={voiceActor.person?.images?.jpg?.image_url}
                                                    alt={voiceActor.person?.name}
                                                    width={255}
                                                    height={255}
                                                    className="w-20 h-20 object-cover"
                                                />
                                                <h2 className="text-center text-xs truncate cursor-pointer" title={voiceActor.person?.name}>
                                                    {voiceActor.person?.name}
                                                </h2>
                                                <p className="border-t w-full truncate text-center text-xs" title={voiceActor?.language}>
                                                    {voiceActor?.language}
                                                </p>
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <span>Unknown</span>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Right Button */}
            <button
                type="button"

                onClick={scrollRight}
                className="absolute text-color-blueform h-20 md:block hidden rounded-md xl:-right-12 right-2 z-10 bg-color-primary/50 hover:bg-color-primary/75 p-2 shadow-md disabled:opacity-50 disabled:cursor-not-allowed"

                disabled={
                    containerRef.current && containerRef.current.scrollLeft + containerRef.current.clientWidth >= containerRef.current.scrollWidth
                }
            >
                <CaretRight size={35} />
            </button>
        </div>

    );
}

export default CharacterList;