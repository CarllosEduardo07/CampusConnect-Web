import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Cadastrar() {
  return (
    <body className='flex justify-center items-center min-h-screen'>
      <section className='w-full h-screen bg-bannerImg bg-no-repeat bg-cover bg-bottom flex justify-center items-center'>
        <section className='w-full h-full flex justify-center items-center'>
          <article className='bg-white p-8 rounded-3xl w-1/3'>
            <img src='src/assets/campusconnectlogo.svg' alt='logocampusconnect' className='w-40 mx-auto' />

            <article className='space-y-5 flex flex-col'>
              <Input type='name' placeholder='Nome Completo' />
              <Input type='email' placeholder='Email' />
              <Input type='name' placeholder='Matricula da instituição' />
              <Input type='password' placeholder='Criar Senha' />

              <Button type='submit' className='bg-purple-600 hover:bg-purple-700'>
                Criar Conta
              </Button>

              <span className='mx-auto text-purple-700'>
                Já tem uma conta?{' '}
                <strong>
                  <a href='/p'>login</a>
                </strong>
              </span>
              <span className='mx-auto text-purple-700 text-center'>
                <strong>Junte-se</strong> a mais de <strong>2M</strong> de usuários <br />
                campus connect!
                <span className='flex justify-center pt-3 h-10'>
                  <img src='src/assets/Avatar group.png' alt='groupavatar' />
                </span>
              </span>
            </article>
          </article>

          <figure className='w-2/5 ml-5'>
            <img src='src/assets/parttwocadastro.png' alt='cadastroimg' />
          </figure>
        </section>
      </section>
    </body>
  );
}
