"use client"

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
    const searchRef = useRef();
    const router = useRouter();

    const handleSearch = (event) => {

        const keyword = searchRef.current.value.trim();

        if (!keyword) return;

        if (event.key === 'Enter' || event.type === 'click') {
            event.preventDefault();
            router.push(`/search/${keyword}`);
        }
    }

    return (
        <div className="relative w-52">
            <input
                placeholder="search anime..."
                className="w-full p-2 rounded outline-none"
                ref={searchRef}
                onKeyDown={handleSearch}
            />
            <button
                className="absolute top-2 end-2"
                onClick={handleSearch}>
                <MagnifyingGlass size={24} className="text-color-blueform hover:scale-125 transition-all"/>
            </button>
        </div>
    );
}

export default InputSearch;