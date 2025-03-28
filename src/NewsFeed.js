import React, { useEffect, useState } from "react";

const NewsFeed = () => {
    const [articles, setArticles] = useState([]);
    const [imageSizes, setImageSizes] = useState({});

    useEffect(() => {
        fetch("http://localhost:8080/api/news")
            .then((res) => res.json())
            .then((data) => setArticles(data))
            .catch((err) => console.error("Failed to fetch news:", err));
    }, []);

    const handleImageLoad = (e, index) => {
        const { naturalWidth, naturalHeight } = e.target;
        setImageSizes(prev => ({
            ...prev,
            [index]: { width: naturalWidth, height: naturalHeight }
        }));
    };

    const containerHeight = 160 + 60 + 25;

    return (
        <main className="w-full flex justify-center">
            <div className="w-[70%] max-w-[1400px] mx-auto">
                <div
                    className="grid gap-4"
                    style={{
                        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                        justifyContent: "center"
                    }}
                >
                    {articles.map((article, index) => {
                        const imageUrl = article.imageUrl || "https://picsum.photos/600/400";

                        return (
                            <div
                                key={index}
                                className="rounded-xl overflow-hidden bg-gray-800 text-white flex flex-col justify-between transition-transform duration-200 hover:scale-105"
                                style={{
                                    height: `${containerHeight}px`,
                                    flexShrink: 0,
                                }}
                            >
                                <a
                                    href={article.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 flex flex-col"
                                >
                                    <img
                                        src={imageUrl}
                                        alt={article.title}
                                        onLoad={(e) => handleImageLoad(e, index)}
                                        className="w-full h-[160px] object-cover"
                                    />
                                    <div className="px-3 py-2 text-sm font-semibold leading-tight line-clamp-3">
                                        {article.title}
                                    </div>
                                </a>

                                <div className="h-[25px] bg-black/60 text-xs text-gray-300 px-3 flex justify-between items-center">
                                    <span role="img" aria-label="comments">💬 {Math.floor(Math.random() * 100)}</span>
                                    <span role="img" aria-label="shares">🔁 {Math.floor(Math.random() * 20)}</span>
                                    <span role="img" aria-label="reactions">🔥 😂 👍</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </main>
    );
};

export default NewsFeed;
