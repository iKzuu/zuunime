// randomize data
export const randomizeData = (data, gap) => {
    const first = ~~(Math.random() * (data.length - gap) + 1);
    const last = first + gap;

    const response = {
        data: data.slice(first, last)
    }

    return response;
}

// format angka
export const formatNumber = (number) => {
    try {
        if (number == null || number === undefined) return '0';
        if (typeof number === 'string') number = parseInt(number);
        return number.toLocaleString('id-ID');
    } catch (error) {
        console.error('Error formating number : ', error);
        return '0';
    }
}

export const formatText = (text) => {
    try {
        if (text == null || text === undefined) return 'none';
    } catch (error) {
        console.error('Error formating text : ', error);
        return 'none';
    }
}