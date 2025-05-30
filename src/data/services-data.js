import { Bulb, Code, Managed } from "../svg";

const services_data = [
  {
    id: 1,
    duration: ".5s",
    delay: ".8s",
    img: "/assets/img/service/graphic.png",
    title: "Graphic Designing",
    text_1:
      "Learn the art of visual storytelling with our Graphic Designing course. Gain hands-on experience in design tools and principles to create professional graphics for branding, marketing, and digital platforms.",
    // text_2:
    //   "At Collax we specialize in designing, building, shipping and scaling...",
    home: true,
    service_p_2: true,
  },
  {
    id: 2,
    duration: ".7s",
    delay: "1s",
    img: "/assets/img/service/animation.png",
    title: "2D Animation & VFX",
    text_1:
      "Master the art of digital storytelling with our 2D Animation & VFX courses. Learn how to animate scenes, create compelling effects, and produce professional-quality visuals using industry tools and techniques.",
    // text_2:
    //   "At Collax we specialize in designing, building, shipping and scaling...",
    home: true,
    service_p_2: true,
  },
  {
    id: 3,
    duration: ".9s",
    delay: "1.2s",
    img: "/assets/img/service/editor.png",
    title: "Video Editing & FX",
    text_1:
      "Learn to turn raw footage into stunning visuals with our Video Editing & FX course. Gain practical skills in editing, transitions, sound syncing, and adding effects using professional-grade software.",
    // text_2:
    //   "At Collax we specialize in designing, building, shipping and scaling...",
    home: true,
    service_p_2: true,
  },
  {
    id: 4,
    duration: ".9s",
    delay: "1.3s",
    img: "/assets/img/service/dev.png",
    title: "MERN Stack Dev",
    text_1:
      "Learn to build complete web applications using the MERN stack (MongoDB, Express, React, Node). Master both front-end and back-end skills to become a full-stack developer ready for the modern tech industry.",
    // text_2:
    //   "At Collax we specialize in designing, building, shipping and scaling...",
    home: true,
    service_p_2: true,
  },
  // home two
  {
    id: 5,
    duration: ".3s",
    delay: ".6s",
    color: "tp-sv-blue-color",
    img: "/assets/img/service/service-3.png",
    title: "Content Writing",
    text_1:
      "Master the skill of impactful writing with our Content Writing course. Learn how to write for blogs, websites, social media, and marketing—while developing SEO strategies, tone, structure, and creativity.",
    home: true,
    service_p_3: true,
  },
  {
    id: 6,
    duration: ".5s",
    delay: ".8s",
    color: "tp-sv-sky-color",
    img: "/assets/img/service/service-1.png",
    title: "Web Development",
    text_1:
      "At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast",
    home_2: true,
    service_p_3: true,
  },
  {
    id: 7,
    duration: ".7s",
    delay: "1s",
    color: "tp-sv-pink-color",
    img: "/assets/img/service/service-icon-4.png",
    title: "UI UX Design",
    text_1:
      "At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast",
    home_2: true,
    service_p_3: true,
  },
  // home three
  {
    id: 8,
    duration: "1s",
    delay: ".3s",
    img: "/assets/img/service/service-5.png",
    title: "Marketing",
    color: "service-color-1",
    text_1:
      "At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast",
    home_3: true,
    service_p_4: true,
  },
  {
    id: 9,
    duration: "1s",
    delay: ".5s",
    img: "/assets/img/service/service-6.png",
    title: "Web Design",
    color: "service-color-2",
    text_1:
      "At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast",
    home_3: true,
    service_p_4: true,
  },
  {
    id: 10,
    duration: "1s",
    delay: ".7s",
    img: "/assets/img/service/service-7.png",
    title: "Branding",
    color: "service-color-3",
    text_1:
      "At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast",
    home_3: true,
    service_p_4: true,
  },
  // home four
  {
    id: 11,
    duration: ".3s",
    delay: ".5s",
    img: "/assets/img/service/007-email.png",
    title: "Product Management",
    border_effect: "",
    text_1:
      "At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast",
    home_4: true,
    service_p: true,
  },
  {
    id: 12,
    duration: ".5s",
    delay: ".7s",
    img: "/assets/img/service/service4.1.png",
    title: "Web & Mobile Development",
    border_effect: "sv-border-effect-1",
    text_1:
      "At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast",
    home_4: true,
    service_p: true,
  },
  {
    id: 13,
    duration: ".7s",
    delay: ".9s",
    img: "/assets/img/service/service4.2.png",
    title: "Fast Customer Support",
    border_effect: "sv-border-effect-2",
    text_1:
      "At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast",
    home_4: true,
    service_p: true,
  },
  {
    id: 14,
    duration: ".9s",
    delay: "1s",
    img: "/assets/img/service/service4.3.png",
    title: (
      <>
        Human <br /> Resources
      </>
    ),
    border_effect: "sv-border-effect-3",
    text_1:
      "At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast",
    home_4: true,
    service_p: true,
  },
  {
    id: 15,
    duration: ".9s",
    delay: "1.1s",
    img: "/assets/img/service/service4.4.png",
    title: "Design and Vreatives",
    border_effect: "sv-border-effect-4",
    text_1:
      "At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast",
    home_4: true,
    service_p: true,
  },
  {
    id: 16,
    duration: "1s",
    delay: "1.1s",
    img: "/assets/img/service/service4.5.png",
    title: "Marketing and Communication",
    border_effect: "sv-border-effect-5",
    text_1:
      "At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast",
    home_4: true,
    service_p: true,
  },
  {
    id: 17,
    duration: "1.1s",
    delay: "1.2s",
    img: "/assets/img/service/service4.6.png",
    title: "Business Development",
    border_effect: "sv-border-effect-6",
    text_1:
      "At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast",
    home_4: true,
    service_p: true,
  },
  // add service item
  {
    id: 18,
    duration: "1.2s",
    delay: "1.3s",
    img: "/assets/img/service/007-email.png",
    title: "Product Management",
    border_effect: "",
    text_1:
      "At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast",
    service_p: true,
  },
  // home five
  {
    id: 19,
    img: "/assets/img/service/service4.1.png",
    top_border: true,
    icon: "flaticon-target",
    title: (
      <>
        Business <br /> Analysis
      </>
    ),
    text_1:
      "At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast",
    home_5: true,
  },
  {
    id: 20,
    img: "/assets/img/service/service4.2.png",
    icon: "flaticon-statistics",
    title: (
      <>
        Marketing <br />
        Strategy
      </>
    ),
    text_1:
      "At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast",
    home_5: true,
  },
  {
    id: 21,
    img: "/assets/img/service/service4.3.png",
    icon: "flaticon-coding",
    title: (
      <>
        Design & <br />
        Development
      </>
    ),
    text_1:
      "At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast",
    home_5: true,
  },
  {
    id: 22,
    img: "/assets/img/service/service4.4.png",
    icon: "flaticon-team",
    title: (
      <>
        Business <br /> Consulting
      </>
    ),
    text_1:
      "At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast",
    home_5: true,
  },
  // home six
  {
    id: 23,
    img: "/assets/img/service/service-1.png",
    icon: <Bulb />,
    title: "Collax business solution",
    text_1:
      "At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast",
    duration: ".3s",
    delay: ".5s",
    home_6: true,
  },
  {
    id: 24,
    img: "/assets/img/service/service-2.png",
    icon: <Code />,
    title: "Web, app development",
    text_1:
      "At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast",
    duration: ".5s",
    delay: ".7s",
    active: true,
    home_6: true,
  },
  {
    id: 25,
    img: "/assets/img/service/service-3.png",
    icon: <Managed />,
    title: (
      <>
        Managed <br /> service solution
      </>
    ),
    text_1:
      "At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast",
    duration: ".7s",
    delay: ".9s",
    home_6: true,
  },

  // services 3
  {
    id: 26,
    duration: ".9s",
    delay: "1s",
    color: "tp-sv-blue-color",
    img: "/assets/img/service/service-11.png",
    title: "Customer Support",
    text_1:
      "At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast",
    service_p_3: true,
  },
  {
    id: 27,
    duration: ".9s",
    delay: "1.1s",
    color: "tp-sv-sky-color",
    img: "/assets/img/service/service-8.png",
    title: "Custom Service",
    text_1:
      "At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast",
    service_p_3: true,
  },
  {
    id: 28,
    duration: ".9s",
    delay: "1.2s",
    color: "tp-sv-pink-color",
    img: "/assets/img/service/service-9.png",
    title: "Website Design",
    text_1:
      "At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast",
    service_p_3: true,
  },

  // service 4,
  {
    id: 29,
    duration: ".9s",
    delay: "1s",
    img: "/assets/img/service/service-9.png",
    title: "Content Writing",
    color: "sv-four-color",
    text_1:
      "At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast",
    service_p_4: true,
  },
  {
    id: 30,
    duration: ".9s",
    delay: "1.1s",
    img: "/assets/img/service/service-10.png",
    title: "Web Design",
    color: "sv-six-color",
    text_1:
      "At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast",
    service_p_4: true,
  },
  {
    id: 31,
    duration: ".9s",
    delay: "1.2s",
    img: "/assets/img/service/service-5.png",
    title: "UI Design",
    color: "sv-five-color",
    text_1:
      "At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast",
    service_p_4: true,
  },
];

export default services_data;
