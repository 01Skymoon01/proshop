import React from 'react';



const CoursesScreen = () => {


    return (
        <>
            <style>
                {`
                *{margin:0px; padding:0px}

                .parent {
               
                     background: #092756;
                     background: -moz-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%),-moz-linear-gradient(top, rgba(57,173,219,.25) 0%, rgba(42,60,87,.4) 100%), -moz-linear-gradient(-45deg, #670d10 0%, #092756 100%);
                     background: -webkit-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%), -webkit-linear-gradient(top, rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%), -webkit-linear-gradient(-45deg, #670d10 0%,#092756 100%);
                     background: -o-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%), -o-linear-gradient(top, rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%), -o-linear-gradient(-45deg, #670d10 0%,#092756 100%);
                     background: -ms-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%), -ms-linear-gradient(top, rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%), -ms-linear-gradient(-45deg, #670d10 0%,#092756 100%);
                     background: -webkit-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%), linear-gradient(to bottom, rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%), linear-gradient(135deg, #670d10 0%,#092756 100%);
                height:300px; padding-top:50px; background-size:cover; 
                 }

                .frosted-glass{
                background:inherit; width: 800px; height: 200px; overflow: hidden; margin:0 auto; box-shadow: 0 5px 20px rgba(0,0,0,.3); position:relative;
                  border-radius: 10px;
                }


                .sub-frosted-glass{
                width: 1000px; height: 1000px; background: inherit;  border:1px solid white; margin:-50px 0 0 -50px;  -webkit-filter: blur(10px); filter: blur(10px); box-shadow: inset 0 0 0 4000px rgba(255,255,255,0.05);
            }

                .frosted-glass p{
                color:white; position:absolute; top:0px; font-family: sans-serif; font-size:1.25rem;
            }
            
  

                `}
            </style>
            <div className="parent">
                <div className="frosted-glass">
                    <div className="sub-frosted-glass">
                    </div>

                </div>
            </div>
        </>
            );
};

export default CoursesScreen;