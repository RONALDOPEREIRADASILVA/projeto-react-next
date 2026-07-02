//import Image from "next/image";
const nome="Ronaldo"
const telefone = '98986078012'
const email ="eletrotecnica.ronaldo@gmail.com"
function retorNome(){
  return nome  
}
const nol=()=>{
  return email
}

/*function Topo(){
  return(
    <div className='flex justify-between items-center bg-zinc-300 '>
      <div>logo</div>
      <div> {nol()} </div>
      <div> {nome} </div>
    </div>
  )
}
*/
export default function Home() {
  return (
    <main>
      
      <div>-------------------</div>
      
      <div>Ola</div>
      <div>Esse é meu curso</div>
      <div>Meu nome é {retorNome()}</div>
      <div>Tenho 43 Anos</div>
      <div>{telefone}</div>
      <div> {nol()}</div>
    </main>
  );
}
