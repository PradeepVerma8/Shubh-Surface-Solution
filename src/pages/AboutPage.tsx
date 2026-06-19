import React from 'react';
import { Target, Eye, Users, Calendar, Award, TrendingUp } from 'lucide-react';

const AboutPage = () => {
  // const team = [
  //   {
  //     name: "Shubham Verma",
  //     role: "Founder & CEO",
  //     image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
  //     description: "15+ years of experience in technology leadership and business strategy."
  //   },
  //   {
  //     name: "Priya Sharma",
  //     role: "CTO",
  //     image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg",
  //     description: "Expert in software architecture and emerging technologies."
  //   },
  //   {
  //     name: "Amit Patel",
  //     role: "Head of Development",
  //     image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg",
  //     description: "Full-stack developer with expertise in modern web technologies."
  //   },
  //   {
  //     name: "Sneha Reddy",
  //     role: "Marketing Director",
  //     image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg",
  //     description: "Digital marketing strategist focused on growth and customer acquisition."
  //   }
  // ];

  // const milestones = [
  //   { year: "2010", event: "Company Founded", description: "Started with a vision to transform businesses through technology" },
  //   { year: "2013", event: "First Major Contract", description: "Secured our first enterprise-level project" },
  //   { year: "2016", event: "Team Expansion", description: "Grew to 50+ employees and expanded service offerings" },
  //   { year: "2019", event: "Award Recognition", description: "Received 'Best IT Company' award from Tech Excellence Awards" },
  //   { year: "2022", event: "International Expansion", description: "Opened offices in multiple countries" },
  //   { year: "2025", event: "Innovation Leader", description: "Leading the market with cutting-edge AI and cloud solutions" }
  // ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <img src="/project/img/logos.png" alt="" />
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">About ShubhSurface </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
           We are passionate printing specialists committed to providing advanced roll-to-roll printing solutions that empower businesses with quality, speed, and consistency.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
               Our journey began in 2019 with a clear vision: to deliver high-quality acrylic sheets with unmatched precision, durability, and design value. What started as a small setup with limited resources has grown into a trusted brand known for reliable products and customer-focused service.
From day one, our commitment has been simple — quality first, customer first. Over the years, we expanded our capabilities, upgraded our technology, and built strong relationships with suppliers, designers, fabricators, and businesses across multiple industries
              </p>
              {/* <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Over the years, we've helped hundreds of businesses transform their operations, increase efficiency, and achieve their digital goals. Our success is built on a foundation of technical excellence, customer-first approach, and continuous innovation.
              </p> */}
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center"> 
                  <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
              </div>
            </div>
            <div>

                <img
  src="/img/img.png"
  alt="Our Office"
  className="rounded-2xl shadow-2xl w-full h-96 object-cover"
/>


              {/* <img
                src="/project/dist/img/img.jpg"
                alt="Our Office"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              /> */}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                Our mission is to deliver advanced acrylic extruder machines that set new benchmarks in quality, performance, and operational efficiency. We are committed to providing reliable machinery, expert maintenance support, and long-term service solutions that ensure maximum productivity for our clients. Through continuous innovation, technical excellence, and customer-first service, we aim to empower manufacturers with high-precision equipment that enhances output, reduces downtime, and drives sustainable business growth.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Eye className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                Our vision is to become a global leader in acrylic extruder technology by delivering machines that redefine precision, efficiency, and long-term reliability. We aim to build an ecosystem where manufacturers can depend on high-performance equipment, seamless maintenance support, and continuous technical innovation. By expanding our capabilities, strengthening our service network, and embracing modern manufacturing standards, we seek to shape the future of acrylic production and set new industry benchmarks for quality and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company History Timeline */}
      {/* <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to industry leadership, here's how we've grown over the years.
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                      <div className="text-blue-600 text-sm font-semibold mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.event}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="relative z-10 bg-blue-600 w-4 h-4 rounded-full"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Team Section */}
      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our success is driven by passionate professionals who bring expertise, creativity, and dedication to every project.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-200 text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <div className="text-blue-600 font-semibold mb-3">{member.role}</div>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and define who we are as a company.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in everything we do, from code quality to customer service, ensuring exceptional results every time.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Collaboration</h3>
              <p className="text-gray-600">
                We believe in the power of teamwork, working closely with our clients and each other to achieve shared success.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600">
                We embrace change and continuously seek new ways to solve problems and create value for our clients.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;