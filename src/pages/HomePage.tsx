import ApiCard from "../components/ApiCard"
import MainPageSection from "../components/MainPageSection"
import Navbar from "../components/Navbar"

const HomePage = () => {


    return (
        <>
            <Navbar />

            <div id="hero" className="w-100 d-flex justify-content-center">
                <div className="container row h-100">
                    <div className="col d-flex align-items-center justify-content-center">
                        <img src="src/assets/subasa_logo.png" alt="" />
                    </div>
                    <div className="col d-flex flex-column align-items-center justify-content-center text-light">
                        <div>
                            <div style={{ fontSize: "3rem" }}>Welcome to</div>
                            <div style={{ fontSize: "6rem" }}>SUBASA</div>
                        </div>
                    </div>
                    {/* <img src="src/assets/homepage_cover.png" alt="cover image" /> */}
                </div>
            </div>

            <MainPageSection sectionHeading="Section 1 heading">
                <div className="col-4"><ApiCard /></div>
                <div className="col-4"><ApiCard /></div>
                <div className="col-4"><ApiCard /></div>
                <div className="col-4"><ApiCard /></div>
                <div className="col-4"><ApiCard /></div>
                <div className="col-4"><ApiCard /></div>
                <div className="col-4"><ApiCard /></div>
                <div className="col-4"><ApiCard /></div>
            </MainPageSection>

            <MainPageSection sectionHeading="Section 2 heading">
                <div className="col-4"><ApiCard /></div>
                <div className="col-4"><ApiCard /></div>
                <div className="col-4"><ApiCard /></div>
                <div className="col-4"><ApiCard /></div>
                <div className="col-4"><ApiCard /></div>
                <div className="col-4"><ApiCard /></div>
                <div className="col-4"><ApiCard /></div>
                <div className="col-4"><ApiCard /></div>
            </MainPageSection>

            <MainPageSection sectionHeading="Section 3 heading">
                <div className="col-4"><ApiCard /></div>
                <div className="col-4"><ApiCard /></div>
                <div className="col-4"><ApiCard /></div>
                <div className="col-4"><ApiCard /></div>
                <div className="col-4"><ApiCard /></div>
                <div className="col-4"><ApiCard /></div>
                <div className="col-4"><ApiCard /></div>
                <div className="col-4"><ApiCard /></div>
            </MainPageSection>
        </>
    )
}

export default HomePage