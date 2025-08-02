const getPosts = async () => {
    try {
        const indexRes = await fetch("/posts/index.json");
        const postFiles = await indexRes.json();

        const postData = await Promise.all(
            postFiles.map(async (filename) => {
                const res = await fetch(`/posts/${filename}`);
                return await res.json();
            })
        );

        return postData;

    } catch (e) {
        console.error(e);
    }


};

export default getPosts;