import { Input } from "@/components/ui/input";
import { refresh-ccw, Search } from "lucide-react";


const Home = () => {
  const searchIcon = Search;
  const refreshIcon = refresh-ccw

  return (
    <div className="flex flex-col h-screen justify-center gap-5">
      <div className=" bg-red-600 flex h-[45px] justify-start items-center text-white p-3">
        <h3> SOS Rio Grande do Sul</h3>
        
      </div>
      <div className="gap-2 flex flex-col">
        <div className="flex-1 flex">
          <h1 className=""> Abrigos disponíveis</h1>
        </div>
        <div className="flex-1 flex">
          <Input className="" />
        </div>
      </div>
    </div> 
  );
};

export { Home };
