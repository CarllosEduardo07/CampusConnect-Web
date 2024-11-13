import { getPosts } from "@/services/conexao";
import { useEffect } from "react";
import NavBar from "./navbar";

export default function Forum() {
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const fetchedPosts = await getPosts();
        console.log(fetchedPosts); // Agora deve exibir os dados corretos
      } catch (error) {
        console.log("Erro ao buscar motos:", error);
      }
    };
    fetchPosts();
  }, []);
  return (
    <div>
      <NavBar />
    </div>
  );
}
