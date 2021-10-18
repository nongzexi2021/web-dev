import PostSummaryList from "./PostSummaryList/index.js";

const HomeScreenComponent = () => {
    return(`
            
           
           
       
           <!-- image with overlaid text -->
           
         
           <ul class="list-group">
           ${PostSummaryList()}
           </ul>
   
           
           
    `);
}
export default HomeScreenComponent;
