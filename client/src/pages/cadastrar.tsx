import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Cadastrar() {
  return (
    <section className='w-full h-screen bg-bannerImg bg-no-repeat bg-cover bg-bottom flex justify-center items-center'>
      <section className='w-full h-full flex justify-center items-center'>
        <article className='bg-white p-8 rounded-3xl w-1/3'>
          <img src='src/assets/campusconnectlogo.svg' alt='logocampusconnect' className='w-40 mx-auto' />

          <form className='space-y-5 flex flex-col'>
            <Input type='text' placeholder='Nome Completo' required />
            <Input type='email' placeholder='Email' required />
            <Input type='number' placeholder='Cpf' required />
            <Input type='text' placeholder='Matricula da instituição' required />
            <Input type='password' placeholder='Criar Senha' required />

            <Button type='submit' className='bg-purple-600 hover:bg-purple-700'>
              Criar Conta
            </Button>

            <span className='mx-auto text-purple-700'>
              <a href={`/`} className='hover:underline'>
                Já tem uma conta? <strong>Login</strong>
              </a>
            </span>
            <span className='mx-auto text-purple-700 text-center'>
              <strong>Junte-se</strong> a mais de <strong>2M</strong> de usuários <br />
              campus connect!
              <span className='flex justify-center pt-3 h-10'>
                <img src='src/assets/Avatar group.png' alt='groupavatar' />
              </span>
            </span>
          </form>
        </article>

        <figure className='w-2/5 ml-5'>
          <img src='src/assets/parttwocadastro.png' alt='cadastroimg' />
        </figure>
      </section>
    </section>
  );
}
