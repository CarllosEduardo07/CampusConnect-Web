import { Skeleton } from "@/components/ui/skeleton";
import { Post } from "@/interface/posts";
import { getPosts } from "@/services/conexao";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import relativeTime from "dayjs/plugin/relativeTime";
import { ArrowBigDown, ArrowBigUp, MessageCircleMore } from "lucide-react";
import { useEffect, useState } from "react";
import NavBar from "./navbar";

// Configura o dayjs para usar o plugin
dayjs.extend(relativeTime);
dayjs.locale("pt-br");

export default function Forum() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setTimeout(async () => {
          const fetchedPosts = await getPosts();
          console.log(fetchedPosts); // Mostra posts

          //Posts com a data formatada
          const formattedSortedPosts = fetchedPosts
            //comparando para ordenar do mais recente
            .sort(
              (a: Post, b: Post) =>
                dayjs(b.createdAt).valueOf() - dayjs(a.createdAt).valueOf(),
            )
            .map((post: Post) => ({
              ...post,
              createdAt: dayjs(post.createdAt).fromNow(),
            }));

          setPosts(formattedSortedPosts);
          setLoading(false); // Dados carregados, altera o estado de carregamento
        }, 2000);
      } catch (error) {
        console.log("Erro ao carregar Posts:", error);
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const filteredPost = posts.filter((post) =>
    post.title.toLowerCase().includes(""),
  );

  return (
    <div className="bg-zinc-100 pb-20">
      <NavBar />
      {loading
        ? Array(4) // Número de skeletons para simular o número de posts
            .fill(null)
            .map((_, index) => (
              // Exibe o Skeleton durante o carregamento
              <Skeleton
                key={index}
                className="bg-white p-10 mt-10 w-[90%] mx-auto flex flex-col items-start space-y-5 rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_4px_8px]"
              >
                <article className="flex gap-x-8">
                  <Skeleton className="w-8 h-36 space-y-5 flex flex-col items-center"></Skeleton>

                  <article className="space-y-4">
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-[900px]"></Skeleton>
                      <Skeleton className="h-4 w-[100px]"></Skeleton>
                    </div>
                    <Skeleton className="h-20 w-full"></Skeleton>
                  </article>
                </article>
                <article>
                  <Skeleton className="h-4 w-[100px]"></Skeleton>
                </article>
              </Skeleton>
            ))
        : filteredPost.map((post) => (
            <div
              key={post.id}
              className="bg-white p-10 mt-10 w-[90%] mx-auto flex flex-col items-start space-y-5 rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_4px_8px]"
            >
              <article className="flex gap-x-8">
                <div className="space-y-5 flex flex-col items-center">
                  <ArrowBigUp
                    strokeWidth={1.5}
                    size={30}
                    absoluteStrokeWidth
                    className="cursor-pointer text-zinc-600 hover:text-zinc-900"
                  />
                  <span>15</span>
                  <ArrowBigDown
                    strokeWidth={1.5}
                    size={30}
                    absoluteStrokeWidth
                    className="cursor-pointer text-zinc-600 hover:text-zinc-900"
                  />
                </div>

                <article className="space-y-4">
                  <div className="space-y-2">
                    <h1 className="text-xl text-purple-700 font-semibold">
                      {post.title}
                    </h1>
                    <h3 className="text-xs text-zinc-500 ">{post.createdAt}</h3>
                  </div>
                  <h2 className="text-zinc-600">{post.text}</h2>
                </article>
              </article>
              <article>
                <div>
                  <span className="flex gap-x-2 cursor-pointer text-zinc-600 hover:text-zinc-900 font-semibold text-sm">
                    <MessageCircleMore
                      strokeWidth={1.5}
                      size={20}
                      absoluteStrokeWidth
                    />
                    Comentários
                  </span>
                </div>
              </article>
            </div>
          ))}
    </div>
  );
}
