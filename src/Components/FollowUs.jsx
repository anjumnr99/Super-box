import Title from "./Title";


const FollowUs = () => {
    return (
        <div className="mb-10">
            <Title title1={'you can also'} title2={'follow us'}></Title>
            <div className=" flex flex-row items-center justify-center gap-10 mt-10">
                <img className=" w-12" src="../../src/assets/facebook_2111398.png" alt="" />
                <img className=" w-12" src="../../src/assets/instagram_2111463.png" alt="" />
                <img className=" w-12" src="../../src/assets/linkedin_3992606.png" alt="" />
                <img className=" w-12" src="../../src/assets/twitter_3256013.png" alt="" />
                <img className=" w-12" src="../../src/assets/youtube_5968852.png" alt="" />
            </div>
        </div>
    );
};

export default FollowUs;