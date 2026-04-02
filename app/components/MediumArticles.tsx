'use client';

import React, { useEffect, useState } from 'react';

interface Article {
  title: string;
  link: string;
  pubDate: string;
  thumbnail: string;
  description: string;
}

interface MediumArticlesProps {
  username: string;
  limit?: number;
}

const MediumArticles: React.FC<MediumArticlesProps> = ({ username, limit }) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/medium?username=${username}`);

        if (!response.ok) {
          throw new Error('Failed to fetch articles');
        }

        const data = await response.json();
        const articlesToShow = limit ? data.articles.slice(0, limit) : data.articles;
        setArticles(articlesToShow);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [username, limit]);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="text-lg">Loading articles...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="text-red-500">Error: {error}</div>
      </div>
    );
  }

  if (articles.length === 0) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="text-gray-500">No articles found</div>
      </div>
    );
  }

  return (
    <section className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <a
            key={index}
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block overflow-hidden rounded-2xl border border-gray-200 hover:border-gray-400 transition-all duration-300 hover:shadow-sm"
          >
            {article.thumbnail && (
              <div className="relative overflow-hidden bg-gray-100 aspect-[16/9]">
                <img
                  src={article.thumbnail}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            )}
            <div className="p-6 bg-white">
              <h3 className="text-lg font-semibold text-black group-hover:text-blue-600 transition-colors duration-200 line-clamp-2 mb-3">
                {article.title}
              </h3>
              <p className="text-sm text-gray-600">
                {new Date(article.pubDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default MediumArticles;
