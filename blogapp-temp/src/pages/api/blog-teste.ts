// pages/api/blog.ts

import { NextApiRequest, NextApiResponse } from 'next';

// Definir a tipagem para o objeto de resposta
interface BlogPost {
  id: number;
  titulo: string;
  descricao: string;
  timestamp: string;
  content: string;
}

interface BlogData {
  titulo: string;
  descricao: string;
  timestamp: string;
  content: string;
  blog: BlogPost[];
}

// Handler da API
export default function handler(req: NextApiRequest, res: NextApiResponse<BlogData>) {
  // Objeto estático com os dados
  const blogData: BlogData = {
    titulo: "Exemplo de Título",
    descricao: "Essa é uma descrição de exemplo para o blog.",
    timestamp: new Date().toISOString(),
    content: "Este é o conteúdo principal do blog. Aqui podemos adicionar texto, links, imagens, etc.",
    blog: [
      {
        id: 1,
        titulo: "Post 1",
        descricao: "Descrição do post 1",
        timestamp: new Date().toISOString(),
        content: "Conteúdo do post 1",
      },
      {
        id: 2,
        titulo: "Post 2",
        descricao: "Descrição do post 2",
        timestamp: new Date().toISOString(),
        content: "Conteúdo do post 2",
      },
    ]
  };

  // Retorna os dados em formato JSON
  res.status(200).json(blogData);
}
