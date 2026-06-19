import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const GalleryPage = () => {
const sliderSettings = {
dots: true,
infinite: true,
speed: 500,
slidesToShow: 1,
slidesToScroll: 1,
autoplay: true,
autoplaySpeed: 3000,
arrows: true,
};

const galleryItems = [
{
title: "China Technical Visit",
description:
"Technical visit to China for studying advanced extrusion technologies and production systems.",
images: [
  
"https://media.licdn.com/dms/image/v2/D4D22AQGlKyNAuYI0gg/feedshare-shrink_1280/B4DZ5ZsenLIUAM-/0/1779621293154?e=1782950400&v=beta&t=RWS0uk92rouL7jx2OlPwbDn4fD3gKRB6OWJUcmCaxJQ",
"https://media.licdn.com/dms/image/v2/D4E22AQEax15AZe4gFA/feedshare-shrink_1280/B4EZ5kj.s5JMAQ-/0/1779803614725?e=1782950400&v=beta&t=0XZ4GIk1tmOBMEcMrZzSXRCRk5DCQmmqoBWH7F-kRgI",
"https://media.licdn.com/dms/image/v2/D4E22AQFjQB3g0REF7g/feedshare-shrink_1280/B4EZ5kj9qtIkAM-/0/1779803610541?e=1782950400&v=beta&t=D3pDFqlwgSWyv9JMAhavAAApf7Ld1pjhLWVdBBbkVxM",
],
},
{
title: "Plastic Extruder Machinery",
description:
"Inspection and evaluation of Jwell extrusion machines.",
images: [
// "https://media.licdn.com/dms/image/v2/D4D22AQElPx9no-gnbw/feedshare-shrink_1280/B4DZ5Zsc7SIUAM-/0/1779621286241?e=1782950400&v=beta&t=QXpPhmSnsm2rZhvkDjPqasloqd7kW6Q7XfYQAVMVRQ0",
"https://media.licdn.com/dms/image/v2/D4D22AQHc-MCmhE0LSw/feedshare-shrink_1280/B4DZ5ZsafmJcAM-/0/1779621276061?e=1782950400&v=beta&t=lqx_9KFnPwfy-IXKq9pW3D0ewYY1fYbLPUVxdXXQIfg",
"https://media.licdn.com/dms/image/v2/D4E22AQGdylIPdZtQ4g/feedshare-image-high-res/B4EZ5fdE7XK0AU-/0/1779717918747?e=1782950400&v=beta&t=Bw4EDIbp17iodqW4UeUqW7ILxwpCvT_7dRpO4DQnG0Y",
"https://media.licdn.com/dms/image/v2/D4E22AQEKBK4NlFqyZQ/feedshare-shrink_1280/B4EZ5kj9l6HUAM-/0/1779803610132?e=1782950400&v=beta&t=1vqLfl1sODn2d2cFfCFSzZla7wIH_4FT6ii5PHiOhlw",
],
},
{
title: "Machine Installation",
description:
"Professional installation and commissioning of machinery.",
images: [
// "https://media.licdn.com/dms/image/v2/D5622AQGEFcJczcghrA/feedshare-image-high-res/B56Zrtjx1CLIAo-/0/1764922190858?e=1782950400&v=beta&t=NCIu18sLd6y3rkvn67NicmLIYNjxhYKt7moJ4DXLUt4",
"https://media.licdn.com/dms/image/v2/D5622AQGVnwipEmJFWw/feedshare-shrink_1280/B56Z3vMKKnHEAM-/0/1777834435555?e=1782950400&v=beta&t=LgbNdGp33a-46JKz5A55Y69R_04cqv2RTANNll-wWJU",
"https://media.licdn.com/dms/image/v2/D5622AQHufTOhkSGLow/feedshare-image-high-res/B56Zx7QeT.JMAU-/0/1771594442510?e=1782950400&v=beta&t=ORcFBc8aN4j1FBOfe75zGFdDGfjl5C4FwDUIOotKkRY",
"https://media.licdn.com/dms/image/v2/D5622AQEOhq4GRr9erg/feedshare-image-high-res/B56Zrtjx0zL4Ao-/0/1764922190340?e=1782950400&v=beta&t=NEurPS-3mJulJaufegvm6TUFxptp_Ow7CHp8UrnZ3lc",
],
},
];

return ( <div className="pt-16">


  {/* Gallery Section */}
  <section className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4">

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">
          Our Gallery
        </h1>

        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          Explore our technical visits, machine inspections,
          installation projects, maintenance activities and
          industrial expertise.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {galleryItems.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <Slider {...sliderSettings}>
              {item.images.map((img, i) => (
                <div key={i}>
                  <img
                    src={img}
                    alt={`${item.title} ${i + 1}`}
                    className="w-full h-64 object-cover"
                  />
                </div>
              ))}
            </Slider>

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  </section>

  {/* Achievements Section */}
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12">
        Our Achievements
      </h2>

      <div className="grid md:grid-cols-4 gap-8 text-center">
        <div className="bg-gray-50 p-8 rounded-xl shadow">
          <h3 className="text-4xl font-bold text-blue-600">100+</h3>
          <p className="mt-3 text-gray-600">Projects Completed</p>
        </div>

        <div className="bg-gray-50 p-8 rounded-xl shadow">
          <h3 className="text-4xl font-bold text-blue-600">10+</h3>
          <p className="mt-3 text-gray-600">Years Experience</p>
        </div>

        <div className="bg-gray-50 p-8 rounded-xl shadow">
          <h3 className="text-4xl font-bold text-blue-600">25+</h3>
          <p className="mt-3 text-gray-600">Machine Installations</p>
        </div>

        <div className="bg-gray-50 p-8 rounded-xl shadow">
          <h3 className="text-4xl font-bold text-blue-600">100%</h3>
          <p className="mt-3 text-gray-600">Client Satisfaction</p>
        </div>
      </div>
    </div>
  </section>

  {/* Client Testimonials */}
  <section className="py-20 bg-gray-100">
    <div className="max-w-7xl mx-auto px-4">

      <h2 className="text-4xl font-bold text-center mb-12">
        Client Testimonials
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        <div className="bg-white p-8 rounded-xl shadow-lg">
          <p className="text-gray-600 italic">
            "Excellent technical knowledge and professional support.
            The installation process was smooth and highly efficient."
          </p>

          <h4 className="mt-6 font-bold">
            Rajesh Patel
          </h4>

          <p className="text-sm text-gray-500">
            Production Manager
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg">
          <p className="text-gray-600 italic">
            "Strong expertise in extrusion technology and machine
            maintenance. Highly recommended for industrial projects."
          </p>

          <h4 className="mt-6 font-bold">
            Amit Shah
          </h4>

          <p className="text-sm text-gray-500">
            Plant Head
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg">
          <p className="text-gray-600 italic">
            "Professional approach, quick troubleshooting and
            excellent technical guidance throughout the project."
          </p>

          <h4 className="mt-6 font-bold">
            Vishal Mehta
          </h4>

          <p className="text-sm text-gray-500">
            Operations Director
          </p>
        </div>

      </div>
    </div>
  </section>

</div>


);
};

export default GalleryPage;
