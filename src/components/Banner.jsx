
const Banner = () => {
    return (
        <div>
           <div className="min-h-screen">
  <div className="flex flex-col md:flex-row px-4 py-6 sm:flex-row-reverse gap-6">
    <div className="mb-6 md:mb-0 md:w-1/2">
      <img
        src="https://images.unsplash.com/photo-1521123455729-f785146ad5a5?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGlmZSUyMGlzJTIwZ29vZHxlbnwwfHwwfHx8MA%3D%3D"
        className="rounded-lg shadow-2xl w-full h-auto" />
    </div>
    <div className="md:w-1/2">
      <h1 className="text-3xl md:text-5xl font-bold mb-4">Box Office News!</h1>
      <p className="py-4 md:py-6 text-base md:text-lg">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>

        </div>
    );
};

export default Banner;