import React from 'react'
import SearchForm from '../../components/SearchForm';
import StartupCard from '@/components/StartupCard';

export type StartupTypeCard = {
  title: string;
  description: string;
  image: string;
  _createdAt: Date;
  views: number;
  author: { id: number, name: string };
  _id: number;
  category: string;
};

const Home = async ({ searchParams }: { searchParams: { query: string } }) => {
  const query = (await searchParams)?.query || '';

  const post: StartupTypeCard[] = [
    {
      title: 'Startup 1',
      description: 'Description for Startup 1',
      image: 'https://picsum.photos/200',
      _createdAt: new Date(),
      views: 100,
      author: { id: 1, name: 'John Doe' },
      _id: 1,
      category: 'Technology',
    },
  ];

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
          {post.length > 0 ? (
            post.map((item) => (
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