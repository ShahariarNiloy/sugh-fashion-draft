import { Testimonial } from "@/types/testimonial";
import Image from "next/image";

const SingleItem = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="bg-white rounded-2xl py-8 px-6 sm:px-8 shadow-sm hover:shadow-xl hover:shadow-blue/5 transition-all duration-300">
      {/* Quote icon */}
      <div className="mb-5">
        <svg
          className="w-8 h-8 text-blue/20"
          fill="currentColor"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H6c0-2.2 1.8-4 4-4V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-8c0-2.2 1.8-4 4-4V8z" />
        </svg>
      </div>
      {/* Star rating */}
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className="w-4 h-4 text-yellow"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className="text-dark-3 leading-relaxed mb-6">{testimonial.review}</p>
      <div className="flex items-center gap-4 pt-5 border-t border-gray-2">
        <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-blue/20">
          <Image
            src={testimonial.authorImg}
            alt="author"
            className="w-full h-full object-cover"
            width={48}
            height={48}
          />
        </div>

        <div>
          <h3 className="font-semibold text-dark">{testimonial.authorName}</h3>
          <p className="text-sm text-dark-4">{testimonial.authorRole}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleItem;
