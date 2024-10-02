"use client"
import { FileSearch, KeyReturn } from "@phosphor-icons/react";
import Link from "next/link";

const NoPageFound = () => {
    return (
        <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
            <div className="flex justify-center items-center gap-4 flex-col">
                <FileSearch size={45} className="text-color-primary"/>
                <h3 className="text-color-blueform text-4xl font-bold">NOT FOUND</h3>
                <Link href="/" className="">
                    <KeyReturn
                        size={45}
                        className="hover:text-color-orange hover:scale-150 transition-all"/>
                </Link>
            </div>
        </div>
    );
}

export default NoPageFound;