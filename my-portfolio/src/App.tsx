import Container from "./Componenets/container"
import Card from "./Componenets/Card"


export default function App() {
  return(   
  <div className="bg-blue-900">
    <Container>
    <div className ="flex flex-col items-center justify-start p-4 min-h-screen">
      <div className="Title flex w-full">
      <h1 className="font-sans font-bold text-5xl p-2 text-center text-white">
        Test
      </h1>
      
      </div>
      
      <div className="flex flex-col w-full mt-10  items-center justify-center gap-5">

        <h1 className="font-sans font-bold text-3xl p-2 w-12/12 underline text-center"> Introduction</h1>
        <p className="w-12/12 font-sans font-semibold text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
          and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
      </div>


      <div className= " flex flex-row w-full gap-5 m-5 mt-20 justify-center">
      <Card 
        title="#1" 
        image= "/src/assets/Wordpress.png" 
        description=" Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
          and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum">
        
      </Card>
      <Card 
        title="#1" 
        image= "/src/assets/Wordpress.png" 
        description=" Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
          and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum">
        
      </Card>
      <Card 
        title="#1" 
        image= "/src/assets/Wordpress.png" 
        description=" Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
          and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum">
        
      </Card>
        
      </div>
    </div>
    </Container>
  </div>
    )

}