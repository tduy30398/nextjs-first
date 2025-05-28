import React from 'react'
import SearchForm from '../../components/SearchForm';
import StartupCard from '@/components/StartupCard';
import { client } from '@/sanity/lib/client';
import { STARTUP_QUERY } from '@/sanity/lib/queries';

export interface StartupTypeCard {
  title: string;
  description: string;
  image: string;
  _createdAt: string;
  views: number;
  author: { id: number, name: string, bio: string, image: string };
  _id: number;
  category: string;
};

const Home = async ({ searchParams }: { searchParams: { query: string } }) => {
  const query = (await searchParams)?.query || '';

  const posts: StartupTypeCard[] = await client.fetch(STARTUP_QUERY);

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup, <br />
          Connect with Entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions
        </p>
        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className='text-30-semibold'>
          {query ? `Search results for "${query}"` : 'All Startups'}
        </p>
        <ul className='mt-7 card_grid'>
          {posts.length > 0 ? (
            posts.map((item) => (
              <StartupCard key={item._id} post={item} />
            ))
          ) : (
            <p className='no-results'>No startups found.</p>
          )}
        </ul>
      </section>
    </>
  );
}

export default Home