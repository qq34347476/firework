import AvaLiveVersion from "./components/AvaLiveVersion"
import Experience from "./components/Experience"
import BrandsCarousel from '../../components/BrandsCarousel';
import ScheduleDemo from "./components/ScheduleDemo";
import BringAvaToLife from "./components/BringAvaToLife";
import WhatAvaCanDo from "./components/WhatAvaCanDo";
import AvaForEveryone from "./components/AvaForEveryone";
import UnlockCustomerInsights from "./components/UnlockCustomerInsights";
import FindAvaSection from "./components/FindAvaSection";
import RoiWithAva from "./components/RoiWithAva";
import CommerceHeroSection from "./components/CommerceHeroSection";
import TailoredForYouSection from "./components/TailoredForYouSection";
function Solutions() {
    return (
        <div>
            <AvaLiveVersion />
            <Experience />
            <BrandsCarousel />
            <div className="row" style={{backgroundColor:"black"}}>
                <TailoredForYouSection />
            </div>
            <BringAvaToLife />
            <WhatAvaCanDo />
            <AvaForEveryone />
            <UnlockCustomerInsights />
            <FindAvaSection />
            <RoiWithAva />
            <ScheduleDemo />
            <CommerceHeroSection />
            

        </div>
    )
}


export default Solutions
