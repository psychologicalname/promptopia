import Link from "next/link";

const Form = ({ type, isSubmitting, post, setPost, handleSubmit }) => {
    return (
        <section className="w-full max-w-full flex-start flex-col">
            <h1 className="head_text text-left">
                <span className="blue_gradient">{type} Post</span>
            </h1>
            <p className="desc text-left max-w-md">
                {type} and share amazing prompts with the world, and let your imagination run wild with any AI-powered platform.
            </p>

            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-7 mt-10 w-full max-w-2xl glassmorphism"
            >
                <label>
                    <span className="font-satoshi font-semibold text-base text-gray-700">
                        Your AI Prompt
                    </span>

                    <textarea
                        placeholder="Write your prompt here..."
                        className="form_textarea"
                        value={post.prompt}
                        onChange={(e) => setPost({ ...post, prompt: e.target.value })}
                        required
                    />
                </label>

                <label>
                    <span className="font-satoshi font-semibold text-base text-gray-700">
                        Your AI Prompt {` `}
                        <span className="font-normal text-gray-600">(#product, #webdevelopment, #idea)</span>
                    </span>

                    <input
                        placeholder="#tag"
                        className="form_input"
                        value={post.tag}
                        onChange={(e) => setPost({ ...post, tag: e.target.value })}
                        required
                    />
                </label>

                <div className="flex-end gap-4 mb-5 mx-3">
                    <Link href="/" className="text-gray-500 text-sm">
                        Cancel
                    </Link>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="text-sm px-5 py-1.5 bg-primary-orange text-white rounded-full"
                    >
                        {isSubmitting ? `${type}...` : type}
                    </button>
                </div>
            </form>
        </section>
    )
}

export default Form
