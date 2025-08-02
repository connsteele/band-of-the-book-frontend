const requiredAtrib = ["title", "book", "author", "blogger", "date", "content"];

const getPosts = async (index) => {
    try {
        const indexRes = await fetch(index);
        const postFiles = await indexRes.json();

        const posts = await Promise.all(
            postFiles.map(async (filename) => {
                const res = await fetch(`/posts/${filename}`);
                const post = await res.json();

                // Validate post attributes
                for (let item of requiredAtrib) {
                    if (!post[item])
                        throw new Error(`Required post attribute "${item}" is missing!`); 
                }

                return post;
            })
        );

        return posts;

    } catch (e) {
        console.error(e);
        throw e;
    }


};

export default getPosts;