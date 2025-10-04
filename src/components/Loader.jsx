export default function Loader(){
  // This loader only runs for 1s to simulate a quick route change loading bar
  return <div className="loader" style={{width:'100%', position:'fixed', top:0, zIndex:10}} /> 
}