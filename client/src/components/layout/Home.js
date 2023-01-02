
import {useEffect,useState}from 'react'

function home() {
  return(
    <>
   <div class="theme-selector">
        <a href="javascript:void(0)" class="spinner">
            <i class="ti-paint-bucket"></i>
        </a>
        <div class="body">
            <a href="javascript:void(0)" class="light"></a>
            <a href="javascript:void(0)" class="dark"></a>
        </div>
    </div>  
   
    <header class="header">
        <div class="overlay"></div>
        <div class="header-content">
            <h1 class="header-title">Lion King University</h1>
            <p class="header-subtitle">You can make everything if you really try hard</p>

            <button class="btn btn-theme-color modal-toggle"><i class="ti-control-play text-danger"></i> Watch Video</button>

        </div>
    </header>

   
    <div class="modalBox">
        <div class="modalBox-body">
            <iframe width="100%" height="450px" class="border-0" 
            src="https://www.youtube.com/embed/tgbNyZ7vqY?controls=0">
            </iframe>
        </div>          
    </div>

   
    <div class="container page-container">
        <div class="col-md-10 col-lg-8 m-auto">
            <h6 class="title mb-4">Course</h6>
            <p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>
        </div>  

        <div class="row mb-4">
            <div class="col-md-4">
                <a href="javascript:void(0)" class="overlay-img">
                    <img src="https://cms.greenwich.edu.vn/pluginfile.php/1/theme_adaptable/frontpagerendererdefaultimage/1661998272/edu-survey-landing-image.jpg" alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, weber Landing page"/>  
                    <div class="overlay"></div> 
                    <div class="des">
                        <h1 class="title">Excepteur sint</h1>
                        <h6 class="subtitle">magna aliqua</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>          
                </a>
            </div>
            <div class="col-md-4">
                <a href="javascript:void(0)" class="overlay-img">
                    <img src="https://cms.greenwich.edu.vn/pluginfile.php/1/theme_adaptable/frontpagerendererdefaultimage/1661998272/edu-survey-landing-image.jpg" alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, weber Landing page"/>  
                    <div class="overlay"></div> 
                    <div class="des">
                        <h1 class="title">Nostrud exercitation </h1>
                        <h6 class="subtitle">nulla pariatur</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>          
                </a>
            </div>
            <div class="col-md-4">
                <a href="javascript:void(0)" class="overlay-img">
                    <img src="https://cms.greenwich.edu.vn/pluginfile.php/1/theme_adaptable/frontpagerendererdefaultimage/1661998272/edu-survey-landing-image.jpg" alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, weber Landing page"/>  
                    <div class="overlay"></div> 
                    <div class="des">
                        <h1 class="title">Excepteur sint</h1>
                        <h6 class="subtitle">magna aliqua</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>          
                </a>
            </div>          
        </div>

        <a href="#">Load More <i class="ti-angle-double-right angle"></i></a>
    </div> 
    </>
  )

 
}

export default home;
