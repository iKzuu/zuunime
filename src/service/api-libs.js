export const getAnimeResponse = async (resource, query) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`);
    const anime = await response.json();
    return anime;
}

export const getNestedAnimeResponse = async (resource, objectProperty) => {
    const response = await getAnimeResponse(resource);

    if (Array.isArray(objectProperty)) {
        return response.data?.flatMap((item) => processItemProperties(item, objectProperty));
    }
    return response.data.flatMap((item) => item[objectProperty]);
}

export const filterVoiceActors = (voiceActors) => {
    // memfilter voice acrtors yang berbahasa jepang dahulu
    const japaneseActors = voiceActors.filter(voiceActor => voiceActor.language === "Japanese");

    // Jika actor japanese tersedia dan lebih dari satu, kembalikan hanya actor pertama
    if (japaneseActors.length > 0) {
        return [japaneseActors[0]];
    }

    // Mengambil 1 dari bahasa yang terdapat voice actors, jika tidak ada actor japanese
    const languageGroups = voiceActors.reduce((groups, actor) => {
        if (actor.language) {
            groups[actor.language] = groups[actor.language] || [];
            groups[actor.language].push(actor);
        }
        return groups;
    }, {});

    // Mengambil actor pertama dari bahasa yang tersedia
    return Object.values(languageGroups).length > 0
        ? [Object.values(languageGroups)[0][0]]
        : [];
};

export const processItemProperties = (item, objectProperties) => {
    const result = {};
    objectProperties.forEach((prop) => {
        if(prop === "voice_actors") {
            result[prop] = filterVoiceActors(item[prop]);
        } else {
            result[prop] = item[prop];
        }
    });

    return result;
};