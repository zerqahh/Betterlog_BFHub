import './main.scss';
import Footer from '../footer/footer';
import Header from '../header/header';
import Content from './content';



function Main() {
    
  return (
    <div className="main">
        <Header />
        <Content />
        <Footer />
    </div>
  );
}

export default Main;
