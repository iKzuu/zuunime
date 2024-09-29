const Pagination = ({ page, lastPage, setPage }) => {

    const toTop = () => {
        scrollTo({
            behavior: "smooth",
            top: 0
        })
    }

    const handleNextPage = () => {
        setPage((prevState) => {
            if(prevState < lastPage) {
                toTop();
                return prevState + 1
            }
            return prevState;
        });
    }

    const handlePrevPage = () => {
        setPage((prevState) => {
            if(prevState > 1) {
                toTop();
                return prevState - 1;
            }
            return prevState;
        });
    }

    return (
        <div className="flex justify-center items-center py-4 px-2 gap-8 text-color-orange md:text-2xl text-1xl">
            <button onClick={handlePrevPage} className="transition-all hover:text-color-primary">Prev</button>
            <h3>{page} of {lastPage}</h3>
            <button onClick={handleNextPage} className="transition-all hover:text-color-primary">Next</button>
        </div>
    );
}

export default Pagination;