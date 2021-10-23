import React from "react";

function Contact() {
    return (
        <div className="text-center">
            <h1 className="text-3xl md:text-4xl pt-3 font-semibold text-white">
                Contact Me
            </h1>
            <p className="text-xl pt-5 text-white font-semibold px-16">
                You can contact me on{" "}
                <a
                    href="https://twitter.com/dracthedino/"
                    className="text-blue-200 italic underline hover:bg-blue-900 transition duration-500 transform"
                >
                    Twitter
                </a>{" "}
                or{" "}
                <a
                    href="https://www.instagram.com/dracthedino/"
                    className="text-pink-300 italic underline hover:bg-pink-600 transition duration-500 transform"
                >
                    Instagram
                </a>{" "}
                (I am @dracthedino on both)!
                <br/>I am also available (and often, more active) on Discord{" "}
                <span className="font-bold italic">@Drac#9999</span>. I won't accept
                friend requests but you can join{" "}
                <a
                    href="https://discord.gg/programming"
                    className="text-purple-300 italic underline hover:bg-purple-600 transition duration-500 transform"
                >
                    The Programmer's Hangout Discord
                </a>{" "}
                where I am also a staff member and ping me in the public chat.
            </p>
        </div>
    );
}

export default Contact;
