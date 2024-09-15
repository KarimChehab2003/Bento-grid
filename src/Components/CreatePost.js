

function CreatePost() {
    return (
        <div className="md:row-span-5 md:col-span-2 flex flex-col items-center justify-center px-6 py-12 rounded-xl" style={{ backgroundColor: "#faeee2" }}>
            <p className="text-3xl text-start tracking-tighter" style={{ lineHeight: "0.9" }}>Create and schedule content <span className="text-violet-600 italic">quicker.</span></p>
            <img className="w-52 mt-8 cursor-pointer" src="/assets/images/illustration-create-post.webp" alt="" />
        </div>
    );
}

export default CreatePost;