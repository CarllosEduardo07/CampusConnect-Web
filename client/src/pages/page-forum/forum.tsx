import { getPosts } from '@/services/conexao';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import relativeTime from 'dayjs/plugin/relativeTime';
import { ArrowBigDown, ArrowBigUp, MessageCircleMore } from 'lucide-react';
import { useEffect, useState } from 'react';
import NavBar from './navbar';

// Configura o dayjs para usar o plugin
dayjs.extend(relativeTime);
dayjs.locale('pt-br');

interface Post {
  id: string;
  title: string;
  createdAt: string;
  text: string;
  // profileId: number;
  // communityId: number;
}

export default function Forum() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const fetchedPosts = await getPosts();
        console.log(fetchedPosts); // Mostra posts
        
        //Posts com a data formatada
        const formattedSortedPosts = fetchedPosts
        //comparando para ordenar do mais recente 
        .sort((a: Post, b: Post) => dayjs(b.createdAt).valueOf() - dayjs(a.createdAt).valueOf())
        .map((post: Post) => ({
          ...post,
          createdAt: dayjs(post.createdAt).fromNow()
        }));
        
        setPosts(formattedSortedPosts);
      } catch (error) {
        console.log('Erro ao carregar Posts:', error);
      }
    };
    fetchPosts();
  }, []);

  const filteredPost = posts.filter((post) => 
    post.title.toLowerCase().includes('')
);


  return (
     <div className='bg-zinc-100'>
      <NavBar />
      {filteredPost.map((post) => (
        <section key={post.id} className='bg-white p-10 mt-10 w-[90%] mx-auto flex flex-col items-start space-y-5 rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_4px_8px]'>
          <article className='flex gap-x-8'>
            <div className='space-y-5 flex flex-col items-center'>
              <ArrowBigUp strokeWidth={1.5} size={30} absoluteStrokeWidth className='cursor-pointer text-zinc-600 hover:text-zinc-900' />
              <span>15</span>
              <ArrowBigDown strokeWidth={1.5} size={30} absoluteStrokeWidth className='cursor-pointer text-zinc-600 hover:text-zinc-900' />
            </div>

            <article className='space-y-4'>
              <div className='space-y-2'>
                <h1 className='text-xl text-purple-700 font-semibold'>{post.title}</h1>
                <h3 className='text-xs text-zinc-500 '>{post.createdAt}</h3>
              </div>
              <h2 className='text-zinc-600'>{post.text}</h2>
            </article>
          </article>
          <article>
            <div>
              <span className='flex gap-x-2 cursor-pointer text-zinc-600 hover:text-zinc-900 font-semibold text-sm'>
                <MessageCircleMore strokeWidth={1.5} size={20} absoluteStrokeWidth />
                Comentários
              </span>
            </div>
          </article>
        </section>
      ))}
    </div>
  );
}
