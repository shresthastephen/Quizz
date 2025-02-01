const Hero = () => {
  return (
    <>
      <section class="bg-indigo-700 py-20 mb-4">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
          {/* Left Hero */}
          <div class="md:w-1/2 text-center md:text-left">
            <h1 class="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
              Challenge Your Mind, Conquer the Quiz!
            </h1>
            <p class="my-4 text-xl text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
              officia nisi eaque impedit optio at fugit voluptate earum labore
              adipisci!
            </p>
          </div>

          {/* Right Hero */}
          <div class="md:w-1/2 flex justify-center mt-8 md:mt-0">
            {/* <img
              src="./assets/trophy.png"
              alt="Quiz Illustration"
              class="rounded-lg shadow-lg"
            /> */}
            <img src={trophy} alt="Description" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
