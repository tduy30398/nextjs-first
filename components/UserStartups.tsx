import { StartupTypeCard } from '@/app/(root)/page';
import { client } from '@/sanity/lib/client'
import { STARTUPS_BY_AUTHOR_QUERY } from '@/sanity/lib/queries'
import React from 'react'
import StartupCard from './StartupCard';

const UserStartups = async ({id}: {id: string}) => {
    const startups: StartupTypeCard[] = await client.fetch(STARTUPS_BY_AUTHOR_QUERY, { id });
    
    return (
        <>
        {
            startups.length > 0 ? (
                startups.map((startup) => (
                    <StartupCard 
                        post={startup} 
                        key={startup._id} 
                    />
                ))
            ) : (
                <p className="no-result">No startups found.</p>
            )
        }
        </>
    )
}

export default UserStartups
