import React from "react";

const Contact = () => {
    return (
        <div className="bg-slate-800 w-100 h-50 flex flex-col items-center justify-center font-outfit" id="contact">
            <h1 className="text-white text-2xl md:text-4xl font-glow mt-4 md:mt-0">CONTACT</h1>
            <div className="flex flex-col gap-2">
                <label className="text-white">Nama</label>
                <input className="w-96 rounded p-2" type="text" placeholder="Masukkan Nama Anda"></input>
                <label className="text-white">Email</label>
                <input className="w-96 rounded p-2" type="email" placeholder="Masukkan Email Anda"></input>
                <label className="text-white">Comment</label>
                <textarea className="w-96 rounded h-40 p-2" placeholder="Masukkan Comment Anda"></textarea>
                <button type="submit" className="bg-blue-500 text-white rounded p-2 mb-5 md:mb-20">Send</button>
            </div>
        </div>
    )
}

export default Contact;
