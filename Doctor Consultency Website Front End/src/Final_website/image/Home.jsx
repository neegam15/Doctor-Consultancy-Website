import React from "react";
import Common from "./Common";
import Common1 from "./Common1";
import img1 from "./image/home1.png"
import img2 from "./image/home2.jpg";
import img3 from "./image/home3.jpg";
import img4 from "./image/home4.jpg";
const Home = () => {
    return (<>
        <Common
                name="Grow your business with"
                content1="In this specialty, the doctor is trained to provide anaesthesia and 
                sedation. This is important for surgeries and certain medical procedures. 
                Anaesthesiologists also provide pre-operative assessments."
                visit="/service"
                btname="Get Started" 
                img1={img1}
                img2={img2}
                content2="Emergency room doctors are in charge of sudden important or life-threatening
                 emergencies.In addition to dealing with heart attacks, strokes, traumas, 
                 issues that require immediate medical attention or surgeries"
                    
                />
        <Common1 
                img1={img3}
                content1="A family doctor, otherwise known as general practitioner, is trained to provide 
                medical service to people of all ages, demographics, and walks of life.[15][16][17] Their 
                training is diverse to deal with a variety of conditions."
                img2={img4}
                content2="Gastroenterologists are doctors who specialize in the gastrointestinal (GI) tract 
                and upper abdominal organs.[18] The GI tract is consists of the esophagus all the way down 
                to the anus. The upper abdominal organs include the liver."
        />
    </>
    );
}
export default Home;
