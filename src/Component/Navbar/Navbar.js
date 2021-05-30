import React,{useState} from 'react';
import './navbar.css';


function Navbar() {

    const [open, setopen] = useState(false);
    const [Nav, setNav] = useState(false);


        const changeBackground = () =>{
                
            if(window.scrollY >= 100){
                setNav(true);
            }
            else{
                setNav(false);
            }
        }

        window.addEventListener('scroll', changeBackground);


        const handleOpen = () =>{
            setopen(!open);

            if(open){
                document.querySelector('.body').classList.remove('active');
            }
            else{
                document.querySelector('.body').classList.add('active');
            }
        }

   

    return (
            <div className={Nav ? "nav active" : "nav"}>
                <div className="container">
                    <div className="logo-block">
                            <img src="image/logo.png" alt="Organic" />    <h1 className="logo">organic</h1>
                    </div>
            
                    <div className="side-menu">
                        <ul className={ open ? "nav-list active" : "nav-list"}>
                            
                            <a href="/"><li className="nav-link">Home</li></a>

                            <a href="">
                                <li className="nav-link">Products</li>
                            </a>

                            <a href="">
                                <li className="nav-link">blogs</li>
                            </a>

                            <a href="">
                                <li className="nav-link">About Us</li>
                            </a>

                            <a href="">
                                <li className="nav-link active">Contact</li>
                            </a>
                        </ul>
                    </div>  
                    
                    <div className="hamburger" onClick={handleOpen} >
                        <span className={open ? "span1 active" : "span1"}></span>
                        <span className={open ? "span2 active" : "span2"}></span>
                    </div>

                </div>
            </div>
    )
}

export default Navbar
