import React from 'react'
import SearchForm from '../../components/SearchForm';
import StartupCard from '@/components/StartupCard';
import { STARTUP_QUERY } from '@/sanity/lib/queries';
import { sanityFetch, SanityLive } from '@/sanity/lib/live';
import { QueryParams } from 'next-sanity';

export interface StartupTypeCard {
  title: string;
  description: string;
  image: string;
  _createdAt: string;
  views: number;
  author: { _id: number, name: string, bio: string, image: string, userName: string };
  _id: number;
  category: string;
  pitch?: string;
};

const Home = async ({ searchParams }: { searchParams: { query: string } }) => {
  const query = (await searchParams)?.query || '';

  const params: QueryParams = {
    search: query || null,
  };

  const { data: posts } = await sanityFetch({ query: STARTUP_QUERY, params });

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
            posts.map((item: StartupTypeCard) => (
              <StartupCard key={item._id} post={item} />
            ))
          ) : (
            <p className='no-results'>No startups found.</p>
          )}
        </ul>
      </section>

      <SanityLive />
    </>
  );
}

export default Home