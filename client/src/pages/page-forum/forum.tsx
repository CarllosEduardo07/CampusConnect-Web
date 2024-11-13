import { getPosts } from '@/services/conexao';
import { ArrowBigDown, ArrowBigUp, MessageCircleMore } from 'lucide-react';
import { useEffect } from 'react';
import NavBar from './navbar';

export default function Forum() {
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const fetchedPosts = await getPosts();
        console.log(fetchedPosts); // Agora deve exibir os dados corretos
      } catch (error) {
        console.log('Erro ao carregar Posts:', error);
      }
    };
    fetchPosts();
  }, []);
  return (
    <div className='h-full bg-zinc-100'>
      <NavBar />
      <section className='bg-white p-10 mt-10 w-[90%] mx-auto flex flex-col items-start space-y-5 rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_4px_8px]'>
        <article className='flex gap-x-8'>
          <div className='space-y-5 flex flex-col items-center'>
            <ArrowBigUp strokeWidth={1.5} size={30} absoluteStrokeWidth className='cursor-pointer text-zinc-600 hover:text-zinc-900' />
            <span>15</span>
            <ArrowBigDown strokeWidth={1.5} size={30} absoluteStrokeWidth className='cursor-pointer text-zinc-600 hover:text-zinc-900' />
          </div>

          <article className='space-y-4'>
            <div className='space-y-2'>
              <h1 className='text-xl text-purple-700 font-semibold'>Dicas para se preparar para as provas finais</h1>
              <h3 className='text-xs text-zinc-500 '>Postado por Estudante Aplicado em 2023-05-15 09:30</h3>
            </div>
            <h2 className='text-zinc-600'>Olá pessoal! Alguém tem dicas de como se preparar melhor para as provas finais? Estou um pouco nervoso e queria saber como vocês lidam com isso.</h2>
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
    </div>
  );
}
