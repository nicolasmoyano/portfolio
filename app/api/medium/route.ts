import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get('username');

  if (!username) {
    return NextResponse.json(
      { error: 'Username parameter is required' },
      { status: 400 }
    );
  }

  try {
    const response = await fetch(`https://medium.com/feed/@${username}`);

    if (!response.ok) {
      throw new Error('Failed to fetch Medium feed');
    }

    const xmlText = await response.text();

    // Parse XML to extract articles
    const articles = parseRSSFeed(xmlText);

    return NextResponse.json({ articles });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch Medium articles' },
      { status: 500 }
    );
  }
}

function parseRSSFeed(xmlText: string) {
  const articles: Array<{
    title: string;
    link: string;
    pubDate: string;
    thumbnail: string;
    description: string;
  }> = [];

  // Extract items from RSS feed
  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  const items = xmlText.match(itemRegex) || [];

  items.forEach((item) => {
    // Extract title
    const titleMatch = item.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/);
    const title = titleMatch ? titleMatch[1] : '';

    // Extract link
    const linkMatch = item.match(/<link>(.*?)<\/link>/);
    const link = linkMatch ? linkMatch[1] : '';

    // Extract pubDate
    const pubDateMatch = item.match(/<pubDate>(.*?)<\/pubDate>/);
    const pubDate = pubDateMatch ? pubDateMatch[1] : '';

    // Extract thumbnail from content:encoded or description
    const contentMatch = item.match(/<content:encoded><!\[CDATA\[([\s\S]*?)\]\]><\/content:encoded>/);
    const content = contentMatch ? contentMatch[1] : '';

    // Try to find the first image in the content
    const imgMatch = content.match(/<img[^>]+src="([^">]+)"/);
    const thumbnail = imgMatch ? imgMatch[1] : '';

    // Extract description (plain text)
    const descriptionMatch = item.match(/<description><!\[CDATA\[(.*?)\]\]><\/description>/);
    const description = descriptionMatch ? descriptionMatch[1] : '';

    articles.push({
      title,
      link,
      pubDate,
      thumbnail,
      description,
    });
  });

  return articles;
}
