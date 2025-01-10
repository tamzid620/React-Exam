import CustomTable from "./Components/CustomTable/CustomTable";
import ImageUpload from "./Components/ImageUpload/ImageUpload";


const App = () => {


  return (
    <div className="lg:max-w-5xl md:max-w-3xl sm: max-w-sm lg:mx-auto md:mx-6 sm: mx-4 my-20">
     <CustomTable />
     <ImageUpload />
    </div>
  );
};

export default App;
