import { FaRegStar, FaStar } from "react-icons/fa";
import Cmnt from "./Cmnt";

const Review = () => {
  return (
    <>
      <Cmnt
        heading="Jannie Schumm"
        img="/menUser.png"
        date="2 days ago"
        description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, qui. Magni
        labore inventore aperiam necessitatibus sit. Necessitatibus, est ipsa
        distinctio, aliquid"
        star={2}
        rating={"2.0"}
      />
      <Cmnt
        heading="Rohail Sadiq"
        img="/menUser.png"
        date="1 day ago"
        description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, qui. Magni
       labore inventore aperiam necessitatibus sit. Necessitatibus, est ipsa
       distinctio, aliquid nobis eos repellat, inventore voluptatem debitis
       reprehenderit autem laudantium dolorem beatae "
        star={3}
        rating={"3.0"}
      />
      <Cmnt
        heading="Rossie Schumm"
        img="/womanUser.png"
        date="7 days ago"
        description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, qui. Magni
        labore inventore aperiam necessitatibus "
        star={4}
        rating={"4.0"}
      />
      <div className="  mt-3">
        <h1 className="font-semibold text-xl">
          Write a Review for this product{" "}
        </h1>
        <label
          for="message"
          class="block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your rating{"  "}
          <span className="text-red-500">*</span>
        </label>
        <div className="flex mb-1 mt-2">
          {[...Array(5)].map((_, index) => (
            <FaRegStar key={index} className="text-yellow-400 text-xl" />
          ))}
        </div>
        <label
          for="message"
          class="block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your review{"  "}
          <span className="text-red-500">*</span>
        </label>

        <textarea
          id="message"
          rows="6"
          class="block p-2.5 w-full text-sm  text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write a review here..."
        ></textarea>
        <button className="px-6 py-2 mt-4  bg-red-500 text-xs text-white rounded hover:bg-red-600">
          Submit
        </button>
      </div>
    </>
  );
};

export default Review;
