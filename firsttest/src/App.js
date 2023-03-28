import CardDetails from "./Components/CardDetails.js";
import NavBar from "./Components/NavBar.js";


const data = [
  {title : "Title1" , description :"Description1"},
  {title : "Title2" , description :"Description2"},
  {title : "Title3" , description :"Description3"},
  {title : "Title4" , description :"Description4"},
  {title : "Title5" , description :"Description5"},
  {title : "Title6" , description :"Description6"},
  {title : "Title7" , description :"Description7"},
]
const App = () =>{
    return (
        <div>
         {/* {
        data.map((item) => {
          return 
        

        })
      } */}
       <NavBar/>
      <CardDetails/>
        </div>
  )}

  export default App