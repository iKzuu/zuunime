import Link from "next/link";

const Header = ({ title, linkHref, linkTitle }) => {
    return (
        <div className="p-4 flex items-center justify-between">
            <h1 className="md:text-2xl text-lg font-bold text-color-primary">{title}</h1>
            {
                linkHref && linkTitle
                ?
                <Link href={linkHref} className="md:text-xl text-color-primary text-md underline hover:text-color-orange transition-all">
                    {linkTitle}
                </Link>
                :
                null
            }
        </div>
    );
}

export default Header;