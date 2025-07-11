import { StartupTypeCard } from '@/app/(root)/page'
import { EyeIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { cn, formatDate } from '@/lib/utils'
import { Skeleton } from './ui/skeleton'

const StartupCard = ({ post }: { post: StartupTypeCard }) => {
    const { title, description, image, _createdAt, views, author: { name, _id: authorId, image: authorImg }, _id, category } = post;

    return (
        <li className='startup-card group'>
            <div className="flex-between">
                <p className="startup_card_date">
                    {formatDate(_createdAt)}
                </p>
                <div className="flex gap-1.5">
                    <EyeIcon className='size-6 text-primary' />
                    <span className='text-16-medium'>{views}</span>
                </div>
            </div>

            <div className="flex-between mt-5 gap-5">
                <div className="flex-1">
                    <Link href={`/user/${authorId}`}>
                        <p className='text-16-medium line-clamp-1'>{name}</p>
                    </Link>
                    <Link href={`/startup/${_id}`}>
                        <h3 className='text-26-semibold line-clamp-1'>{title}</h3>
                    </Link>
                </div>
                <Link href={`/user/${authorId}`}>
                    <Image src={authorImg} alt='placeholder' width={48} height={48} className='rounded-full' />
                </Link>
            </div>

            <Link href={`/startup/${_id}`}>
                <p className='startup-card_desc'>
                    {description}
                </p>

                <Image src={image} alt="placeholder" className='startup-card_img' width={400} height={200} />
            </Link>

            <div className="flex-between gap-3 mt-5">
                <Link href={`/?query=${category.toLowerCase()}`}>
                    <p className='text-16-medium'>{category}</p>
                </Link>
                <Button className='startup-card_btn' asChild>
                    <Link href={`/startup/${_id}`}>
                        Details
                    </Link>
                </Button>
            </div>
        </li>
    )
}

export const StartupCardSkeletion = () => (
    <>
    {[0, 1, 2, 3, 4].map((index: number) => (
        <li key={cn("skeletion", index)}>
            <Skeleton className='startup-card_skeleton' />
        </li>
    ))}
    </>
)

export default StartupCard