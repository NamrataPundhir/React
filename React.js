//React is a single page application(spa)
//most popular js library for creating ui
//also used by netflix and instagram
//we can build modern websites and applications
//WHAT IS LIBRARY
//a library in programming can be explain as a collection of codes.We use  a library from it into our projects.jQuery is a library for example.
//we can write js much simpler by using jQuery.
//ANGULAR is a framework for this.
//HIERARCHY OF DOM=WINDOW,DOCUMENT,HTML,HEAD,TITLE,BODY
//If any change in dom then it is completely update and rewritten.It is takes time
//In react only the part which is change not the whole code.
//REACT CREATE A COPY OF DOM ,FIGURE OUT ONLY UPDATE THE NEW PART AND REST THE OTHER CODE.So it is faster to use 
//React make much faster your code for creating a page in this.
//const element=<h1>Hello!</h1>  //CALLED JAVA SCRIPT EXTENSION OR JSK SYNTAX
//JSK CODE TRANSLATE INTO NORMAL JS BY BABEL

class Hello extends React.Component{
    render(){
        return <div>Hello{this.props.towhat}</div>;
    }
}
ReactDom.render(
    <Hello towhat="world"/>,
    document.getElementById('root'));

