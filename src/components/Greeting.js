import React from "react";

const Greeting = () => {
    return (
        <section className="min-h-screen flex items-center justify-center bg-red-100">
            <div className="container mx-auto flex flex-col lg:flex-row items-center">
                <div className="flex flex-col items-center text-center">
                    {/* title */}
                    <h1 className="text-4xl lg:text-[70px] leading-tight lg:leading-[1.1] font-light my-6">
                        HAPPY 21
                        <span style={{ fontSize: '0.5em', verticalAlign: 'super' }}>
                            st
                        </span>
                    </h1>
                    <div className="mx-4 my-4 lg:mx-52">
                        <p className="text-center text-lg lg:text-2xl tracking-wide">
                            Upon this day of joy and cheer,
                            A maiden's birth I now revere,
                        </p>
                        <p className="text-center text-lg lg:text-2xl tracking-wide">
                            With grace and beauty, fair and true,
                            The stars align to honor you.
                        </p>
                        <p className="text-center text-lg lg:text-2xl tracking-wide mt-6">
                            The moon did glow, the stars did gleam,
                            As heavens blessed her with a dream.
                        </p>
                        <p className="text-center text-lg lg:text-2xl tracking-wide">
                            Her laughter, like a lark’s sweet song,
                            Did echo through the woods so long.
                        </p>
                        <p className="text-center text-lg lg:text-2xl tracking-wide mt-6">
                            Her eyes, two pools of twilight's grace,
                            Reflected joy upon her face.
                        </p>
                        <p className="text-center text-lg lg:text-2xl tracking-wide">
                            Her smile, a beacon in the night,
                            Brought warmth and love, a pure delight.
                        </p>
                        <p className="text-center text-lg lg:text-2xl tracking-wide mt-6">
                            O lady fair, my love, my light,
                            In you the world is pure and bright.
                        </p>
                        <p className="text-center text-lg lg:text-2xl tracking-wide">
                            May all your days be filled with cheer,
                            And happiness forever near.
                        </p>
                        <p className="text-center text-lg lg:text-2xl tracking-wide mt-6">
                            On this her day of birth we sing,
                            With hearts that joy and laughter bring.
                        </p>
                        <p className="text-center text-lg lg:text-2xl tracking-wide">
                            For she, the jewel of my heart,
                            From whom I never wish to part.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Greeting;
