//import Image from "next/image";
const nome="Ronaldo"
let telefone = '98986078012'
let email ="eletrotecnica.ronaldo@gmail.com"
function retorNome(){
  return nome
}
const nol=()=>{
  return email
}

function Topo(){
  return(
    <div className='flex justify-between items-center bg-zinc-300'>
      <div>logo</div>
      <div> {nol()} </div>
      <div> {nome} </div>
    </div>
  )
}

export default function Home() {
  return (
    <main>
      <Topo/>
      <div>-------------------</div>
      
      <div>Ola</div>
      <div>Esse é meu curso</div>
      <div>Meu nome é {retorNome()}</div>
      <div>Tenho 43 Anos</div>
      <div> {nol()}</div>
    </main>
  );
}
