import Image from "next/image";

const Characters = ({char, charimg, charname, seiyu}) => {
    return (
        <>
            <div>
                <Image 
                    src={charimg}
                    alt={charname}
                    width={100}
                    height={100}
                />

                <h1>{charname}</h1>
            </div>
        </>
    );
}

export default Characters;